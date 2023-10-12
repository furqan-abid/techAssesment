const { getAllBlogs,createBlog, updateBlog, getSingleBlog, deleteBlog } = require('../controllers/blogController');
const express = require('express');

const router = express.Router();

router.route("/Blog").get(getAllBlogs)
router.route("/Blog/new").post(createBlog);
router.route("/Blog/:id").put(updateBlog).get(getSingleBlog).delete(deleteBlog);

module.exports = router