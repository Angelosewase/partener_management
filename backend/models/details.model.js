const mongoose = require('mongoose');

const partnerContactDetailSchema = new mongoose.Schema({
    partner_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Partner', required: true },
    location: { type: String, required: true },
    additional_information: { type: String },
    zip_code: { type: String },
    place: { type: String },
    country_code: { type: String },
    phone_number: { type: String },
    email: { type: String }
});

const PartnerContactDetail = mongoose.model('PartnerContactDetail', partnerContactDetailSchema);

module.exports = PartnerContactDetail;