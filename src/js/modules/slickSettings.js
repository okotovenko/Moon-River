$(function () {
	$('.slider').slick({
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 2,
		dots: true,
		centerMode: true,
		focusOnSelect: true,
		variableWidth: true,
		draggable: true,
		infinite: true,
		touchThreshold: 5,
		autoplay: true,
		autoplaySpeed: 2000,
	});
});
