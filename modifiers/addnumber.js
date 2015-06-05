var express = require('express');
var router = express.Router();

router.use(function addword(req, res, next) {
  res.locals.params.dbresult += (' ' + res.locals.params.addnumber);
  next('route');
});

module.exports = router;
