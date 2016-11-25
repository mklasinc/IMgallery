// CATEGORY OBJECT / /// / / / / / / / / / / / / / / / / / / / / / / / / / /
  function Category(selector){
    this.id = "#filter-" + selector;
    this.tag = ".tag-" + selector;

    this.click = function(){
      var rightTag = this.tag;
      $(this.id).click(function(){
        for(var i = 0; i < categList.length; i++){
        //'this' is now a jquery this
        var categSelector = "#filter-" + categList[i];
        var tagSelector = ".tag-" + categList[i];
        //console.log(tagSelector);
        //button functionality
        $(categSelector).removeClass("toggle-click").addClass("pink-hover");
        $(tagSelector).addClass("hidden");
        };
        $(this).toggleClass("pink-hover toggle-click");
        //staging functionality
        $(rightTag).removeClass("hidden");
      });
    };
  };