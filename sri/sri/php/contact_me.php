<?php
// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['phone'])     ||
   empty($_POST['message'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }

$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));

// Create the email and send the message
$to = 'pjdamian.chrzanowski@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "SRI Enquiry Form:  $name";
$email_body = "You have received a new message from your website contact form.<br>"."Here are the details:<br><br>Name: $name<br><br>Email: $email_address <br><br>Phone: $phone <br><br>Message:<br> $message";
$header = "From: noreply@sri.ait\r\n";
$header.= "MIME-Version: 1.0\r\n";
$header.= "Content-Type: text/html; charset=UTF-8\r\n";
$header.= "X-Priority: 1\r\n";
$header.= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$header);

return true;
?>
