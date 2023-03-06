//this will be where we actually run our code
import { runNotifier } from "./sunsetNotification";
import { getUserEmail } from "./getUserEmails";

async function main() {
    const emailList = await getUserEmail()
    emailList.forEach(email => {
        runNotifier(email)
    })
}

main()