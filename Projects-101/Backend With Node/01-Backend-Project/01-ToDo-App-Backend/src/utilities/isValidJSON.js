const sendResponse = require("../sendResponse.js");

const isValidJSON = (res, response) => {
  try {
    JSON.parse(response);
    return true;
  } catch (error) {
    return sendResponse(res, 400, { message: "Enter Valid JSON data134!!" });
  }
};

module.exports = isValidJSON;
