<?php 

$to      = 'office@procreative.eu';
$subject = $_POST['subject'];
$body    = '';

foreach ($_POST as $key => $val) {
    $body .= ucfirst($key) . ': ' . $val . "\n\n";
}

mail($to, $subject, $body, "From: hola@procreative.eu\r\nBcc: bartek@procreative.eu\r\n");