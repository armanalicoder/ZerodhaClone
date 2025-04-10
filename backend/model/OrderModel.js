const mongoose = require("mongoose");
const OrderSchema = require("../schema/OrderSchema");

const Order = new mongoose.model("Order",OrderSchema);

module.exports=Order;