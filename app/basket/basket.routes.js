import express from 'express'
import { getBasket, addBasket, deleteBasket } from './basket.controlelr.js'
import { protect } from '../middleware/auth.middleware.js'

const router = express.Router()

router.route('/add/:id').get(protect, addBasket)
router.route('/delete/:id').delete(protect, deleteBasket)
router.route('/').get(protect, getBasket)


export default router