# Middleware

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

## POST METHOD