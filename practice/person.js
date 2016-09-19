var kanye = {};

kanye.firstName = 'Kanye'
kanye.firstName // 'Kanye'
kanye.lastName = 'West'
kanye.fullName = function(){
  return this.firstName + ' ' + this.lastName
}
kanye.fullName(); // 'Kanye West'

var beyonce = { // }:
  firstName: "Beyonce",
  lastName: "Knowles(sp?)"
}

var jayZ = { // };
  firstName: "Jay", // "Sean???"
  lastName: "Z" // "Carter???"
}

function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
  this.fullName = function(){
    console.log('Defining full name!')
    return this.firstName + ' ' + this.lastName
  }
}

Person.prototype.fullName = function(){
  return this.firstName + ' ' + this.lastName
}

Object.getPrototypeof(kanye)
// Object

var kim = new Person ('Kim', 'West ne Kardashian')

function fourOhFoursNew (constructor){
  var object = {};
  object.constructor = constructor;
  object.constructor(arguments);
  return object;
};

fourOhFoursNew(Person);

function Dog(name){
  this.name = name;
  // this.bark = function(){
  //   console.log(`${this.name} says 'Woof!'`)
  // }
}

Dog.prototype.bark = function(){
  console.log('Woof!')
}

// add 'bark' function... console.log('Woof')
// instantiate a new dog and test bark


function Pet(name){
  this.name = name;
}

Pet.prototype.sayHi = function(){
  console.log("Hello, welcome home!");
}

// Dog.prototype = Pet.prototype; // do not do this!
Dog.prototype = Object.create (Pet.prototype ); // inherit from Pet for Dog
Dog.prototype.constructor = Dog; // clarify that you want to use Dog contructor for Dog still


// as of ES6...
class Dog(name) {
  constructor: function(){
    this.name = name;
  }
  bark: function(){
    console.log('Bark!');
  }
  woof: function(){
    console.log('Woof!');
  }
}

// or...

class Dog(name) {
  constructor(name){
    this.name = name;
  }
  bark(){
    console.log('Bark!');
  }
  woof(){
    console.log('Woof!');
  }
}

class Animal {
  sayHello(){
    console.log("I'm an animal!!!");
  }
}

class Dog extends Animal {
  contructor(name){
    super(); // enables access to function body, like in Ruby
    this.name = name;
  }

}
