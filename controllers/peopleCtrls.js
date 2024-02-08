const db = require('../models') //this is where our db mongoose connection live

//INDEX PEOPLE ROUTE /PEOPLE
const getPeople = async (req, res) => {
    //db.People.find({}) <--- db has all of our models in it so we can use any of them this way!
    // db.Model.query() <-- syntax
    try{
        const foundPeople = await db.Person.find({})
        if (foundPeople.length === 0){
            res.status(404).json({message: "Cannot find People"})
        } else {
            res.status(200).json({data: foundPeople})
        }
    } catch(err) {
        res.status(400).json({error: err.message})
    }
    // res.send('getPeople')
}

// PEOPLE CREATE ROUTE /PEOPLE
const createPeople = async (req, res) => {
    try{
        console.log(req.body, "REQ BODY IN CREATE PEOPLE")
        const createdPerson = await db.Person.create(req.body)
        createdPerson.save()
        console.log(createdPerson, "RESPONSE CREATEDPERSON")

        if(!createdPerson){
            console.log("NO CREATED PERSON 404")
            res.status(400).json({message: "Cannot create person"})
        }
        else {
            console.log("CREATED STATUS 201")
            res.status(201).json({message: "person created", data: createdPerson})
        }
    } catch(err) {res.status(500).json({error: err.message})}
}

// PEOPLE UPDATE ROUTE
const updatePerson = async (req, res) => {
    try{
        const updatedPerson = await db.Person.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!updatedPerson){
            res.status(400).json({message: 'Could not update person'})
        } else {
            res.status(200).json({Data: updatedPerson, message: "Person updated"})
        }
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

// PEOPLE DESTROY ROUTE
const deletePerson = async (req, res) => {
    try {
        const deletedPerson = await db.Person.findByIdAndDelete(req.params.id)
        if(!deletedPerson){
            res.status(400).json({message: 'Could not delete person'})
        } else {
            res.status(200).json({Data: deletedPerson, message: "Person deleted"})
        }
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}


module.exports = {
    getPeople, 
    createPeople,
    updatePerson, 
    deletePerson
}