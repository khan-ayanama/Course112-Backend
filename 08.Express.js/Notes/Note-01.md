# Express

## Creating Server

`Naming:` If file name is server.js then you don't need to define the `npm start` inside package.json to run it using console simply running `npm start`

```js
    const express = require('express')

    const app = express()

    const PORT = 3000;

    app.get('/',(req,res)=>{
        res.send("Hellooollooo")
    })

    app.get('/messages',(req,res)=>{
        res.send('<ul><li>Hello Khan Sahab</li></ul>')
    })

    app.post('/messages',(req,res)=>{
        console.log("Updating messages!!")
    })

    app.listen(PORT,()=>{
        console.log(`Server running at ${PORT}...`)
    })
```

### Nodemon

Nodemon will monitor the files for any changes. If you modify any file within the monitored directory, nodemon will automatically restart your server, making the development process smoother and more efficient.

## Express vs Nextjs vs Koa

## Route Parameter

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

## Postman and Insomnia