<?php /** @noinspection ForgottenDebugOutputInspection */
require('../common/DB.php');
$dev = $_POST['param']?>
<div class="row sticky-left">
    <div class="offset-10 col-2 mb-3">
        <button onclick="if(lastPge=='activeComplete') {window.history.back();window.history.back()} else {window.history.back()}" class="btn btn-light border-secondary float-right back">Back</button>
    </div>
</div>
<div class="row sticky-left">
    <div class="col-sm col-sm-4 col-md-4">
        <div class="input-group mb-3 autocomplete">
            <div class="input-group-prepend"><span class="input-group-text"><i class="fa fa-mobile-alt"></i></span></div>
<!--            <input id="dev1" type="text" class="form-control dev-input" placeholder="Select Device" value="Samsung Galaxy A11">-->
            <input id="dev1" type="text" class="form-control dev-input" placeholder="Select Device" value="">
        </div>
    </div>
    <div class="col-sm col-sm-4 col-md-4">
        <div class="input-group mb-3 autocomplete">
            <div class="input-group-prepend"><span class="input-group-text"><i class="fa fa-mobile-alt"></i></span></div>
<!--            <input id="dev2" type="text" class="form-control dev-input" placeholder="Select Device" value="HTC U20 5G">-->
            <input id="dev2" type="text" class="form-control dev-input" placeholder="Select Device" value="">
        </div>
    </div>
    <div class="col-sm col-sm-4 col-md-4">
        <div class="input-group mb-3 autocomplete">
            <div class="input-group-prepend"><span class="input-group-text"><i class="fa fa-mobile-alt"></i></span></div>
<!--            <input id="dev3" type="text" class="form-control dev-input" placeholder="Select Device" value="Nokia 125">-->
            <input id="dev3" type="text" class="form-control dev-input" placeholder="Select Device" value="">
        </div>
    </div>
</div>
<div class="row sticky-left below">
    <div class="offset-sm-4 col-sm-4">
        <button data-dev="<?php echo $dev?>" class="btn compare btn-primary w-100">Compare</button>
    </div>
</div>
<div class="container-fluid comparison-container mt-3">
    <table id="comparisonTable" class="table"></table>
    <div class="d-none table-options">
        <div class="spec-options">
            <svg height="66" width="71" class="btn-full-specs">
                <polygon class="shadow" points="0,0 0,66 51,66 69,0"/>
                <polygon class="polygon" points="3,3 3,63 48,63 65,3"/>
                <text x="13" y="38">Full</text>
            </svg>
            <svg height="66" width="131" class="btn-diff-specs">
                <polygon class="shadow" points="20,0 2,66 131,66 131,0"/>
                <polygon class="polygon" points="23,3 6,63 128,63 128,3"/>
                <text x="28" y="38">Differences</text>
            </svg>
        </div>
    </div>
</div>