const sgMail = require("@sendgrid/mail");
require('dotenv').config()
const { SG_TOKEN } = process.env;
sgMail.setApiKey(SG_TOKEN);

const sendEmail = async (data) => {
    const email = { ...data, from: "iwanpomirsky@gmail.com" };
    await sgMail.send(email);
    return true;
};

module.exports = sendEmail;