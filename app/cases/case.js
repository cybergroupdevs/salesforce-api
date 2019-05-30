const Sequelize = require("sequelize");
const { sequelize } = require("../../db/db");

const Case = sequelize.define('case', {
  accountid: {
    type: Sequelize.STRING
  },
  contactid: {
    type: Sequelize.STRING
  },
  casenumber: {
    type: Sequelize.STRING,
    primaryKey: true
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
    type: Sequelize.INTEGER
  },
  status: {
    type: Sequelize.STRING,
  },
  createddate: {
    type: Sequelize.DATE
  },
  type: {
    type: Sequelize.STRING
  },
  reason: {
    type: Sequelize.STRING
  },
  priority: {
    type: Sequelize.STRING
  }
},
{
  tableName: 'case',
  schema: 'salesforce',
  timestamps: false,
}
);

exports.Case = Case;
