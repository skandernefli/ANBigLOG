const express= require('express');
const {getPost,getPosts, postPost, deletePost, updatePost}= require('../controllers/Post');

const router=express.Router();

router.get('/:id',getPost);
router.post('/',postPost);
router.delete('/:id',deletePost);
router.put('/:id',updatePost);
router.get('/',getPosts);
module.exports= router;
