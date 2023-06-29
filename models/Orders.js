const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");


const orderSchema = new mongoose.Schema({
    id: {type: String, default: uuidv4},
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    items:[],
    total: Number,
    dateOrdered: { type: Date, default: Date.now }

});

const Order = mongoose.model("orders",orderSchema);

module.exports = Order;