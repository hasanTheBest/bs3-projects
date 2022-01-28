$(document).ready(function($) {
	// accordion caret control
	$('.collapse').on('shown.bs.collapse', function() {
        $(this).parent().find(".fa-caret-right").removeClass("fa-caret-right").addClass("fa-caret-down");
    }).on('hidden.bs.collapse', function() {
        $(this).parent().find(".fa-caret-down").removeClass("fa-caret-down").addClass("fa-caret-right");
    });
});