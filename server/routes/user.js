const router = require('express').Router();
const User = require('../models/user');

//creating user
router.post('/', async (req, res) => {
    try {
        const { username, email, password, picture } = req.body;
        const user = await User.create(req.body);
        res.status(201).json({ user });
    } catch (err) {
        let msg
        if(err.code == 11000){
            msg = "Username already exists"
        } else {
            msg = err.message
        }
        console.log(err)
        res.status(500).json(msg);
    }
})

//login user
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findByCredentials(email, password);
        // user.status='online'
        await user.save()
        res.status(200).json({ user });
    } catch (err) {
        res.status(500).json({ message: err})
        }
    
})

module.exports = router;