//Category toggle val
var classToggle = false;
var techToggle = false;
var customToggle = false;
//class toggle val
var mashupsToggle = false;
var otherClassToggle = false;
//tech toggle val
var physicalToggle = false;
var digitalToggle = false;
// customToggleVar
var musicToggle = false;
var genAlgToggle = false;
var dataVizToggle = false;
var healthToggle = false;
// arrays
var categoryArray = ["class", "tech","custom"];
var classArray = ["mashups","other","digital","physical","health","data-visualization","music"];

function staging(x){
    //if I am sending no parameters!
    //console.log("my x is" + x);
   
    if(x == undefined){
      for(var i = 0; i < categoryArray.length; i++){
        var myClass = "tag-" + categoryArray[i];
        //console.log(myClass);
        $('.'+ myClass).addClass("hidden");
      }
    }
    else{
      //console.log(x);
      for(var i = 0; i < categoryArray.length; i++){
        var myClass = ".tag-" + categoryArray[i];
        //console.log("now, my class is " + myClass);
        if(x == myClass){
          //console.log("matching " + myClass);
          $(myClass).removeClass("hidden");
        }else{
          //console.log("not matching " + myClass)
          $(myClass).addClass("hidden");
        }
      }
    }
  };

function clicking(toggleVal, selector){
  if(toggleVal == false){
    //$(selector).removeClass("pink-hover").addClass("toggle-click");

    //console.log(selector);
    for(var i = 0; i < categoryArray.length; i++){
      var mySelector = "#filter-" + categoryArray[i];
      $(mySelector).removeClass("toggle-click").addClass("pink-hover");
      //console.log(mySelector);
      if(selector == mySelector){
        //console.log("we have a match!!");
        $(mySelector).removeClass("pink-hover").addClass("toggle-click");
      }
    }
  }
  else{
    $(selector).removeClass("toggle-click").addClass("pink-hover");
  }
};

function allTagsFalse(){
  mashupsToggle = false;
  otherClassToggle = false;
//tech toggle val
  physicalToggle = false;
  digitalToggle = false;
  musicToggle = false;
  genAlgToggle = false;
  dataVizToggle = false;
  healthToggle = false;
  //console.log("EVERYTHING IS FALSE IS DONE");
};

function clearAll(){
  for(var i = 0; i < categoryArray.length; i++){
    var mySelector = "#filter-" + categoryArray[i];
    $(mySelector).removeClass("toggle-click").addClass("pink-hover");
  };
  for(var i = 0; i < classArray.length; i++){
    var hideSelector = '#filter-' + classArray[i];
    $(hideSelector).removeClass("toggle-click");
    $(hideSelector).find('.x-icon').addClass('hidden');
    $(hideSelector).addClass('hidden');
  };
  //console.log("We have cleared everything!");
};

$(document).ready(function(){
  //staging("rambo");
	//console.log("our page is ready");
  /*var custom = $('#abhi').data("custom");
  var customRes = jQuery.each(custom, function(index,value){
    console.log(value == "Music");
  });*/

  var $grid = $('#isotopeContainer').isotope({
  // options
  itemSelector: '.thumb',
  getSortData: {
    category:'[data-class]'
  }
  /*percentPosition: true,
  masonry: {
    // use element for option
    columnWidth: 'thumb'
  }*/
  });

  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  });

  /*---------------SORTS--------------------------------------------------*/

  //random sort
	$('#filter-random').click(function(){
  	console.log("Yes, we are pressed!");
    $grid.isotope({ 
      sortBy : 'random' 
    });
    $grid.isotope('updateSortData').isotope();
	});

  //sort by class
  /*$('#class-sort').click(function(){
    console.log("Sort by class!");
    $grid.isotope({sortBy: 'category'});
  });
  //filter by class
  $('#class-filter').click(function(){
    console.log("Sort by class!");
    $grid.isotope({sortBy: 'category'});
  });*/

  /*----------TAG FILTERS------------------*/

  function applyFilter(filterCategory, filterName){
    //clear everything
    //console.log("we are applying filters!");
    for(var i = 0; i < classArray.length; i++){
      var hideSelector = '#filter-' + classArray[i];
      $(hideSelector).removeClass("toggle-click");
      $(hideSelector).find('.x-icon').addClass('hidden');
      console.log("hidden filter: " + hideSelector);
    };

    var selector = '#filter-' + filterName;
    $(selector).addClass("toggle-click");
    $(selector).find('.x-icon').removeClass('hidden');
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
    $(selector).removeClass("toggle-click");
    $(selector).find('.x-icon').addClass('hidden');
    $grid.isotope({
      // filter element with numbers greater than 50
      filter: '*'
    });
  };

