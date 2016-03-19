//define a variable
//store prompt in the variable 
//parse to Int whatever the user inserts and make the number random *  // whatever the user inserted and floor it down.
//then alert the user with what he entered

var number = prompt("Please put a number");
var InsertedNumber = parseInt(number);
var RandomedNumber = Math.floor(Math.random() * InsertedNumber + 1);
document.write(RandomedNumber);
