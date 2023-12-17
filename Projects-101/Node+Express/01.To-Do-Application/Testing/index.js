// const http = require('http')
// const url = require('url')

// const server = http.createServer()

// server.on('request',(req,res)=>{
//     const parsedURL1 = url.parse(req.url,true)
//     console.log(parsedURL1.query.name)
//     res.end("<h1>Hello this is testing network!!</h1>")
// })

// server.listen(3000,()=>{
//     console.log(`Server is listening at PORT 3000..`)
// })



const http = require('http');
const url = require('url');

// Sample in-memory todo list
let todos = [
  { id: 1, task: 'Learn Node.js', completed: false },
  { id: 2, task: 'Build a Todo app', completed: true },
];

const server = http.createServer((req, res) => {
  // Parse the URL
  const parsedUrl = url.parse(req.url, true);

  if (req.method === 'PUT' && parsedUrl.pathname === '/todos') {
    // Extract data from the request
    let data = '';
    req.on('data', chunk => {
      data += chunk;
    });

    req.on('end', () => {
      try {
        const { id, task, completed } = JSON.parse(data);

        // Find the todo by ID
        const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));

        if (todoIndex === -1) {
          res.writeHead(404, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Todo not found' }));
          return;
        }

        // Update the todo
        todos[todoIndex] = {
          ...todos[todoIndex],
          task: task || todos[todoIndex].task,
          completed: completed !== undefined ? completed : todos[todoIndex].completed,
        };

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(todos[todoIndex]));
      } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid request body' }));
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

