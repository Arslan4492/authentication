const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId
    },
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    firebaseId: {
        type: String,
        require: true
    },

})

module.exports = mongoose.model('user', userSchema)