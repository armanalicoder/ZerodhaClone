const mongoose = require("mongoose");
const userSchema= require("../schema/UserSchema");
const User = new mongoose.model("User",userSchema)
module.exports= User;