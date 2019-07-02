const { notFoundHandler, errorHandler } = require("./startup/errors");
const express = require("express");
const app = express();

require("./startup/db")();

require("./startup/routes")(app);

app.use(notFoundHandler);
app.use(errorHandler);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server Listening on port: ${port}`));
