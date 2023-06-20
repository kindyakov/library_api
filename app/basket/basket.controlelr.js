import { Basket, BasketBook } from "../models/models.js";
import asyncHandler from 'express-async-handler'

export const getBasket = asyncHandler(async (req, res) => {
  try {
    const { userId } = req.user

    const basket = await Basket.findOne({
      where: { userDatumId: userId },
      include: [{ model: BasketBook, as: 'basket_book' }]
    })

    res.json(basket)
  } catch (error) {
    res.status(400)
    throw new Error(error.message)
  }
})

export const addBasket = asyncHandler(async (req, res) => {
  try {
    const { userId } = req.user
    const { id } = req.params;

    const basketBook = await BasketBook.create({ basketDatumId: userId, bookId: id })

    res.json(basketBook)
  } catch (error) {
    res.status(400)
    throw new Error(error.message)
  }
})

export const deleteBasket = asyncHandler(async (req, res) => {
  try {
    const { userId } = req.user
    const { id } = req.params;

    const basketBook = await BasketBook.destroy({
      where: { bookId: id }
    })

    const basket = await Basket.findOne({
      where: { userDatumId: userId },
      include: [{ model: BasketBook, as: 'basket_book' }]
    })

    res.json(basket)
  } catch (error) {
    res.status(400)
    throw new Error(error.message)
  }
})