<?php /** @noinspection ForgottenDebugOutputInspection */
//$fullPath = explode("/", $_SERVER['PHP_SELF']); $path = end($fullPath); $file = explode(".", $path); $page = $file[0];?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/bootstrap-4.5.0-dist/css/bootstrap.css">
    <link rel="stylesheet" href="assets/fontawesome-free-5.12.1-web/css/all.css">
    <link rel="stylesheet" href="assets/jquery-confirm-v3.3.4-dist/css/jquery-confirm.min.css">
    <link rel="stylesheet" href="css/common.css">
    <link rel="stylesheet" href="css/main.css">
    <script src="assets/jquery/jquery-3.5.1.js"></script>
    <script src="assets/popperjs/popper.min.js"></script>
    <script src="assets/bootstrap-4.5.0-dist/js/bootstrap.js"></script>
    <script src="assets/fontawesome-free-5.12.1-web/js/all.js"></script>
    <script src="assets/jquery-confirm-v3.3.4-dist/js/jquery-confirm.min.js"></script>
    <script src="js/common.js"></script>
    <script src="js/autocomplete.js"></script>
    <script src="js/main.js"></script>
    <title>Compare Me</title>
</head>
<body>
<div></div>
<div class="header">
    <div class="menu-btn"><i class="fa fa-bars"></i></div>
    <div class="title">Compare Me</div>
</div>
<div class="menu-bar-overlay"></div>
<div class="menu-bar">
    <div class="menu" onclick="if(location.hash != '') window.history.back()">Home</div>
<!--    <div class="menu"><a href="#" >Moods</a></div>-->
<!--    <div class="menu">Crisis</div>-->
<!--    <div class="menu">BlackList</div>-->
<!--    <div class="menu">About</div>-->
</div>
<div id="content" class="container-fluid body">

</div>
<div class="footer"><div class="footer-text"><p>&copy; footer text</p></div></div>

<div class="spinner-back-drop">
    <div class="spinner">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
    </div>
</div>
</body>
</html>