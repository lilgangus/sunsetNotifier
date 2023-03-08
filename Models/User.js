import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    timezone: {
        type: String,
        required: true
    },
    registered: {
        type: Boolean
    },
    latitude: {
        type: Number
    },
    longitude: {
        type: Number
    }

})

// module.exports = mongoose.models.User || mongoose.model('User', UserSchema)
export default mongoose.models.User || mongoose.model('User', UserSchema)