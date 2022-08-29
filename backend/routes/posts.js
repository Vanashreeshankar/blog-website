const express = require('express');
const router = express.Router();
const IdObj = require('mongoose').Types.ObjectId;
const Post = require('../models/post');

//CRUD operation for posts
router.get('', (req, res) => {

    
        Post.find((e, doc) => {
            if(e){
                console.log('Error in Get Data' + e)
             }else{
               res.send(doc);
             }
        });  
});


router.get('/:id', (req, res) => {

    if(IdObj.isValid(req.params.id)){
        Post.findById(req.params.id, (e, doc) => {
            if(e){
                console.log('Error in Get Data' + e)
             }else{
               res.send(doc);
             }
        });
    }else{
        return res.status(400).send('No record found with id' + req.params.id)
    }

    
});



router.post('/',async(req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        auther: req.body.auther
    })
    post.save((e,doc) =>{
        if(e){
           console.log('Error in Post Data' + e)
        }else{
          res.send(doc);
        }
    })
    
})

router.put('/:id', (req, res) => {

    if(IdObj.isValid(req.params.id)){

        const post = {
            title: req.body.title,
            description: req.body.description,
            auther: req.body.auther
        }

        Post.findByIdAndUpdate(req.params.id, {$set : post}, {new:true}, (e, doc) => {
            if(e){
                console.log('Error in Update Post by id' + e)
             }else{
               res.send(doc);
             }
        });
    }else{
        return res.status(400).send('No record found with id' + req.params.id)
    }

    
});

router.delete('/:id', (req, res) => {

    if(IdObj.isValid(req.params.id)){
        Post.findByIdAndRemove(req.params.id, (e, doc) => {
            if(e){
                console.log('Error in delete Post by id' + e)
             }else{
               res.send(doc);
             }
        });
    }else{
        return res.status(400).send('No record found with id' + req.params.id)
    }

    
});



module.exports = router;