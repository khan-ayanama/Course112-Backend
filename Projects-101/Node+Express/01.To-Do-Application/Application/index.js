const { name } = require("ejs");
const http = require("http");
const { todo } = require("node:test");
const url = require("url");
const server = http.createServer();

const toDoList = [
  { id: 0, title: "Buy Grocery", status: true },
  { id: 1, title: "Wash Car", status: false },
  { id: 2, title: "Complete Assignment", status: false },
  { id: 3, title: "Documentary", status: true },
];

server.on("request", (req, res) => {
  // URL ELEMENTS
  const REQ_URL = req.url.split("/");

  // GET METHOD
  // HOME URL
  if (req.method == "GET" && req.url == "/") {
    return res.end(JSON.stringify({ message: "Welcome to ToDo App" }));
  }

  // ALL TODOS
  if (req.method == "GET" && req.url == "/tasks") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(toDoList));
  }

  // Particular Todo
  if (req.method == "GET" && REQ_URL[1] == "task") {
    const index = Number(REQ_URL[2]);
    try {
      if (index >= 0 && index < toDoList.length) {
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(toDoList[Number(REQ_URL[2])]));
      } else {
        throw new Error("Invalid URL");
      }
    } catch (error) {
      res.end(JSON.stringify({ error: error.message }));
    }
  }

  // ###########################################################################################################

  // POSTING THE TASK
  if (req.method == "POST") {
    try {
      if (REQ_URL[1] == "task") {
        let postData = "";
        req.on("data", (chunk) => {
          postData = JSON.parse(chunk);
        });
        req.on("end", () => {
          try {
            const { title, status } = postData;
            if (title && status) {
              toDoList.push({
                id: toDoList.length,
                ...postData,
              });
            } else {
              throw new Error("Enter all the fields!!");
            }
            res.writeHead(201, { "Content-Type": "application/json" });
            return res.end(JSON.stringify(toDoList));
          } catch (error) {
            res.writeHead(422, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ error: error.message }));
          }
        });
      } else {
        throw new Error("Invalid URLPOST");
      }
    } catch (error) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: error.message }));
    }
  }

  // ###########################################################################################################

  // PATCH METHOD
  if (req.method == "PATCH") {
    try {
      if (REQ_URL[1] == "task") {
        let patchData = "";
        req.on("data", (chunk) => {
          patchData += chunk;
        });

        req.on("end", () => {
          try {
            let { id, title, status } = JSON.parse(patchData);
            if (id) {
              patchElement = toDoList[id];
              if(status==undefined){
                status = patchElement.status
              }
              toDoList[id] = {
                id: id,
                title: title || patchElement.title,
                status: status
              };
              res.writeHead(201, { "Content-Type": "application/json" });
              return res.end(JSON.stringify(toDoList));
            } else {
              throw new Error("Invalid Data!!");
            }
          } catch (error) {
            res.writeHead(422, { "Content-type": "application/json" });
            res.end(JSON.stringify({ error: error.message }));
          }
        });
      } else {
        throw new Error("Invalid Patch URL");
      }
    } catch (error) {
      res.writeHead(422, { "Content-type": "application/json" });
      res.end(JSON.stringify({ error: error.message }));
    }
  }

  // ###########################################################################################################

  // DELETE METHOD
  if (req.method == "DELETE") {
    console.log(REQ_URL)
    try {
        if(REQ_URL[1]=='task'){
            let deleteId = ''
            req.on('data',(chunk)=>{
                deleteId += chunk;
            })
            req.on('end',()=>{
                try {
                    const {id} = JSON.parse(deleteId)
                    console.log('id',id)
                    if(id !== undefined && toDoList[id] !== undefined){
                        toDoList.splice(id,1)
                        res.writeHead(201, { "Content-Type": "application/json" });
                        res.end(JSON.stringify(toDoList));
                        console.log('total task',toDoList)
                    }else{
                        throw new Error("Element doesn't exist")
                    }
                } catch (error) {
                    res.writeHead(400,{'content-type':'application/json'})
                    res.end(JSON.stringify({error:error.message}))
                }
            })
        }else{
            throw new Error('Invalid URL')
        }
    } catch (error) {
        res.writeHead(400,{'content-type':'application/json'})
        res.end(JSON.stringify({error:error.message}))
    }
  }
});

server.listen(3000, () => {
  console.log(`Server is listening at port 3000!!`);
});
