var express = require('express');
var router = express.Router();
var _ = require('underscore');

router.use(function getParams(req, res, next) {
  var items = _.partition(req.path.split('/').slice(1), function (val, index) {
    return (index % 2);
  });

  res.write('<html><h3>' + req.baseUrl + ' endpoint</h3>');
  res.locals.params = _.extend(_.object(items[1], items[0]), req.query);
  next('route');
});

module.exports = router;
