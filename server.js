///////////////////////////////
// DEPENDENCIES
////////////////////////////////
//get .env variables
require('dotenv').config()
// pull the PORT from .env, give it default value of 4000
const {PORT} = process.env
//import express
const express = require('express')
// create app object
const app = express()
const cors = require("cors")
//import all available routes in our /routes/indes.js the user can use
const routes = require('./routes/index')

///////////////////////////////
// MiddleWare
////////////////////////////////
app.use(cors('*')); // to prevent cors errors, open access to all origins
app.use(express.urlencoded({extended: true}))
app.use(express.json()); // parse json bodies

///////////////////////////////
// ROUTES
////////////////////////////////
app.use('/', routes) //this looks at the routes in index.js for ALL of our routes so we can save space and keep our code DRY

app.use((req, res) => {res.status(404).json({message:"NOT A PROPER ROUTE"})})
// create a test route
// app.get('/', (req, res) => {
//     res.send('hello world')
// })

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))