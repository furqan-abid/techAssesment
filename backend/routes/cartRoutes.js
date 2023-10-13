const express = require('express')
const { getAllItems } = require('../controllers/cartController')


const router = express.Router()

router.route("/items").get(getAllItems)

module.exports = router