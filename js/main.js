$(document).ready(function() {
    // Navbar Menu
    $(".navbar__item").click(function () {
        $(this).addClass("active");
        $(".navbar__item").not(this).removeClass("active");
    });

    // Not Propagation Checkbox
    $('input[type="checkbox"]').on('change', function() {
        $('input[type="checkbox"]').not(this).prop('checked', false);
    });

    // Switch Theme Color 
    $('#ico-sun').click(function() {
        $('body').removeClass('dark');
    });

    $('#ico-moon').click(function() {
        $('body').addClass('dark');
    });
});



