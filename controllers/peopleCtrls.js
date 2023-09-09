const db = require('../models') //this is where our db mongoose connection live

const getPeople = (req, res) => {
    res.send('getPeople')
}

const createPeople = (req, res) => {
    res.send('create people')
}

module.exports = {
    getPeople, 
    createPeople
}