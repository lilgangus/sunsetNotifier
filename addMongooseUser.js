import User from './Models/User.js'

import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

mongoose.connect(process.env.MONGOOSE_URL, {useNewUrlParser: true, useUnifiedTopology: true})

const user = new User({
    name: 'Charles',
    email: 'pokemantang@gmail.com',
    timezone: 'PST',
    registered: true,
    latitude: 44.571651,
    longitude: -123.277702
})

user.save()