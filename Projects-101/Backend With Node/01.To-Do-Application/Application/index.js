const http = require("http");
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
  if (req.method == "GET") {
    try {
      // HOME URL
      if (req.url == "/") {
        return res.end(JSON.stringify({ message: "Welcome to ToDo App" }));
      }
      // ALL TASKS
      else if (req.url == "/tasks") {
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(toDoList));
      }
      // SINGLE TASK
      else if (REQ_URL[1] === "task" && REQ_URL[2] !== "") {
        const index = Number(REQ_URL[2]);
        try {
          if (index >= 0 && index < toDoList.length) {
            res.writeHead(200, { "Content-Type": "application/json" });
            return res.end(JSON.stringify(toDoList[Number(REQ_URL[2])]));
          } else {
            throw new Error("Task is not available!!");
          }
        } catch (error) {
          res.end(JSON.stringify({ error: error.message }));
        }
      } else {
        throw new Error("Invalid URL!!");
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
        let dataError = false;
        req.on("data", (chunk) => {
          try {
            postData = JSON.parse(chunk);
          } catch (parseError) {
            dataError = true;
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ error: "Invalid JSON data" }));
          }
        });
        req.on("end", () => {
          if (dataError !== true) {
            try {
              const { title } = postData;
              if (title) {
                const toDoObject = {
                  id: toDoList.length,
                  title: postData.title,
                  status: postData.status || false,
                };
                toDoList.push(toDoObject);
                res.writeHead(422, { "Content-Type": "application/json" });
                res.end(JSON.stringify(toDoList));
              } else {
                throw new Error("Enter all the fields!!");
              }
            } catch (error) {
              res.writeHead(422, { "Content-Type": "application/json" });
              return res.end(JSON.stringify({ error: error.message }));
            }
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
              if (status == undefined) {
                status = patchElement.status;
              }
              toDoList[id] = {
                id: id,
                title: title || patchElement.title,
                status: status,
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
    try {
      if (REQ_URL[1] == "task") {
        let deleteId = "";
        req.on("data", (chunk) => {
          deleteId += chunk;
        });
        req.on("end", () => {
          try {
            const { id } = JSON.parse(deleteId);
            if (id !== undefined && toDoList[id] !== undefined) {
              toDoList.splice(id, 1);
              res.writeHead(201, { "Content-Type": "application/json" });
              res.end(JSON.stringify(toDoList));
            } else {
              throw new Error("Element doesn't exist");
            }
          } catch (error) {
            res.writeHead(400, { "content-type": "application/json" });
            res.end(JSON.stringify({ error: error.message }));
          }
        });
      } else {
        throw new Error("Invalid URL");
      }
    } catch (error) {
      res.writeHead(400, { "content-type": "application/json" });
      res.end(JSON.stringify({ error: error.message }));
    }
  }
});

server.listen(3000, () => {
  console.log(`Server is listening at port 3000!!`);
});
