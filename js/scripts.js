$(document).ready(function(){
	console.log("our page is ready");

  var $grid = $('#isotopeContainer').isotope({
  // options
  itemSelector: '.thumb',
  /*percentPosition: true,
  masonry: {
    // use element for option
    columnWidth: 'thumb'
  }*/
  });

  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  });

  /*$('.zoomimg').hover(function(){
    console.log("We are hovered!");
    $('.img-responsive').css("transform", "scale(1.5)");
  });*/

	$('#random-sort').click(function(){
		console.log("Yes, we are pressed!");
		$grid.isotope({ sortBy : 'random' });
    	$grid.isotope('updateSortData').isotope();
	});
});
