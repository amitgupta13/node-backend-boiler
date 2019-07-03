const bodyParser = require("body-parser");
const cors = require("cors");
const users = require("../routes/users");

module.exports = app => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/auth", users);
};
