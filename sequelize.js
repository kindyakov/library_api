import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  'library',
  'postgres',
  '12345',
  {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432
  }
)

export default sequelize;