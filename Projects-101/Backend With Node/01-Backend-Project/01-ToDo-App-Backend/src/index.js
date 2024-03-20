const http = require("http");
const getRequest = require("./Request/getRequest.js");
const postRequest = require("./Request/postRequest.js");
const patchRequest = require("./Request/patchRequest.js");
const deleteRequest = require("./Request/deleteRequest.js");

const PORT = 3000;
const server = http.createServer();

server.on("request", (req, res) => {
  switch (req.method) {
    case "GET":
      getRequest(req, res);
      break;
    case "POST":
      postRequest(req, res);
      break;
    case "PATCH":
      patchRequest(req, res);
      break;
    case "DELETE":
      deleteRequest(req, res);
      break;
    default:
      null;
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at PORT:- ${PORT}`);
});
