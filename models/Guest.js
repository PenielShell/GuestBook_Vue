var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Guests
var Guest = new Schema({
    name: {
        type: String
    },
    phone: {
        type: Number
    }
}, {
    collection: 'guests'
});

module.exports = mongoose.model('Guest', Guest);