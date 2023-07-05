// require express
const express = require('express')
const { register, login } = require('../controllers/user')
const isAuth = require('../middleware/isAuth')
const { registerValidation, validator } = require('../middleware/validator')

// require router from express
const router = express.Router()

// routes

router.post('/register',registerValidation(), validator, register)

router.post('/login', login)

router.get('/current', isAuth, (req, res) => {
    res.send(req.user)
})

//export
module.exports = router