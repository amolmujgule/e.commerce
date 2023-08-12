const jsonServer = require('json-server')
const cors = require('cors')
const path = require('path')
const express = require("express")
const app = express()
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()
app.use(express.static("public"))
server.use(cors())
server.use(jsonServer.bodyParser)
server.use(middlewares)
server.use(router)

const PORT = 5000

server.listen(PORT, () => {
    console.log(`JSON Server is running on http://localhost:${PORT}`)
})