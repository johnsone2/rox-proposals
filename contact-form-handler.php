<?php
/**
 * Created by IntelliJ IDEA.
 * User: ej
 * Date: 8/18/13
 * Time: 1:29 PM
 * To change this template use File | Settings | File Templates.
 */

$errors = '';
$myemail = 'info@roxproposals.com';
if(empty($_POST['name'])) {
    $errors .= 'Please provide your name.';
}
if(empty($_POST['email'])) {
    $errors .= 'Please provide an email address';
}

$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['phone'];

if (!empty($_POST['email']) && !preg_match(
    "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
    $email))
{
    $errors .= "\n Please provide a valid email address";
}

if(empty($errors)) {
    $to = $myemail;
    $subject = 'Engagement request from $name';
    $body = 'Somebody wants to get engaged! \n'.
            'Their name is $name. \n'.
            'Their email address is $email. \n';
    if(!empty($number)) {
        $body .= 'Their number is $number.';
    }

    $headers = 'From: $myemail\n';
    $headers = 'Reply-To: $email';
    mail($to, $subject, $body, $headers);

} else {
    echo($errors);
}

?>