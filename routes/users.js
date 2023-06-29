const express = require("express");
const router = express.Router();


const usersController = require('../controllers/usersController');

//routes
router.post("/registration", usersController.registration);
router.post("/login", usersController.login);
router.put("/update-user/:id", usersController.updateUser)
router.delete("/delete-user/:id", usersController.deleteUser)
// router.get("/get-user/:id", usersController.getUser )
// router.get('/message',usersController.message);

module.exports = router;
