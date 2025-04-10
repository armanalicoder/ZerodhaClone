const mongoose = require("mongoose");
const HoldingSchema = require("../schema/HoldingSchema.js");

const Holding = new mongoose.model("Holding",HoldingSchema);

module.exports = Holding;