var socialData = require('js/social-data/social-data.js');
var template = require('lib/template/template.js');
require('lib/zepto');

(function(){
  var tpl = document.getElementById('tpl-footer').innerHTML;

  tpl = template(tpl, {list: socialData()});

  $('.wgt-footer p').append(tpl);
})();
