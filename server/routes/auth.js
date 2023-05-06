const  express=require('express');
const {login,logout,createAdmin}=require('../controllers/auth');
const {verifyToken}=require('../middleware/authMiddleware');

//const putAdmin=require('../controllers/auth');
//const deleteAdmin=require('../controller/auth');
const router = express.Router();

router.post("/register",createAdmin);
//router.delete('deleteAdmin',deleteAdmin);
//router.put('./updateAdmin',putAdmin);
router.post("/login",login);
router.post("/logout",logout);

module.exports= router;
