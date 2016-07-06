/*function objectValues(obj){
    return Object.keys(obj).map(key => obj[key]);
}

//look at the .map function 
// => arrow function;
// same as return Object.keys(obj).map(function(key){
//    return obj[key;]
//}*/

//BECOME FAMILIAR WITH MAP

function objectValues(obj){
    let output = [];
    for(var key in obj){
        output.push(obj[key]);
    }
    return output;
}

//Should take an object and return all its keys in a string each separated with a space
function keysToString(obj){
    let arr = Object.keys(obj);
    return arr.join(" ");
}
//Should take an object and return all its string values in a string each separated with a space"
function valuesToString(obj){
    var arr = [];
    for (var key in obj){
      if(typeof obj[key] === "string"){ 
      arr.push(obj[key]);
        } 
        
        } return arr.join(" ");
    }
//Should take one argument and return 'array' if its an array and 'object' if its an object"
function arrayOrObject(collection){
    if(Array.isArray(collection) === true){
        return "array";
      } 
    if (typeof collection === 'object'){
        
        return "object";
      }
}

//Should take a string of one word, and return the word with its first letter capitalized

function capitalizeWord(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function capitalizeAllWords(string){
    var splitStr = string.split(" ");
    for (var i = 0; i < splitStr.length; i++){
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);
    }
    return splitStr.join(" ");
}

//Should take an object with a name property and return 'Welcome <Name>!'"

function welcomeMessage(obj){
     if (obj.name !== undefined){
       return "Welcome" + " " + obj.name.charAt(0).toUpperCase() + obj.name.slice(1) + "!"; 
     }
  
}


//Should take an object with a name an a species and return '<Name> is a <Species>'"

function profileInfo(obj){
  if (obj.name !== undefined && obj.species !== undefined){
    return obj.name.charAt(0).toUpperCase() + obj.name.slice(1)+ " is a " + obj.species.charAt(0).toUpperCase() + obj.species.slice(1);
  }
}

//Should take an object, if this object has a noises array return them as a string separated by a space, 
//if there are no noises return 'there are no noises'"

function maybeNoises(obj){
  if(obj.noises !== undefined && obj.noises.length > 0){
    return obj.noises.join(" ");
  }else{
    return "there are no noises";
  }
} 

//Should take a string of words and a word and return 
//true if <word> is in <string of words>, otherwise return false."

function hasWord(string, word){
  if (string.indexOf(word) != -1){
    return true;
  }else {
      return false;
    }
}

function addFriend(name, obj){
  obj.friends.push(name);
  return obj;
}
/*QUnit.test("isFriend() : Should take a name and an object and return true 
                          if <name> is a friend of <object> and false otherwise", function(assert){
      assert.equal(isFriend("jimmy",{friends:["bobby", "ralf"]}), false);
      assert.equal(isFriend("ralf",{friends:["bobby", "ralf"]}), true);
      assert.equal(isFriend("chuck",{}), false); */

function isFriend(name, obj){
  if (obj.friends === undefined){
    return false;
  }else if (obj.friends.indexOf(name) !== -1 ){
    return true;
  }else {return false;
    
  }
        
}

 function nonFriends(name, list){
  var person, output = [];
  for (var i = 0; i < list.length; i++){
       if (list[i].name === name){
         person = list[i];
         break;
         
       }
  }
    if(person){
        for (i = 0; i < list.length; i++){
          if (list[i] !== person){
            if (list[i].name){
              if(person.friends.indexOf(list[i].name) === -1){
                output.push(list[i].name);
              }
            }
          }
        }
    }  return output;
}  

function updateObject(obj,key,value){
    
  obj[key] = value;
  
   return obj;
}

//take an object and an array of strings;  remove any properties on <obj> that 
//are listed in the array
function removeProperties(obj,arr){
  for (var i = 0; i < arr.length; i++){
    delete obj[arr[i]];
   }//return obj;
} 
  
//take an array and return an array with all duplicates removed
//copied from stackoverflow
function dedup(a) {
    var seen = {};
    return a.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}




