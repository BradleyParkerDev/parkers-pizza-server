const express = require("express");
const router = express.Router();


const ordersController = require('../controllers/ordersController');

//routes
// router.post("/post-order", ordersController.postOrder);
// router.get('/get-order',ordersController.getOrder);
// router.delete("/delete-user/:id", ordersController.deleteOrder)

module.exports = router;