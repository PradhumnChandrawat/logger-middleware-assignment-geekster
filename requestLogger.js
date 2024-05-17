const fs = require("fs");
const path = require("path");

function getFormattedDateTime() {
  const timeStamp = new Date().getTime();
  const date = new Date(timeStamp);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const formattedDate = `${day}/${month}/${year}`;
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} ${seconds.toString().padStart(2, "0")}`;

  const dateTimeString = `Date: ${formattedDate}, Time: ${formattedTime}`;

  return dateTimeString;
}

function requestLogger(req, res, next) {
  const { method, url } = req;
  const currentDateTime = getFormattedDateTime();
  const logMessage = `currentDateTime: ${currentDateTime} - ${method} - ${url}\n`;

  // Define the path to the log file
  const logFilePath = path.join(__dirname, "request_logs.txt");

  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) {
      console.error("Failed to write to log file:", err);
    }
  });
  next();
}

module.exports = requestLogger;
