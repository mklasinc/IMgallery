var fs = require('fs');
var readline = require('readline');
var objArray = []; //placeholder for person objects

var r1 = readline.createInterface(process.stdin,process.stdout);


/*
//EMPTY PERSON
var person1 = {

	name: " ",
	author: " ",
	link: " ",
	description: " ",
	tech: " ",
	course: " ",
	custom: [" "],
	img_url:

};
*/


var person1 = {

	name: "Breeding Rhythms",
	author: "Abhimanyu Vasishth",
	link: "http://breedingrhythms.herokuapp.com",
	description: "New generations of 8 rhythms each are created based on the rhythms you like.",
	tech: "Digital",
	course: "Mashups",
	custom: ["music", "genetic-algorithms"],
	hashtag: "#music, #genetic-algorithms",
	img_url: "../img/Abhi/img.png",
	index: "1"

};

var person2 = {

	name: "Imagine Science 2015 Home Screen",
	author: "Craig Protzel",
	link: "https://imaginescience.herokuapp.com",
	description: "Interactive collaborative drawing app built with p5.js and socket.io",
	tech: "Digital",
	course: "Mashups",
	custom: ["health", "data-visualization"],
	hashtag: "#p5.js, #socket.io",
	img_url: "../img/Craig/img.png",
	index: "2"

};

var person3 = {

	name: "Tlönator",
	author: "Luis Morales Navarro",
	link: "http://www.materialfictions.com/capstone/",
	description: "“Tlönator” is a system that translates texts from English to Tlönized English",
	tech: "Digital",
	course: "Mashups",
	custom: ["health", "data-visualization"],
	hashtag: "#mashups, #digital, #data-visualization",
	img_url: "../img/Luis/img.png",
	index: "3"

};


var person4 = {

	name: "Malaria Persists",
	author: "Shujaat Mirza",
	link: "http://www.msm622.nyuad.im/MalariaPersists",
	description: "Mashups project that visualises WHO data about Malaria cases from 2000 onwards.",
	tech: "Digital",
	course: "Mashups",
	custom: ["health", "data-visualization"],
	hashtag: "#mashups #data-visualization",
	img_url: "../img/Shujaat/img.png",
	index: "4"
};

var person5 = {

	name: "CONCRÈTE",
	author: "Fah Daengdej",
	link: "http://cargocollective.com/musique-concrete",
	description: "Paper interface DIY kit that aims to foster creative ways of noticing everyday sounds’ musical and narrative potential.",
	tech: "Physical",
	course: "other",
	custom: ["health"],
	hashtag: "#physical #softcircuits",
	img_url: "../img/Fah/img.png",
	index: "5"

};

var person6 = {

	name: "CORNELIUS",
	author: "Maddie Moore, Nada ElAzhary, Reine Defranco",
	link: "http://nme247.nyuad.im/Animation%20project/Animation.html",
	description: "Animation featuring two little creatures:Cornelius and his best friend, Wendell",
	tech: "digital",
	course: "other",
	custom: [],
	hashtag: "#digital #animation #commlab",
	img_url: "../img/Maddie_Nada_Raine/img.png",
	index: "6"

};




objArray.push(person1,person2,person3,person4,person5,person6);
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


/*fs.readFile('myData.json', function(err,data){
  if (err) throw err;
  var jsObj = JSON.parse(data);
  console.log(jsObj[0].name);
});*/