const mongoose = require("mongoose");
let url ="mongodb://localhost:27017/prtPost"
mongoose
  .connect(url, { useUnifiedTopology:true,
    useNewUrlParser: true})
  .then(() => {
    console.log("Connected to the database ");
  })
  .catch((err) => {
    console.log(`Error connecting to the database. n${err}`);
  });
