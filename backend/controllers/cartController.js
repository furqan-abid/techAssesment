const cathAsyncErrors = require("../middleware/cathAsyncErrors");
const Errorhandler = require("../Utils/errorhandler");

const menuData = require('../sample.json')

exports.getAllItems = cathAsyncErrors(async (req,res,next)=>{
  res.json(menuData.menu)
})