const Sequelize = require("sequelize");
const { sequelize } = require("../../db/db");

const Account = sequelize.define('account', {
  sfid: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING,
  },
  type: {
    type: Sequelize.STRING,
  },
  industry: {
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
