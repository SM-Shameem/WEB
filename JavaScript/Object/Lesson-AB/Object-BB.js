///// OBJECTS METHODS //////////////////////////////////////////////////////////
// 1. javascript object methods
// 2. the (this) keyword
// 3. javascript methods
// 4. accessing object methods
// 5. adding a method to an object
// 6. using built-in methods

////////////////////////////////////////////////////////////////////////////////
var outBB = document.createElement('div');
outBB.setAttribute('id', 'styleTwo');
document.body.appendChild(outBB);

////////////////////////////////////////////////////////////////////////////////
// # object methods | accessing methods
// javascript methods are actions that can be performed on objects
// a javascript (methods) is a property containing a (function defination)
// jvascript (methods) are (functions) stored as (object properties)

// accessing javascript methods is as same as accessing property (as attribute)
// -> attribute does not have any parentheses but method has parentheses just followed by name
// -> if any method called without parentheses (like attribute), then it will show its defination

function ExBA() {
  let letAA = {
    method: function () {
      var varAA = 11;
      var varAB = 22;
      outBB.innerHTML += '<br >varAA + varAB : ' + (varAA + varAB);
    },
  };

  // procedure of calling method through (object)
  letAA.method();
  outBB.innerHTML += '<br >letAA.method : ' + letAA.method;
  outBB.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # using (this) keyword to access members inside methods
// in a function defination, (this) refers to the (owner) of the function
// so, in-case of stand-alone function, the value of (this) is (global-object)
// so, in-case of object-method, the value of (this) is (object-name)

function ExBB() {
  // procedure of calling method (through object) and (inside object)
  // using method (arguments and return) statements
  let letAB = {
    methodOne: function () {
      this.proOne = arguments[0];
      this.proTwo = arguments[1];
      this.methodTwo();
      outBB.innerHTML += '<br >methodTwo : ' + this.methodTwo();
      outBB.innerHTML += '<br >methodTwo : ' + this.methodTwo;
    },

    methodTwo: function () {
      outBB.innerHTML += '<br >proOne : ' + this.proOne;
      outBB.innerHTML += '<br >proTwo : ' + this.proTwo;
      return this.proOne + this.proTwo;
    },
  };

  letAB.methodOne(11, 22);
  outBB.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # adding a method to an object | using built-in method
// adding a new method to an existing object is same as adding a new property (as attribute)
// -> in case of attribute, assign value,
// -> but in case of method have to assign function defination

// toUpperCase() is a built-in method of the (string) object - to convert text to uppercase
// follow the object reference for (methods and properties)

function ExBC() {
  let letAA = {
    methodOne: function () {
      this.proOne = arguments[0];
      this.proTwo = arguments[1];
      this.methodThree();
    },
  };

  // add new methods to an existing object
  letAA.methodTwo = function () {
    return this.proOne + this.proTwo;
  },

  letAA.methodThree = function () {
    outBB.innerHTML += '<br >proOne : ' + this.proOne;
    outBB.innerHTML += '<br >proTwo : ' + this.proTwo;
    outBB.innerHTML += '<br >proOne + proTwo : ' + this.methodTwo();
  },

  letAA.methodOne(11, 22);
  outBB.innerHTML += '<br >';

  // use (built-in) method and properties
  let letAB = 'string';
  outBB.innerHTML += '<br >letAB.toUpperCase : ' + letAB.toUpperCase();
  outBB.innerHTML += '<br >letAB.length : ' + letAB.length;
}

////////////////////////////////////////////////////////////////////////////////
outBB.innerHTML += 'ex-ba : object methods | accessing methods';
outBB.innerHTML += '<hr >'; ExBA();
outBB.innerHTML += '<br >ex-bb : using (this) keyword to access members inside methods';
outBB.innerHTML += '<hr>'; ExBB();
outBB.innerHTML += '<br >ex-bc : adding a method to an object | using built-in method';
outBB.innerHTML += '<hr >'; ExBC();
