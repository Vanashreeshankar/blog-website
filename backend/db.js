const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://User_Name:Password@cluster0.c9ygt.mongodb.net/Collection?retryWrites=true&w=majority',(error) => {
    if(!error){
        console.log('Connection Successful')
    }else{
        console.log('Connection Unsuccessful' + " " + error)
    }
})
module.exports = mongoose;
