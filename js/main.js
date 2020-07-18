$(function (){
    $('.header_menu').click(function(){
        $('.header_nav_menu').show({"display": "block"})
    })
    $('.header_nav_close').click(function(){
        $('.header_nav_menu').fadeOut()
    })
});