import mongoose from "mongoose"
import User from "./Models/User.js"
import dotenv from "dotenv"
dotenv.config()

mongoose.connect(process.env.MONGOOSE_URL, {useNewUrlParser: true, useUnifiedTopology: true})

export async function getUser(){
    const user = await User.find()
    const users = []
    user.forEach(user => {
        if(user.registered) {
            users.push({
                email: user.email,
                timezone: user.timezone,
                latitude: user.latitude,
                longitude: user.longitude
            }) 
        }
    })
    return users
}

