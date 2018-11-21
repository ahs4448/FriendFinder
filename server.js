const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.port || 8080;

// This is how we use the path module
app.use(express.static(path.join(__dirname, './app/public')));

app.listen(PORT, function() {
    console.log('Friend Finder application is listening on port ' + PORT);
  });