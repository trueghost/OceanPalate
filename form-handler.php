<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Send the email
    $to = "joekaju007@gmail.com"; // Replace with your email address
    $subject = "Feedback from $name";
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for your feedback!";
    } else {
        echo "Error sending feedback. Please try again later.";
    }
}
?>
