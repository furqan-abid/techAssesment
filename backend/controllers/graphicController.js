const Graphic = require("../models/graphicModel");
const cathAsyncErrors = require("../middleware/cathAsyncErrors");
const Errorhandler = require("../Utils/errorhandler");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "v3-solutions",
  api_key: "991558419654558",
  api_secret: "871E4qlbBRJYjkQfEJ-fwmmwx1E",
  secure: true,
});

// create new Graphic member
exports.createGraphicMember = cathAsyncErrors(async (req, res, next) => {
//   let img = '';

//   const file = req.files.img;

//   await cloudinary.uploader.upload(
//     file.tempFilePath,
//     async (err, result) => {
//       img = result.secure_url;
//     }
//   );
//   req.body.img = img;
  const graphic = await Graphic.create(req.body);
  res.status(200).json({
    succes: true,
    graphic,
  });
});

// get all Graphic members
exports.getAllGraphicMembers = cathAsyncErrors(async (req, res, next) => {
  const graphic = await Graphic.find();
  res.status(200).json({
    success: true,
    graphic,
  });
});

// delete Graphic member
exports.deleteGraphicMember = cathAsyncErrors(async (req, res, next) => {
  let graphic = await Graphic.findByIdAndDelete(req.params.id);
  if (!graphic) {
    return new Errorhandler("member not found", 404);
  }
  res.status(200).json({
    success: true,
    message: "member deleted succefully",
  });
});

//update Graphic member
exports.updateGraphicMember = cathAsyncErrors(async (req, res, next) => {
  let graphic = await Graphic.findById(req.params.id);

  if (!ggraphic) {
    return next(new Errorhandler("product not found", 404));
  }

  graphic = await Graphic.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json({
    success: true,
    graphic,
  });
});
