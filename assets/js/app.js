$(document).ready(function() {

	$('.work').viewportChecker({classToAdd: 'visible animated fadeIn',offset: 20});
	$('#contact ul.social-icon').viewportChecker({classToAdd: 'visible animated fadeInUp', offset: 20});
	$('.me-picture').viewportChecker({classToAdd: 'visible animated fadeIn', offset: 20});

	$('a[href*=\\#contact]').on('click', function(e) {
		e.preventDefault();

		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 1000, 'linear');
	});

	$(window).scroll(function() {

		if ($(this).scrollTop() > 1200) {
			$('.backToTop').show()
		} else {
			$('.backToTop').hide()
		}
	});

	$('.backToTop').click(function(){ $('html, body').animate({scrollTop: 0}, 500); })
});