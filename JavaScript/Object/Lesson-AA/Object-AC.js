///// CLASSES //////////////////////////////////////////////////////////////////
// 1. javascript classes
// 2. javascript class syntax
// 3. using a class
// 4. the constructor method
// 5. class method

////////////////////////////////////////////////////////////////////////////////
var outAC = document.createElement('div');
outAC.setAttribute('id', 'styleOne');
document.body.appendChild(outAC);

////////////////////////////////////////////////////////////////////////////////
// # javascript classes and using a class
// ECMAScript 2015, also know as ES6, introduced javascript class
// javascript classes are templates for javascript Objects
// the keyword (class) is used to create javascript class
// always add a built-in method named (constructor())
// javascript class is not an object, it is a template for object

// class is used to create object,
// the (constructor()) method called automatically when a new object is created

function ExCA() {
  class Employee {

    // properties (empName, empPost, and empSalary) are created in constructor() method
    constructor(name, post, salary) {
      this.empName = name;
      this.empPost = post;
      this.empSalary = salary;
    }

    printInfo() {
      outAC.innerHTML += '<br >employee name   : ' + this.empName;
      outAC.innerHTML += '<br >employee post   : ' + this.empPost;
      outAC.innerHTML += '<br >employee salary : ' + this.empSalary;
      outAC.innerHTML += '<br >';
    }
  }

  var empOne = new Employee('jamil', 'execuitve', 35000);
  var empTwo = new Employee('kamal', 'superviser', 25000);
  var empThree = new Employee('sumon', 'manager', 45000);
  empOne.printInfo();
  empTwo.printInfo();
  empThree.printInfo();

  // accessing (empName, empPost, empSalary) properties, are created inside constructor
  var empFour = new Employee('rajib', 'asst. manager', 40000);
  outAC.innerHTML += '<br >employee name   : ' + empFour.empName;
  outAC.innerHTML += '<br >employee post   : ' + empFour.empPost;
  outAC.innerHTML += '<br >employee salary : ' + empFour.empSalary;
  outAC.innerHTML += '<br >';

  empFour.empName = 'palash';
  empFour.empPost = 'director';
  empFour.empSalary = 80000;
  outAC.innerHTML += '<br >employee name   : ' + empFour.empName;
  outAC.innerHTML += '<br >employee post   : ' + empFour.empPost;
  outAC.innerHTML += '<br >employee salary : ' + empFour.empSalary;

  outAC.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # constructor method and class methods
// the constructor method is a special method
// -> it has to have the exact name (constructor)
// -> it is executed automatically when a new object is created
// -> is is used to initialize object properties
// NB: if constructor method is not defined, then javascript add an empty constructor automatically
// NB: class properties are created inside (constructor or class methods) using (this) keyword
// NB: constructor or any member method can call any (property or member method) through (this)
// NB: member method can not call (constructor)

// class methods are created with the same syntax as object method
// after adding constructor, can add any number of class methods
// class method can have parameters

function ExCB() {

  // class with defined constructor
  class ClassOne {
    constructor(argOne, argTwo) {
      this.proOne = argOne;
      this.proTwo = argTwo;

      // constructor calls member method
      outAC.innerHTML += '<br >argOne + argTwo : ' + this.methodTwo();
    }

    methodOne() {
      outAC.innerHTML += '<br >ClassOne - proOne : ' + this.proOne;
      outAC.innerHTML += '<br >ClassOne - proTwo : ' + this.proTwo;
    }

    methodTwo() {
      return this.proOne + this.proTwo;
    }
  }

  // class without undefined constructor
  class ClassTwo {
    methodOne(argOne, argTwo) {
      this.proOne = argOne;
      this.proTwo = argTwo;

      // member method calls another member method
      this.methodTwo();
    }

    methodTwo() {
      outAC.innerHTML += '<br >ClassOne - proOne : ' + this.proOne;
      outAC.innerHTML += '<br >ClassTwo - proTwo : ' + this.proTwo;
    }
  }

  // object created of class with defined constructor
  var objOne = new ClassOne(11, 22);
  objOne.methodOne();

  // object created of class with undefined constructor
  var objTwo = new ClassTwo();
  objTwo.methodOne(10, 20);
}

////////////////////////////////////////////////////////////////////////////////
outAC.innerHTML += 'ex-ca : java script class and using a class';
outAC.innerHTML += '<hr >'; ExCA();
outAC.innerHTML += '<br >ex-cb : constructor and class method';
outAC.innerHTML += '<hr >'; ExCB();
