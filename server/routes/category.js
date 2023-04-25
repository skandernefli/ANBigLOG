const express =require('express');
const {postCategory,getCategories,deleteCategory,updateCategory}=require('../controllers/category');
const router=express.Router()
const {verifyToken}=require('../middleware/authMiddleware')

router.get('/',getCategories);
router.post('/',verifyToken,postCategory);
router.put('/:id',verifyToken,updateCategory);
router.delete('/:id',verifyToken,deleteCategory);
module.exports= router;