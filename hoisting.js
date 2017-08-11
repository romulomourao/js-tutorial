// Exemplo 1
var age = 18;

function myAge() {
  console.log(age);
}

myAge();

console.log(age);

// Exemplo 2

var age = 18;

function myAge() {
  console.log(age);
  var age = 30;
  console.log(age);
}

myAge();

console.log(age);

