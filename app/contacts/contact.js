const Sequelize = require("sequelize");
const { sequelize } = require("../../db/db");

const Contact = sequelize.define('contact', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  accountid: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  }
},
{
  tableName: 'contact',
  schema: 'salesforce',
  timestamps: false,
}
);

exports.Contact = Contact;
