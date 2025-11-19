// Smooth scroll for nav links
$(document).on('click','a.nav-link[href^="#"]', function(e){
  e.preventDefault();
  const target = $($(this).attr('href'));
  if(target.length){
    $('html, body').animate({scrollTop: target.offset().top - 72}, 600);
  }
});

// Initialize GLightbox if loaded
$(function(){
  if (typeof GLightbox !== 'undefined') {
    GLightbox({ selector: '.glightbox', loop: true, touchNavigation: true });
  }
});