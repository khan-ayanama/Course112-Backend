const toDoList = require("./toDoList.js");
const sendResponse = require("./sendResponse.js");

const isValidJSON = (res, response) => {
  try {
    JSON.parse(response);
    return true;
  } catch (error) {
    sendResponse(res, 400, { message: "Enter Valid JSON data134!!" });
    return false;
  }
};

const createToDo = (postData) => {
  const toDo = {
    id: toDoList.length,
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
