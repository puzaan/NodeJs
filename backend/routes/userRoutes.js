import express from 'express'
const router = express.Router();
import {authUser, getUserProfile, reisterUser, admins} from '../controller/userController.js'
import{protect, admin} from '../middleware/auth.js'

router.post('/login', authUser)
router.post('/admin', admins)
router.get('/profile',protect, getUserProfile )
router.post('/registor', reisterUser)



export default router