// create express app
// create routes
// run on port number
// app listen on that port

const express = require('express')
const cors = require('cors')
const bodyParse = require('body-parser')

const routes = require('./collections')
const database = require('./database')
const PORT = process.env.DB_CONNECTION || 4001
const app = express()

const NodeJsServer = async () => {
    try {
        app.use(cors())
        app.use(bodyParse.json())
        app.use(routes())
        await database()
        app.listen(PORT, () => console.log(`server is live on http://localhost:${PORT}`))
    } catch (error) {
        console.log("🚀 ~ file: index.js:23 ~ NodeJsServer ~ error", error)
    }
}

NodeJsServer()