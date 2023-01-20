require('dotenv').config()
const mongoose = require("mongoose")

module.exports = async () => {
    try {
        mongoose.connect(process.env.DB_CONNECTION, {}, () => console.log('database connected!!!'))
    } catch (error) {
        console.log("🚀 ~ file: index.js:8 ~ module.exports=async ~ error", error)
    }
}