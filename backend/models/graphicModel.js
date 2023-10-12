const mongoose = require("mongoose");

const GraphicSchema = new mongoose.Schema({
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

var Graphic = mongoose.model("Graphic", GraphicSchema);
module.exports = Graphic;
