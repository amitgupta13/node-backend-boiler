const bodyParser = require("body-parser");
const test = require("../routes/test");

module.exports = app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/", test);
};
