const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    nimi: String,
    lukumaara: String,
    
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Item = mongoose.model('items', itemSchema);

module.exports = Tavara;