const sendResponse = (res, stausCode, data) => {
  res.writeHead(stausCode, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
};

module.exports = sendResponse;
