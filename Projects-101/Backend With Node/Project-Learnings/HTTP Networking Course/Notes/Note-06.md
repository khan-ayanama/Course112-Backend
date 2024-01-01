# Query Parameter

Let's cover query parameters in Node.js from the basics to more advanced topics.

1. `Handling Basic Query Parameters:`
In Node.js, you can handle basic query parameters using the built-in url module. Here's a simple example:

    ```javascript
        const http = require('http');
        const url = require('url');

        const server = http.createServer((req, res) => {
        const parsedUrl = url.parse(req.url, true);
        const queryParameters = parsedUrl.query;

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Query Parameters: ${JSON.stringify(queryParameters)}`);
        });

        const PORT = 3000;
        server.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}/`);
        });
    ```

2. `Express Framework:`
Using the Express framework, handling query parameters is more streamlined:

    ```javascript
        const express = require('express');
        const app = express();

        app.get('/', (req, res) => {
        const queryParameters = req.query;
        res.send(`Query Parameters: ${JSON.stringify(queryParameters)}`);
        });

        const PORT = 3000;
        app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}/`);
        });
    ```

3. `Parsing Nested Query Parameters:`
You can handle nested query parameters using the qs library or the querystring module:

    ```javascript
        const express = require('express');
        const qs = require('qs');
        const app = express();

        // Middleware to parse nested query parameters
        app.use((req, res, next) => {
        req.query = qs.parse(req.query, { allowDots: true });
        next();
        });

        app.get('/', (req, res) => {
        const queryParameters = req.query;
        res.send(`Query Parameters: ${JSON.stringify(queryParameters)}`);
        });

        const PORT = 3000;
        app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}/`);
        });
    ```

4. `Validating and Sanitizing Query Parameters:`
You can use libraries like express-validator to validate and sanitize query parameters:

    ```javascript
        const express = require('express');
        const { query, validationResult } = require('express-validator');
        const app = express();

        app.get(
        '/',
        [
            query('name').isString().trim().escape(),
            query('age').isInt({ min: 0 }),
        ],
        (req, res) => {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
            }

            const queryParameters = req.query;
            res.send(`Query Parameters: ${JSON.stringify(queryParameters)}`);
        }
        );

        const PORT = 3000;
        app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}/`);
        });
    ```

5. `Using Middleware for Query Parameters:`
Create custom middleware to handle query parameters and apply it to specific routes:

    ```javascript
    Copy code
    const express = require('express');
    const app = express();

    // Custom middleware
    const queryMiddleware = (req, res, next) => {
    // Modify or validate query parameters here
    req.query.name = req.query.name.toUpperCase();
    next();
    };

    app.get('/', queryMiddleware, (req, res) => {
    const queryParameters = req.query;
    res.send(`Query Parameters: ${JSON.stringify(queryParameters)}`);
    });

    const PORT = 3000;
    app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    });
    ```
