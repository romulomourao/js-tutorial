let person = 
  name =>
    age => 
      city =>
        `My name is ${name}. I'm ${age} years old and I'm from ${city}`;

console.log(person("Romulo")(26)("Niterói"));


let mult = a => b => {
 return a * b;
}

let mult4 = mult(4);

console.log(mult4(10));