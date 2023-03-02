
async function main() {
    const sunsetTime = await getSunsetTime()
    console.log(sunsetTime)
    console.log(parseSunsetTime(sunsetTime))
    console.log(getTime())
}
main()

async function getSunsetTime() {
    const resp = await fetch("https://api.sunrisesunset.io/json?lat=44.571651&lng=-123.277702&date=today")
    const respJSON = await resp.json()

    return respJSON.results.sunset
}

//this returns the sunset time that is passed through the function as an array [hour, minute]
function parseSunsetTime(time){
    let ret = []

    let min = ""
    min+=time[2]
    min+=time[3]

    ret.push(parseInt(time[0]) + 12)
    ret.push(parseInt(min))

    return ret
}

//this returns the current time as [hour, minute]
function getTime(){
    const date = new Date();
    return [date.getHours(), date.getMinutes()];
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

