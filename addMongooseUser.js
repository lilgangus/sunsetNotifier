import User from './Models/User.js'

import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

mongoose.connect(process.env.MONGOOSE_URL, {useNewUrlParser: true, useUnifiedTopology: true})

const user = new User({
    name: 'john',
    email: 'johndoe@gmail.com',
    timezone: 'PST',
    registered: true
})

user.save()