const {createTeamMember,getAllTeamMembers,deleteTeamMember,updateTeamMember} = require('../controllers/teamController')
const express = require('express')


const router = express.Router()

router.route("/team/new").post(createTeamMember)
router.route("/team").get(getAllTeamMembers)
router.route("/team/:id").delete(deleteTeamMember).put(updateTeamMember)

module.exports = router