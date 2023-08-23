const { uuid } = require("uuidv4");
const Cart = require('../models/Carts');



// Create Cart

async function createUserCart(req, res, next){

  const cartId = req.body.cartId
  const userId = req.body.userId
  const pizzas = req.body.pizzas
  const items = req.body.items
  const lastItem = req.body.lastItem
  const pizzasInCart= req.body.pizzasInCart
  const itemsInCart = req.body.itemsInCart
  const userLoggedIn= req.body.userLoggedIn
  const deals= req.body.deals
  const total= req.body.total

  const newCart = {
    cartId: cartId,
    userId: userId,
    pizzas: pizzas,
    items: items,
    lastItem: lastItem,
    pizzasInCart: pizzasInCart,
    itemsInCart: itemsInCart,
    userLoggedIn: userLoggedIn,
    deals: deals,
    total: total

  }


  const insertedCart = new Cart(newCart)
  try {
    await insertedCart.save();
    res.json({success: true, cart: insertedCart });
  }catch(e){
    console.log(e);
  }

}


// async function createListing(req, res, next){
//   console.log(req.body);
// const addNew = new Listing(req.body);
//   console.log(addNew)
// await addNew.save();
// res.json({ success: true });

// }

// Update Cart
async function updateUserCart(req, res, next){
    const entryId = req.params.userId;
    console.log(req.body)
    try {
      const response = await Cart.updateOne({ userId: entryId }, req.body);
      res.json({success: true, cartUpdates: response });
    }catch(e){
      console.log(e);
    }
  
}



//Delete
async function deleteUserCart(req, res, next){
  const entryId = req.params.userId;

  try {
      await Cart.deleteOne({userId: entryId});
  } catch (err) {
      console.log(err);
      throw err;  
  }

  res.json({
      success: true,
      message: `Cart belonging to user ${entryId} has been deleted`
  })

}
  module.exports = {
    createUserCart,
    updateUserCart,
    deleteUserCart
  };
