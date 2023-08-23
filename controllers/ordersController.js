const uuid = require('uuidv4');
const Order = require('../models/Orders')

//Create
async function createOrder(req,res,next){
    const orderId = req.body.orderId
    const orderType = req.body.orderType
    const userId = req.body.userId
    const pizzas = req.body.pizzas
    const items = req.body.items
    const total = req.body.total
    const specialInstructions = req.body.specialInstructions
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const phoneNumber = req.body.phoneNumber
    const streetAddress = req.body.streetAddress
    const unitApartment = req.body.unitApartment
    const city = req.body.city
    const state = req.body.state
    const zipcode = req.body.zipcode
    const newOrder = new Order({
        orderId: orderId,
        orderType: orderType,
        userId: userId,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        streetAddress: streetAddress,
        unitApartment: unitApartment,
        city: city,
        state: state,
        zipcode: zipcode,
        pizzas: pizzas,
        items: items,
        specialInstructions: specialInstructions,
        total: total
    })    
    try {
        const insertedOrder = new Order(newOrder);
        await insertedOrder.save()
        res.json({ success: true, Order: insertedOrder });

    } catch (error) {
        console.error(error);
    }
}

//Read
async function getOrdersByUserId(req, res, next){
    try {
        const Orders = await Order.find({userId:req.params.userId});
        res.json({orders: Orders });
      }catch(e){
        console.log(e);
      }
  
}


module.exports = {
    createOrder,
    getOrdersByUserId
}