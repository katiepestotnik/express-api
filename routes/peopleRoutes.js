const router = require('express').Router()
const { peopleCtrl } = require('../controllers')

router.get("/", peopleCtrl.getPeople)
router.post("/", peopleCtrl.createPeople)

module.exports = router;