// var skew = 'perspective(700px)scale(0.5)translateX(-16.66%)rotateY(25deg)';

$(function(){
	// $('body').toggle(function(){
		$(this).on('click', function(){
			$('.front').toggleClass('skewed');
		});
	// });
});