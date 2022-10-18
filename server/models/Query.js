const mongoose = require('mongoose');

const Query = new mongoose.Schema({
    name: {type: String, required: true},
    mail: {type: String, required: true},
    body: {type: String, required: true},
    PDataValidation: {type:Boolean, required: true},
    comments: [{ text: String }],
})

module.exports = mongoose.model('Query', Query)