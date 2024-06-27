const express = require('express');
const router = express.Router();
const User = require('../models/partener.model'); // Assuming you have a User model

// Route to get all users
router.get('/generalInformation', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route to get a single user by ID
router.get('/generalInformation/:id', getUser, (req, res) => {
    res.json(res.user);
});

// Route to create a new user
router.post('/generalInformation', async (req, res) => {
    const userData = req.body;
    const user = new User(userData);
    // res.json(user)
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Route to update a user by ID
router.put('/generalInformation/:id', getUser, async (req, res) => {
    if (req.body.title != null) {
        res.user.title = req.body.title;
    }
    if (req.body.first_name != null) {
        res.user.first_name = req.body.first_name;
    }
    if (req.body.last_name != null) {
        res.user.last_name = req.body.last_name;
    }
    if (req.body.position != null) {
        res.user.position = req.body.position;
    }
    if (req.body.company != null) {
        res.user.company = req.body.company;
    }
    if (req.body.business_idea != null) {
        res.user.business_idea = req.body.business_idea;
    }
    if (req.body.cna_employees != null) {
        res.user.cna_employees = req.body.cna_employees;
    }
    try {
        const updatedUser = await res.user.save();
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Route to delete a user by ID
router.delete('/generalInformation/:id', getUser, async (req, res) => {
    try {
        await res.user.remove();
        res.json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Middleware function to get user by ID
async function getUser(req, res, next) {
    let user;
    try {
        user = await User.findById(req.params.id);
        if (user == null) {
            return res.status(404).json({ message: 'Cannot find user' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.user = user;
    next();
}

module.exports = router;
