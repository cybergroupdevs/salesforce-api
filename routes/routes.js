const cases = require('../app/cases')
const accounts = require('../app/accounts')

const caseApiRoutes = [
  {
    method: 'POST',
    url: '/api/cases',
    handler: cases.createCase
  },
  {
    method: 'GET',
    url: '/api/case/:id',
    handler: cases.getCase
  },
  {
    method: 'GET',
    url: '/api/cases',
    handler: cases.getCases
  },
  {
    method: 'PUT',
    url: '/api/case/:casenumber',
    handler: cases.updateCase
  },
  {
    method: 'DELETE',
    url: '/api/case/:casenumber',
    handler: cases.deleteCase
  }
];

const accountApiRoutes = [
  {
    method: 'GET',
    url: '/api/accounts',
    handler: accounts.getAccounts
  }
];

exports.apiRoutes = [caseApiRoutes, accountApiRoutes];
