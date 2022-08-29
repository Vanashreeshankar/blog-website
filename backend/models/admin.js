var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var admin = new Schema({
    name: {type:String, require:true},
    email : {type:String, require:true},
    
    password:{type:String, require:true},
    creation_dt:{type:Date, require:true},
    que1:{type:String, require:true},
    que2:{type:String, require:true}
});

admin.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password,10);
}

admin.methods.isValid = function(hashedpassword){
    return  bcrypt.compareSync(hashedpassword, this.password);
}

module.exports = mongoose.model('Admin',admin);