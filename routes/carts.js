const express = require("express");
const router = express.Router();


const cartsController = require('../controllers/cartsController');

//routes
router.post("/create-user-cart", cartsController.createUserCart);
router.get("/get-user-cart/:userId", cartsController.getUserCart);
router.put('/update-user-cart/:userId',cartsController.updateUserCart);
router.delete('/delete-user-cart/:userId',cartsController.deleteUserCart);

module.exports = router;