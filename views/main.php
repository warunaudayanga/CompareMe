<?php include '../common/DB.php'?>
<h1>Select Device Type</h1>
<div class="devices">
    <?php
    $db = new DB();
    $data = $db->getData('SELECT * FROM devicetypes');
    if($data){
        foreach ($data as $type) {
//            echo "<div class='device' data-load='device' data-param='$type->dev'><i class='fa $type->icon'></i><span>$type->name</span></div>";
            $dataLoad = $type->dev === 'mobile' || $type->dev === 'laptop'? "data-load='device'": "";
            echo "<div class='device' $dataLoad data-param='$type->dev'><i class='fa $type->icon'></i><span>$type->name</span></div>";
        }
    }
    ?>
</div>