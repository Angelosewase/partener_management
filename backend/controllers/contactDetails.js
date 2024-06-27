const express = require('express');
const router = express.Router();
const ContactDetail = require('../models/details.model'); // Assuming you have a ContactDetail model

// Route to get all contact details
router.get('/contactDetails', async (req, res) => {
    try {
        const contactDetails = await ContactDetail.find();
        res.json(contactDetails);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route to get a single contact detail by ID
router.get('/contactDetails/:id', getContactDetail, (req, res) => {
    res.json(res.contactDetail);
});

// Route to create a new contact detail
router.post('/contactDetails', async (req, res) => {
    const contactDetailData = req.body;
    const contactDetail = new ContactDetail(contactDetailData);
    try {
        const newContactDetail = await contactDetail.save();
        res.status(201).json(newContactDetail);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Route to update a contact detail by ID
router.put('/contactDetails/:id', getContactDetail, async (req, res) => {
    if (req.body.location != null) {
        res.contactDetail.location = req.body.location;
    }
    if (req.body.additional_information != null) {
        res.contactDetail.additional_information = req.body.additional_information;
    }
    if (req.body.zip_code != null) {
        res.contactDetail.zip_code = req.body.zip_code;
    }
    if (req.body.place != null) {
        res.contactDetail.place = req.body.place;
    }
    if (req.body.country_code != null) {
        res.contactDetail.country_code = req.body.country_code;
    }
    if (req.body.phone_number != null) {
        res.contactDetail.phone_number = req.body.phone_number;
    }
    if (req.body.email != null) {
        res.contactDetail.email = req.body.email;
    }
    try {
        const updatedContactDetail = await res.contactDetail.save();
        res.json(updatedContactDetail);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Route to delete a contact detail by ID
router.delete('/contactDetails/:id', getContactDetail, async (req, res) => {
    try {
        await res.contactDetail.remove();
        res.json({ message: 'Contact detail deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Middleware function to get contact detail by ID
async function getContactDetail(req, res, next) {
    let contactDetail;
    try {
        contactDetail = await ContactDetail.findById(req.params.id);
        if (contactDetail == null) {
            return res.status(404).json({ message: 'Cannot find contact detail' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.contactDetail = contactDetail;
    next();
}

module.exports = router;
