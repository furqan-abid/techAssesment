const Errorhandler = require("../Utils/errorhandler");
const fs = require("fs");
const menuData = require("../sample.json");

const loadShoppingCart = () => {
  try {
    const cartData = fs.readFileSync("shoppingCart.json", "utf8");
    return JSON.parse(cartData);
  } catch (error) {
    return [];
  }
};

let shoppingCart = loadShoppingCart();

const saveShoppingCart = () => {
  fs.writeFileSync("shoppingCart.json", JSON.stringify(shoppingCart), "utf8");
};

exports.getAllItems = (req, res, next) => {
  res.status(200).json({
    success:true,
    menu:menuData.menu
  });
};

exports.addToCart = (req, res, next) => {
  const { itemId,name,size,description,quantity } = req.body;
  const menuItem = menuData.menu.find((item) => item.id === itemId);

  if (!menuItem) {
    return next(new Errorhandler("Menu item not found", 404));
  } else {
    const existingCartItem = shoppingCart.find((item) => item.id === itemId);

    if (existingCartItem) {
      existingCartItem.quantity += quantity;
    } else {
      shoppingCart.push({ itemId,name,size,description, quantity });
    }

    saveShoppingCart();
    res.status(201).json(shoppingCart);
  }
};

exports.getCartItems = (req, res, next) => {
  res.status(200).json({
    success:true,
    cart:shoppingCart
  })
};
