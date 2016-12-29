// CATEGORY OBJECT / /// / / / / / / / / / / / / / / / / / / / / / / / / / /
  function Category(selector){
    //e.g. filter-class - governs functionality of category buttons
    this.id = "#filter-" + selector;
    //e.g. .tag-class - governs visibility of tags
    this.tag = ".tag-" + selector;

    //handle visibility + style
    this. = function(){
      //create a variable to distinguish between the object's 'this' and jquery's 'this'
      var rightTag = this.tag;
      //listen for a click
      $(this.id).click(function(){
        console.log("We are clicked!");
        //'from now on, this is now a jquery this

        //categList stores all category names*** change it to categArray
        for(var i = 0; i < categList.length; i++){

        //clean up all the category buttons
        $("#filter-" + categList[i]).removeClass("toggle-click").addClass("pink-hover");
        //hide all the tags
        $(".tag-" + categList[i]).addClass("hidden");
        };
        //add purple button to the clicked button
        $(this).toggleClass("pink-hover toggle-click");
        //show tags matching the category
        $(rightTag).removeClass("hidden");
      });
    };
    //push all the objects into an array
    categArray.push(this);
  };