const router = require('express').Router()
const { peopleCtrl } = require('../controllers')

router.get("/", peopleCtrl.getPeople)
router.post("/", peopleCtrl.createPeople)
router.get("/seed", peopleCtrl.seedPerson)
router.put('/:id', peopleCtrl.updatePerson)
router.delete('/:id', peopleCtrl.deletePerson)

module.exports = router;