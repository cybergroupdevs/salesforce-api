const Sequelize = require("sequelize");
const { sequelize } = require("../../db/db");

const Case = sequelize.define('case', {
    subject: {
      type: Sequelize.STRING
    },
    id: {
      type: Sequelize.INTEGER,
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
