const router = require('express').Router()
const { peopleCtrl } = require('../controllers')

router.get("/", peopleCtrl.getPeople)
router.post("/", peopleCtrl.createPeople)
router.put('/:id', peopleCtrl.updatePerson)
router.delete('/:id', peopleCtrl.deletePerson)

module.exports = router;