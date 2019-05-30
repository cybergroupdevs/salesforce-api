const Sequelize = require("sequelize");
const { sequelize } = require("../../db/db");

const Account = sequelize.define('account', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING,
  }
},
{
  tableName: 'account',
  schema: 'salesforce',
  timestamps: false,
}
);

exports.Account = Account;
