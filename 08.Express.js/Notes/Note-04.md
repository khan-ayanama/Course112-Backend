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

7. ` Example:`
To retrieve a list of posts, a client would send a GET request to the URI representing the posts resource: GET /posts.
To create a new post, a client would send a POST request with the post data to the same URI: POST /posts.
To update a specific post, a client would send a PUT or PATCH request to the URI of that post: PUT /posts/{postId} or PATCH /posts/{postId}.
RESTful APIs are widely used due to their simplicity, scalability, and ease of use. They are the foundation of many web services and are commonly used in web and mobile applications for data exchange.

## Serving files from Node

## Serving more than one file from Node

## Express Engines