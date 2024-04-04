// JavaScript for the COFAK website's interactive features

// Smooth scrolling for nav links
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
  
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });
  
  // Additional JavaScript functionality as needed
  