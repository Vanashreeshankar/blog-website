var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var sadmin = new Schema({
   
    email : {type:String, require:true},
    
    password:{type:String, require:true},
    creation_dt:{type:Date, require:true},
    
});

sadmin.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password,10);
}

sadmin.methods.isVerified = function(hashedpassword){
    return  bcrypt.compareSync(hashedpassword, this.password);
}

module.exports = mongoose.model('Sadmin',sadmin);