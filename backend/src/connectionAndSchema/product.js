const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  title: { type: String}, 
  postImage: {data: Buffer,contentType: String},
  description: { type: String},
  
});
module.exports = mongoose.model("posts", productSchema);
