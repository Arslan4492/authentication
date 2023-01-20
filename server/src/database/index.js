const mongoose = require("mongoose")

module.exports = async () => {
    try {
        const URL = 'mongodb+srv://arslan0510:0NHq3yiIPHBW7iTp@cluster0.src2e.mongodb.net/test'
        mongoose.connect(URL, {}, () => console.log('database connected!!!'))
    } catch (error) {
        console.log("🚀 ~ file: index.js:5 ~ module.exports=async ~ error", error)
    }
}