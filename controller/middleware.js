let registrationList = require('../module/registrationList.js')

let chargeRegistrant =(req,res,next)=>{
    let registrationData = req.body
    let url
    //https://benyaminsoldier.github.io/event-registration-front/html/confirmation.html?data=
    switch(req.body.status){
        case 'Student':
            registrationData.fee = 10.00
            registrationList.push(registrationData)
            req.registrationData = registrationData
            url = 'https://benyaminsoldier.github.io/event-registration-front/html/confirmation.html?data=' + JSON.stringify(registrationData);
            console.log(url)
            res.redirect(url)
            break
        case 'Staff':
            registrationData.fee = 50.00
            registrationList.push(registrationData)
            req.registrationData = registrationData
            url = 'https://benyaminsoldier.github.io/event-registration-front/html/confirmation.html?data='+ JSON.stringify(registrationData);
            console.log(url)
            console.log(registrationList)
            res.redirect(url)
            break
        case 'Volunteer':
            registrationData.fee = 0.00
            registrationList.push(registrationData)
            req.registrationData = registrationData
            url = 'https://benyaminsoldier.github.io/event-registration-front/html/confirmation.html?data=' + JSON.stringify(registrationData);
            console.log(url)
            res.redirect(url)
            break
    }
    
}


module.exports = {chargeRegistrant}