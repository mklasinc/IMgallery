$('.grid').isotope({
  // options
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});

var $grid = $('.grid').isotope({
  getSortData: {
    category: '[data-category]', // value of attribute
  }
});

$( document ).ready(function() {
    console.log( "ready!" );
    $('.sortButton').click(function(){
    	console.log("yes, you pressed me!");
    	$grid.isotope({ sortBy : 'random' });
    	$grid.isotope('updateSortData').isotope();
    });
});