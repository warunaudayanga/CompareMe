<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        .container {
            width: 150px;
            position: relative;
            perspective: 900px;
            margin-left: auto;
            margin-right: auto;
            margin-top: 100px;

        }
        .rotate {
            position: absolute;
            /*background-color: red;*/
            width: 100%;
            height: 200px;
        }
        .rotate .logo {
            display: block;
            position: absolute;
            left: 10px;
            top: 10px;
            overflow: hidden;
            width: 150px;
            height: 100px;
            padding: 20px 0;
        }
        .rotate .logo img {
            width: 80%;
            height: 80%;
            object-fit: scale-down;
            cursor: pointer;
            transition: all .5s ease;
        }
        .rotate .logo img:hover {
            -webkit-filter: grayscale(1);
            transform: scale(1.1);
        }
        @keyframes rotating {
            from {
                transform: rotateY(0deg);
            }
            to {
                transform: rotateY(360deg);
            }
        }
        .rotate {
            transform-style: preserve-3d;
            animation: rotating 20s linear infinite;
            position: absolute;

        }
        .rotate:hover {
            animation-play-state: paused
        }
        .logo-1 {
            transform: rotateY(0deg) translateZ(400px);
        }
        .logo-2 {
            transform: rotateY(40deg) translateZ(400px);
        }
        .logo-3 {
            transform: rotateY(80deg) translateZ(400px);
        }
        .logo-4 {
            transform: rotateY(120deg) translateZ(400px);
        }
        .logo-5 {
            transform: rotateY(160deg) translateZ(400px);
        }
        .logo-6 {
            transform: rotateY(200deg) translateZ(400px);
        }
        .logo-7 {
            transform: rotateY(240deg) translateZ(400px);
        }
        .logo-8 {
            transform: rotateY(280deg) translateZ(400px);
        }
        .logo-9 {
            transform: rotateY(320deg) translateZ(400px);
        }
    </style>
</head>
<body>
<div class="container">
    <div class="rotate">
        <div class="logo logo-1">
            <img class="" src="logo/1.png" alt="">
        </div>
        <div class="logo logo-2">
            <img class="" src="logo/2.png" alt="">
        </div>
        <div class="logo logo-3">
            <img class="" src="logo/3.png" alt="">
        </div>
        <div class="logo logo-4">
            <img class="" src="logo/4.png" alt="">
        </div>
        <div class="logo logo-5">
            <img class="" src="logo/5.png" alt="">
        </div>
        <div class="logo logo-6">
            <img class="" src="logo/6.png" alt="">
        </div>
        <div class="logo logo-7">
            <img class="" src="logo/7.png" alt="">
        </div>
        <div class="logo logo-8">
            <img class="" src="logo/8.png" alt="">
        </div>
        <div class="logo logo-9">
            <img class="" src="logo/9.png" alt="">
        </div>
    </div>
</div>

</body>
</html>