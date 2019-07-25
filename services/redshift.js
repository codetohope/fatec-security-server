
var path = require('path');
var YAML = require('yamljs');
var Redshift = require('node-redshift');
 
var config = path.join(__dirname, '..', 'config', 'redshift.yml')
var client = YAML.load(config) 
var options = {rawConnection: true}

var redshiftClient = new Redshift(client, options);

var executeQuery = query => new Promise((resolve, reject) => {
  redshiftClient.rawQuery(query, null , (err, data) => {
    if(err) {
      reject(err);
    }
    else {
      resolve(data);
    }
  });
});

module.exports = { executeQuery }