// DISMISS ALERTS
$(document).ready(function() {
    // show the alert
    setTimeout(function() {
        $(".alert").alert('close');
    }, 2000);
});

//NAVBAR ACTIVE ITEM
$(document).ready(function(){
    let path = window.location.href.split("/").pop();
    let numRegex = /^[1-9]/;

    if (path === '') {
        path = 'home';
    }

    if (numRegex.test(path)) {
        var target = $('#post');
    }
    else if (path === 'home#contact') {
        var target = $('#contact');
    }
    else {
        // var target = $('#top_navig_bar ul li a[href="'+ '/' + path +'"]');
        var target = $('#home');
    }

    target.addClass('active');
});

$(document).ready(function() {
    $('#nav-item-contact').click(function() {
        $('#nav-item-home').removeClass('active');
        $(this).addClass('active');
    });
});