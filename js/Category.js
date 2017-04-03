// CATEGORY OBJECT / /// / / / / / / / / / / / / / / / / / / / / / / / / / /
  function Category(selector){
    //console.log("yeeessss!");
    this.ctg = selector;

    this.capitalizeFirstLetter = function(string){
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

   
    //handle visibility + style
    this.createDomElement = function(){
      //console.log("yeeessss!");
      var htmlString = '';
      htmlString += '<li><a class="ctg pink-hover"';
      htmlString += 'id=filter-' + this.ctg + '>' + this.capitalizeFirstLetter(this.ctg) + '</a></li>'; 

      var curObj = this;
      curObj.element = $(htmlString).prependTo('#filters');

      curObj.element.click(function(e){

        var objID = $(e.target).attr("id");
        $(".ctg").removeClass("toggle-click").addClass("pink-hover");
        $(".tags").addClass("hidden");
        $(e.target).toggleClass("pink-hover toggle-click");
        $(".tag-" + curObj.ctg).removeClass("hidden");

      });
    };
    //push all the objects into an array
    categArray.push(this);
  };