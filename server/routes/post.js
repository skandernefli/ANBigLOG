const express= require('express');
const {getPost,getPosts_Ad,getPosts_Cteg, getPosts_Cl,postPost, deletePost, updatePost}= require('../controllers/post');
const {verifyToken}=require('../middleware/authMiddleware');

const router=express.Router();

/* router.get('/:id',getPost);
 */router.post('/',verifyToken,postPost);
router.delete('/:id',verifyToken,deletePost);

router.put('/:id',verifyToken,updatePost);
router.get('/admin/',getPosts_Ad);
router.get('/client/',getPosts_Cl);
router.get('/:id',getPost);
router.get('/category/:categorie_name',getPosts_Cteg);

module.exports= router;
