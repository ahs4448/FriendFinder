const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.port || 8080;

// This is how we use the path module
app.use(express.static(path.join(__dirname, './app/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text({ type: 'text/html'}));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type'}));

require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

app.listen(PORT, function() {
  console.log('Friend Finder application is listening on port ' + PORT);
});