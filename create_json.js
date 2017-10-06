var fs = require('fs');
var readline = require('readline');
var old_data = require('./data/input/projects_old_data.js');

//console.log(old_data);
old_data.forEach(function(el,i){
	el.id = i;
});
var old_data_json = JSON.stringify(old_data);
var output_path = 'data/output/old_project_data.json';

fs.writeFile(output_path,old_data_json,function(err){
	if(err){ return console.log(err) };
	console.log('we wrote the file!');
});




/*var r1 = readline.createInterface(process.stdin,process.stdout);

var jsonFile = JSON.stringify(objArray);

if(!fs.existsSync('myData1.json')){
	fs.writeFile('myData1.json', jsonFile, function (err) {
  	if (err) return console.log(err);
  	console.log("we created a new file!");
	});
}else{
	r1.question("The file already exists. Do you want to overwrite it? (Y/N)", function(answer){
		if(answer.toLowerCase().trim() == 'y'){
			fs.writeFile('myData1.json', jsonFile, function (err) {
				if (err) return console.log(err);
				console.log("we overwrote the data file");
				r1.close();
			});
		}else{
			console.log("user is undecided");
			r1.close();
		};

		
	});
	
};


r1.on('close',function(){
	console.log("closing the interface");
	process.exit();
});
*/

/*fs.readFile('myData.json', function(err,data){
  if (err) throw err;
  var jsObj = JSON.parse(data);
  console.log(jsObj[0].name);
});*/