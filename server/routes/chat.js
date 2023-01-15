const express = require("express");
const { protect } = require("../utils/authMiddleware");
const router = express.Router();
const { 
    accessChat, 
    fetchChat,
    createGroupChat, 
    renameGroupChat,
    removeFromGroup,
    addToGroup

} = require('.././controllers/chat')


// const User = require("../models/user");

router.route('/').post(protect, accessChat)
router.route('/').get(protect, fetchChat)
router.route('/group').post(protect, createGroupChat)
router.route('/renameChat').put(protect, renameGroupChat)
router.route("/groupAdd").put(protect, addToGroup);
router.route('/groupremove').put(protect, removeFromGroup)

module.exports = router;