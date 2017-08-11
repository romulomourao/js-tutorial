var person = {name: "Romulo", age: 26, city: "Niterói"};

var { name, age, city } = person;

var obj = {
  name,
  age,
  city
}

console.log(name, age, city);
console.log(obj);