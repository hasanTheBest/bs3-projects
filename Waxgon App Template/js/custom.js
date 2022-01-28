$(document).ready(function(){
 
	// cache container
	var $container = $('.isotop-container');
	// initialize isotope
	$container.isotope({
			itemSelector: '.iso-item',
			layoutMode: 'fitRows' 
		});

	$(".isotop-nav ul li").click(function(){
		$(".isotop-nav ul li").removeClass("active");
		$(this).addClass("active");
	});

	// filter items when filter link is clicked
	$('.isotop-nav ul li').click(function(){
	  var selector = $(this).attr('data-filter');
	  $container.isotope({ filter: selector });
	  return false;
	});

	// vd-section height controlling
	$('.vd-section').height($(document).width()*0.5625);
	$('.vd-section').width($(document).width());
	/*$('#mov-bbb').width($(window).width());*/
	/*$('#mov-bbb').height($(document).width()*0.5625);*/


	// video-section height controls
	/*alert($(window).width()*0.5625);
	alert($('.video-secton').height());*/
	var $fluid_height = $(window).width()*0.5625;
	$('.video-secton').height("566px"); 

	// Video control on Click Function
	$('.video-icon').click(function() {
		// remove video-content-bg
		$('.video-content-bg').hide(400);
		// Play Video
		var $myVideo = $('#video1');
		if($myVideo.paused){
			$myVideo.play();
		}
	});
});