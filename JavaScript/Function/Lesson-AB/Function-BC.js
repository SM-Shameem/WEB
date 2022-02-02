///// FUNCTION INVOCATION //////////////////////////////////////////////////////
// 01. javascript function invocation
// 02. invoking a javascript function
// 03. invoking a function as a function
// 04. the (this) keyword
// 05. the Global object
// 06. invoking a function as a method
// 07. invoking a function with a function constructor

////////////////////////////////////////////////////////////////////////////////
var outBC = document.createElement('div');
outBC.setAttribute('id', 'styleOne');
document.body.appendChild(outBC);

////////////////////////////////////////////////////////////////////////////////
// # function invocation | invoking a function | invoking a function as a function
// -> code inside javascript (function) will execute when something invoke (call) it
// -> the code inside a function is not executed when the function is defined
// -> the code inside a function is executed when the function is invoked (called)

// -> function does not belong to any object,
//    but in javascript there is always a default global object
// -> in HTML the default (global-object) is the (HTML page) itself,
//    so the function above belongs to the (HTML-page)
// -> in a browser the (page-object) is the (browser-window),
//    the function above automatically becomes a (window) function
// NB: function() or window.function() has the same effect on invoke,
//     but (window.function()) is not good practice,
//     cause (global-variables, methods, and functions) can easily create name confilicts

function ExCA() {
  function funcAA() {
    outBC.innerHTML += '<br >funcAA-object : ' + this;
  }

  funcAA();

  // inside a function the global-object like (window) will not work
  // because scope of a function is local not global
  // window.funcAA();
  outBC.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # the (this) keyword | the Global object
// -> in javascript the (this) keyword is the object that owns the current code
// -> the value of (this), when used in a function, is the object that owns the function
// NB: note that (this) is not a variable. it is a keyword, you cannot change the value of (this)

// -> when a function is called without an owner object,
//    the value of (this) becomes the (global object)
// -> in a (web browser) the (global object) is the (browser) window
// NB: invoking a function as a (global-function),
//     causes the vlaue of (this) to be the (global-object)
//     using the (window) object as a variable can easily crash the program

function ExCB() {
  const constAA = {
    method: function () {
      outBC.innerHTML += '<br >constAA.method : ' + this;
    },
  };

  const constAB = function () {
    outBC.innerHTML += '<br >constAC : ' + this;
  };

  constAA.method();
  constAB();
  outBC.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # invoking a function as a method | invoking a function with a function constructor
// -> in javascript you can define functions as object method
// -> object-method is a function and object is the owner of that object-method or function
// -> the thing called (this) is the object that owns the javascript code
// NB: invoking a function as an object-method, causes the value of (this) to be the (object-itself)

// -> if a function invocation is preceded with the (new) keyword, it is a (constructor) invocation
// -> it looks like you create a (new) function, but since javascript functions are objects
//    you actually create a new-object
// -> a (constructor) invocation creates a new object,
//    the new-object inherits the (properties and methods) from its (constructor)
// NB: the (this) keyword in the (constructor) does not have a value
//     the value of (this) will be the new-object created when the function is invoked

function ExCC() {
  const constAA = {
    method: function () {
      outBC.innerHTML += '<br >object-method invockation : ' + this;
    },
  };

  const ConstAB = function () {
    outBC.innerHTML += '<br >constructor invocation : ' + this;
  };

  const ConstAC = function () {
    this.method = function () {
      outBC.innerHTML += '<br >constructor-method invocation : ' + this;
    };
  };

  constAA.method();
  var varAB = new ConstAB();
  var varAC = new ConstAC();
  varAC.method();
  outBC.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
outBC.innerHTML += 'ex-ca : invocation | invoking a function | invoking a function as a function';
outBC.innerHTML += '<hr >'; ExCA();
outBC.innerHTML += '<br >ex-cb : the (this) keyword | the Global object';
outBC.innerHTML += '<hr >'; ExCB();
outBC.innerHTML += '<br >ex-cc : invoking as a method | invoking as a constructor';
outBC.innerHTML += '<hr >'; ExCC();
