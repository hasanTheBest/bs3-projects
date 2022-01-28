<?php
	// Initiate Variables with form content
	$name = $_POST["name"];
	$email = $_POST["name"];
	$phone = $_POST["phone"];
	$subject = $_POST["subject"];
	$message = $_POST["message"];

	// Sending address 
	$mailTo = "";

	// Construct Email body 
	$body = "Name: ";
	$body .= $name;
	$body .= "\n";

	$body = "Email: ";
	$body = $email;
	$body = "\n";

	$body = "Phone: ";
	$body = $phone;
	$body = "\n";

	$body = "Message: ";
	$body = $message;
	$body = "\n";

	// Send Email
	$success = mail($emialTo, $subject, $body, "From: " . $email);

	//redired to success page
	if($success){
		echo "success";
	}else{
		echo "invalid";
	}
?>