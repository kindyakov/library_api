import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  'ki',
  'root',
  '098FRSIYPqyp',
  {
    dialect: 'postgres',
    host: 'master.57bcb732-eea9-4188-8c8a-a07972ca4341.c.dbaas.selcloud.ru',
    port: 5432
  }
)

export default sequelize;