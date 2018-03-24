$(document).ready(function() {

	$(".color-box").on("click", function() {
		select = $(this).css('background-color');
	})

	$('.col').on('click', function() {
		$(this).css("background-color", select);
	});

});