const express = require("express");
const router = express.Router();
const auth = require('../auth')

const usersController = require('../controllers/usersController');

//routes
router.post("/registration", usersController.registration);
router.post("/authtoken", auth.verifyToken,usersController.authtoken);
router.post("/login", usersController.login);
router.put("/update-user/:id", usersController.updateUser)
router.delete("/delete-user/:id", usersController.deleteUser)


module.exports = router;
