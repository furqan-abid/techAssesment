const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
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

var Team = mongoose.model("Team", TeamSchema);
module.exports = Team;
