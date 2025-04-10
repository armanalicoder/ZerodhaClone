const express = require("express");
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const mongoose = require("mongoose");
const Holding = require("./model/HoldingModel");
const Position = require("./model/PositionModel");
const Order = require("./model/OrderModel");
const { Signup, Login, checkAuth, Logout } = require('./controllers/AuthController');
const PORT = process.env.PORT || 8000;
const cookieParser = require("cookie-parser");
const Authenticate = require("./middleware/UserAuthenticate");
const ExpressError = require("./utils/ExpressError.js");
const wrapAsync = require("./utils/wrapAsync.js");
require("dotenv").config();
const db_url = process.env.MONGO_URL;

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
  origin: ["https://zerodhatrading.onrender.com", "https://dashboard-zerodhatrading.onrender.com"],
  credentials: true
}));

main()
  .then(() => {
    console.log("Connection successfull");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(db_url);
}

app.listen(PORT, () => {
  console.log("app is listening on port");
});
app.get("/", (req, res) => {
  window.location.href='https://zerodhatrading.onrender.com';
});
// app.get("/insertholding", async (req, res) => {
//   const allData = holdingData.holdings
//   await Holding.insertMany(allData)
//   res.send("Holding Saved");
// });
// app.get("/insertposition", async (req, res) => {
//   const allData = holdingData.positions;
//   await Position.insertMany(allData);
//   res.send("Position Saved!");
// });
app.get("/allholdings",Authenticate,wrapAsync(async(req,res)=>{
  const data = await Holding.find({});
  return res.json(data);
}));
app.get("/allpositions",Authenticate,wrapAsync(async(req,res)=>{
  const data = await Position.find({});
  res.json(data);
}));
app.post("/newOrder",Authenticate,wrapAsync(async(req,res)=>{
  const data = new Order({
    name : req.body.name,
    qty : req.body.qty,
    price : req.body.price,
    mode : req.body.mode
  })
  data.save();
  res.send("Done");
}));
app.get("/allorder",Authenticate,wrapAsync(async(req,res)=>{
  const data = await Order.find({});
  res.json(data);
}));

app.post("/signup",Signup);
app.post("/login",Login);
app.get("/userAuthenticate", checkAuth);
app.get("/logout",Logout);

//Error Handling Middleware
app.use((err,req,res,next)=>{
  let {status=500,message="Something Went Wrong!"} = err;
  res.status(status).send(message);
})
