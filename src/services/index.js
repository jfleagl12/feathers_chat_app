const messages = require('./messages/messages.service.js');
const  = require('.//.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(messages);
  app.configure();
};
