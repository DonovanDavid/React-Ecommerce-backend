import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trime: true,
        minLength: 6,
        maxLength: 264,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 6,
        maxLength: 254,
    },
    username: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 20,
        default: '',
    },
    address: {
        type: String,
        trim: true,
        minLength: 3,
        maxLength: 20,
        default: '',
    },
    shopHistory: {
        type: Number,
        trim: true,
    },
    isAdmin:{
        type: Boolean,
        default: false,
        required: true
    }
})


export default mongoose.model('User', userSchema)