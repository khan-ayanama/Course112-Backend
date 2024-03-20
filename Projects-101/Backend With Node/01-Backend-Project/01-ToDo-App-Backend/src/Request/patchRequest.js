const toDoList = require("../Data/toDoList.js");
const sendResponse = require("../sendResponse.js");
const isValidJSON = require("../utilities/isValidJSON.js");

const updateToDo = (updateData) => {
  const { id } = updateData;
  if (id != null && id != undefined && toDoList[id]) {
    toDoList[id] = { ...toDoList[id], ...updateData };
  }
};

const patchRequest = (req, res) => {
  let updateData = "";

  req.on("data", (chunk) => {
    updateData += chunk.toString();
  });

  req.on("end", () => {
    if (isValidJSON(res, updateData)) {
      updateData = JSON.parse(updateData);
      updateToDo(updateData);
      sendResponse(res, 422, toDoList);
    }
  });
};

module.exports = patchRequest;
