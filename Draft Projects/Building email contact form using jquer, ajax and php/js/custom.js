$(document).ready(function($) {
	
	// Cancel form submission
	$(#contactForm).submit(function(){
		event.preventDefault();
		submitForm();
	});	

	// Creating submitForm function
	function submitForm(){
		// Initiate Variables with form content
		var name = $('#userName').val();
		var email = $('#userEmail').val();
		var phone = $('#userPhoneNumber').val();
		var subject = $('#subject').val();
		var massege = $('#userMessage').val();
		$.ajax({
		type: "POST",
		url: "form-process.php",
		data: "name = " + name + "email = " + email + "phone = " + phone + "subject = " + subject + "message = " + message,
		success: function(){
				if(text == "success"){
					formSuccess();
				}
			}
		});

	}

	function(){
		$('.submission-msg').removeClass('hidden');
	}
});