function Tag(category,selector){
    //console.log("tag is called");

    this.ctg = category
    this.tag = selector;
    tagArray.push(this);

    //method to capitalize first letter
    this.capitalizeFirstLetter = function(string){
      var newString = string.replace(/-/g," ");
      return newString.charAt(0).toUpperCase() + newString.slice(1);
    };

    

    //method to create a DOM element
    this.createDomElement = function(){

      var htmlString = '';
      htmlString += '<li class="tags tag-' + this.ctg + ' hidden" ';
      htmlString += 'id="filter-' + this.tag + '">' + this.capitalizeFirstLetter(this.tag);
      htmlString += '<img src="img/myX.png" class="x-icon hidden"></li>';

      //bind events to the element
      var curObj = this;

      curObj.element = $(htmlString).data("toggleBool",false).prependTo('#tags-bar');

      curObj.element.click(function(e){
        var target = $(e.target);
        var parent = target.parent();

        
        if(target.is("img")){
          target = parent;
        };

        if(target.data("toggleBool") == false){
          //console.log("data is false");
          applyFilter(curObj.ctg, curObj.tag);
          //set toggle bools of all other objects to false
          //console.log(tagArray[0].ID);

          for (var i = 0; i < tagArray.length; i++) {
            var tagID = '#filter-' + tagArray[i].tag; 
            
            $(tagID).data("toggleBool",false);
            
          };
          
          //set toggle bool of the active object to true
          target.data("toggleBool",true);
          /*console.log("after " + $(e.target).data("toggleBool"));
          console.log($("#filter-physical").data("toggleBool"));*/

        }else if(target.data("toggleBool") == true){
          //console.log("NAY");
          //reset the filter
          applyNoFilter(curObj.tag);
          //set the toggle value to false
          target.data("toggleBool",false);
          //console.log($(e.target).data("toggleBool"));
        }
      });

    };
      

    /*this.click = function(){
      console.log("We are clicked!");
      //push the object into an array
      //set the toggleBool to false
      $(this.id).data("toggleBool",false);
      //create variables so that the JS object's variables will not interfere with jquery's this
      var rightID = this.id;
      var rightCtg = this.ctg;
      var rightTag = this.tag;
      //jquery listen to click
      $(rightID).click(function(){
        if($(rightID).data("toggleBool") == false){
          console.log("YAY");
          applyFilter(rightCtg,rightTag);
          //set toggle bools of all other objects to false
          for (var i = 0; i < tagArray.length; i++) {
            $(tagArray[i].id).data("toggleBool",false);
          };
          //set toggle bool of the active object to true
          $(rightID).data("toggleBool",true);

        }else if($(rightID).data("toggleBool") == true){
          //console.log("NAY");
          //reset the filter
          applyNoFilter(rightTag);
          //set the toggle value to false
          $(rightID).data("toggleBool",false);
        }
    });
  };*/
  //create a collection of tags
  
};