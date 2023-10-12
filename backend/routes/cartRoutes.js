const {createWebDevMember,getAllWebDevMembers,deleteWebDevMember,updateWebDevMember} = require('../controllers/webDevController')
const express = require('express')


const router = express.Router()

router.route("/webDev/new").post(createWebDevMember)
router.route("/webDev").get(getAllWebDevMembers)
router.route("/webDev/:id").delete(deleteWebDevMember).put(updateWebDevMember)

module.exports = router