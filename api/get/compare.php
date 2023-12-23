<?php
include '../common/DB.php';
$db = new DB();
$devType = $_POST['devType'];
$devTable = $_POST['devType'] . '_devices';
$dev1 = $_POST['dev1'];
$dev2 = $_POST['dev2'];
$dev3 = $_POST['dev3'];

$sql = "SELECT * FROM $devTable
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

echo json_encode($db->getData($sql));
echo $db->error();