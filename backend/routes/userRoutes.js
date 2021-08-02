import express from 'express'
const router = express.Router();
import {authUser, getUserProfile, reisterUser} from '../controller/userController.js'
import{protect} from '../middleware/auth.js'

router.post('/login', authUser)
router.get('/profile',protect, getUserProfile )
router.post('/registor', reisterUser)



export default router