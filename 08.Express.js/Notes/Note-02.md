# Middleware

In Express.js, middleware functions are essential components that handle requests made to the server. They can perform various tasks such as modifying the request and response objects, ending the request-response cycle, and calling the next middleware function in the stack. Middleware functions can be added to an Express application using the app.use() method or specific HTTP methods like app.get(), app.post(), etc.

Here's a basic example of how middleware works in Express.js:

```javascript
    const express = require('express');
    const app = express();

    // Middleware function 1
    app.use((req, res, next) => {
    console.log('Middleware 1: This runs for every request');
    next(); // Call the next middleware function in the stack
    });

    // Middleware function 2
    app.get('/example', (req, res, next) => {
    console.log('Middleware 2: This runs for GET requests to /example');
    next();
    }, (req, res) => {
    res.send('Response from /example route');
    });

    // Middleware function 3
    app.use((req, res) => {
    console.log('Middleware 3: This runs for every request after /example route');
    res.send('Response from default route');
    });

    app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });
```

In this example:

Middleware function 1: It runs for every incoming request, logging a message and then calling the next middleware function in the stack.
Middleware function 2: It runs only for GET requests to the '/example' route, logging a message and then calling the next middleware function.
Middleware function 3: It runs for every request that doesn't match the '/example' route, logging a message and sending a response.
Middleware functions are executed in the order they are defined. They can be used for tasks like authentication, logging, request preprocessing, etc., making Express.js applications highly flexible and customizable

```js
    const express = require('express')
    const app = express()

    const PORT = 3000;

    const friends = [
        {
            id:0,
            name:"Ayan"
        },
        {
            id:1,
            name:"Newton"
        },
        {
            id:2,
            name:"Einstein"
        },
        {
            id:3,
            name:"Einstein"
        },
    ]

    // Middleware
    app.use((req,res,next)=>{
        console.log(`${req.method} ${req.url}`)
        next()
    })

    app.get('/',(req,res)=>{
        res.send("Hello Welcome to Home page")
    })

    app.get('/friends',(req,res)=>{
        res.send(friends)
    })

    app.get('/friends/:friendId',(req,res)=>{
        const friendId = Number(req.params.friendId);
        const friend = friends[friendId]
        if(friend){
            res.status(200).json(friend)
        }else{
            res.status(404).json({
                error:"Friend does not exist"
            })
        }
    })

    app.listen(PORT,()=>{
        console.log(`Server is running at ${PORT}!!!!`)
    })
```

## POST METHOD in Express

```js
const express = require('express')
const app = express()

const PORT = 3000;

const friends = [
    {
        id:0,
        name:"Ayan"
    },
    {
        id:1,
        name:"Newton"
    },
    {
        id:2,
        name:"Einstein"
    },
    {
        id:3,
        name:"Einstein"
    },
]

// Middleware
app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`)
    next()
})

app.use(express.json())

app.post('/friends',(req,res)=>{
    if(!req.body.name){
        return res.status(400).json({
            error:'Friends name seems to be missing'
        })
    }
    const newFriend = {
        name: req.body.name,
        id:friends.length
    }
    friends.push(newFriend);
    res.json(friends)
})

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}!!!!`)
})
```
