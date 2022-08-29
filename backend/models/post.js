var mongoose = require('mongoose');
var Schema = mongoose.Schema;

 var post = new Schema({
    title: {type: String,required: true},
    description: {type: String,required: true},
    auther:{type: String,required: true},
    created:{type:Date, default: Date.now}
    
    
});

module.exports = mongoose.model('Post',post);