var express = require('express');
var router = express.Router();

module.exports = function category(req, res, next) {
  res.write('<p>The category was: ' + res.locals.params.category + '</p>');
};
