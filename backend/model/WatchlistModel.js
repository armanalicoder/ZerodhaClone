const mongoose = require("mongoose");
const WatchlistSchema = require("../schema/WatchlistSchema");

const Watchlist = new mongoose.model("Watchlist",WatchlistSchema);

module.exports=Watchlist;