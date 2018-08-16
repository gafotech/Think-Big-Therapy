'use strict';
const opn = require('opn');
var go = module.exports = () => {
  var url = 'https://www.thinkbigtherapy.com?ref=npm'
  opn(url);
  process.exit()
}
