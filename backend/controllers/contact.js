const Contact = require('../models/contact')
const keys = require('../keys')
const nodemailer = require('nodemailer')
const sendgrid = require('nodemailer-sendgrid-transport')
const contactEmail = require('../emails/contact')

const transporter = nodemailer.createTransport(sendgrid({
    auth: {api_key: keys.SENDGRID_API_KEY}
}))

module.exports.getAll = async function (req, res) {
    try {
        await Contact.find()
        .then(docs => {
            res.status(200).json(docs);
        });
    } catch(e) {
        console.log(e)
    }
}

module.exports.sendContact = async function (req, res) {
    const {name, email, message} = req.body;
    const contact = new Contact({
        name, email, message
    });
    try{
        await contact.save();
        transporter.sendMail(contactEmail(name, email, message));
    } catch(e) {
        console.log(e);
    }
}