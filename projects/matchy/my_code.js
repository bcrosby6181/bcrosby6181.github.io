//step1
var animal = {};
animal.species = "dog";
animal["name"] = "Greta";
animal.noises = [];
console.log(animal);

//step 2
var noises = [];
noises[0] = "woof";
noises.push("growl");
noises.unshift("bark");
noises[noises.length] = "scratch";
console.log(noises.length);
console.log(noises.length - 1);
console.log(noises);

//step 3
animal["noises"] = noises;
noises.push("pant");
//console.log(animal);
console.log(noises);
//step 4
/* Q.different ways you can access properties on 
objects?
A.  two ways; bracket notation and dot notation

/* Q.different ways you can access elements on 
arrays?

A.  index numbers;  */

//step 5 take a break
//step 6
var animals = [];
animals.push(animal);

var duck = {
    species:"duck",
    name:"Jerome",
    noises: ["quack","honk","sneeze","woosh"]
};

var chameleon = {
    species: "chameleon",
    name: "Camelia",
    noises: ["slurp","squeak","sigh","chirp"]
};

var hedgehog = {
    species: "hedgehog",
    name: "Shilo",
    noises: ["puffing","snuffling","purring","clicking"]
};
animals.push(duck);
animals.push(chameleon);
animals.push(hedgehog);

var dog2 = {
    species:"dog",
    name: "Flash",
    noises: ["ruff","woof","whimper","hmmm-hmmm"]
};

var horse = {
    species:"horse",
    name: "Moses",
    noises: ["whinny","snort","poot","chomp",]
};
animals.push(dog2);
animals.push(horse);

var cat = {
    species:"cat",
    name: "SpongeBob",
    noises:["meow","purr","hiss","growl"]
};

var horse2 = {
    species:"horse",
    name:"Ruby",
    noises:["whinny","snort","chomp","psst"]
};
animals.push(cat);
animals.push(horse2);

console.log(animals.length);

//step7
//an array is the best data structure to use because, 
//have learned how to search objects that are in arrays

var friends = [];
function randomAnimal(){
    var unRounded = Math.random()*animals.length;
    var Rounded = Math.floor(unRounded);
    //console.log(animals[Rounded]);
    var crazyAnimal = animals[Rounded];
    return crazyAnimal;
}

friends.push(randomAnimal().name);
console.log(friends);

animal.friends = friends;
//step8
var search = function(name){
    for(var i = 0; i < animals.length; i++){
     if (name === animals[i].name){
         return animals[i];
     }
   } 
    return null;
};

var edit = function(name,object){
    for(var j = 0; j < animals.length; j++){
     if (name === animals[j].name){
         animals[j] = object;
     }
  }
    
};

var remove = function(name){
    for(var k = 0; k < animals.length; k++){
        if(name === animals[k].name){
            animals.splice(k, 1);
        }
    }    
};

var create = function(object){
    if(object.name.length > 0 && object.species.length > 0){
        for(var l = 0; l < animals.length; l++){
           if (object.name === animals[l].name ){
               return ;
           }
        }
        animals.push(object);
    }
};














