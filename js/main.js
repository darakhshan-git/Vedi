
/*client*/
	$(document).ready(function() {	 
		$("#client-slider").owlCarousel({
			items : 3,
			itemsDesktop : [1199,1],
			navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
			itemsDesktopSmall : [979,1]
		});		
    });





/*blogs*/
	$(document).ready(function() {	 
		$("#c-slider1").owlCarousel({
			items : 3,
			itemsDesktop : [1199,1],
			itemsDesktopSmall : [979,1]
		});		
    });



/*magic*/
	 $(document).ready(function() {
		 
		$("#bannerslider").owlCarousel({
			autoPlay: 3000,
			items : 4,
			nav:true,
			margin: 0,
			itemsDesktop : [1199,1],
			navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
			itemsDesktopSmall : [979,1]
		});
		
		
    });


/*products*/
$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
	  items:4,
    navigation : true,
  });
 
});



// owl.on('mousewheel', '.owl-stage', function (e) {
    // if (e.deltaY>0) {
        // owl.trigger('next.owl');
    // } else {
        // owl.trigger('prev.owl');
    // }
    // e.preventDefault();
// });


