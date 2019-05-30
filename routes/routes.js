const cases = require('../app/cases')
const accounts = require('../app/accounts')
const contacts = require('../app/contacts')

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
    url: '/api/account/:id',
    handler: accounts.getAccount
  },
  {
    method: 'GET',
    url: '/api/accounts',
    handler: accounts.getAccounts
  },
  {
    method: 'GET',
    url: '/api/account/:id/contacts',
    handler: accounts.getAccountContacts
  }
];

const contactApiRoutes = [
  {
    method: 'GET',
    url: '/api/contact/:id',
    handler: contacts.getContact
  },
  {
    method: 'GET',
    url: '/api/contacts',
    handler: contacts.getContacts
  }
];

exports.apiRoutes = [caseApiRoutes, accountApiRoutes, contactApiRoutes];
