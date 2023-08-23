const express = require("express");
const router = express.Router();


const ordersController = require('../controllers/ordersController');

//routes
router.post("/create-order", ordersController.createOrder);
router.get('/get-orders/:userId',ordersController.getOrdersByUserId);

module.exports = router;