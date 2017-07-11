// Initializes the ` ` service on path `/`
const createService = require('feathers-nedb');
const createModel = require('../../models/.model');
const hooks = require('./.hooks');
const filters = require('./.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: '',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
