const AppDev = require("../models/appDevModel");
const cathAsyncErrors = require("../middleware/cathAsyncErrors");
const Errorhandler = require("../Utils/errorhandler");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "v3-solutions",
  api_key: "991558419654558",
  api_secret: "871E4qlbBRJYjkQfEJ-fwmmwx1E",
  secure: true,
});

// create new AppDev member
exports.createAppDevMember = cathAsyncErrors(async (req, res, next) => {
  let img = '';

  const file = req.files.img;

  await cloudinary.uploader.upload(
    file.tempFilePath,
    async (err, result) => {
      img = result.secure_url;
    }
  );
  req.body.img = img;
  const appDev = await AppDev.create(req.body);
  res.status(200).json({
    succes: true,
    appDev,
  });
});

// get all AppDev members
exports.getAllAppDevMembers = cathAsyncErrors(async (req, res, next) => {
  const appDev = await AppDev.find();
  res.status(200).json({
    success: true,
    appDev,
  });
});

// delete AppDev member
exports.deleteAppDevMember = cathAsyncErrors(async (req, res, next) => {
  let appDev = await AppDev.findByIdAndDelete(req.params.id);
  if (!appDev) {
    return new Errorhandler("member not found", 404);
  }
  res.status(200).json({
    success: true,
    message: "member deleted succefully",
  });
});

//update AppDev member
exports.updateAppDevMember = cathAsyncErrors(async (req, res, next) => {
  let appDev = await AppDev.findById(req.params.id);

  if (!appDev) {
    return next(new Errorhandler("product not found", 404));
  }

  appDev = await AppDev.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json({
    success: true,
    appDev,
  });
});
