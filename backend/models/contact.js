const {Schema, model} = require('mongoose');

const contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: String,
    message: {
        type: String,
        required: true
    }
})

module.exports = model('Contact', contactSchema);