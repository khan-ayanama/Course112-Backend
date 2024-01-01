# Creating Web Server

## Passing plain text

```js
    const http = require('http')

    const PORT = 3000;

    const server = http.createServer((req,res)=>{
        res.writeHead(200,{
            'Content-Type': 'text/plain'
        })
        res.end("Hello Isaac Newton is your friend!")
    })

    server.listen(PORT,()=>{
        console.log(`Server running on ${PORT}...`)
    })
```

## Responding with JSON object

```js
    const http = require('http')

    const PORT = 3000;

    const server = http.createServer((req,res)=>{
        res.writeHead(200,{
            'Content-Type': 'application/json'
        })
        res.end(JSON.stringify({
            id:1,
            name:'Sir Isaac Newton'
        }))
    })

    server.listen(PORT,()=>{
        console.log(`Server running on ${PORT}...`)
    })
```

## HTTP API and ROUTING

```js
    // RESPONSE ACCORING TO URL

    const http = require('http')

    const PORT = 3000;

    const server = http.createServer()

    server.on('request',(req,res)=>{
        if(req.url === '/friends'){
            // res.writeHead(200,{
            //     'Content-Type':'application/json'
            // })
            res.statusCode =200;
            res.setHeader('Content-Type','application/json')
            res.end(JSON.stringify({
                id:1,
                name:'Sir Isaac Newton'
            }))
        }else if(req.url === '/messages'){
            res.write('<html>')
            res.write('<body>')
            res.write('<ul>')
            res.write('<li>Hello Isaac!</ul>')
            res.write('<li>What are your thoughts!</ul>')
            res.write('</ul>')
            res.write('</body>')
            res.write('</html>')
        }else{
            res.statusCode=404;
            res.end()
        }
        
    })

    server.listen(PORT,()=>{
        console.log(`Server running on ${PORT}...`)
    })
```

## Routing with parametrized URL

```js
    // PARAMAETRIZED URL

    const http = require('http')

    const PORT = 3000;

    const server = http.createServer()

    const friends = [
        {
            id:0,
            name:'Nikola Tesla'
        },
        {
            id:1,
            name:'Albert Einstein'
        },
        {
            id:2,
            name:'Sir Isaac Newton'
        }
    ]

    server.on('request',(req,res)=>{
        const items = req.url.split('/')
        console.log(items)
        if(items[1] === 'friends'){
            res.statusCode =200;
            res.setHeader('Content-Type','application/json')
            if(items.length===3){
                const friendIndex = Number(items[2])
                console.log(friends[friendIndex])
                res.end(JSON.stringify(friends[friendIndex]))
            }else{
                res.end(JSON.stringify(friends))
            }
            
        }else if(req.url === '/messages'){
            res.write('<html>')
            res.write('<body>')
            res.write('<ul>')
            res.write('<li>Hello Isaac!</ul>')
            res.write('<li>What are your thoughts!</ul>')
            res.write('</ul>')
            res.write('</body>')
            res.write('</html>')
        }else{
            res.statusCode=404;
            res.end()
        }
        
    })

    server.listen(PORT,()=>{
        console.log(`Server running on ${PORT}...`)
    })
```
