
$(document).ready(function () {
	
			
	});


	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		autoplay:true,
		autoplayTimeout:1000,
		autoplayHoverPause:true,
		responsive: {
			
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});



var countdown = $("#countdown").countdown360({
	radius: 60,
	seconds: 100,
	fontColor: '#FFFFFF',
	autostart: false,
	onComplete: function () { console.log('done') }
});
countdown.start();



