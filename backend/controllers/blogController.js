const Blog = require("../models/blogModel");
const cathAsyncErrors = require("../middleware/cathAsyncErrors");
const Errorhandler = require("../Utils/errorhandler");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "v3-solutions",
  api_key: "991558419654558",
  api_secret: "871E4qlbBRJYjkQfEJ-fwmmwx1E",
  secure: true,
});

//create a new blog
exports.createBlog = cathAsyncErrors(async (req, res, next) => {
  let image = [];

  const file = req.files.photo;
  for (let i = 0; i < file.length; i++) {
    await cloudinary.uploader.upload(
      file[i].tempFilePath,
      async (err, result) => {
        image.push(result.secure_url);
      }
    );
  }
  req.body.image = image;
  const blog = await Blog.create(req.body);
  res.status(201).json({
    success: true,
    blog,
  });
});

//get all blogs
exports.getAllBlogs = cathAsyncErrors(async (req, res, next) => {
  const blog = await Blog.find();
  res.status(200).json({
    success: true,
    blog,
  });
});

//update blog
exports.updateBlog = cathAsyncErrors(async (req, res, next) => {
  let blog = await Blog.findById(req.params.id);

  if (!blog) {
    return next(new Errorhandler("product not found", 404));
  }

  blog = await Blog.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json({
    success: true,
    blog,
  });
});

//get single blog
exports.getSingleBlog = cathAsyncErrors(async (req, res, next) => {
  let blog = await Blog.findById(req.params.id);
  if (!blog) {
    return next(new Errorhandler("product not found", 404));
  }
  res.status(200).json({
    success: true,
    blog,
  });
});

//delte Blog
exports.deleteBlog = cathAsyncErrors(async (req, res, next) => {
  let blog = await Blog.findByIdAndDelete(req.params.id);
  if (!blog) {
    return next(new Errorhandler("product not found", 404));
  }
  res.status(200).json({
    success: true,
    message: "blog deleted",
  });
});
