const passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;
const Admin = require('./models/admin');

passport.use('localstrategy',new LocalStrategy({
    usernameField:'email',
    passwordField:'password',
    que1:'que1',
    que2:'que2'
},
    function (name, password, done) {
        Admin.findOne({ email: name}, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.isValid(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            /*if (!que1) {
                return done(null, false, { message: 'Answer not matched' });
            }*/
            
            return done(null, user);
        });
    }
));


passport.serializeUser(function(user, done) {
    done(null, user._id);
  });
  
  passport.deserializeUser(function(_id, done) {
    Admin.findById(_id, function(err, user) {
      done(err, user);
    });
  }); 