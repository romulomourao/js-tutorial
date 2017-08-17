# Javascript Basics

# OO em JS

## `this` and `bind` keywords

```js

let dog = {
  sound :'woof',
  talk: function() {
    console.log(this.sound);
  }
}

dog.talk(); //woof

let talkFunction = dog.talk;
talkFunction(); // undefined
```

[exemplo](https://jsbin.com/yayesan/edit)


## Prototype

```js

function talk() {
  console.log(this);
  console.log(this.sound);
}

let animal = {
  talk
}

let cat = {
  sound: "Meow!!!"
}

cat.talk();
Object.setPrototypeOf(cat, animal);
cat.talk(); 

```

## The `new` keyword


```js
function Person(saying){
  this.saying = saying
}

Person.prototype.talk = function() {
  console.log('I say', this.saying);
}

var romulo = new Person('Hello world!');
romulo.talk();
```
- What does the `new` keyword do?

1. Create a new object

```js
function new(){
  var obj = {}
}
```
2. Set the prototype

```js
function new(constructor){
  var obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);
}
```
3. Execute constructor with `this`

```js
function new(constructor){
  var obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);
  var argsArray = Array.prototype.slice.apply(arguments);
  constructor.apply(obj, argsArray.slice(1));
}
``` 
4. Return the created object

```js
function new(constructor){
  var obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);
  var argsArray = Array.prototype.slice.apply(arguments);
  constructor.apply(obj, argsArray.slice(1));
  return obj;
}

var romulo = new(Person, "Hello world!");
``` 

## `__proto__` and `prototype`


- Delegation, (Pen example)

```js
let cat = { breed: 'munchkin' };
let myCat = { name: 'Lily' };
Object.setPrototypeOf(myCat, cat);

console.log(myCat.__proto__); 

```

- `__proto__` -> Property of an object that references the prototype that have been set for that object
- `prototype` -> Property of a function (only functions have it) that is set as a propoerty if you use the `new` keyword

## Object.create ()

- Static method on object prototype that creates a new object with the prototype set to a certain object
- More natural than the `new` keyword
- Do not use `setProtoypeOf` and `Pbject.assign`, use `object.create` instead

```js
const person = {
greeting: function() {
	console.log(this.sound);
	}
}

let romulo = Object.create(person);
romulo.sound = "Hello";

console.log(romulo); //{ }

```

## the `class` keyword

- JS does not have classes.
- The class keyword it's just syntax sugar
- typeof someClass is a function
- You cannot set private attributes
---

- Não há um "jeito certo" de criar objetos no JS

## Composition x Inheritance

![](2017-08-15-15-09-47.png)

>The problem with object-oriented languages is they’ve got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana and the entire jungle.” ~ Joe Armstrong

```js

```

- Links
  - [Factory Functions](https://youtu.be/ImwrezYhw4w)
  - [Composition x Inheritance](https://youtu.be/ImwrezYhw4w)