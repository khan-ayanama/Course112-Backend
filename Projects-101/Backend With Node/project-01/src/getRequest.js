const toDoList = require("./toDoList.js");
const sendResponse = require("./sendResponse.js");

const handleGetRequest = (req, res) => {
  console.log("INSIDE MODULE");
  const URL = req.url.split("/");
  const id = URL[URL.length - 1];
  switch (req.url) {
    case "/":
      sendResponse(res, 200, { message: "Welcome to Application!!" });
      break;
    case "/tasks":
      sendResponse(res, 200, toDoList);
      break;
    case `/tasks/${id}`:
      if (id < toDoList.length && id > -1) {
        sendResponse(res, 200, toDoList[id]);
        break;
      }
    default:
      sendResponse(res, 200, { message: "No Tasks to Show!!" });
  }
};

module.exports = handleGetRequest;
