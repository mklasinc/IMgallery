
var classArray = ["mashups","other","digital","physical","health","data-visualization","music"];
var categTagList = ["mashups","other","digital","physical","health","data-visualization","music"];
var categList = ["class","custom","tech"];
var objectArray = [];

var $grid = $('#isotopeContainer').isotope({
// options
itemSelector: '.thumb',
getSortData: {
  category:'[data-class]'
}
});

/*----------TAG FILTERS------------------*/

function applyFilter(filterCategory, filterName){
  //clear everything
  //console.log("we are applying filters!");
  for(var i = 0; i < classArray.length; i++){
    var hideSelector = '#filter-' + classArray[i];
    $(hideSelector).removeClass("toggle-click").find('.x-icon').addClass('hidden');
    //console.log("hidden filter: " + hideSelector);
  };

  var selector = '#filter-' + filterName;
  $(selector).addClass("toggle-click").find('.x-icon').removeClass('hidden');
  $grid.isotope({
    // filter element with numbers greater than 50
    filter: function() {
      // _this_ is the item element. Get text of element's .number
      var classFilter = $(this).data(filterCategory);
      // return true to show, false to hide
      return classFilter == filterName;
    }
  });
};

function applyNoFilter(filterName){
  var selector = '#filter-' + filterName;
  //console.log(selector);
  $(selector).removeClass("toggle-click").find('.x-icon').addClass('hidden');
  $grid.isotope({
    // filter element with numbers greater than 50
    filter: '*'
  });
};

/*----------INITIATE----------*/
/*----------------------------*/
/*----------------------------*/
$(document).ready(function(){
  //load isotope images
  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  });
  //categories
  var classroom = new Category("class");
  classroom.click();
  var technology = new Category("tech");
  technology.click();
  var custom = new Category("custom");
  custom.click();
  //tags
  var tagDigital = new Tag("tech","digital");
  tagDigital.click();
  var tagPhysical = new Tag("tech","physical");
  tagPhysical.click();
  var tagMashups = new Tag("class","mashups");
  tagMashups.click();
  var tagOther = new Tag("class","other");
  tagOther.click();
  var tagDataViz = new Tag("custom","data-visualization");
  tagDataViz.click();
  var tagHealth = new Tag("custom","health");
  tagHealth.click();
  var tagMusic = new Tag("custom","music");
  tagMusic.click();

  /*---------------SORTS--------------------------------------------------*/
  //random sort
	$('#filter-random').click(function(){
  	console.log("Yes, we are pressed!");
    $grid.isotope({ 
      sortBy : 'random' 
    });
    $grid.isotope('updateSortData').isotope();
	});
  //no sort
  $('#filter-none').click(function(){
    $grid.isotope({
      filter: '*'
    });
  });

});
