const express = require('express')

const friendsRouter = require('./routes/friends.router')

const app = express()

const PORT = 3000;


// Middleware
app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`)
    next()
})

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hello Welcome to Home page")
})

app.use('/friends',friendsRouter)

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}!!!!`)
})