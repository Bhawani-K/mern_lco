const express = require('express')
var router = express.Router()

const {} = require('../controllers/authController')

router.get('/signout', signout)

module.exports = router;