const express =require('express');
const {postCategory,getCategories,deleteCategory,updateCategory}=require('../controllers/category');
const router=express.Router()

router.get('/',getCategories);
router.post('/',postCategory);
router.put('/:id',updateCategory);
router.delete('/:id',deleteCategory);
module.exports= router;