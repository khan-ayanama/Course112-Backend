# API

API stands for Application Programming Interface. It defines a set of rules and protocols that allow one software application to interact with another. APIs are used to enable the integration of different systems, allowing them to communicate and share data and functionalities.

In the context of web development, APIs are often used to enable communication between a web server and a client application (such as a web browser or a mobile app). Web APIs, in particular, are APIs that are accessible over the internet using the HTTP protocol. They allow developers to access specific features or data from a remote server.

Here are some key points about APIs, Boss:

`HTTP Methods:` APIs are accessed using HTTP methods like GET, POST, PUT, and DELETE. These methods define the operations that can be performed on the resources provided by the API.

`Endpoints:` APIs expose specific endpoints (URLs) that correspond to different functionalities. For example, a weather API might have an endpoint like '/weather' to provide weather data.

`Request and Response:` When you make a request to an API endpoint, you send data (such as parameters or a request body). The API processes this data and sends back a response, usually in JSON format, containing the requested information or the result of the operation.

`Authentication:` Many APIs require authentication to ensure that only authorized users or applications can access them. Common authentication methods include API keys, OAuth tokens, and JWT (JSON Web Tokens).

`RESTful APIs:` REST (Representational State Transfer) is an architectural style for designing networked applications. RESTful APIs adhere to REST principles and are designed to be stateless, scalable, and easy to understand. They use standard HTTP methods and status codes.

`SOAP APIs:` SOAP (Simple Object Access Protocol) is a protocol for exchanging structured information in web services. SOAP APIs use XML for data exchange and are known for their strict standards and strong typing.

`GraphQL APIs:` GraphQL is a query language for APIs that allows clients to request only the data they need. Unlike REST APIs, where the server defines the response structure, in GraphQL, the client specifies the shape of the response.

APIs are fundamental in modern web development, enabling the integration of various services and applications.

## RESTFUL API

RESTful API (Representational State Transfer) is an architectural style for designing networked applications. It is an approach to building APIs that uses HTTP methods to perform operations on resources. RESTful APIs are designed to be stateless, scalable, and easy to understand. Here are some key principles and concepts of RESTful APIs:

1. `Resources:`
In a RESTful API, resources are the key abstractions. A resource can be any object, data, or service that can be accessed, manipulated, and represented.
Resources are identified by URIs (Uniform Resource Identifiers). For example, in a blog API, posts, comments, and users could be resources, each identified by a unique URI.

2. `HTTP Methods:`
RESTful APIs use standard HTTP methods to perform operations on resources:
`GET:` Retrieve a resource or a collection of resources.
`POST:`Create a new resource.
`PUT:` Update an existing resource (or create a new resource if it doesn't exist).
`DELETE:` Remove a resource.
`PATCH:` Partially update a resource.

3. `Uniform Interface:`
RESTful APIs have a uniform and consistent interface, making it easy to interact with different APIs in a similar way.
Resources are manipulated through representations (typically JSON or XML).
Responses include metadata (status codes) and data (resource representations).

4. `Statelessness:`
Each request from a client to a server must contain all the information needed to understand and fulfill that request.
The server should not store any client state between requests. Any session state is held on the client side.

5. `Stateless Communication:`
Clients interact with resources by exchanging representations of the resources.
Resources can have multiple representations (e.g., JSON, XML) based on the client's needs or preferences.

6. `Hypermedia as the Engine of Application State (HATEOAS):`
HATEOAS is a constraint in REST which means that a client interacts with the API entirely through hypermedia provided dynamically by the server.
Responses contain links to related resources, allowing clients to navigate the API without prior knowledge.

7. `Example:`
To retrieve a list of posts, a client would send a GET request to the URI representing the posts resource: GET /posts.
To create a new post, a client would send a POST request with the post data to the same URI: POST /posts.
To update a specific post, a client would send a PUT or PATCH request to the URI of that post: PUT /posts/{postId} or PATCH /posts/{postId}.
RESTful APIs are widely used due to their simplicity, scalability, and ease of use. They are the foundation of many web services and are commonly used in web and mobile applications for data exchange.

## Serving files from Node

In Node.js, you can serve files using the built-in fs (File System) module along with the http or express module. I'll show you a basic example using the http module:

```javascript
    const http = require('http');
    const fs = require('fs');
    const path = require('path');

    const server = http.createServer((req, res) => {
        // Get the file path based on the URL
        const filePath = path.join(__dirname, 'public', req.url);

        // Check if the file exists
        fs.access(filePath, fs.constants.F_OK, (err) => {
            if (err) {
                // File not found
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Not Found');
                return;
            }

            // Read the file and stream it to the response
            const fileStream = fs.createReadStream(filePath);
            fileStream.pipe(res);
        });
    });

    const PORT = 3000;
    server.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}/`);
    });
