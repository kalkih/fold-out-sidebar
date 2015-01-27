$(document).ready(function(){
    'use strict';

    var sidebar = $('#sidebar'),
        sidebarToggleButton = $('#sidebar-toggle'),
        sidebarToggleText = $('#sidebar-toggle span'),
        sidebarToggleButtonIcon = $('#sidebar-toggle .fa');

    sidebar.css('left', -(sidebar.width() / 2));

    var toggleSidebar = function(){
        sidebar.toggleClass('show');
    };

    sidebarToggleButton.click(function() {
        toggleSidebar();
        if (sidebar.hasClass('show')) {
            sidebar.css('left', 0);
            sidebarToggleButton.addClass('foldOut');
            sidebarToggleButton.css('left', sidebar.width() + 20);
            sidebarToggleButtonIcon.removeClass('fa-navicon');
            sidebarToggleButtonIcon.addClass('fa-close');

        } else{
            sidebar.css('left', -(sidebar.width() / 2));
            sidebarToggleButton.addClass('foldIn');
            sidebarToggleButtonIcon.removeClass('fa-close');
            sidebarToggleButtonIcon.addClass('fa-navicon');
            sidebarToggleButton.css('left', '20px');

        }

        sidebarToggleButtonIcon.addClass('spin')

        setTimeout(function(){
            sidebarToggleButton.removeClass('foldOut');
            sidebarToggleButton.removeClass('foldIn')
            sidebarToggleButtonIcon.removeClass('spin')
        },600);
    });
});