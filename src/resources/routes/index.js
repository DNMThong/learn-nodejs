const news = require('./news');
const site = require('./site');
function Routes(app) {
  app.use('/news', news);
  app.use('/', site);
}

module.exports = Routes;
