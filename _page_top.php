<?php
DEFINE("ROOT","/");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Rox Proposals</title>

    <!--Rox Proposal bootstrap overrides-->
    <link href="<?php echo ROOT?>css/rox-proposals.css" rel="stylesheet">

    <!-- Bootstrap core CSS -->
    <link href="<?php echo ROOT?>css/bootstrap.css" rel="stylesheet">
    <script src="<?php echo ROOT?>js/jquery.js" type="text/javascript"></script>
    <script src="<?php echo ROOT?>js/roxprops.js" type="text/javascript"></script>
    <script src="<?php echo ROOT?>js/form_validator" type="text/javascript"></script>
    <script>
    </script>
</head>

<body>
<div class="container-fluid">
    <div class="row-fluid">
        <div class="span1"> <!-- center the whole page --> </div>
        <div class="span10">

            <div class="row-fluid vertical-spacer"></div>

            <!-- Header-->
            <div id="rox-header-wrapper" class="row-fluid">
                <?php include '_header.php'; ?>
            </div>

            <div class="row-fluid vertical-spacer"></div>

            <div id="rox-body-wrapper" class="row-fluid">
                <div id="rox-nav-wrapper" class="span3">
                    <?php include '_nav.php'; ?>
                </div>
                <div id="rox-content-wrapper" class="span9">
                    <div class="container-fluid" style="padding:0">