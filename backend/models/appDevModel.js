const mongoose = require("mongoose");

const AppDevSchema = new mongoose.Schema({
  img:{
      type: String,
      required: true,
    },
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

var AppDev = mongoose.model("AppDev", AppDevSchema);
module.exports = AppDev;
