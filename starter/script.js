"use strict";
/*
//1. Constructor function and the new operator
//Constructor function can be created with function declaration and function expression
//Arrow function cannot be used since they do not have their own this key word
//Constuctor function name starts with capital letter

const Person = function (firstName, birthYear) {
  //Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Declaring methods in the constuctor function is a bad practice
  //It could lead to performance issues due to creating many coppies of
  // the same method.
  // this.calcAge = function () {
  //   console.log(2037 - birthYear);
  // };
};

//Constructor functions are called with the new operator
//When constuctor function are called four steps are happened:

//1. New empty object ({}) is created
//2. Function is called, this key word point to the new object
//3. Object is linked to prototype
//4. Function automaticaly return the new object.

// Creating new object from the Person constructor function and stored in variable
const marian = new Person("Marian", 1991);
const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);
console.log(marian, matilda, jack);

console.log(marian instanceof Person);

//static methods on construction function
Person.hey() = function() {
  console.log("Hey there!");
}

Person.hey()

//2. Prototypes

//Methods are attached to constructor function prototype property which includes
//all of the constructor functions properties and methods.
//In this way the method only exits in the Person prototypes property instead of being
//created in every instance of the function
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

marian.calcAge();

console.log(marian.__proto__);
//the prototype of the matian object is the Person.prototype property
console.log(marian.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(marian));

Person.prototype.species = "Homo Sapiens";
console.log(marian.species, jack.species);

console.log(marian.hasOwnProperty("firstName"));
console.log(marian.hasOwnProperty("species"));

//Prototype inheritance on built-in objects
console.log("----------------------------");
console.log(marian.__proto__);
console.log(marian.__proto__.__proto__);
//Object.prototype the top of prototype chain
console.log(marian.__proto__.__proto__.__proto__);
console.dir(Person.prototype.constructor);

const arr = [1, 3, 3, 4, 5, 6]; // === new Array()
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
*/

//Es6 classes

//class Expression
// const PersonClExp = class {};
//class declaration
/*
class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Methods added to .prototype property = instances methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey, ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert("This is not a full name!");
  }

  get fullName() {
    return this._fullName;
  }

  //static method added only on class and not on istances
  static hey() {
    console.log("Hey, There!");
  }
}

const jessica = new Person("Jessica Davis", 1995);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);
console.log(jessica.__proto__ === Person.prototype);

// Person.prototype.greet = function () {
//   console.log(`Hey, ${this.firstName}`);
// }; same as declaring the method inside the class declaration
jessica.greet();

//1. Classes are not hoisted
//2. Classes are first-class citizens: we can be
// passed them into functions and be returned by them
//3. Classes can be only executed in strict mode

//Getters and setters

const account = {
  owner: "Johnas",
  movements: [200, 120, 300, -110],

  //getter
  get latest() {
    return this.movements.slice(-1).pop();
  },

  //setter
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
//adding value with setter
account.latest = 50;
console.log(account.movements);
*/

//Object.create()
/*
const PersonProto = {
  calcAge() {
    return 2037 - this.birthYear;
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
steven.name = "Steven";
steven.birthYear = 2002;
console.log(steven.calcAge());
console.log(steven);
console.log(PersonProto);
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1978);
console.log(sarah.calcAge());
*/
//Inheretance between classes: constuctor function
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and study ${this.course}`);
};

const mike = new Student("Mike", 2020, "Compurer Science");
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
*/
//Class inheritance through ES6 classes
/*
class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Methods added to .prototype property = instances methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey, ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert("This is not a full name!");
  }

  get fullName() {
    return this._fullName;
  }

  //static method added only on class and not on istances
  static hey() {
    console.log("Hey, There!");
  }
}

class Student extends Person {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}.`);
  }
}

const martha = new Student("Martha Daves", 2012, "Computer Science");

martha.introduce();
martha.calcAge();
*/

//Class inheritance through Object.create()
/*
const PersonProto = {
  calcAge() {
    return 2037 - this.birthYear;
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

const jay = Object.create(StudentProto);
StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

jay.init("Jay", 2010, "Computer Science");
jay.introduce();
console.log(jay.calcAge());
*/
//Encapsulation: Class fields and methods
// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// Stativ Version of these 4

class Account {
  //Public fields
  locale = navigator.language;
  bank = "Bankist";
  //Private field
  #movements = [];
  #pin;

  constructor(owner, curr, pin) {
    this.owner = owner;
    this.curr = curr;
    this.#pin = pin;
    // this.movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for openning an account, ${this.owner}`);
  }

  //Public methods

  get movements() {
    return this.#movements;
  }

  //Private method
  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved!`);
    }

    return this;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  //Static version of them
  static testPublic() {
    console.log("Test Public");
  }

  static #testPrivate() {
    console.log("Test Public");
  }
}

const acc1 = new Account("Marian", "LV", 1111);
// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);

//chaining methods
acc1
  .deposit(5000)
  .withdraw(500)
  .withdraw(100)
  .requestLoan(25000)
  .withdraw(5000);
console.log(acc1);
