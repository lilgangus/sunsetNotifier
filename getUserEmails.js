//we grab all the users and return their emails as an array
import mongoose from "mongoose"
import User from "./Models/User.js"
import dotenv from "dotenv"
dotenv.config()

mongoose.connect(process.env.MONGOOSE_URL, {useNewUrlParser: true, useUnifiedTopology: true})

export async function getUserEmail(){
    const users = await User.find()
    const emails = []
    users.forEach(user => {
        emails.push(user.email)
    })
    return emails
}
