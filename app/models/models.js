import sequelize from "../../sequelize.js";
import { DataTypes } from "sequelize";

const User = sequelize.define('user_data', {
  id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
  login: { type: DataTypes.STRING, unique: true, allowNull: false, },
  name: { type: DataTypes.STRING, allowNull: false, },
  password: { type: DataTypes.STRING, allowNull: false, },
  email: { type: DataTypes.STRING, unique: true },
  student_id: { type: DataTypes.STRING, allowNull: false, },
})

const Basket = sequelize.define('basket_data', {
  id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
})

const BasketBook = sequelize.define('basket_book', {
  id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
  book: { type: DataTypes.STRING, allowNull: false, },
})

User.hasOne(Basket) // 1 к 1
Basket.belongsTo(User)

Basket.hasMany(BasketBook, { as: 'basket_book' }) // 1 ко многим
BasketBook.belongsTo(Basket)


export {
  User,
  Basket,
  BasketBook,
}