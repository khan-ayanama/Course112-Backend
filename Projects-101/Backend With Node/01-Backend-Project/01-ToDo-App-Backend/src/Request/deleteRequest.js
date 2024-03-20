const isValidJSON = require("../utilities/isValidJSON");
const sendResponse = require("../sendResponse");
toDoList = require("../Data/toDoList.js");

const deleteToDo = (res, data) => {
  const { id } = data;
  console.log("ID: ", id);
  if (id != null && id != undefined) {
    toDoList = toDoList.filter((toDo) => toDo.id !== id);
    sendResponse(res, 201, toDoList);
  }
};

const deleteRequest = (req, res) => {
  console.log("DELTED");
  let id = "";
  req.on("data", (chunk) => {
    id += chunk.toString();
  });

  req.on("end", () => {
    if (isValidJSON(res, id)) {
      deleteToDo(res, JSON.parse(id));
    }
  });
};

module.exports = deleteRequest;
