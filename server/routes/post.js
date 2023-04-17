const express= require('express');
const {getPost,getPosts, postPost, deletePost, updatePost}= require('../controllers/post');
const {verifyToken}=require('../middleware/authMiddleware')

const router=express.Router();

router.get('/:id',getPost);
router.post('/',verifyToken,postPost);
router.delete('/:id',deletePost);
router.put('/:id',updatePost);
router.get('/',getPosts);
module.exports= router;
