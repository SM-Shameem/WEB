///// ClASS INTRODUCTION ///////////////////////////////////////////////////////
// 1. javascript classes
// 2. using a class
// 3. the constructor method
// 4. class methods

////////////////////////////////////////////////////////////////////////////////
var outDA = document.createElement('div');
outDA.setAttribute('id', 'styleOne');
document.body.appendChild(outDA);

////////////////////////////////////////////////////////////////////////////////
// # class syntax | using class
// ECMAScript 2015, also known as ES6, introduced javascript classes
// javascript classes are templates for javascript object
// -> use the (class) keyword to create a class
// -> always add a method named (constructor())
// -> inside (constructor) we can define (properties) using (this) keyword
// NB : javascript (class) is not an (object), it is a (template) for (object)

// after creating a (class), can use the (class) to create (objects)
// NB : the (constructor) method is called automatically when a new-object is created

function ExAA() {

  // class defination with constructor
  class Student {
    constructor(name, age) {
      this.sName = name;
      this.sAge = age;

      this.printInfo();
    }

    printInfo() {
      outDA.innerHTML += '<br >student name : ' + this.sName;
      outDA.innerHTML += '<br >student age  : ' + this.sAge;
    }
  }

  var studentOne = new Student('Sumon', 23);
  var studentTwo = new Student('Palash', 22);
  outDA.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # class constructor | class methods
// the (constructor) method is a special method -
// -> it has to have the exact name (constructor)
// -> it is executed automatically when a new-object is created
// -> it is used to initialize object-properties
// if you do not define a constructor, javascript will add an empty-constructor automatically

// class-method are created with the same syntax as object-methods
// inside class defination, after the (constructor) if define, then add any number of methods

// class-method can have (arguments and return-type)
// constructor only has (agruments), constructor does not (return)
// NB : class-properties must be (methods)

function ExAB() {

  // class with - defined constructor
  // class properties must be constructor or method
  // (function) keyword is not used to define constructor or method
  class ClassAA {
    constructor() {
      var localOne = 10;
      this.proOne = localOne;
      this.proTwo = arguments[0];
    }

    printValue() {
      outDA.innerHTML += '<br >ClassAA - proOne : ' + this.proOne;
      outDA.innerHTML += '<br >ClassAA - proTwo : ' + this.proTwo;
    }
  }

  var varAA = new ClassAA(20);
  varAA.printValue();
  outDA.innerHTML += '<br >';

  // class with - undefined constructor
  class ClassAB {
    getValue(arg) {
      const constOne = 11;

      this.proOne = constOne;
      this.proTwo = arg;
      this.proThree = arguments[1];
    }

    printValue() {
      outDA.innerHTML += '<br >ClassAB - proOne   : ' + this.proOne;
      outDA.innerHTML += '<br >ClassAB - proTwo   : ' + this.proTwo;
      outDA.innerHTML += '<br >ClassAB - proThree : ' + this.proThree;
    }
  }

  var varAB = new ClassAB();
  varAB.getValue(22, 33);
  varAB.printValue();
  outDA.innerHTML += '<br >';

  // class with - class-properties must be method
  // constructor can call methods and methods can call other methods of same class
  // but methods cannot call constructor
  class ClassAC {

    // proOne = 11;
    // proTwo: 22,
    // this.proThree = 33,
    // this.proFour: 44;
    constructor(arg) {
      this.proOne = arg;
      this.proTwo = arguments[1];

      this.printValue();
    }

    sumValue() {
      return this.proOne + this.proTwo;
    }

    printValue() {
      outDA.innerHTML += '<br >ClassAC - proOne : ' + this.proOne;
      outDA.innerHTML += '<br >ClassAC - proTwo : ' + this.proTwo;
      outDA.innerHTML += '<br >ClassAC - sum    : ' + this.sumValue();
    }
  }

  var varAC = new ClassAC(111, 222);
  outDA.innerHTML += '<br >';

  // class with - arguments and returns
  // constructor has no return type and methods can not call constructor
  class ClassAD {
    constructor(argOne, argTwo) {
      this.proOne = argOne;
      this.proTwo = argTwo;
      this.proThree = arguments[2];

      // return this.proOne + this.proTwo;
    }

    getValue() {
      this.proFour = arguments[0];

      // return this.proFour + this.constructor();
      return this.proFour + this.proThree;
    }

    printValue() {
      outDA.innerHTML += '<br >ClassAD - proOne   : ' + this.proOne;
      outDA.innerHTML += '<br >ClassAD - proTwo   : ' + this.proTwo;
      outDA.innerHTML += '<br >ClassAD - proThree : ' + this.proThree;
      outDA.innerHTML += '<br >ClassAD - proFour  : ' + this.proFour;
      outDA.innerHTML += '<br >ClassAD - getValue : ' + this.getValue(this.proOne + this.proTwo);
    }
  }

  var varAD = new ClassAD(101, 202, 303);
  varAD.printValue();
}

////////////////////////////////////////////////////////////////////////////////
outDA.innerHTML += 'ex-aa : class syntax | using class';
outDA.innerHTML += '<hr >'; ExAA();
outDA.innerHTML += '<br >ex-ab : class constructor | class methods';
outDA.innerHTML += '<hr >'; ExAB();
