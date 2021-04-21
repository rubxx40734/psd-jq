$(document).ready(function () {
    $(".dropdown").click(function (e) { 
        e.preventDefault();
        $(this).toggleClass("add");
        $(this).parent().find(".dropopen").slideToggle();
        $(this).parent().siblings().find(".dropopen").slideUp();
        $(this).parent().siblings().find(".dropdown").removeClass("add");
    });
    $(".pct1[href$='.test']").addClass("fas fa-atlas");
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed:1000,
        effect:"horizontal",

      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        
      });
});