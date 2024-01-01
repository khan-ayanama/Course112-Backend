// RESPONSE ACCORING TO URL


const http = require('http')

const PORT = 3000;

const server = http.createServer()

server.on('request',(req,res)=>{
    if(req.url === '/friends'){
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
