const express = require("express");
const app = express();
require('./config/db')();


const PORT = process.env.PORT || 3001

// parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);




app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});