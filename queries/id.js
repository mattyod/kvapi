var express = require('express');
var router = express.Router();

router.use(function category(req, res, next) {
  res.write('<p>The id was: ' + res.locals.params.id + '</p>');
  next('route');
});

module.exports = router;
