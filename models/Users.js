const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");


const userSchema = new mongoose.Schema({
    id: {type: String, default: uuidv4},
    firstName: String,
    lastName: String,
    email: {type: String, lowercase:true},
    phoneNumber: String,
    password: String,
    streetAddress: String,
    unitApartment: String,
    city: String,
    state: String,
    cart: [],
    orders:[],
    joinedDate: { type: Date, default: Date.now }

});

const User = mongoose.model("users",userSchema);

module.exports = User;