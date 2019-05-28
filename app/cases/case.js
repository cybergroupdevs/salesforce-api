const Sequelize = require("sequelize");
const { sequelize } = require("../../db/db");

const Case = sequelize.define('case', {
  casenumber: {
    type: Sequelize.STRING
  },
  closeddate: {
    type: Sequelize.DATE
  },
  description: {
    type: Sequelize.STRING
  },
  subject: {
      type: Sequelize.STRING
  },
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  status: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  createddate: {
    type: Sequelize.DATE
  }
},
{
  tableName: 'case',
  schema: 'salesforce',
  timestamps: false,
}
);

exports.Case = Case;
