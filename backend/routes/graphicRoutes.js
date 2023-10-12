const {createGraphicMember,getAllGraphicMembers,deleteGraphicMember,updateGraphicMember} = require('../controllers/graphicController')
const express = require('express')


const router = express.Router()

router.route("/graphic/new").post(createGraphicMember)
router.route("/graphic").get(getAllGraphicMembers)
router.route("/graphic/:id").delete(deleteGraphicMember).put(updateGraphicMember)

module.exports = router