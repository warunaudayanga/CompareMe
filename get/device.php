<?php /** @noinspection SqlResolve */
include '../common/DB.php';
$db = new DB();
$dev = $_POST['dev'];
$devType = $_POST['devType'] . "_devices";
echo json_encode(is_array($db->getData("SELECT * FROM $devType WHERE name='$dev'")));