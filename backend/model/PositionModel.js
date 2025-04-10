const mongoose = require("mongoose");
const PositionSchema = require("../schema/PositionSchema");

const Position = new mongoose.model("Position",PositionSchema);

module.exports= Position