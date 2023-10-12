const Team = require("../models/teamModel");
const cathAsyncErrors = require("../middleware/cathAsyncErrors");
const Errorhandler = require("../Utils/errorhandler");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "v3-solutions",
  api_key: "991558419654558",
  api_secret: "871E4qlbBRJYjkQfEJ-fwmmwx1E",
  secure: true,
});

// create new team member
exports.createTeamMember = cathAsyncErrors(async (req, res, next) => {
  let img = '';

  const file = req.files.img;

  await cloudinary.uploader.upload(
    file.tempFilePath,
    async (err, result) => {
      img = result.secure_url;
    }
  );
  req.body.img = img;
  const team = await Team.create(req.body);
  res.status(200).json({
    succes: true,
    team,
  });
});

// get all team members
exports.getAllTeamMembers = cathAsyncErrors(async (req, res, next) => {
  const team = await Team.find();
  res.status(200).json({
    success: true,
    team,
  });
});

// delete team member
exports.deleteTeamMember = cathAsyncErrors(async (req, res, next) => {
  let team = await Team.findByIdAndDelete(req.params.id);
  if (!team) {
    return new Errorhandler("member not found", 404);
  }
  res.status(200).json({
    success: true,
    message: "member deleted succefully",
  });
});

//update team member
exports.updateTeamMember = cathAsyncErrors(async (req, res, next) => {
  let team = await Team.findById(req.params.id);

  if (!team) {
    return next(new Errorhandler("product not found", 404));
  }

  team = await Team.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json({
    success: true,
    team,
  });
});
