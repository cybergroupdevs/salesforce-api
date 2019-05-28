const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.POSTGRES_URL,
  {
    dialect: 'postgres',
    dialectOptions: {
        ssl: true
    }
  }
);

exports.sequelize = sequelize;