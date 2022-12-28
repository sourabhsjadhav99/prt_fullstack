let express= require("express")

const Product = require("../connectionAndSchema/product");
const router = express.Router();
router.use(express.json());
const multer = require("multer");
router.get("/",  async(req, res) => {
  try {
    let data = await Product.find();
    res.send(data);
  } catch (e) {
    res.status(404).json({
      status: "Failed",
      message: e.message,
    });
  }
});
const upload = multer({
  storage: multer.diskStorage({
      destination: function (req, file, callBack) {
          callBack(null, "uploads");
      },
      filename: function (req, file, callBack) {
          callBack(null, file.fieldname + "-" + Date.now() + ".jpg");
      },
  }),
}).single("postImage");


router.post("/posts", upload, (req, res) => {
  const saveImage =  Model({
      name: req.body.title,
      description: req.body.description,
      postImage: {
          data: fs.readFileSync("uploads/" + req.file.filename),
          contentType: "image/png",
      }
  });
  saveImage
    .save()
    .then((res) => {
      console.log("image is saved");
    })
    .catch((err) => {
      console.log(err, "error has occur");
    });
    res.send("data uploaded succefully")
});


  
module.exports = router;

