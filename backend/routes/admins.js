var express = require('express');
var router = express.Router();
var Admin = require('../models/admin');
var passport = require('passport');

 /*router.get('/', function(req, res, next) {
   res.send('respond with a resource');
 });*/

router.post('/register', function (req, res, next) {
  addToDB(req, res);
});


async function addToDB(req, res) {

  var admin = new Admin({
    name: req.body.name,
    email: req.body.email,
    
    password: Admin.hashPassword(req.body.password),
    creation_dt: Date.now(),
    que1: req.body.que1,
    que2: req.body.que2
  });

  try {
    doc = await admin.save();
    return res.status(201).json(doc);
  }
  catch (err) {
    return res.status(501).json(err);
  }
}


router.post('/login',function(req,res,next){
  passport.authenticate('localstrategy', function(err, admin, info) {
    if (err) { return res.status(501).json(err); }
    if (!admin) { return res.status(501).json(info); }
    req.logIn(admin, function(err) {
      if (err) { return res.status(501).json(err); }
      return res.status(200).json({message:'Login Success'});
    });
  })(req, res, next);
});

router.get('/admin',isValidUser,function(req,res,next){
  return res.status(200).json(req.admin);
});
 
router.get('/logout',isValidUser, function(req,res,next){
  req.logout();
  return res.status(200).json({message:'Logout Success'});
})

//middleware validation for users/admins
function isValidUser(req,res,next){
  if(req.isAuthenticated()) next();
  else return res.status(401).json({message:'Unauthorized Request'});
}

module.exports = router;