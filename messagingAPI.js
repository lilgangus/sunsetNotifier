// https://app.sendgrid.com/guide/integrate/langs/nodejs
const dotenv = require('dotenv')
dotenv.config()
const apiKey = process.env.API_KEY

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(apiKey)
const msg = {
    to: 'tangcharles29@gmail.com', // Change to your recipient
    from: 'sunsetreminder@gmail.com', // Change to your verified sender
    subject: 'Sunset Reminder',
    text: 'Sunset Occurs in 10 minutes',
    html: '<h1>Sunset Occurs in 10 minutes</h1>',
}
sgMail.send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })

export default async function sendMessage() {
  sgMail.setApiKey(apiKey)
  const msg = {
      to: 'tangcharles29@gmail.com', // Change to your recipient
      from: 'sunsetreminder@gmail.com', // Change to your verified sender
      subject: 'Sunset Reminder',
      text: 'Sunset Occurs in 10 minutes',
      html: '<h1>Sunset Occurs in 10 minutes</h1>',
  }
  sgMail.send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
}