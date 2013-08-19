<?php
$errors = array();
$myemail = 'info@roxproposals.com';
if(empty($_POST['name'])) {
    array_push($errors, 'Please provide your name.');
}
if(empty($_POST['email'])) {
    array_push($errors, 'Please provide an email address');
}

$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['phone'];

if (!empty($_POST['email']) && !preg_match(
        "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
        $email))
{
    array_push($errors, "Please provide a valid email address");
}

if(empty($errors)) {
    $to = $myemail;
    $subject = 'Engagement request from '.$name;
    $body = 'Somebody wants to get engaged!'. PHP_EOL .
        'Their name is .'. $name . PHP_EOL.
        'Their email address is '. $email . PHP_EOL;
    if(!empty($number)) {
        $body .= 'Their number is '.$number;
    }

    $headers = 'From: '.$myemail;
    $headers = 'Reply-To: '.$email;
    mail($to, $subject, $body, $headers);

    include '_page_top.php';
    include '_email_success.php';
    include '_page_bottom.php';
} else {
    include '_page_top.php';
    foreach($errors as $error) {
        echo("<p class='text-error'>".$error."</p>");
    }
    include '_page_bottom.php';
}

