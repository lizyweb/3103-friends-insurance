document.addEventListener('DOMContentLoaded', () => {
    "use strict";


   // Hero Header carousel
   $(".header-carousel").owlCarousel({
    animateOut: 'fadeOut',
    items: 1,
    margin: 0,
    animateOut: 'slideOutDown',
    stagePadding: 0,
    autoplay: true,
    smartSpeed: 500,
    dots: true,
    loop: true,
    nav : true,
    navText : [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ],
});


 // Sticky Navbar
 $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
        $('.nav-bar').addClass('sticky-top shadow-sm').css('top', '0px');
    } else {
        $('.nav-bar').removeClass('sticky-top shadow-sm').css('top', '-100px');
    }
});

// Latest-news-carousel
$(".latest-news-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    nav : true,
    navText : [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ],
    responsiveClass: true,
    responsive: {
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:3
        }
    }
  }); 

 // Vendor carousel
 $('.vendor-carousel').owlCarousel({
    loop: true,
    margin: 45,
    dots: false,
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
        0:{
            items:2
        },
        576:{
            items:2
        },
        768:{
            items:4
        },
        992:{
            items:5
        }
    }
});

//li
$(document).ready(function() {
    // Initialize the first tab as active
    $('.nacc li:first').addClass('active');
  
    // Click event for menu items
    $('.naccs .menu div').click(function() {
      var index = $(this).index();
      
      // Remove active class from all tabs
      $('.naccs .menu div').removeClass('active');
      $('.nacc li').removeClass('active');
      
      // Add active class to the clicked menu item
      $(this).addClass('active');
      
      // Show the corresponding tab content
      $('.nacc li').eq(index).addClass('active');
    });
  });

$('.owl-frds-service-item').owlCarousel({
    items: 4,
    loop: true,
    dots: false,  // Disable dots
    nav: false,    // Enable navigation buttons
    autoplay: true,
    smartSpeed: 1500,
    margin: 5,
    
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
});

$(document).ready(function() {
    // Initialize the first tab as active
    $('.nacc-1 li:first').addClass('active-1');
  
    // Click event for menu items
    $('.naccs-1 .menu-1 div').click(function() {
      var index = $(this).index();
      
      // Remove active class from all tabs
      $('.naccs-1 .menu-1 div').removeClass('active-1');
      $('.nacc-1 li').removeClass('active-1');
      
      // Add active class to the clicked menu item
      $(this).addClass('active-1');
      
      // Show the corresponding tab content
      $('.nacc-1 li').eq(index).addClass('active-1');
    });
});


    
});