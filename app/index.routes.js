import express from 'express'
import userRoutes from "./user/user.routes.js";
import basketRoutes from './basket/basket.routes.js'

const router = express.Router()

router.use('/user', userRoutes)
router.use('/basket', basketRoutes)

export default router