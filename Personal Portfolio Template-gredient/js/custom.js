$(document).ready(function(){
 
	// cache container
	var $container = $('.portfolio-content');
	// initialize isotope
	$container.isotope({
			itemSelector: '.item',
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
});