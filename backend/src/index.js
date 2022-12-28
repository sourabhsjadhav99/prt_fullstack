const express = require("express");
const app = express();
const port =8800
const formRoutes = require("./routes/crud");
const loginRoutes= require("./routes/login");
require("./connectionAndSchema/config");
 

app.use("/posts",formRoutes)
app.use("/",loginRoutes)

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;