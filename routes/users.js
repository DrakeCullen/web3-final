var express = require("express")
var router = express.Router()

var User = require("../models/user")

router.get("/profile", function(req, res, next) {
    let user = req.session.user;
    if (user) res.render("profile", { title: "Profile", user: user})
    else res.redirect("/login")
})

router.post("/profile", function(req, res, next) {
    var user = req.session.user
    if (!user) res.redirect("/login")
    var conditions = { _id: user._id }
    var update = {
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        firstName: req.body.fname,
        lastName: req.body.lname
    }
    var options = {}
    User.updateOne(conditions, update, options, (err, numAffected) => {
        if (err) throw err
        User.findById(user._id, '-password', function(err, updateduser) {
            if (err) throw err
            req.session.user = updateduser
            res.render('profile', {messages: [{msg: 'Profile updated successfully!'}],
                user: updateduser
            });
        })
    })
})

module.exports = router
