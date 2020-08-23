$(document).ready(function(){
    
    $(".andish").hover(function(){

      $(".smart").fadeToggle(500);
      $("#smart").slideToggle(500);
      
    });

    $(".cru").hover(function(){

      $(".evacute").fadeToggle(500);
      $("#evacute").slideToggle(500);
      
    });

    $(".cro").hover(function(){

      $(".audit").fadeToggle(500);
      $("#audit").slideToggle(500);
      
    });

    $(".cri").hover(function(){

      $(".cable").fadeToggle(500);
      $("#cable").slideToggle(500);
      
    });

    $(".cra").hover(function(){

      $(".enter").fadeToggle(500);
      $("#enter").slideToggle(500);
      
    });

    $(".cre").hover(function(){

      $(".music").fadeToggle(500);
      $("#music").slideToggle(500);
      
    });

})

$(function() {
  var header = $(".navbar");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      header.addClass("scrolled");
    } else {
      header.removeClass("scrolled");
    }
  });
});

$(document).ready(function(){
  $('.customer-logos').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover:false,
      responsive: [{
          breakpoint: 768,
          setting: {
              slidesToShow:4
          }
      }, {
          breakpoint: 520,
          setting: {
              slidesToShow: 3
          }
      }]
  });
});