const mongoose = require("mongoose");

const deliveredorderSchema = new mongoose.Schema(
  {
    userid: { type: String, required: true, unique: true },
    totalprice: { type: String, required: true, unique: true },
    address:{ type: String, required: true },
    itemlist: [String],
    dateofdelivery:Date,
      },
  
);

module.exports = mongoose.model("deliveredorder", deliveredorderSchema);

