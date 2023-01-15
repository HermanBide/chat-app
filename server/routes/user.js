const express = require("express")
const router = express.Router();
const {registerUser, loginUser, allUsers}= require('.././controllers/user')
const { protect } = require('../utils/authMiddleware')

// const User = require("../models/user");

router.route('/').post(registerUser).get(protect, allUsers)
router.post('/login', loginUser)
module.exports = router;
