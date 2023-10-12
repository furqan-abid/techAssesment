const {createAppDevMember,getAllAppDevMembers,deleteAppDevMember,updateAppDevMember} = require('../controllers/appDevController')
const express = require('express')


const router = express.Router()

router.route("/appDev/new").post(createAppDevMember)
router.route("/appDev").get(getAllAppDevMembers)
router.route("/appDev/:id").delete(deleteAppDevMember).put(updateAppDevMember)

module.exports = router