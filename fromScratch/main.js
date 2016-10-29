$('.grid').isotope({
  // options
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});

var $grid = $('.grid').isotope({
  getSortData: {
    //name: '.name', // text from querySelector
    category: '[data-category]', // value of attribute
    /*weight: function( itemElem ) { // function
      var weight = $( itemElem ).find('.weight').text();
      return parseFloat( weight.replace( /[\(\)]/g, '') );
    }*/
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