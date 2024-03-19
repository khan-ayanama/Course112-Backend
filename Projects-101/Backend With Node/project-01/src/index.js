const http = require("http");
const handleGetRequest = require("./getRequest.js");
const postRequest = require("./postRequest.js");

const PORT = 3000;

const server = http.createServer();

server.on("request", (req, res) => {
  switch (req.method) {
    case "GET":
      handleGetRequest(req, res);
      break;
    case "POST":
      postRequest(req, res);
      break;
    default:
      null;
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at PORT:- ${PORT}`);
});

// const http = require("http");
// const { parse } = require("url");

// const server = http.createServer();

// const tasks = [
//   { id: 0, title: "Buy Grocery", status: true },
//   { id: 1, title: "Wash Car", status: false },
//   { id: 2, title: "Complete Assignment", status: false },
//   { id: 3, title: "Documentary", status: true },
// ];

// const sendResponse = (res, status, data) => {
//   res.writeHead(status, { "Content-Type": "application/json" });
//   res.end(JSON.stringify(data));
// };

// const getTasks = (req, res) => {
//   sendResponse(res, 200, tasks);
// };

// const createTask = (req, res) => {
//   let body = "";
//   req.on("data", (chunk) => {
//     body += chunk.toString();
//   });
//   req.on("end", () => {
//     try {
//       const newTask = JSON.parse(body);
//       if (!newTask.title) {
//         throw new Error("Title is required.");
//       }
//       const task = { id: tasks.length, ...newTask };
//       tasks.push(task);
//       sendResponse(res, 201, task);
//     } catch (error) {
//       sendResponse(res, 400, { error: error.message });
//     }
//   });
// };

// server.on("request", (req, res) => {
//   const { pathname, query } = parse(req.url, true);

//   if (req.method === "GET" && pathname === "/tasks") {
//     getTasks(req, res);
//   } else if (req.method === "POST" && pathname === "/task") {
//     createTask(req, res);
//   } else {
//     sendResponse(res, 404, { error: "Not Found" });
//   }
// });

// server.listen(3000, () => {
//   console.log(`Server is listening at port 3000!!`);
// });