/*-------------------CUSTOM FILTER---------------------------*/
  $('#filter-none').click(function(){
    allTagsFalse();
    clearAll();
    $grid.isotope({
      // filter element with numbers greater than 50
      filter: '*'
    });
  });
  $('#filter-music').click(function(){
    if(musicToggle == false){
      applyFilter("custom","music");
      allTagsFalse();
      musicToggle = true;
      //console.log("digitalTrueIsDone");
    }else{
      applyNoFilter("music");
      musicToggle = false;
    }
  });

    $('#filter-health').click(function(){
    if(healthToggle == false){
      applyFilter("custom","health");
      allTagsFalse();
      healthToggle = true;
      //console.log("digitalTrueIsDone");
    }else{
      applyNoFilter("health");
      healthToggle = false;
    }
  });

  $('#filter-data-visualization').click(function(){
    if(dataVizToggle == false){
      applyFilter("custom","data-visualization");
      allTagsFalse();
      dataVizToggle = true;
      //console.log("digitalTrueIsDone");
    }else{
      applyNoFilter("data-visualization");
      dataVizToggle = false;
    }
  });

/*-------------------TECH FILTER---------------------------*/
  $('#filter-digital').click(function(){
    if(digitalToggle == false){
      applyFilter("tech","digital");
      allTagsFalse();
      digitalToggle = true;
      //console.log("digitalTrueIsDone");
    }else{
      applyNoFilter("digital");
      digitalToggle = false;
    }
  });

  $('#filter-physical').click(function(){
    if(physicalToggle == false){
      applyFilter("tech","physical");
      allTagsFalse();
      physicalToggle = true;
    }else{
      applyNoFilter("physical");
      physicalToggle = false;
    }
  });

/*-------------------------CLASS FILTER---------------------*/
  $('#filter-mashups').click(function(){
    //console.log("mashups is clicked!");
    if(mashupsToggle == false){
      applyFilter("class","mashups");
      allTagsFalse();
      mashupsToggle = true;
    }else{
      applyNoFilter("mashups");
      mashupsToggle = false;
    }
    
  });

  $('#filter-other').click(function(){
    //console.log("other is clicked!");
    if(otherClassToggle == false){
      applyFilter("class","other");
      allTagsFalse();
      otherClassToggle = true;
    }else{
      applyNoFilter("other");
      otherClassToggle = false;
    }
    
  });

  /*$('#filter-other').click(function(){
    applyNoFilter("class");
  });*/

  /*---------------------TAG FILTERS----------------------------*/

  function allCategFalse(){
   techToggle = false;
   customToggle = false;
   classToggle = false;
  };

    $('#filter-class').click(function(){
      //console.log("Toggle class bar on!");
      if(classToggle == false){
          clicking(classToggle, "#filter-class");
           staging(".tag-class");
           allCategFalse();
           classToggle = true;
      }else{
        //$(this).removeClass("toggle-click").addClass("pink-hover"); 
        //clicking(classToggle, "#filter-class");
        clicking(classToggle, "#filter-class");
        staging();
        //$('.tag-class').addClass("hidden");
        classToggle = false; 
      }

    });

  $('#filter-tech').click(function(){
    console.log("Toggle tech!");
    if(techToggle == false){
        clicking(techToggle, "#filter-tech");
        staging(".tag-tech");
        allCategFalse();
        techToggle = true;
      }else{
        clicking(techToggle, "#filter-tech");
        staging();
        techToggle = false; 
      }

  });

      $('#filter-custom').click(function(){
      if(customToggle == false){
          clicking(customToggle, "#filter-custom");
          staging(".tag-custom");
          allCategFalse();   
          customToggle = true;

      }else{
        clicking(customToggle, "#filter-custom"); 
        staging();
        customToggle = false; 
      }

    });
    /*------------------------------------------------------------------------*/

});
