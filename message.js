// https://app.sendgrid.com/guide/integrate/langs/nodejs
import dotenv from 'dotenv'
import sgMail from '@sendgrid/mail'

dotenv.config()
const apiKey = process.env.API_KEY

export async function sendMessage(email) {
  sgMail.setApiKey(apiKey)
  const msg = {
      to: email, // Change to your recipient
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



// sgMail.setApiKey(apiKey)
// const msg = {
//     to: 'tangcharles29@gmail.com', // Change to your recipient
//     from: 'sunsetreminder@gmail.com', // Change to your verified sender
//     subject: 'Sunset Reminder',
//     text: 'Sunset Occurs in 10 minutes',
//     html: '<h1>Sunset Occurs in 10 minutes</h1>',
// }
// sgMail.send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })
