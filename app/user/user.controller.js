import { User, Basket } from "../models/models.js";
import { generateToken } from './generate-token.js'
import bcrypt from 'bcrypt'
import asyncHandler from 'express-async-handler'

export const registerUser = asyncHandler(async (req, res) => {
  try {
    let user_data = req.body;

    if (!user_data.email || !user_data.password) {
      res.status(400)
      throw new Error('Некорректный телефон или пароль')
    }

    const isHaveUser = await User.findOne({
      where: { email: user_data.email }
    })

    if (isHaveUser) {
      res.status(400)
      throw new Error('Такой пользователь уже зарегестрирован')
    }

    const hashPassword = await bcrypt.hash(user_data.password, 5)


    user_data.password = hashPassword
    const user = await User.create(user_data)

    const basket = await Basket.create({ userDatumId: user.id })
    const token = generateToken(user.id, user.email, user.student_id)

    res.json({ user, token })
  } catch (error) {
    res.status(400)
    throw new Error(error.message)
  }
})

export const loginUser = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    let isValidPassword;

    const user = await User.findOne({
      where: { email }
    })

    if (user) isValidPassword = bcrypt.compareSync(password, user.password)

    if (user && isValidPassword) {
      const token = generateToken(user.id, user.email, user.student_id)
      res.json(token)
    } else {
      res.status(400)
      throw new Error('Почта или пароль неверный')
    }
  } catch (error) {
    res.status(400)
    throw new Error(error.message)
  }
})

export const getUser = asyncHandler(async (req, res) => {
  try {
    const { userId } = req.user

    const userdb = await User.findOne({
      where: { id: userId }
    })

    res.json(userdb)
  } catch (error) {
    res.status(400)
    throw new Error(error.message)
  }
})