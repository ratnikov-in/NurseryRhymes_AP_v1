const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const dataSchema = Schema({
    url: String,
    youtube: String,
    title: String,
    text: String,
    created: { 
        type: Date,
        default: Date.now
    }
})

const Data = mongoose.model('Text', dataSchema);

module.exports = Data;