const { uuid } = require("uuidv4");
const User = require('../models/Users');


const {
  generatePasswordHash,
  validatePassword,
  generateUserToken,
  verifyToken,
} = require("../auth");

//Create
async function registration(req, res, next) {
    try {
        const email = req.body.email;
        const password = req.body.password;        
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const phoneNumber = req.body.phoneNumber;
        const streetAddress = req.body.streetAddress;
        const unitApartment = req.body.unitApartment;
        const city = req.body.city;
        const state = req.body.state;

        console.log(req.body)
        const saltRounds = 5; // In a real application, this number would be somewhere between 5 and 10

        const passwordHash = await generatePasswordHash(password, saltRounds);

        const newUser = new User({
        id: uuid(), // uid stands for User ID. This will be a unique string that we will can to identify our user
        email: email,
        password: passwordHash,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        streetAddress: streetAddress,
        unitApartment: unitApartment,
        city: city,
        state: state
        });

        console.log(password)
        console.log(passwordHash)
        //mongoose
        const insertResult = await newUser.save();
  
  
      res.json({ success: true });
    } catch (error) {
      console.error(error);
      res.json({ success: false, message: error.toString() });
    }
  };

  async function login(req, res, next){
    try {
      const email = req.body.email;
      const password = req.body.password;
      const user = await User.findOne({
        email,
      });
  
      if (!user) {
        res.json({ success: false, message: "Could not find user." }).status(204);
        return;
      }
      console.log(user)
      console.log(password)
  
  
      const isPWValid =  validatePassword(password, user.password);
  
      if (!isPWValid) {
        res
          .json({ success: false, message: "Password was incorrect." })
          .status(204);
        return;
      }
  
  
      const data = {
        date: new Date(),
        userId: user.id, 
        email: email
      };
  
      const token =  generateUserToken(data);
      const userFirstName = user.firstName
      const userId = user.id
      const userCart = user.cart
      const userOrders = user.orders

      res.json({ success: true, token, email, userFirstName, userId, userCart, userOrders});
      console.log(token)
  
      return;
    } catch (error) {
      console.error(error);
      res.json({ success: false, message: error.toString() });
    }
  };



//Read

//Update
async function updateUser(req, res, next){
  const entryId = req.params.id;
  try {
    if(req.body.password !== "")
    {
      const saltRounds = 5; // In a real application, this number would be somewhere between 5 and 10
      const passwordHash = await generatePasswordHash(req.body.password, saltRounds);
      req.body.password = passwordHash;
    }
    console.log(req.body)
    const response = await User.updateOne({ id: entryId }, req.body);
    res.json({success: true, userUpdates: response });

  }catch(e){
    console.log(e);
  }

}

//Delete
async function deleteUser(req, res, next){
    const entryId = req.params.id;
  
    try {
        await User.deleteOne({id: entryId});
    } catch (err) {
        console.log(err);
        throw err;  
    }
  
    res.json({
        success: true,
        message: `user ${entryId} has been deleted`
    })
  
  }

  module.exports = {
    registration,
    login,
    updateUser,
    deleteUser
  };