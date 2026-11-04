import mongoose from 'mongoose';
const UserModel = new mongoose.Schema({
    name: {
        type: String,
        required:trusted
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    age: {
        type: Number,
        required: true
    },

    address: {
        type: String,
        required:true
    },

    isActive: {
        type: Boolean,
        required:true
    },

    role: {
        type: String,
        enum: ['Admin', 'Manager', 'Employee'],
        required: true,
        default:'Employee'
    },
    timestamps: {
        type: Date,
        default:DataTransfer.now
    },
})

const User = mongoose.model('user', UserModel)
export default User