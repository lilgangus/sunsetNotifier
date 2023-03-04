const dotenv = require('dotenv')
dotenv.config()
const sgMail = require('@sendgrid/mail')

runProgramEveryDay()

function runProgramEveryDay(){
    setInterval(() => {
        sendSunsetNotification()
    },86400000)
}

//this sends a notification 10 minutes before sunset
async function sendSunsetNotification() {
    const sunsetTime = await getSunsetTime(44.571651,-123.277702 )
    //this is the time until sunset formated in ms
    const timeUntilSunset = msTilSunset(sunsetTime)

    setTimeout(() => {
        sendMessage('tangcharles29@gmail.com')
    }, timeUntilSunset);
}

//this fetches an api and returns the sunset time
async function getSunsetTime(latitude, longitude) {
    const fetchAdress = "https://api.sunrisesunset.io/json?lat=" + latitude + "&lng=" +  longitude + "&date=today"
    const resp = await fetch(fetchAdress)
    const respJSON = await resp.json()
    return respJSON.results.sunset
}

//this returns miliseconds til sunset, since 12am
function msTilSunset(time){
    let minutes = ""
    minutes+=time[2]
    minutes+=time[3]
    const milTilSun = ((parseInt(time[0]) + 12)*60 + parseInt(minutes))*60*1000
    //gets current time in ms
    const date = new Date()
    const currentMS = (date.getHours()*60 + date.getMinutes())*60*1000
    return milTilSun - currentMS - 600000
}

async function sendMessage(email) {
  sgMail.setApiKey(process.env.API_KEY)
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

//https://sunrisesunset.io/api/

// Data Format
// {
//     sunrise: '6:54:08 AM',
//     sunset: '6:00:11 PM',
//     first_light: '5:17:20 AM',
//     last_light: '7:36:59 PM',
//     dawn: '6:24:50 AM',
//     dusk: '6:29:29 PM',
//     solar_noon: '12:27:10 PM',
//     golden_hour: '5:20:38 PM',
//     day_length: '11:6:03',
//     timezone: 'America/Los_Angels'
// }

