const express = require("express")


const PORT = process.env.PORT || 3001

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

require('./config/db')();


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});