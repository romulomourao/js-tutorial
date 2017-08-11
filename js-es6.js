//Template Literals

var person = { name: "Romulo", age: "26" };

// ES5
var message = "My name is " + person.name + ".\n" +
"I'm " + (person.age) + " years old";
console.log(message);

//ES6
var message = `My name is ${person.name}
I'm ${person.age} years old`;
console.log(message);