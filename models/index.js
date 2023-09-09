const mongoose = require("mongoose")
const { DATABASE_URL } = process.env
///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
// Establish Connection
mongoose.connect(DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

//connection events
mongoose.connection
    .on('open', () => {console.log("you are connected to mongoose")})
    .on('close', () => {console.log("you are disconnected from mongoose")})
    .on('error', (error) => {console.log(error)})

module.exports = {
    Person: require('./Person')
}