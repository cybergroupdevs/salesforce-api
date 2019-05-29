const cases = require('../app/cases')

const casesApiRoutes = [
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
    url: '/api/case/:id',
    handler: cases.deleteCase
  }
];

exports.apiRoutes = [casesApiRoutes];
