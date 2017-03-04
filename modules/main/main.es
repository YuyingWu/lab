require('lib/zepto');

const WINDOW = $(window);

var renewStyle = function(){
	let [winWidth, winHeight] = [WINDOW.width(), WINDOW.height()];

	// 个人简介
	let wgtContainer = $('#wgt-personal-desc .container');
	let personalDescHeight = wgtContainer.height();

	wgtContainer.css({
		'margin-top': (winHeight - personalDescHeight) / 2
	});

	$('body').css({
		height: winHeight,
		width: winWidth
	});
};

var toggleDesc = function(domId){
	let wgtPersonalDesc = $('#wgt-personal-desc');

	$(domId).on('click', function(){
		wgtPersonalDesc.toggleClass('show');
		renewStyle();
	});
}

var eventHandler = function(){
	toggleDesc('#btn-menu');
	toggleDesc('#wgt-personal-desc');
}

$(function(){
	$('#background').addClass('show');
	renewStyle();
	eventHandler();
});

WINDOW.on('resize', function(){
	renewStyle();
});