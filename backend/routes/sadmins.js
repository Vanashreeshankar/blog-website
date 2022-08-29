var express = require('express');
var router = express.Router();
var Sadmin = require('../models/sadmin');
var passport = require('passport');

 /*router.get('/', function(req, res, next) {
   res.send('respond with a resource');
 });*/

router.post('/register', function (req, res, next) {
  addToDB(req, res);
});


async function addToDB(req, res) {

  var sadmin = new Sadmin({
    email: req.body.email,
    
    password: Sadmin.hashPassword(req.body.password),
    creation_dt: Date.now(),
    
  });

  try {
    doc = await sadmin.save();
    return res.status(201).json(doc);
  }
  catch (err) {
    return res.status(501).json(err);
  }
}

router.get('/user',isValidUser,function(req,res,next){
  return res.status(200).json(req.user);
});

router.get('/logout',isValidUser, function(req,res,next){
  req.logout();
  return res.status(200).json({message:'Logout Success'});
})

function isValidUser(req,res,next){
  if(req.isAuthenticated()) next();
  else return res.status(401).json({message:'Unauthorized Request'});
}

module.exports = router;