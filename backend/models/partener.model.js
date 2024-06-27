const mongoose = require('mongoose');

const partnerSchema = new mongoose.Schema({
    title: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    position: { type: String, required: true },
    company: { type: String, required: true },
    business_idea: { type: String, required: true },
    cna_employees: { type: String, required: true }
});

const Partner = mongoose.model('Partner', partnerSchema);

module.exports = Partner;