```

In this example:

We create an HTTP server using http.createServer.

Inside the server callback, we construct the file path based on the requested URL using path.join.
We use fs.access to check if the file exists. If it doesn't, we return a 404 response.
If the file exists, we create a readable stream (fs.createReadStream) and pipe it to the response (res) to send the file to the client.
Make sure to adjust the __dirname and the folder structure based on your project. This is a basic example, and in a real-world scenario, you might want to consider additional features like MIME type handling, security measures, and more.

If you're working with a more complex application, using a framework like Express can simplify file serving and provide additional features

## Serving more than one file from Node

If you want to serve multiple files in Node.js, you can modify the previous example to handle different types of requests and serve the corresponding files. Here's an example using the express framework for simplicity:

First, install Express using npm:

```bash
    npm install express
```

Now, create a server that serves multiple files:

```javascript
    const express = require('express');
    const path = require('path');

    const app = express();
    const PORT = 3000;

    // Define a route to serve static files from the 'public' folder
    app.use(express.static(path.join(__dirname, 'public')));

    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}/`);
    });
```

In this example:

We use express.static middleware to serve static files from the 'public' folder. This means any file in the 'public' folder can be accessed directly via its URL.

Ensure that your project structure looks like this:

```arduino
    project-root
    └── public
        ├── file1.html
        ├── file2.css
        └── file3.js
```

Now, if you have file1.html, file2.css, and file3.js in your 'public' folder, you can access them in your browser using the following URLs:

```bash
    http://localhost:3000/file1.html
    http://localhost:3000/file2.css
    http://localhost:3000/file3.js
```

This is a basic setup. Depending on your requirements, you might want to add additional routes or implement more sophisticated file serving logic.

## Express view Engines

In Express, view engines allow you to render dynamic content and templates on the server before sending a response to the client. Common view engines include EJS (Embedded JavaScript), Pug (formerly Jade), Handlebars, and others.

Here's an example using the EJS view engine in an Express application. First, install EJS:

```bash
    npm install ejs
```

Now, create an Express app that uses EJS as the view engine:

```javascript
    const express = require('express');
    const path = require('path');

    const app = express();
    const PORT = 3000;

    // Set EJS as the view engine
    app.set('view engine', 'ejs');

    // Set the views directory
    app.set('views', path.join(__dirname, 'views'));

    // Define a route to render an EJS template
    app.get('/', (req, res) => {
        // Render the 'index.ejs' template
        res.render('index', { title: 'Express with EJS' });
    });

    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}/`);
    });
```

In this example:

We set EJS as the view engine using app.set('view engine', 'ejs').
We set the views directory using app.set('views', path.join(__dirname, 'views')). This is where Express will look for your EJS templates.
We define a route for the root URL ('/') that renders the 'index.ejs' template using res.render. The second argument is an object containing data to be passed to the template.
Now, create a folder named 'views' in your project root and add an 'index.ejs' file inside it:

```ejs
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title><%= title %></title>
    </head>
    <body>
        <h1><%= title %></h1>
        <p>Welcome to Express with EJS!</p>
    </body>
    </html>
```

When you run your Express app and navigate to `http://localhost:3000/`, you should see a page with the title "Express with EJS" and a welcome message.

This is a basic setup using the EJS view engine. Depending on your needs, you might choose a different view engine or customize your templates further.
