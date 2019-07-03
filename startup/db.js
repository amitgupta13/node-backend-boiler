const mongoose = require("mongoose");

module.exports = () => {
  mongoose
    .connect("mongodb://localhost:27017/test", { useNewUrlParser: true })
    .then(() => {
      console.log("Connected To Database");
    })
    .catch(() => {
      console.log("Error Connecting To Database");
    });
};
