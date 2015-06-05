var express = require('express');
var router = express.Router();

router.use(function category(req, res, next) {
  res.write('<p>The category was: ' + res.locals.params.category + '</p>');
  next('route');
});

module.exports = router;
