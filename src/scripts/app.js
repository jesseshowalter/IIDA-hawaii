$(document).ready(function(){

  // Initiate the stellar js plugin
  $.stellar();

  // --------------------------------------------
  // New scroll position for fixed navigation top
  // --------------------------------------------
  $(window).scroll(function() {
      if ($(this).scrollTop() >= 300) {
          $('nav#navigation').addClass('visable');
      }else if($(this).scrollTop() <= 100){
      	$('nav#navigation').removeClass('visable');
      }
  });


  // --------------------------------------------
  // Hover for products (dim all other products on hover)
  // --------------------------------------------
  var product = $('#productsDisplay li');
  var viewProject = $('span');

  product.hover(function(){
  	product.addClass('dim');
  	$(this).removeClass('dim');

  	$(this).hover(function(){
  		viewProject.toggleClass('slide');
  	});
  });
  product.mouseleave(function(){
  	product.removeClass('dim');
  	viewProject.removeClass('slide');
  });

  // --------------------------------------------
  // Animated scroll to anchors
  // --------------------------------------------
  $('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 500);
    }

  });

// --------------------------------------------
// overlay navigation
// --------------------------------------------
  $('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
  });


}); // end document.ready
