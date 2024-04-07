const express = require('express')
const app = express()
const router = require('./router/routes.js')
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
})
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(router)
app.listen(7000,()=>{console.log('server running')})

//MongoDB Atlas Credential:
//username: danielbenjumea0
//Password:7jZEn2ZvgN2I0DMO