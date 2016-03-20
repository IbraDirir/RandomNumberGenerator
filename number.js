//define a variable
//store prompt in the variable 
//parse to Int whatever the user inserts and make the number random *  // whatever the user inserted and floor it down.
//then alert the user with what he entered
var input1 = prompt("Please input starting number");
var FirstNumber = parseInt(input1);
var number = prompt("Please put a number");
var InsertedNumber = parseInt(number);
var RandomedNumber = Math.floor(Math.random() * (InsertedNumber - FirstNumber)) + FirstNumber;
alert(RandomedNumber);
