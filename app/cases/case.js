const Sequelize = require("sequelize");
const { sequelize } = require("../../db/db");

const Case = sequelize.define('case', {
  accountid: {
    type: Sequelize.STRING
  },
  casenumber: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.STRING,
    required: true
  },
  externalid__c: {
    type: Sequelize.STRING,
    unique: true
  },
  origin: {
    type: Sequelize.STRING,
    required: true
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
