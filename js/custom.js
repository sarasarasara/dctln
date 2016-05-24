jQuery(document).ready(function(jQuery) {

    // Menu mobile
    jQuery('.site-clubs header .menu .menu-toggle-mobile').click(function(){
        jQuery('.site-clubs header .menu .collapse').slideToggle();
    });

    if (jQuery(window).width() < 768) {
        // Sidebar menu mobile
        jQuery('.site-clubs #wrapper .sidebar .sidebar-menu .menu-toggle').click(function(){
            jQuery('.site-clubs #wrapper .sidebar .sidebar-menu .collapse').slideToggle();
            jQuery('.site-clubs #wrapper .sidebar .sidebar-menu .menu-toggle i').toggleClass('fa-caret-right');
            jQuery('.site-clubs #wrapper .sidebar .sidebar-menu .menu-toggle i').toggleClass('fa-caret-down');
        });
    }
    else {
        jQuery('.site-clubs #wrapper .sidebar .sidebar-menu .menu-toggle i').removeClass('fa-caret-right');
    }

});
