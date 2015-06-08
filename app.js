var express = require('express'),
    router = express.Router(),
    documents = require('./documents');

var app = express();
app
  .use('/', documents);

app
  .listen(1337)
