import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    timezone: {
        type: String,
        required: true
    },
    registered: {
        type: Boolean
    }

})

// module.exports = mongoose.models.User || mongoose.model('User', UserSchema)
export default mongoose.models.User || mongoose.model('User', UserSchema)