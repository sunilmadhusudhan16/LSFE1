// Preloader
$(document).ready(function($) {
    $(window).load(function() {
        $('#preloader').fadeOut('slow', function() { $(this).remove(); });
    });
});

// Mobile Sliding Menu
$(document).ready(function() {
    $('.navbar-hamburg').click(function() {
        $checkClass = $('.slidingMenu').attr("class").split(' ').pop();
        //alert($checkClass);
        if ($checkClass === 'slidingMenu_hide') {
            $('.slidingMenu').addClass('slidingMenu_show').removeClass('slidingMenu_hide');
            $('.menuOverlay').css("display","block");
        } else {
            $('.slidingMenu').addClass('slidingMenu_hide').removeClass('slidingMenu_show');
            $('.menuOverlay').css("display","none");
        }
    });
});
// // Hamburger Icon
// var wrapperMenu = document.querySelector('.wrapper-menu');
// wrapperMenu.addEventListener('click', function(){
//   wrapperMenu.classList.toggle('open');  
// });

// Header Menu
$(document).ready(function($) {
    $('.hamburgerLink').click(function() {
    	var lastClass = $('.wrapper-menu').attr('class').split(' ').pop();
    	console.log(lastClass);
    	if(lastClass == 'open'){
    		$('.navigationBock').css({'top':'50%'});
    	}else{
    		$('.navigationBock').css({'top':'-100%'});
    	}
        
    });
});


// Header Fix
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 80) {
        $("header").addClass("affix");
    }else{
    	$("header").removeClass("affix");
    }
});

//Scroll Top
$(".scrollUp").hide();
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 600) {
        $(".scrollUp").show();
    }else{
        $(".scrollUp").hide();
    }
});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });