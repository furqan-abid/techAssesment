const express = require('express')
const { getAllItems, addToCart, getCartItems } = require('../controllers/cartController')


const router = express.Router()

router.route("/items").get(getAllItems)
router.route("/cart/add").post(addToCart)
router.route("/cart").get(getCartItems)

module.exports = router