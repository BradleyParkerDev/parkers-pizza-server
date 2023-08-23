const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const orderSchema = new mongoose.Schema({
    orderId: String,
    orderType: String,
    userId: String,
    firstName: String,
    lastName: String,
    phoneNumber: String,
    streetAddress: String,
    unitApartment: String,
    city: String,
    state: String,
    zipcode: Number,
    pizzas:{},
    items:{},
    specialInstructions: String,
    total: Number,
    dateOrdered: { type: Date, default: Date.now }

});

const Order = mongoose.model("orders",orderSchema);

module.exports = Order;