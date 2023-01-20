const express = require('express')
const auth = require('./auth')
const routes = express.Router()

module.exports = () => {
    routes.use('/auth', auth())
    return routes
}