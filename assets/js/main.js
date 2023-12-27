(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (e){ 
    e.preventDefault()
    $('body').toggleClass('overflow-hidden');   
    $('.mobile-menu').toggleClass('siteBar');   
  }); 
  



  // owlCarousel
  $(".sdfsd").owlCarousel({
    loop: true,
    margin: 20,
    items: 1,
    navText: [
      '<i class=""><img src="assets/img/arrow-left.svg" alt=""></i>',
      '<i class=""><img src="assets/img/arrow-right.svg" alt=""></i>'
    ],
    nav: true,
    dots: false
  });



  var gallery = $('.hero_slider');

  gallery.owlCarousel({
    loop: true,
    margin: 20,
    items: 1,
    navText: [
      '<i class=""><img src="assets/img/arrow-left.svg" alt=""></i>',
      '<i class=""><img src="assets/img/arrow-right.svg" alt=""></i>'
    ],
    nav: true,
    dots: false,
    onInitialized: counter,
    onChanged: counter
  });
  
  function counter(event) {
    if (!event.namespace) {
      return;
    }
    var slides = event.relatedTarget;
    $('#counter').text(  slides.relative(  slides.current() ) + 1 + '/' + '0'  + slides.items().length);
  }



  // owlCarousel
  $(".Featured_slider_wrp").owlCarousel({
    loop: true,
    margin: 20,
    items: 1,
    navText: [
      '<i class=""><img src="assets/img/arrow-left.svg" alt=""></i>',
      '<i class=""><img src="assets/img/arrow-right.svg" alt=""></i>'
    ],
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });




  // page Animation
  AOS.init({
    mirror: true,
    duration: 1500,
    initClassName: 'aos-init',
    once: true,
  });

  // data-aos="fade-up" 
  // data-aos-delay="100" 

 
})(jQuery);
