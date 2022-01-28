$(document).ready(function($) {
	// accordion caret control
	$('.collapse').on('shown.bs.collapse', function() {
        $(this).parent().find(".fa-caret-right").removeClass("fa-caret-right").addClass("fa-caret-down");
    }).on('hidden.bs.collapse', function() {
        $(this).parent().find(".fa-caret-down").removeClass("fa-caret-down").addClass("fa-caret-right");
    });

    // navbar controlling- Open
    $('.navbar-toggler-icon').on('click', function(){
    	$('.rajbin-menu').css('width' , '300px');
    })
     // navbar controlling- colose
    $('.navbar-close-btn').on('click', function(){
    	$('.rajbin-menu').css('width' , '0px');
    })


    // Add smooth scrolling to all links in navbar + footer link
    $(".navigation a, footer a[href='#agency_page']").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    // fixed navigation
    var navOffset = $(".rajbin-nav-section").offset().top;
    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();

        if (scrollPos > navOffset) {
            $(".rajbin-nav-section").addClass("navbar-fixed-top").css("background-color", "cyan");
        } else {
            $(".rajbin-nav-section").removeClass("navbar-fixed-top").css("background-color", "transparent");
        }
    });

    // isontop navigation controlling
    var $container = $('.isotop-container');
    // initialize isotope
    $container.isotope({
            itemSelector: '.item',
            layoutMode: 'fitRows' 
        });

    $(".iso-nav ul li").click(function(){
        $(".iso-nav ul li").removeClass("active");
        $(this).addClass("active");
    });

    // filter items when filter link is clicked
    $('.iso-nav ul li').click(function(){
      var selector = $(this).attr('data-filter');
      $container.isotope({ filter: selector });
      return false;
    });


});