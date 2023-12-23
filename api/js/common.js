// Spinner
$(document).ajaxStart(function() {if(!$('.autocomplete input:focus').length) $('.spinner-back-drop').show()});
$(document).ajaxComplete(function() {$('.spinner-back-drop').hide()});

