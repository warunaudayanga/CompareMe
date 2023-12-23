<?php /** @noinspection SqlResolve */
include '../common/DB.php';
$db = new DB();
$devType = $_POST['devType'];
$devTable = $_POST['devType'] . '_devices';
$dev1 = $_POST['dev1'];
$dev2 = $_POST['dev2'];
$dev3 = $_POST['dev3'];

$scopeOrder = [
    "network",
    "launch",
    "body",
    "display",
    "platform",
    "memory",
    "main camera",
    "selfie camera",
    "sound",
    "comms",
    "features",
    "battery",
    "misc",
    "tests"
];

/** @noinspection SqlAggregates */
$specsSql = "SELECT scope, code, name FROM mobile_specs WHERE deviceId IN (
	SELECT id FROM mobile_devices WHERE concat(brand, ' ', model) IN ('$dev1', '$dev2', '$dev3')
) GROUP BY scope, CODE ORDER BY scope, name";

$devSql = "SELECT brand, model, img FROM mobile_devices
        WHERE concat(brand, ' ', model) IN ('$dev1', '$dev2', '$dev3')
        ORDER BY (
            CASE concat(brand, ' ', model)
                WHEN '$dev1' 
                    THEN 1 
                WHEN '$dev2' 
                    THEN 2 
                WHEN '$dev3' 
                    THEN 3
            END
        )";

$dev1sql = "SELECT scope, code, value FROM mobile_devices d, mobile_specs s WHERE concat(brand, ' ', model)='$dev1' AND deviceId=id ORDER BY scope, name";
$ver1sql = "SELECT version, code, value FROM mobile_devices d, mobile_versions v WHERE concat(brand, ' ', model)='$dev1' AND deviceId=id";
$dev2sql = "SELECT scope, code, value FROM mobile_devices d, mobile_specs s WHERE concat(brand, ' ', model)='$dev2' AND deviceId=id ORDER BY scope, name";
$ver2sql = "SELECT version, code, value FROM mobile_devices d, mobile_versions v WHERE concat(brand, ' ', model)='$dev2' AND deviceId=id";
$dev3sql = "SELECT scope, code, value FROM mobile_devices d, mobile_specs s WHERE concat(brand, ' ', model)='$dev3' AND deviceId=id ORDER BY scope, name";
$ver3sql = "SELECT version, code, value FROM mobile_devices d, mobile_versions v WHERE concat(brand, ' ', model)='$dev3' AND deviceId=id";

$devices = array();

$result = $db->getData($devSql);
if($dev1 == '') {
    $devices['dev1']['brand'] = false;
    $devices['dev1']['model'] = false;
    $devices['dev1']['img'] = false;
    $devices['dev2']['brand'] = $result[0]->brand;
    $devices['dev2']['model'] = $result[0]->model;
    $devices['dev2']['img'] = $result[0]->img?: 'default.png';
    $devices['dev3']['brand'] = $result[1]->brand;
    $devices['dev3']['model'] = $result[1]->model;
    $devices['dev3']['img'] = $result[1]->img?: 'default.png';
} else if($dev2 == '') {
    $devices['dev1']['brand'] = $result[0]->brand;
    $devices['dev1']['model'] = $result[0]->model;
    $devices['dev1']['img'] = $result[0]->img?: 'default.png';
    $devices['dev2']['brand'] = false;
    $devices['dev2']['model'] = false;
    $devices['dev2']['img'] = false;
    $devices['dev3']['brand'] = $result[1]->brand;
    $devices['dev3']['model'] = $result[1]->model;
    $devices['dev3']['img'] = $result[1]->img?: 'default.png';
} else if($dev3 == '') {
    $devices['dev1']['brand'] = $result[0]->brand;
    $devices['dev1']['model'] = $result[0]->model;
    $devices['dev1']['img'] = $result[0]->img?: 'default.png';
    $devices['dev2']['brand'] = $result[1]->brand;
    $devices['dev2']['model'] = $result[1]->model;
    $devices['dev2']['img'] = $result[1]->img?: 'default.png';
    $devices['dev3']['brand'] = false;
    $devices['dev3']['model'] = false;
    $devices['dev3']['img'] = false;
} else {
    $devices['dev1']['brand'] = $result[0]->brand;
    $devices['dev1']['model'] = $result[0]->model;
    $devices['dev1']['img'] = $result[0]->img?: 'default.png';
    $devices['dev2']['brand'] = $result[1]->brand;
    $devices['dev2']['model'] = $result[1]->model;
    $devices['dev2']['img'] = $result[1]->img?: 'default.png';
    $devices['dev3']['brand'] = $result[2]->brand;
    $devices['dev3']['model'] = $result[2]->model;
    $devices['dev3']['img'] = $result[2]->img?: 'default.png';
}

$devices['specs'] = $db->getData($specsSql);
$devices['dev1']['specs'] = $db->getData($dev1sql);
$devices['dev1']['versions'] = $db->getData($ver1sql);
$devices['dev2']['specs'] = $db->getData($dev2sql);
$devices['dev2']['versions'] = $db->getData($ver2sql);
$devices['dev3']['specs'] = $db->getData($dev3sql);
$devices['dev3']['versions'] = $db->getData($ver3sql);

echo json_encode($devices);