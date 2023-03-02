// https://app.sendgrid.com/guide/integrate/langs/nodejs
const dotenv = require('dotenv')
dotenv.config()
const apiKey = process.env.API_KEY

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(apiKey)
const msg = {
    to: 'pokemantang@gmail.com', // Change to your recipient
    from: 'sunsetreminder@gmail.com', // Change to your verified sender
    subject: 'Hello Charles',
    text: 'hellocharles',
    html: '<h1></h1>hellocharles</h1>',
}
sgMail.send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
