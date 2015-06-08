var express = require('express');
var router = express.Router();

module.exports = function addword(req, res, next) {
  res.locals.params.dbresult += (' ' + res.locals.params.addnumber);
};
