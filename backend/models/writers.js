const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var writer = new Schema({
   username: {type: String,required: true},
   bio: {type: String,required: true},
   imagePath: { type: String, required: true },
   
   creator: { type: mongoose.Schema.Types.ObjectId, ref: "Admin", required: true }
});


module.exports = mongoose.model('Writer',writer);