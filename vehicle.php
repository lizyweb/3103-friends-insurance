<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    // Sanitize and get form data
    $name = stripcslashes($_POST['name']);
    $city = stripcslashes($_POST['city']);
    $district = stripcslashes($_POST['district']);
    $vehicle = stripcslashes($_POST['vehicle']);
    $phone = stripcslashes($_POST['phone']);
    $whatsapp = stripcslashes($_POST['whatsapp']);

    $subject = 'Vehicle Sales Contact Form'; // Define your email subject

    // SMTP configuration
    // $mail->SMTPDebug = 2;
    // $mail->SMTPAuth = true;
    // $mail->IsSMTP();
    $mail->Host = 'mail.lizyweb.com';
    $mail->Username = 'smt@lizyweb.com';
    $mail->Password = 'Lizyweb@123';
    // $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    // $mail->Port = 587;

    // Set sender and recipient details
    $mail->setFrom('smt@lizyweb.com', $name);
    $mail->addAddress('friendsinsurance@gmail.com'); // Replace with your recipient email
    $mail->Subject = $subject;

    // Construct the HTML message
    $message = "Name: $name<br /><br />";
    $message .= "City: $city<br /><br />";
    $message .= "District: $district<br /><br />";
    $message .= "Required Vehicle: $vehicle<br /><br />";
    $message .= "Mobile Number: $phone<br /><br />";
    $message .= "WhatsApp Number: $whatsapp";

    $mail->MsgHTML($message);

    // Send the email
    if ($mail->Send()) {
        echo "<fieldset>";
        echo "<div id='success_page'>";
        echo "<h1>Your Message Sent Successfully.</h1>";
        echo "<p>Thank you <strong>$name</strong>, your message has been submitted to us. We will contact you shortly.</p>";
        echo "</div>";
        echo "</fieldset>";

        echo '<a href="index.html">Return to Home</a>';
    } else {
        echo "Mailer Error: " . $mail->ErrorInfo;
    }
} catch (Exception $e) {
    echo "Mailer Error: " . $e->getMessage();
}
?>