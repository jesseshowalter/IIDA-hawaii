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



  // Initiate the unslider
  $('.banner').unslider({
    infinite: true,
    autoplay: true,
    speed:    1200,
    arrows:   false,
    delay:    8000
  });
  $('[data-remodal-id=1000]').remodal({
    modifier: 'with-red-theme'
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
  (function() {
  	var triggerBttn = document.getElementById( 'trigger-overlay' ),
  		overlay = document.querySelector( 'div.overlay' ),
  		closeBttn = overlay.querySelector( 'button.overlay-close' );
  		transEndEventNames = {
  			'WebkitTransition': 'webkitTransitionEnd',
  			'MozTransition': 'transitionend',
  			'OTransition': 'oTransitionEnd',
  			'msTransition': 'MSTransitionEnd',
  			'transition': 'transitionend'
  		},
  		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
  		support = { transitions : Modernizr.csstransitions };

  	function toggleOverlay() {
  		if( classie.has( overlay, 'open' ) ) {
  			classie.remove( overlay, 'open' );
  			classie.add( overlay, 'close' );
  			var onEndTransitionFn = function( ev ) {
  				if( support.transitions ) {
  					if( ev.propertyName !== 'visibility' ) return;
  					this.removeEventListener( transEndEventName, onEndTransitionFn );
  				}
  				classie.remove( overlay, 'close' );
  			};
  			if( support.transitions ) {
  				overlay.addEventListener( transEndEventName, onEndTransitionFn );
  			}
  			else {
  				onEndTransitionFn();
  			}
  		}
  		else if( !classie.has( overlay, 'close' ) ) {
  			classie.add( overlay, 'open' );
  		}
  	}

  	triggerBttn.addEventListener( 'click', toggleOverlay );
  	closeBttn.addEventListener( 'click', toggleOverlay );
  })();


}); // end document.ready
