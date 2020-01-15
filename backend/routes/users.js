const router = require('express').Router();
let User = require('../models/users');

router.route('/login').get((req, res) => {
    User.find({ "UserName": req.body.UserName , "Password": req.body.Password })
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error : ' + err))
})

router.route('/check').get((req , res) =>{
    User.find()
    .then(users => res.json(users))
    .catch(err => res.json('Error : '+ err))
})


router.route('/check1').get((req,res)=>{
    console.log("Email : "+ req.body.Email)
    User.find({ "Email": req.body.Email })
        .then(user => res.json(user))
        .catch(err => res.json('Error : '+ err))

})

router.route('/add').post((req, res) => {
    const UserName = req.body.UserName;
    const Email = req.body.Email;
    const Password = req.body.Password;

    const newUser = new User({
        UserName,
        Email,
        Password,
    });

    newUser.save()
        .then(() => res.json('User added !'))
        .catch(err => res.status(400).json('Error : ' + err));
})

module.exports = router;