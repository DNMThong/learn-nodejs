const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const routes = require("./resources/routes");
const app = express();
const port = 3000;
console.log(handlebars);

app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("tiny"));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

routes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
