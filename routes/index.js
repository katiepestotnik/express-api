const router = require('express').Router()
const peopleRoute = require('./peopleRoutes')

router.use('/people', peopleRoute)

module.exports = router;