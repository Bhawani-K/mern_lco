const express = require('express')
var router = express.Router()

const { signout, signup, } = require('../controllers/authController')

router.get('/signout', signout);
router.post('/signup', signup);


module.exports = router;