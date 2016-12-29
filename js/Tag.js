function Tag(category,selector){
    this.ctg = category
    this.tag = selector;
    this.id = "#filter-" + selector;
    //this.boolean = false;

    this.click = function(){
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
  }
  //create a collection of tags
  tagArray.push(this);
};