const uuid = require('uuidv4');
const Order = require('../models/Orders')



//Create

async function createOrder(req,res,next){
    try {
        const userId = req.body.userId
        const items = req.body.items
        const total = req.body.total

        const newOrder = new Order({
            id: uuid(),
            userId: userId,
            items: items,
            total: total
        })


        const insertResult = await newOrder.save();
  
  
        res.json({ success: true, Order: insertResult });

    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.toString() });
    }
}
//Read
async function getOrder(req,res,next){
    try {
        
    } catch (error) {
        
    }
}

//Update
//Delete

module.exports = {
    createOrder,
    getOrder
}