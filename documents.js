var express = require('express'),
    router = express.Router();
    getParams = require('./middleware/getparams'),
    queries = require('./queries'),
    modifiers = require('./modifiers');

router
  .use(getParams)
  .use(queries)
  .use(function (req, res, next) {
    (function doSomethingAsync() {
      res.locals.params.dbresult = 'boomtown';

      next('route');
    })();
  })
  .use(modifiers)
  .use(function (req, res, next) {
    res.write('<p>' + res.locals.params.dbresult + '</p>');
    res.write('</html>');
    res.end();
  });

module.exports = router;
