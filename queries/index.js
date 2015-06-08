var _ = require('underscore');

var keys = {
  category: require('./category'),
  date: require('./date')
};

module.exports = function (req, res, next) {
  _.each(res.locals.params, function (val, key) {
    keys[key] && keys[key](req, res, next);
  });
  next();
};
