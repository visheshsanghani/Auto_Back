const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    UserName: {
        type: String,
        required: true,
        trim: true,
        unique: false,
        minlength: 3,
    },
    Email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
    },
    Password: {
        type: String,
        required: true,
        minlength: 8,
        trim: true,
    }
},
    {
        timestamps: true
    }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;