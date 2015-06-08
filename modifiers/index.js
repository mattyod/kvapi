var _ = require('underscore');

var keys = {
  addnumber: require('./addnumber'),
  addword: require('./addword')
};

module.exports = function (req, res, next) {
  _.each(res.locals.params, function (val, key) {
    keys[key] && keys[key](req, res, next);
  });
  next();
};
