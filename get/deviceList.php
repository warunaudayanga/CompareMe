<?php /** @noinspection SqlResolve */
include '../common/DB.php';
$db = new DB();
//$dev = $_POST['dev'];
$devType = $_POST['devType'] . "_devices";
//$data = $db->getData("SELECT concat(brand, ' ', model) AS name FROM $devType WHERE concat(brand, ' ', model) LIKE '$dev%' ORDER BY concat(brand, ' ', model)");
$data = $db->getData("SELECT concat(brand, ' ', model) AS name FROM $devType ORDER BY concat(brand, ' ', model)");
if ($data) {
    $devices = array();
    foreach ($data as $row) {
        $devices[] = $row->name;
    }
    echo json_encode($devices);
} else {
    echo json_encode(false);
}