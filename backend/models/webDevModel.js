const mongoose = require("mongoose");

const WebDevSchema = new mongoose.Schema({
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

var WebDev = mongoose.model("WebDev", WebDevSchema);
module.exports = WebDev;
