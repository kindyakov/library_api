import express from 'express'
import { registerUser, loginUser, getUser } from './user.controller.js'
import { protect } from '../middleware/auth.middleware.js'

const router = express.Router()

router.route('/login').post(loginUser)
router.route('/register').post(registerUser)
router.route('/').get(protect, getUser)

export default router