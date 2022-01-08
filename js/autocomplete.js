var INP;
var lastVal;
$.fn.autoComplete = function(arr) {
    var inp = $(this);
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.on('input', function() {
        var b, i, $this = $(this), val= $this.val();
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) return false;
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        var a = $(document.createElement("DIV"));
        a.attr("id", this.id + "autocomplete-list");
        a.addClass("autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        $(this).parent().append(a);
        a.html('');
        $this.parent().removeClass('empty');
        for (i = 0; i < arr.length; i++) {
            b = $(document.createElement("DIV"));
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                /*make the matching letters bold:*/
                b.html('<strong>' + arr[i].substr(0, val.length) + '</strong>');
                b.html(b.html() + arr[i].substr(val.length));
                /*insert a input field that will hold the current array item's value:*/
                b.html(b.html() + '<input type="hidden" value="' + arr[i] + '">');
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.click(function () {
                    /*insert the value for the autocomplete text field:*/
                    lastVal = $(this).find('input:first').val();
                    $this.val(lastVal);
                    $this.parents('.col-sm').removeClass('active-complete');
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.append(b);
            }
        }
        if(a.children().length) {
            $this.parent().removeClass('empty');
        } else {
            $this.parent().addClass('empty');
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.keydown(function(e) {
        if($(this).val() != '') $(this).parent().removeClass('empty');
        var x = $('#' + this.id + 'autocomplete-list');
        if (x) x = x.find('div');

        // var x = document.getElementById(this.id + "autocomplete-list");
        // if (x) x = x.getElementsByTagName("div");

        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
        function addActive(x) {
            /*a function to classify an item as "active":*/
            if (!x) return false;
            /*start by removing the "active" class on all items:*/
            removeActive(x);
            if (currentFocus >= x.length) currentFocus = 0;
            if (currentFocus < 0) currentFocus = (x.length - 1);
            /*add class "autocomplete-active":*/
            x[currentFocus].classList.add("autocomplete-active");
        }
        function removeActive(x) {
            /*a function to remove the "active" class from all autocomplete items:*/
            for (var i = 0; i < x.length; i++) {
                x[i].classList.remove("autocomplete-active");
            }
        }
    });
    function closeAllLists(element) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = $('.autocomplete-items');
        for (var i = 0; i < x.length; i++) {
            if (element != x[i] && element != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    $(document).click(function (e) {
        if(INP) {
            if (e.target == $('.active-complete')[0] || e.target != INP[0] && ($(e.target).hasClass('dev-input') || !$(e.target).children('input[type="hidden"]').length)) {
                INP.parents('.col-sm').removeClass('active-complete');
                INP.parent().removeClass('empty');
                if (INP.val() != lastVal) INP.val('');
            }
            closeAllLists(e.target);
        }
        if($(e.target).hasClass('dev-input')) {
            if(lastPge == 'device') {
                pushHistory('activeComplete');
            }
            lastPge = 'activeComplete';
            $(e.target).parents('.col-sm').addClass('active-complete');
            if (!(INP && INP[0] == e.target)) {
                if (!$(e.target).parents('.col-sm').hasClass('active-complete')) lastVal = $(e.target).val();
            }
            INP = $(e.target);
        }
    });
};