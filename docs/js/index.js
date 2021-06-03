jQuery(document).ready(function(){
    $('.slider-container').slick({
        dots: true,
        // autoplay: true,
        // autoplaySpeed: 2000
    });
    $('.services_link').click(function(){
        $('.services_links').toggleClass('active');
    });
    $('.header-burger').click(function(){
        $('.header-burger, .header-burger-menu').toggleClass('active-burger');
    });
    $('.contanct-botton').click(function(){
        $('.header-burger, .header-burger-menu').removeClass('active-burger');
    });
    $('.arrow-li').click(function(){
        $('.dropdown-item').toggleClass('active-dropdown');
    });
});