# MVC

In Express.js, the MVC (Model-View-Controller) architecture is a design pattern used to structure applications in a way that separates the concerns of data management, user interface, and application logic. Here's how you can implement MVC architecture in an Express.js application:

1. `Model:`
    The model represents the data and business logic of the application. It interacts with the database, performs validations, and contains the application's data-related logic. In Express.js, you can use an ORM (Object-Relational Mapping) library like Sequelize or Mongoose to interact with databases.

    Example Model (using Mongoose for MongoDB):

    ```javascript
        const mongoose = require('mongoose');

        const userSchema = new mongoose.Schema({
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
        });

        const User = mongoose.model('User', userSchema);
        module.exports = User;
    ```

2. `View:`
    The view is responsible for rendering the user interface and displaying data to the user. In Express.js, views are typically implemented using template engines like EJS, Pug, or Handlebars.

    Example View (using EJS):

    ```html
        <!-- views/user.ejs -->
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>User Details</title>
        </head>
        <body>
        <h1>User Details</h1>
        <p>Username: <%= user.username %></p>
        <p>Email: <%= user.email %></p>
        </body>
        </html>
    ```

3. `Controller:`
The controller handles user input and requests, processes them using the model, and selects the view to render. It contains the application's business logic. Controllers in Express.js are responsible for defining route handlers.

Example Controller:

```javascript
    const express = require('express');
    const User = require('../models/user');

    const router = express.Router();

    // Controller action to handle GET request for user details
    router.get('/user/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);

        if (!user) {
        return res.status(404).send('User not found');
        }

        res.render('user', { user }); // Render the 'user' view with user data
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
    });

    module.exports = router;
```

In this example, the controller handles a GET request for retrieving user details by ID. It interacts with the User model to fetch the user data and renders the 'user' view, passing the user data to be displayed.

By following the MVC pattern, you can keep your codebase organized, modular, and easy to maintain, allowing for a clear separation of concerns within your Express.js application.

## Routers

In Express.js, a router is a middleware that helps you handle different routes and HTTP methods separately. It allows you to modularize your routes and keep your code organized. Here's how you can create and use a router in Express.js:

First, you need to import the Express module and create an instance of the router:

```javascript
    const express = require('express');
    const router = express.Router();
```

Now, you can define routes on this router object. For example, you can handle GET requests to the root URL ('/') like this:

```javascript
    router.get('/', (req, res) => {
        res.send('Hello, Boss! This is the root route.');
    });
```

You can also handle parameters in routes. For example, handling a GET request to '/users/:id':

```javascript
    router.get('/users/:id', (req, res) => {
        const userId = req.params.id;
        res.send(`Hello, Boss! This is the profile page of user with ID: ${userId}`);
    });
```

Once you have defined your routes on the router object, you need to use this router in your main Express application file. You can do this by mounting the router at a specific path using the app.use() method:

```javascript
    const express = require('express');
    const app = express();

    const router = require('./router'); // assuming your router file is named 'router.js'

    app.use('/api', router); // Mount the router at the '/api' path

    app.listen(3000, () => {
        console.log('Server started on port 3000, Boss!');
    });
```

In this example, all routes defined in the router object will be accessible under the '/api' path. For instance, the '/users/:id' route defined earlier will be accessible as '/api/users/:id'.
