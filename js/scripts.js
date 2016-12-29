//all the arrays
var categTagList = ["mashups","other","digital","physical","health","data-visualization","music"];
var categList = ["class","custom","tech"];
var tagArray = [];
var categArray = [];

var tagObjArray = [
  {
    ctg: "class",
    tag: "mashups"
  },
  {
    ctg: "class",
    tag: "other"
  },
    {
    ctg: "tech",
    tag: "digital"
  },
    {
    ctg: "tech",
    tag: "physical"
  },
    {
    ctg: "other",
    tag: "health"
  },
    {
    ctg: "other",
    tag: "data-visualization"
  },
    {
    ctg: "other",
    tag: "music"
  }
];

//create the grid object
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
  for(var i = 0; i < categTagList.length; i++){
    var hideSelector = '#filter-' + categTagList[i];
    $(hideSelector).removeClass("toggle-click").find('.x-icon').addClass('hidden');
  };

  //style
  var selector = '#filter-' + filterName;
  $(selector).addClass("toggle-click").find('.x-icon').removeClass('hidden');
  //filter
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

function clearTagArray(){
  for (var i = 0; i < tagArray.length; i++) {
    $(tagArray[i].id).data("toggleBool",false);
    $(tagArray[i].id).removeClass("toggle-click").find('.x-icon').addClass('hidden');
  };
}

function clearCategArray(){
  for (var i = 0; i < categArray.length; i++) {
    //console.log(categList[i].id);
    $(categArray[i].id).removeClass("toggle-click").addClass("pink-hover");
    $(categArray[i].tag).addClass("hidden");
  };
}

//reduce this
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
  console.log("We are ready!");
  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  });
  //create category objects
  for(var i in categList){
    var ctgObj = new Category(categList[i]);
    ctgObj.click();
  };
  //create tag objects
  for(var i in tagObjArray){
    var tagObj = new Tag(tagObjArray[i].ctg,tagObjArray[i].tag);
    tagObj.click();
  };

  /*---------------SORTS--------------------------------------------------*/
  //RANDOM SORT
	$('#filter-random').click(function(){
  	console.log("Yes, we are pressed!");
    $grid.isotope({ 
      sortBy : 'random' 
    });
    $grid.isotope('updateSortData').isotope();
	});
  //no sort
  $('#filter-none').click(function(){
    clearTagArray();
    clearCategArray();
    $grid.isotope({
      filter: '*'
    });
  });

});
