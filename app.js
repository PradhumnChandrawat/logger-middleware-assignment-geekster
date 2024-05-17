const express = require("express");
const requestLogger = require("./requestLogger");

const app = express();
const PORT = 8080;

// Use custom requestLogger middleware
app.use(requestLogger);

app.get("/request-logger-assignment", (req, res) => {
  res.send({
    success: true,
    mesg: "Hello, request-logger-assignment",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
