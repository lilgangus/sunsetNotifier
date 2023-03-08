//this will be where we actually run our code
import { getUser } from "./getUsers.js";
import { sendSunsetNotification } from "./sunsetNotification.js";

async function notify() {
    const users = await getUser()
    users.forEach(user => {
        sendSunsetNotification(user.email, user.latitude, user.longitude)
    })    
}

//we grab the emails and send a notification every day
function main() {
    notify()
    setInterval(() => {
        notify()
    },86400000)
}

main()


