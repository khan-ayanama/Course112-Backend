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