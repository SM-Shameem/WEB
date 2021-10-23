///// FUNCTION DEVINATION //////////////////////////////////////////////////////
// 01. javascript function defination
// 02. function declaration
// 03. function expression
// 04. the function constructor
// 05. function hosting
// 06. self-invoking function
// 07. function can be used as variable
// 08. functions are objects
// 09. arrow functions

////////////////////////////////////////////////////////////////////////////////
var outBA = document.createElement('div');
outBA.setAttribute('id', 'styleOne');
document.body.appendChild(outBA);

////////////////////////////////////////////////////////////////////////////////
// # javascript function defination | function declaration
// -> javascript functions are defined with the (function) keyword
// -> you can use a function declaration or a function expression

function ExAA() {

  // -> earlier in this tutorial, you learned that functions are declared with the following syntax
  // -> declared functions are not executed immediately, they are saved for later use,
  //    and will be executed later, when they are invoked (called upon)
  // -> semicolons are used to separate executable javascript statement
  // -> since a function declaration is not an executable statement,
  //    it is not common to end it with a semicolon
  // ---------------------------------------------------------------------------

  function funcName(parameter) {
    outBA.innerHTML += '<br >funcName-parameter : ' + parameter;
  }

  function myFunction(a, b) {
    return a * b;
  }

  funcName(10);
  outBA.innerHTML += '<br >myFunction return : ' + myFunction(11, 22);
  outBA.innerHTML += '<br >';

  // === syntax mainpulation practice ==========================================

  function funcAA(argOne, argTwo, argN) {
    let local = argOne + argTwo;

    if (local < argN) return argOne + argTwo;
    else outBA.innerHTML += '<br >argOne - argTwo : ' + (argOne - argTwo);
  }

  outBA.innerHTML += '<br >argOne + argTwo : ' + funcAA(10, 20, 40);
  funcAA(20, 30, 40);
  outBA.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # function expression | arrow function

function ExAB() {

  // -> a javascript function can also be defined using an expression
  // -> a function expression can be stored in a variable
  // -> after a function expression has been stored in a variable,
  //    the variable can be used as a function
  // -> the function above is actually an anonymous function (a function without a name)
  // -> function stored in variables do not need function names
  //    they are always invoked (called) using the variable name
  // -> using (const) is safer than using (var), cause function expression is always constant value
  // -> the function above ends with a semicolon because it is a part of an executable statement
  // ---------------------------------------------------------------------------

  const constAA = function (argOne, argTwo) {
    return argOne * argTwo;
  };

  outBA.innerHTML += '<br >return of constAA : ' + constAA(11, 22);

  // -> arrow function allows a short syntax for writing function expressions
  // -> you don't need the function keyword
  // -> arrow function are not hoisted. they must be defined before they are used
  // -> can only omit (return) keyword and curly brackets if the function is a single statement
  //    because of this, it might be a good habit to always keep them -
  // -> arrow function do not have their own (this). they are not well suited for defining methods
  // ---------------------------------------------------------------------------

  // ES5
  const constAB = function (argOne, argTwo) {
    return argOne * argTwo;
  };

  // ES6
  const constAC = (argOne, argTwo) => argOne * argTwo;

  outBA.innerHTML += '<br >return of constAB : ' + constAB(30, 40);
  outBA.innerHTML += '<br >return of constAC : ' + constAC(50, 60);
  outBA.innerHTML += '<br >';

  // === syntax mainpulation practice ==========================================

  // practice-a : function expression with function name - but invocked using its variable
  const constAD = function FuncOne(argOne, argTwo) {
    outBA.innerHTML += '<br >argOne + argTwo : ' + (argOne + argTwo);
  };

  constAD(30, 40);

  // FuncOne(50, 60);

  // practice-b : function expression ends with semicolone and stored in a variable
  // using (const) is better than using (var) because function expression is const value
  // constAE()    // function expression is not hoisted
  var varAE = function () {
    outBA.innerHTML += '<br >function expression - as (var)';
  };

  let letAF = function () {
    outBA.innerHTML += '<br >function expression - as (let)';
  };

  varAE();
  letAF();
  outBA.innerHTML += '<br >';

  // practice-c : arrow function
  const constAG = () => {
    outBA.innerHTML += '<br >arrow function';
  };

  // short syntax of arrow function
  var varAH = arg => arg + 10;

  // arrow function
  let letAI = (argOne, argTwo) => {
    let local = argOne + argTwo;
    return local;
  };

  constAG();
  outBA.innerHTML += '<br >return of arrow-varAH : ' + varAH(10);
  outBA.innerHTML += '<br >return of arrow-letAI : ' + letAI(11, 22);
  outBA.innerHTML += '<br >';

  // arrow function and (this) keyword - constructor
  // arrow function is not well suited for defining object method
  function FuncAJ() {
    this.proOne = arguments[0];
  }

  const ConstAK = function () {
    this.proOne = arguments[0];
  };

  const ConstAL = (arg) => {
    this.proOne = arg;
  };

  let letFunc = new FuncAJ(11);
  let letExpr = new ConstAK(22);

  // let letArro = new ConstAL(33);

  outBA.innerHTML += '<br >letFunc.proOne : ' + letFunc.proOne;
  outBA.innerHTML += '<br >letExpr.proOne : ' + letExpr.proOne;

  // outBA.innerHTML += '<br >letArro.proOne : ' + letArro.proOne;
  outBA.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// the function constructor | functions are object

function ExAC() {

  // -> functions are defined with the (function) keyword
  // -> functions can also be defined with a built-in javascript function constructor (Function())
  //    you actually don't have to use the function constructor
  //    NB - most of the time, you can avoid using the (new) keyword in javascript
  // ---------------------------------------------------------------------------

  // function defined with (Function) constructor
  const constAA = new Function(
    'argOne', 'argTwo',
    'if(argOne < argTwo) return argOne * argTwo; else return arguments.length;'
  );

  // function defined with function-expression
  const constAB = function (argOne, argTwo) {
    if (argOne < argTwo) return argOne * argTwo;
    else return arguments.length;
  };

  outBA.innerHTML += '<br >constAA-return : ' + constAA(10, 20);
  outBA.innerHTML += '<br >constAB-return : ' + constAB(30, 40);
  outBA.innerHTML += '<br >';

  // -> the (typeof) operator in javascript returns (function) for function
  //    but, javascript functions can best be described as objects
  // -> javascript functions have both (properties and methods)
  // -> the (arguments.length) property returns the number of arguments
  //    received when the function was invoked
  // -> the (toString()) method returns the function as a string
  // -> NB - a function defined as the property of an object, is called a method to the object
  // -> NB - a function designed to create new object, is called an object constructor
  // ---------------------------------------------------------------------------

  // typeof function - function
  outBA.innerHTML += '<br >constAA typeof : ' + typeof constAA;
  outBA.innerHTML += '<br >constAB typeof : ' + typeof constAB;

  // the (length) properties is count the function-arguments
  outBA.innerHTML += '<br >constAA arg.length : ' + constAA(3, 2, 1);
  outBA.innerHTML += '<br >constAB arg.length : ' + constAB(1);
  outBA.innerHTML += '<br >';

  // using (toString)
  const constAC = function (arg) {
    return arg * 10;
  };

  const constAD = function (arg) {
    return (arg * 10).toString();
  };

  outBA.innerHTML += '<br >constAC (toString) + 10 : ' + (10 + constAC(10).toString());
  outBA.innerHTML += '<br >constAC + 10 : ' + (10 + constAC(10));
  outBA.innerHTML += '<br >constAD + 10 : ' + (10 + constAD(10));
  outBA.innerHTML += '<br >';

  // function as object-method
  const constBA = {
    proOne: null,
    proTwo: null,
    method: function () {
      return this.proOne + this.proTwo;
    },
  };

  constBA.proOne = 10;
  constBA.proTwo = 20;
  outBA.innerHTML += '<br >constBA.method : ' + constBA.method();

  // function as object-constructor
  const ConstBB = function () {
    this.proOne = arguments[0];
    this.proTwo = arguments[1];
    this.method = function () {
      return this.proOne + this.proTwo;
    };
  };

  const constBB = new ConstBB(11, 22);
  outBA.innerHTML += '<br >constBB.method : ' + constBB.method();
  outBA.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # self-invoking | used as variable | function hosting

function ExAD() {

  // -> function expressions can be made 'self-invoking'
  // -> a self-invoking expression is invoked (started) automatically, without being called
  // -> function expression will execute automatically if the expression is followed by ()
  // -> you cannot self-invoked a function declaration
  // -> add parentheses around the function to indicate that it is a function expression
  // -> NB: the function above is actually an (anonymous self-invoking function)
  // ---------------------------------------------------------------------------

  // self-invoked function-expression
  const constAA = (function () {
    outBA.innerHTML += '<br >self-invoked ' + arguments[0] + '-expression';
  })('constAA');

  // self-invoked arrow-expression
  const constAB = ((arg) => {
    outBA.innerHTML += '<br >self-invoked ' + arg + '-expression';
  })('constAB');

  // self-invoked function-expression - is allowed but not good practice
  const constAC = function () {
    outBA.innerHTML += '<br >self-invoked ' + arguments[0] + '-expression';
  }('constAC');

  // self-invoked arrow-expression does not allowed only () at the end like expression
  // const constAD = (arg) => {
  //   outBA.innerHTML += '<br >self-invoked ' + arg + '-expression';
  // }('constAD');

  // self-invoked function-declaration
  (function funcAA() {
    outBA.innerHTML += '<br >self-invoked ' + arguments[0] + '-declaration';
  })('funcAA');

  outBA.innerHTML += '<br >';

  // -> javascript function can be used as values
  // -> javascript function can be used in expressions
  // ---------------------------------------------------------------------------

  // function used as value
  function funcBA() {
    let local = 10;
    return arguments[0] + local;
  }

  // function expression used as value
  const constBA = function () {
    let local = 10;
    return arguments[0] + local;
  };

  // arrow expression used as value
  const constBB = arg => {
    let local = 10;
    return arg + local;
  };

  let letBA = funcBA(11) * 10;
  let letBB = constBA(22) * 20;
  let letBC = constBB(33) * 30;

  outBA.innerHTML += '<br >letBA : ' + letBA;
  outBA.innerHTML += '<br >letBB : ' + letBB;
  outBA.innerHTML += '<br >letBC : ' + letBC;
  outBA.innerHTML += '<br >';

  // self-invoked function expression as expression
  let letBD = (function () {
    let local = 10;
    return arguments[0] + local;
  })(44) * 40;

  // self-invoked arrow expression as expression
  let letBE = (arg => {
    let local = 10;
    return arg + local;
  })(55) * 50;

  outBA.innerHTML += '<br >letBD : ' + letBD;
  outBA.innerHTML += '<br >letBE : ' + letBE;
  outBA.innerHTML += '<br >';

  // -> hoisting is js default behavior of moving declarations to the top of the current scope
  // -> hoisting applies to variable declarations and to function declarations
  // -> because of this, javascript functions can be called before they are declared
  // -> NB: function defined using an expression are not hoisted
  // ---------------------------------------------------------------------------

  // function declaration is hoisted
  funcCA('before');

  // function expression and arrow expression are not hoisted
  // constCB('before');
  // constCC('before');

  function funcCA(arg) {
    outBA.innerHTML += '<br >funcCA - ' + arg;
  }

  const constCB = function (arg) {
    outBA.innerHTML += '<br >constCB - ' + arg;
  };

  const constCC = arg => {
    outBA.innerHTML += '<br >constCC - ' + arg;
  };

  funcCA('after');
  constCB('after');
  constCC('after');
  outBA.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
outBA.innerHTML += 'ex-aa : function defination | function declaration';
outBA.innerHTML += '<hr >'; ExAA();
outBA.innerHTML += '<br >ex-ab : function expression | arrow function';
outBA.innerHTML += '<hr >'; ExAB();
outBA.innerHTML += '<br >ex-ac : the function constructor | functions are object';
outBA.innerHTML += '<hr >'; ExAC();
outBA.innerHTML += '<br >ex-ad : self-invoking | function hosting | used as variable';
outBA.innerHTML += '<hr >'; ExAD();
