<? include '_page_top.php'; ?>

    <form method="post" id="contact-form" name="contact_form" action="contact-form-handler.php">
        <table style="border: none;">
            <tr>
                <td style="text-align: right;">Your name:</td>
                <td><input type="text" name="name"></td>
            </tr>
            <tr>
                <td style="text-align: right;">Email Address:</td>
                <td><input type="text" name="email"></td>
            </tr>
            <tr>
                <td style="text-align: right;">Phone number:</td>
                <td><input type="text" name="phone"></td>
            </tr>
            <tr>
                <td>What else do you know?</td>
                <td><textarea rows="4" cols="6" form="contact-form"></textarea></td>
            </tr>
            <tr>
                <td></td>
                <td><input style="float: right;" type="submit" value="Submit"></td>
            </tr>
        </table>
<!--        Your Name: <input type="text" name="name"> </br>-->
<!--        Email Address: <input type="text" name="email"> </br>-->
<!--        Phone Number: <input type="text" name="phone"> </br>-->

    </form>

<script type="text/javascript">
    var validator = new Validator("contact_form");
    validator.addValidation("name", "req", "Please provide your name.");
    validator.addValidation("email", "req", "Please provide your email address.");
    validator.addValidation("email", "email", "Please provide a valid email address.");
</script>

<? include '_page_bottom.php'; ?>