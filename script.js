$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrolly > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    //Toggle menu/navbar script//
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $('.close-menu').click(function(){
        $('.navbar .menu').removeClass("active"); // Close the menu
        $('.menu-btn i').removeClass("active"); // Optionally change the icon back
    });
    //Owl carousel script//
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items:1,
                nav: false
            },
            600:{
                items:2,
                nav: false
            },
            1000:{
                items:3,
                nav: false
            },
        }

    });
});














// JavaScript to toggle the menu
document.querySelector('.menu-btn').addEventListener('click', function() {
    const menu = document.querySelector('.navbar .menu');
        menu.classList.toggle('active'); // Toggle the active class
    });
    
    // Close the menu when a menu item is clicked
    const menuItems = document.querySelectorAll('.navbar .menu li a');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const menu = document.querySelector('.navbar .menu');
            menu.classList.remove('active'); // Remove the active class to close the menu
        });
    });
