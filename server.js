import 'colors'
import express from "express";
import sequelize from "./sequelize.js";
import dotenv from 'dotenv'
import cors from "cors";
import { errorHandler } from "./app/middleware/error.middleware.js";
import indexRouters from "./app/index.routes.js";

dotenv.config()

const PORT = process.env.PORT || 9000;
const app = express();

app.use(cors()) // для отправки запросов с браузера
app.use(express.json())

app.use('/api', indexRouters)

// Обработка ошибки
app.use(errorHandler)

const main = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()

    app.listen(PORT, () => console.log(`🚀 server start http://localhost:${PORT}`.blue.bold))
  } catch (error) {
    console.log('Ошибка сервера: ', error.message)
  }
}

main();