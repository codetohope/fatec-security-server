var express = require('express');
var router = express.Router();
var redshift = require('./services/redshift')

router.get('/tipo', function(req, res, next) {
  var query = ''
  redshift.executeQuery(query)
    .then(data => res.send(data))
    .catch(err => {
      throw err;
    })
});

module.exports = ['/ocorrencias', router];