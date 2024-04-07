const express = require('express')
const router = express.Router()
const register = require('../controller/middleware.js')


router.post('/register', register.chargeRegistrant)


module.exports=router