var express = require('express');
var router = express.Router();

module.exports = function category(req, res, next) {
  res.write('<p>The date was: ' + res.locals.params.date + '</p>');
};
