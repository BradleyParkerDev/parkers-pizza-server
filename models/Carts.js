const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");


const cartSchema = new mongoose.Schema({
    cartId: String,
    userId: String,
    pizzas:{},
    items: {},
    lastItem: Boolean,
    pizzasInCart: Boolean, //Specifically for pizzas
    itemsInCart: Boolean, //For pizzas and other menu items
    userLoggedIn: Boolean,
    deals:{},
    total: Number

});

const Cart = mongoose.model("carts",cartSchema);

module.exports = Cart;

