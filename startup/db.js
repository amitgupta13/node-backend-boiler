const mongoose = require("mongoose");

module.exports = () => {
  mongoose.connect(
    "mongodb://localhost:27017/test",
    { useNewUrlParser: true },
    a => console.log("Connected To Database")
  );
};
