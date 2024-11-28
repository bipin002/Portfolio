$(document).ready(function () {
    $('#offcanvasNavbar .nav-link').on('click', function (event) {
        event.preventDefault(); // Prevent the default anchor click behavior

        var targetSection = $(this).attr('href'); // Get the href attribute value, which is the section ID
        var offsetTop = $(targetSection).offset().top; // Get the position of the section from the top of the page

        $('html, body').animate({
            scrollTop: offsetTop
        }, 300); // Smooth scroll to the section (800ms duration)

        $('#offcanvasNavbar').offcanvas('hide'); // Close the offcanvas menu
    });
});
