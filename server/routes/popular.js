const express= require('express');
const {getGalleryPost,postGalleryPost, getGalleryPosts, deleteGalleryPost,updateGalleryPost}=require('../controllers/popular');
const {verifyToken}=require('../middleware/authMiddleware');

const router=express.Router();


router.post('/',verifyToken,postGalleryPost);
router.delete('/:id',verifyToken,deleteGalleryPost);
router.put('/:id',verifyToken,updateGalleryPost);
router.get('/',getGalleryPosts);
router.get('/:id',getGalleryPost);

module.exports= router;
