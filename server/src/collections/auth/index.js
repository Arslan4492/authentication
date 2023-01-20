const express = require('express')
const routes = express.Router()
const login = require('./login')
const register = require('./register')

module.exports = () => {
    routes.post('/login', login)
    routes.post('/register', register)
    return routes
}