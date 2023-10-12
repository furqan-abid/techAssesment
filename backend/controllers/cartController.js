const WebDev = require("../models/webDevModel");
const cathAsyncErrors = require("../middleware/cathAsyncErrors");
const Errorhandler = require("../Utils/errorhandler");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "v3-solutions",
  api_key: "991558419654558",
  api_secret: "871E4qlbBRJYjkQfEJ-fwmmwx1E",
  secure: true,
});

// create new WebDev member
exports.createWebDevMember = cathAsyncErrors(async (req, res, next) => {
  let img = '';

  const file = req.files.img;

  await cloudinary.uploader.upload(
    file.tempFilePath,
    async (err, result) => {
      img = result.secure_url;
    }
  );
  req.body.img = img;
  const webDev = await WebDev.create(req.body);
  res.status(200).json({
    succes: true,
    webDev,
  });
});

// get all WebDev members
exports.getAllWebDevMembers = cathAsyncErrors(async (req, res, next) => {
  const webDev = await WebDev.find();
  res.status(200).json({
    success: true,
    webDev,
  });
});

// delete WebDev member
exports.deleteWebDevMember = cathAsyncErrors(async (req, res, next) => {
  let webDev = await WebDev.findByIdAndDelete(req.params.id);
  if (!webDev) {
    return new Errorhandler("member not found", 404);
  }
  res.status(200).json({
    success: true,
    message: "member deleted succefully",
  });
});

//update WebDev member
exports.updateWebDevMember = cathAsyncErrors(async (req, res, next) => {
  let webDev = await WebDev.findById(req.params.id);

  if (!webDev) {
    return next(new Errorhandler("product not found", 404));
  }

  webDev = await WebDev.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json({
    success: true,
    webDev,
  });
});
