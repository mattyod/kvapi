var express = require('express'),
    router = express.Router();
    getParams = require('./middleware/getparams');

var id = require('./queries/id'),
    category = require('./queries/category'),
    addword = require('./modifiers/addword'),
    addnumber = require('./modifiers/addnumber');

router
  .use(getParams)
  .get('**/id/:uuid**', id)
  .get('**/category/:category**', category)
  .use(function (req, res, next) {
    (function doSomethingAsync() {
      res.locals.params.dbresult = 'boomtown';

      next('route');
    })();
  })
  .get('**/addword/:word**', addword)
  .get('**/addnumber/:number**', addnumber)
  .use(function (req, res, next) {
    res.write('<p>' + res.locals.params.dbresult + '</p>');
    res.write('</html>');
    res.end();
  });

module.exports = router;
