$(document).ready(function() {
    $('.cont .tab > button').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });
    
    $('.nav-item > a').click(function(e) {
        var subNav = $(this).siblings('.sub-nav');
        if (subNav.length > 0) {
            $(this).parent().toggleClass('active');
            e.preventDefault();
            subNav.slideToggle(200);
        } else {
            
        }
    });
});


$(document).ready(function(){
    $('#header').load('aside.html');
});