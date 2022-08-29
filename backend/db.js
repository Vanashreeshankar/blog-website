const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Vanashree:Vana~22Shankar@cluster0.c9ygt.mongodb.net/blog_post?retryWrites=true&w=majority',(error) => {
    if(!error){
        console.log('Connection Successful')
    }else{
        console.log('Connection Unsuccessful' + " " + error)
    }
})
module.exports = mongoose;