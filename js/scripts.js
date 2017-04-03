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
    ctg: "custom",
    tag: "health"
  },
    {
    ctg: "custom",
    tag: "data-visualization"
  },
    {
    ctg: "custom",
    tag: "music"
  }
];

var $grid;




/*----------TAG FILTERS------------------*/

function applyFilter(filterCategory, filterName){
  console.log(filterName);
  //console.log($('.thumb').data('custom').split(" "));
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
        var dataArray = classFilter.split(" ");
        for(var i = 0; i < dataArray.length; i++){
          if(dataArray[i] == filterName){
            return dataArray[i] == filterName;
        };
        
      };
      //console.log(classFilter);
      // return true to show, false to hide
      
    }
  });
};

function clearTagArray(){
  for (var i = 0; i < tagArray.length; i++) {
    var tagId = '#filter-' + tagArray[i].tag;
    //console.log(tagId);
    $(tagId).data("toggleBool", false);
    $(tagId).removeClass("toggle-click").find('.x-icon').addClass('hidden');
  };
}

function clearCategArray(){
  for (var i = 0; i < categArray.length; i++) {
    //console.log(categArray[i].ctg);
    var categId = '#filter-' + categArray[i].ctg;
    var tagClass = '.tag-' + categArray[i].ctg;
    $(categId).removeClass("toggle-click").addClass("pink-hover");
    $('#tags-bar').find(tagClass).addClass("hidden");
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


function createMobileHTML(jsonObj){

  var imageString = '';
  
  imageString = '<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 thumb" ';
  imageString += 'data-class="' + jsonObj.course.toLowerCase() + '" ';
  imageString += 'data-tech="' + jsonObj.tech.toLowerCase() + '" ';
  imageString += 'data-custom="';
  for(var j = 0; j < jsonObj.custom.length; j++){
    imageString += jsonObj.custom[j];
    if(j < jsonObj.custom.length - 1){
      imageString += ' ';
    }
  };
  imageString += '" data-index="' + jsonObj.index + '">';
  imageString += '<div class="mobile-container">';
  imageString += '<img class="img-responsive" src="' + jsonObj.img_url + '" alt="">';
  imageString += '</div></div>'; 

  $(imageString).appendTo('.row');



  var htmlString = '';
  htmlString += '<div class="full-screen-overlay hidden" data-index="' + jsonObj.index + '"><img src="img/myX.png" class="mobile-back-button">';
  htmlString += '<img class="mobile-image" src="' + jsonObj.img_url + '" alt="">';
  htmlString += '<div class="mobile-proj-name">';
  htmlString += '<p class="mobile-proj-title">' + jsonObj.name + '</p>';
  htmlString += '<p class="mobile-proj-authors">' + jsonObj.author + '</p></div>'; 
  htmlString += '<div class="mobile-proj-description">' + jsonObj.description + '</div>';
  htmlString += '<a class="mobile-view" href="' + jsonObj.link + '" target="_blank">VIEW</a>';
  htmlString += '</div>';
  //htmlString += '<div class="mobile-proj-tags">' + jsonObj.hashtag + '</div></div>';
  //console.log(htmlString);
  $('#overlays').append(htmlString);

  var imageDataIndex = '.thumb[data-index="' + jsonObj.index + '"]';
  var overlayDataIndex = '.full-screen-overlay[data-index="' + jsonObj.index + '"]';

  $(imageDataIndex).click(function(){
    console.log($(this).data('index'));
    console.log($(overlayDataIndex).data('index'));
    $(overlayDataIndex).removeClass('hidden');

  });

  $('.mobile-back-button').click(function(){
    console.log("we've registered a click!");
    $(this).parent().addClass('hidden');
  });
};


function createHTML(jsonObj){
 
  //create HTML elements
    var htmlString = '';
    htmlString = '<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 thumb" ';
    htmlString += 'data-class="' + jsonObj.course.toLowerCase() + '" ';
    htmlString += 'data-tech="' + jsonObj.tech.toLowerCase() + '" ';
    htmlString += 'data-custom="';
    for(var j = 0; j < jsonObj.custom.length; j++){
      htmlString += jsonObj.custom[j];
      if(j < jsonObj.custom.length - 1){
        htmlString += ' ';
      }
    };
    htmlString += '">';
    htmlString += '<div class="overlay-container"> ';
    htmlString += '<img class="img-responsive" src="' + jsonObj.img_url + '" alt="">'; 
    
    htmlString += '<div class="overlay-box">';
    htmlString += '<a class="overlay-text" href="' + jsonObj.link + '" target="_blank">VIEW</a> <div class="overlay-project-name">';
    htmlString += '<p class="font-title">' + jsonObj.name + '</p>' ;
    htmlString += '<p>by ' + jsonObj.author + '</p> </div>';
    htmlString += '<div class="overlay-project-description">' + jsonObj.description + '</div>';
    htmlString += '<div class="overlay-project-tags">' + jsonObj.hashtag + '</div> </div> </div> </div>';

    if(j == 0){
      //console.log(htmlString);
    }

    $(htmlString).appendTo('.row');

};

//method to create a grid with isotope
function createGrid(){
  $grid = $('#isotopeContainer').isotope({
    itemSelector: '.thumb',
    getSortData: {
    category:'[data-class]'
    }
  });

  //load isotope images
  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  });

};

/*----------INITIATE----------*/
/*----------------------------*/
/*----------------------------*/
$(document).ready(function(){


  var windowWidth = $(window).width();  
  //method to create HTML elements
  $.getJSON('../prepWork/myData1.json', function(data){
    // iterate through person objects
    for(var i = 0; i < data.length; i++){
      if(windowWidth < 500){
        createMobileHTML(data[i]);
      }else{
        createHTML(data[i]);
      }
      
    };
    // create an isotope grid
    createGrid();
  });

  //method to create category buttons
  for(var i = 0; i < categList.length; i++){
    var ctgObj = new Category(categList[i]);
    ctgObj.createDomElement();
  };

  //method to create tag buttons
  for(var i = 0; i < tagObjArray.length; i++){
    var tagObj = new Tag(tagObjArray[i].ctg,tagObjArray[i].tag);
    tagObj.createDomElement();
  };

  /*---------------SORTS--------------------------------------------------*/

  //RANDOM SORT
	$('#filter-random').click(function(e){
  	//console.log("Yes, we are pressed!");
    $(e.target).css("background-color","pink");

    setTimeout(function(){
      $(e.target).css("background-color","transparent");
      $(e.target).addClass("pink-hover");
    }, 120);

    $grid.isotope({ 
      sortBy : 'random' 
    });
    $grid.isotope('updateSortData').isotope();
	});

  //no sort
  $('#filter-none').click(function(e){

    $(e.target).css("background-color","pink");
    
    setTimeout(function(){
      $(e.target).css("background-color","transparent");
    }, 120);

    clearTagArray();
    clearCategArray();
    $grid.isotope({
      filter: '*'
    });
  });

});
