# NASA Project

## 1. Creating a Server

```js
    // server.js
    const http = require('http')
    const app = require('./app')
    const PORT = process.env.PORT||8000;

    const server = http.createServer(app);

    server.listen(PORT,()=>{
        console.log(`Server Running on ${PORT}..`)
    })

    // ---------------------------------------
    // app.js
    const express = require('express')

    const app = express()

    app.use(express.json())

    module.exports = app;
```

## Setting up cors
