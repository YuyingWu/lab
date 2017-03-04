var QRious = require('./qrious.js');
require('zepto');

const CANVAS = $('#qr');
const QR_IMG = $('#qr-img');

function QRCode() {
  this.url = 'http://demo.wuyuying.com/'
};

QRCode.prototype.render = function(){
  var QRInstance = new QRious({
    element: CANVAS,
    value: this.url,
    size: 300
  });

  QR_IMG.attr('src', QRInstance.image.src);
};

QRCode.prototype.eventHandler = function(){
  var me = this;

  $('#input').on('keydown', function(){
    me.url = this.value;
    me.render();
  });
};

QRCode.prototype.init = function(){
  this.render();
  this.eventHandler();
};

(new QRCode()).init();
