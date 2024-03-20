toDoList = require("../Data/toDoList.js");
const sendResponse = require("../sendResponse.js");
const isValidJSON = require("../utilities/isValidJSON.js");

const createToDo = (postData) => {
  const toDo = {
    id: toDoList.length + postData.title.slice(0, 3),
    title: postData.title,
    status: postData.status || false,
  };
  toDoList.push(toDo);
};

const handlePostRequest = (req, res) => {
  req.on("data", (response) => {
    // If data is valid JSON
    if (isValidJSON(res, response)) {
      const postData = JSON.parse(response);

      //   Whether there is title in JSON data or not
      if (!postData.title) {
        return sendResponse(res, 400, { message: "Provide title of task!!" });
      }
      createToDo(postData);
      sendResponse(res, 201, toDoList);
    }
  });
};

module.exports = handlePostRequest;
