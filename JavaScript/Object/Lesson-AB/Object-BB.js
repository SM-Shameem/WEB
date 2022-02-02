///// OBJECTS METHODS //////////////////////////////////////////////////////////
// 1. javascript object methods
// 2. the (this) keyword
// 3. javascript methods
// 4. accessing object methods
// 5. adding a method to an object
// 6. using built-in methods

////////////////////////////////////////////////////////////////////////////////
var outBB = document.createElement('div');
outBB.setAttribute('id', 'styvarwo');
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
  var varAA = {
    method: function () {
      var varAA = 11;
      var varAB = 22;
      outBB.innerHTML += '<br >varAA + varAB : ' + (varAA + varAB);
    },
  };

  // procedure of calling method through (object)
  varAA.method();
  outBB.innerHTML += '<br >varAA.method : ' + varAA.method;
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
  var varAB = {
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

  varAB.methodOne(11, 22);
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
  var varAA = {
    methodOne: function () {
      this.proOne = arguments[0];
      this.proTwo = arguments[1];
      this.methodThree();
    },
  };

  // add new methods to an existing object
  varAA.methodTwo = function () {
    return this.proOne + this.proTwo;
  },

  varAA.methodThree = function () {
    outBB.innerHTML += '<br >proOne : ' + this.proOne;
    outBB.innerHTML += '<br >proTwo : ' + this.proTwo;
    outBB.innerHTML += '<br >proOne + proTwo : ' + this.methodTwo();
  },

  varAA.methodOne(11, 22);
  outBB.innerHTML += '<br >';

  // use (built-in) method and properties
  var varAB = 'string';
  outBB.innerHTML += '<br >varAB.toUpperCase : ' + varAB.toUpperCase();
  outBB.innerHTML += '<br >varAB.length : ' + varAB.length;
}

////////////////////////////////////////////////////////////////////////////////
outBB.innerHTML += 'ex-ba : object methods | accessing methods';
outBB.innerHTML += '<hr >'; ExBA();
outBB.innerHTML += '<br >ex-bb : using (this) keyword to access members inside methods';
outBB.innerHTML += '<hr>'; ExBB();
outBB.innerHTML += '<br >ex-bc : adding a method to an object | using built-in method';
outBB.innerHTML += '<hr >'; ExBC();
