///// CLOSURES-SCOPE ///////////////////////////////////////////////////////////
// 01. Function Closures
// 02. Scope

////////////////////////////////////////////////////////////////////////////////
var outCB = document.createElement('div');
outCB.setAttribute('id', 'styleTwo');
document.body.appendChild(outCB);

////////////////////////////////////////////////////////////////////////////////
// # function closures
// 1. global variables
// 2. variable lifetime
// 3. a counter dilemma
// 4. javascript nested functions
// 5. javascript closures
// 6. example explained

function ExBA() {

  // CLOSURES
  // # javascript variables can belong to the (local or global) scope
  // -> global variable can be made local (private) with (closures)

  // VARIABLE LIFE-TIME
  // # global variables live until the page is discarded,
  // - like when you navigate to another page or close window
  // -> local variables have short lives
  // -> they are created when the function is invoked and devared when the function is finished

  // GLOBAL VARIABLE
  // # a function can access all the variables defined (inside and outside) the function
  // -> the (inner) variable of a function is (local) and (outter) variable is (global)
  // -> in a web-page, (global) variables belong to the (window) object
  // -> the (global) variables can be used or changed by all the (scripts) in the page/window
  // -> the (local) variables can only be used inside the function where it is defined
  // - it is hidden from other function and script code
  // -> global and local variables with the same name are different variables
  // - medifing one, does not modifing other
  // NB: variable created without declaration keyword (var, var, and const) are always (global)
  // - even if they are created inside a (function)

  var varGlobal = 10;
  var varAA = 20;
  global = 30;

  function funcAA() {
    var varLocal = 11;
    var varAA = 22;
    local = 33;

    outCB.innerHTML += '<br >funcAA-varGlobal : ' + varGlobal;
    outCB.innerHTML += '<br >funcAA-varLocal  : ' + varLocal;
    outCB.innerHTML += '<br >funcAA-varAA     : ' + varAA;
    outCB.innerHTML += '<br >funcAA-local     : ' + local;
    outCB.innerHTML += '<br >funcAA-global    : ' + global;
  }

  funcAA();
  outCB.innerHTML += '<br >varAA  : ' + varAA;
  outCB.innerHTML += '<br >local  : ' + local;
  outCB.innerHTML += '<br >global : ' + global;
  outCB.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // COUNTER DILEMMA (PROBLEM SOLUTION)
  // # suppose you want to use a variable for counting someting
  // - and you want this counter to be available to all functions
  // -> you can use a (global) variable and a (add) function to increase the counter
  // -> there is a problem with this above solution, any code on this page can change this counter
  // - without calling (add) function
  // -> the (counter) should be (local) to the (add) function, to prevent other code from change it
  // -> it did not work because we display the (global) counter instead of the (local) counter
  // -> can remove (global) counter and access (local) counter by varting the function return it
  // -> it did not work because we reset the (local) counter every time we call the function
  // NB: javascript (inner function) can solve this

  // NESTED FUNCTION
  // # all functions have access to the (global) scope
  // -> in fact, in javascript, all functions have access to the scope (above) them
  // -> javascript supports nested functions, Nested functions have access to the scope (above) them
  // -> any (inner) function has access to the (local) variable of the (parent) function
  // -> this could have solved (counter delimma), if we could reach to (inner) function from outside
  // - we also need to find a way to execute (counter = 0) once only
  // NB: so we need a (closure)

  // (counterOne) will work but is (global) and any code of it (script) can change its value
  var counterOne = 0;

  function addOne() {
    counterOne += 1;
  }

  addOne(); outCB.innerHTML += '<br >counter : ' + counterOne;
  addOne(); outCB.innerHTML += '<br >counter : ' + counterOne;
  addOne(); outCB.innerHTML += '<br >counter : ' + counterOne;
  outCB.innerHTML += '<br >';

  // ----------------------------------------------------------
  // though (counterTwo) is as (global) as (local) of (addTwo) function
  // - it will not increase the value of (counterTwo)
  var counterTwo = 0;

  function addTwo() {
    var counterTwo = 0;
    counterTwo++;
    return counterTwo;
  }

  outCB.innerHTML += '<br >addTwo : ' + addTwo();
  outCB.innerHTML += '<br >counterTwo : ' + counterTwo;
  outCB.innerHTML += '<br >addTwo : ' + addTwo();
  outCB.innerHTML += '<br >counterTwo : ' + counterTwo;
  outCB.innerHTML += '<br >';

  // ----------------------------------------------------------
  // (addTwo and addThree) are same
  function addThree() {
    var counter = 0;
    counter++;
    return counter;
  }

  outCB.innerHTML += '<br >addThree : ' + addThree();
  outCB.innerHTML += '<br >addThree : ' + addThree();
  outCB.innerHTML += '<br >';

  // ----------------------------------------------------------
  // nested function can solve it inside its parent
  // - but out of the parent, it can give the last record
  // - and cannot increase the value, if call the parent agin the (counter) will start from 0
  function addFour() {
    var counter = 0;
    function plus() {
      counter++;
    }

    plus();
    return counter;
  }

  outCB.innerHTML += '<br >addFour : ' + addFour();
  outCB.innerHTML += '<br >addFour : ' + addFour();
  outCB.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // CLOSURE & EXAMPLE EXPLAINED
  // # remember (self-invoking) function
  // -> the variable (add) is assigned to the (return) value of a (self-invoking) function
  // -> the (self-invoking) function only runs once.
  // - it sets the counter to (0), and returns a function expression
  // -> this way add becomes a function. it can access the counter in the parent scope
  // -> this is called a javascript (closure).
  // - it makes it possible for a function to have (private) variables
  // -> the counter is protected by the scope of the (anonymous) function,
  // - and can only be changed using the (add) function
  // NB: a (closure) is a function having access to the (parent) scope,
  // - even after the (parent) function has (closed)

  const add = (function () {
    var counter = 0;
    return function () {
      counter++;
      return counter;
    };
  })();

  outCB.innerHTML += '<br >add : ' + add();
  outCB.innerHTML += '<br >add : ' + add();
  outCB.innerHTML += '<br >add : ' + add();
  outCB.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // # CLOSURE & HOME MADE ITERABLE
  // when a function returns a function - is a closure
  // - after creating a closure, have to create its object
  // - and each time we call that object, it execute only that return-function
  // - we can use (self-invoking) procedure to a closure

  const ConstBA = function () {
    var counter = 0;
    return {
      method: function () {
        counter++;
        return { value: counter };
      },
    };
  };

  var varBA = new ConstBA();
  outCB.innerHTML += '<br >varBA : ' + varBA.method().value;
  outCB.innerHTML += '<br >varBA : ' + varBA.method().value;
  outCB.innerHTML += '<br >varBA : ' + varBA.method().value;
  outCB.innerHTML += '<br >';

  const ConstBB = function () {
    var counter = 0;
    return function () {
      counter++;
      return counter;
    };
  };

  var varBB = new ConstBB();
  outCB.innerHTML += '<br >varBB : ' + varBB();
  outCB.innerHTML += '<br >varBB : ' + varBB();
  outCB.innerHTML += '<br >';

  const ConstBC = (function () {
    var counter = 0;
    return function () {
      counter++;
      return counter;
    };
  })();

  outCB.innerHTML += '<br >ConstBC : ' + ConstBC();
  outCB.innerHTML += '<br >ConstBC : ' + ConstBC();
  outCB.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // CLOSURE LOGICAL
  // -> a (closure) is the combination of a function bundled together (enclosed) with references
  // - to its surrounding state (the lexical environment)
  // -> in other words, a closure gives access to an outer function's scope from an inner function
  // -> in javascript, closures are created every time a function is created,
  // - at function creating time

  // lexical scoping - consider the following example
  function init() {
    var name = 'Mozilla';
    function displayName() {
      outCB.innerHTML += '<br >innerFunc-name : ' + name;
    }

    displayName();
  }

  init();
  outCB.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // closure - consider the following example
  function MakeFunc() {
    var name = 'Mozilla';
    function displayName() {
      outCB.innerHTML += '<br >closure-name : ' + name;
    }

    return displayName;
  }

  MakeFunc();
  outCB.innerHTML += '<br >MakeFunc ---: ' + MakeFunc();
  outCB.innerHTML += '<br >MakeFunc ---: ' + MakeFunc;
  outCB.innerHTML += '<br >';

  var MyFunc = MakeFunc();
  var myFunc = new MakeFunc();
  MyFunc();
  myFunc();
  outCB.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // closure - assinging (parent and inner) value
  function makeAdder(x) {
    return function (y) {
      return x + y;
    };
  }

  var adderOne = makeAdder(5);
  var adderTwo = makeAdder(10);

  outCB.innerHTML += '<br >adderOne : ' + adderOne(2);
  outCB.innerHTML += '<br >adderTwo : ' + adderTwo(2);

  function makeAdderTwo(x) {
    function adder(y) {
      return x + y;
    }

    return adder;
  }

  var adderThree = makeAdderTwo(11);
  var adderFour = makeAdderTwo(22);

  outCB.innerHTML += '<br >adderThree : ' + adderThree(2);
  outCB.innerHTML += '<br >adderFour  : ' + adderFour(2);
  outCB.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // closure - emulating private method and closures (self-invoking)
  var counter = (function () {
    var pirvateCounter = 0;

    function changeBy(val) {
      pirvateCounter += val;
    }

    return {
      increment: function () {
        changeBy(1);
      },

      decrement: function () {
        changeBy(-1);
      },

      value: function () {
        return pirvateCounter;
      },
    };
  })();

  outCB.innerHTML += '<br >counter.value : ' + counter.value();
  counter.increment();
  counter.increment();
  outCB.innerHTML += '<br >counter.value : ' + counter.value();
  counter.decrement();
  counter.decrement();
  outCB.innerHTML += '<br >counter.value : ' + counter.value();
  outCB.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // closure - emulating private method and closures (object-creating)
  var counterExp = function () {
    var privateCounter = 0;

    function adder(arg) {
      privateCounter += arg;
    }

    return {
      increment: function () {
        adder(1);
      },

      decrement: function () {
        adder(-1);
      },

      value: function () {
        return privateCounter;
      },
    };
  };

  var counterExp1 = counterExp();
  var counterExp2 = counterExp();

  outCB.innerHTML += '<br >counterExp1.value : ' + counterExp1.value();
  counterExp1.increment();
  counterExp1.increment();
  outCB.innerHTML += '<br >counterExp1.value : ' + counterExp1.value();
  counterExp1.decrement();
  outCB.innerHTML += '<br >counterExp1.value : ' + counterExp1.value();
  outCB.innerHTML += '<br >counterExp2.value : ' + counterExp2.value();
  outCB.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // closure - scope chain (procedure one)
  var varOne = 10;

  function sum(a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return a + b + c + d + varOne;
        };
      };
    };
  }

  outCB.innerHTML += '<br >sum(1)(2)(3)(4) : ' + sum(1)(2)(3)(4);
  var varSum = sum(10);
  outCB.innerHTML += '<br >sum(10).varSum(20)(30)(40) : ' + varSum(20)(30)(40);

  function addFunc(a) {
    return function (b) {
      return a + b;
    };
  }

  outCB.innerHTML += '<br >addFunc(10)(20) : ' + addFunc(10)(20);
  var varAdd = addFunc(10);
  outCB.innerHTML += '<br >addFunc(10)-varAdd(20) : ' + varAdd(20);
  outCB.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // closure - scope chain (procedure two)
  function funcOne(argOne) {
    return function innerOne(argTwo) {
      return function innerTwo(argThree) {
        return function innerThree(argFour) {
          return argOne + argTwo + argThree + argFour;
        };
      };
    };
  }

  var varOne = funcOne(10);
  var varTwo = varOne(20);
  var varThree = varTwo(30);
  var varFour = varThree(40);

  outCB.innerHTML += '<br >varFour : ' + varFour;
  outCB.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # scope
// 01. javascript scope
// 02. block scope
// 03. local scope
// 04. function scope
// 05. Global javascript variables
// 06. global scope
// 07. javascript variable
// 08. automatically global
// 09. (strict)_ mode
// 10. Global variable in HTML
// 11. life-time of javascript variable
// 12. function arguments

function ExBB() {

  // JAVASCRIPT SCOPE -----------------------
  // -> scope determines the accessibility (visibility) of variable
  // -> javascript has 3 types of scope
  // -> global scope | block scope | function scope
  // JAVASCRIPT VARIABLE ---------------------
  // -> in javascript, objects and functions are also variables
  // NB: scope determines the accessibility of variables, objects and functions
  // - from different parts of the code
  // LIFE-TIME OF VARIABLE -------------------
  // -> the life-time of a variable starts when it is declared
  // -> function (local) variables are devared when the function is compvared
  // -> in web browsers, global variables are devared when close the browser window or tab

  var funcGlobalAA = 11;  // global scope
  
  function funcAA() {
    var localAA = 22;     // local scope
    var localAB = 20;
    outCB.innerHTML += '<br >localScope - localAA : ' + localAA;
    outCB.innerHTML += '<br >localScope - localAB : ' + localAB;
  }
  
  { 
    var blockAA = 33;     // block scope
    var blockAB = 30;
    outCB.innerHTML += '<br >blockScope - blockAA : ' + blockAA;
    outCB.innerHTML += '<br >blockScope - blockAB : ' + blockAB;
  }   
  
  for (var blockAC = 0; blockAC < 5; blockAC++) {
    blockAC;              // block scope
    outCB.innerHTML += '<br >loopScope - bolckAC : ' + blockAC;
  }

  funcAA();

  outCB.innerHTML += '<br >';
  outCB.innerHTML += '<br >funcGlobalAA : ' + funcGlobalAA;
  // outCB.innerHTML += '<br >localAA : ' + localAA;
  // outCB.innerHTML += '<br >localAB : ' + localAB;
  // outCB.innerHTML += '<br >blockAA : ' + blockAA;
  outCB.innerHTML += '<br >blockAB : ' + blockAB;
  // outCB.innerHTML += '<br >blockAC : ' + blockAC;
  outCB.innerHTML += '<br >';

  // ---------------------------------------------------------
  function funcAB(arg) {
    var local = arg + 10;
    return local;
  }

  var varAA = {
    proOne: 11,
    proTwo: 22,
    method: function () {
      return this.proOne + this.proTwo;
    },
  };

  outCB.innerHTML += '<br >functionVariable - funcAB     : ' + funcAB(20);
  outCB.innerHTML += '<br >objectVariable - varAA.proOne : ' + varAA.proOne;
  outCB.innerHTML += '<br >objectVariable - varAA.proTwo : ' + varAA.proTwo; 
  outCB.innerHTML += '<br >objectVariable - varAA.method : ' + varAA.method();
  outCB.innerHTML += '<br >';

  // BLOCK SCOPE ----------------
  // -> before (ES6) 2015, javascript had only (Global Scope) and (Function Scope)
  // -> ES6 introduced two important new javascript keywords (var and const)
  // -> these two keywords provide (Block Scope) in javascript 
  // -> variables declared inside a {} block cannot be accessed from outside the block
  // -> variables declared with the (var) keyword can NOT have block scope 
  // -> variables declared inside a {} block can be accessed from outside the block 

  // LOCAL SCOPE & FUNCTION SCOPE & FUNCTION ARGUMENTS -------------
  // -> variables declared within a javascript function, become LOCAL to the function 
  // -> NB: local variable have (function scope)
  // -> NB: they can only be accessed from within the function
  // -> since local variables are only recognized inside their function, 
  // -> variables with the same name can be used in different functions 
  // -> local variables are created when a function starts, and declared when the function is compvared

  // -> javascript has function scope : each function creates a new scope 
  // -> variables defined inside a function are not accessible (visible) from outside the function 
  // -> variables declared with (var, var, and const) are quite similar when declared inside a function 
  // -> they all have (function scope)

  // -> function arguments (parameters) work as (local variables) inside functions 

  { 
    var varBA = 11; 
    const constBA = 22;
    var varBA = 33;

    outCB.innerHTML += '<br >block-scope (varBA)   : ' + varBA;
    outCB.innerHTML += '<br >block-scope (constBA) : ' + constBA;
    outCB.innerHTML += '<br >block-scope (varBA)   : ' + varBA;
  }

  // outCB.innerHTML += '<br >varBA   : ' + varBA;
  // outCB.innerHTML += '<br >constBA : ' + constBA;
  outCB.innerHTML += '<br >varBA   : ' + varBA;
  outCB.innerHTML += '<br >';

  for (var i = 0; i < 1; i++) {
    var varBB = 10;
    const constBB = 20;
    var varBB = 30;

    outCB.innerHTML += '<br >loop-scope (varBB)   : ' + varBB;
    outCB.innerHTML += '<br >loop-scope (constBB) : ' + constBB;
    outCB.innerHTML += '<br >loop-scope (varBB)   : ' + varBB;
  }

  // outCB.innerHTML += '<br >varBB   : ' + varBB;
  // outCB.innerHTML += '<br >constBB : ' + constBB;
  outCB.innerHTML += '<br >varBB   : ' + varBB;
  outCB.innerHTML += '<br >';

  if (1 == 1) {
    var varBC = 100;
    const constBC = 200;
    var varBC = 300;

    outCB.innerHTML += '<br >condition-scope (varBC)   : ' + varBC;
    outCB.innerHTML += '<br >condition-scope (constBC) : ' + constBC;
    outCB.innerHTML += '<br >condition-scope (varBC)   : ' + varBC;
  }

  // outCB.innerHTML += '<br >varBC  : ' + varBC;
  // outCB.innerHTML += '<br >contBC : ' + constBC;
  outCB.innerHTML += '<br >varBC  : ' + varBC;
  outCB.innerHTML += '<br >';

  // ----------------------------------------------------------------
  function funcBA(arg) {
    var varLocal = 10;
    const constLocal = 20;
    var varLocal = 30;
    local = 40;
    this.proOne = 50;
    
    outCB.innerHTML += '<br >localScope-arg        : ' + arg;
    outCB.innerHTML += '<br >localScope-varLocal   : ' + varLocal;
    outCB.innerHTML += '<br >localScope-constLocal : ' + constLocal;
    outCB.innerHTML += '<br >localScope-varLocal   : ' + varLocal;
    outCB.innerHTML += '<br >localScope-local      : ' + local;
    outCB.innerHTML += '<br >localScope-proOne     : ' + this.proOne;
  }

  funcBA(60);
  // outCB.innerHTML += '<br >arg        : ' + arg;
  // outCB.innerHTML += '<br >varLocal   : ' + varLocal;
  // outCB.innerHTML += '<br >constLocal : ' + constLocal;
  // outCB.innerHTML += '<br >varLocal   : ' + varLocal;
  outCB.innerHTML += '<br >local      : ' + local;
  outCB.innerHTML += '<br >proOne     : ' + this.proOne;
  outCB.innerHTML += '<br >';

  // GLOBAL VARIABLES & GLOBAL SCOPE & AUTOMATICALLY GLOBAL & GLOBAL IN HTML
  // -> a variable declared outside a function, becomes GLOBAL
  // -> NB: a global variable has (global scope)
  // -> NB: all scripts and functions on a web page can access it

  // -> variables declared GLOBALLY (outside any function) have (global scope)
  // -> GLOBAL variables can be accessed from anywhere in a javascript program 
  // -> variables declared with (var, var and const) are quite similar when declared outside a block

  // -> if you assign a value to a variable that has not been declared, 
  // -- it will automatically become a GLOBAL variable 
  // -- event if the value is assigned inside a function 

  // -> with javascript, the (global scope) is the javascript environment 
  // -> in HTML, the (global scope) is the window-object 
  // -> global variables defined with the (var) keyword belong to the window-object
  // -> global variables defined with the (var) keyword do not belong to the window-object

  // -> NB: do not create (global) variables unless you intend to 
  // -> NB: your (global) variables (or function) can overwrite window variables (of functions)
  // -> NB: any function, including the window-object, can overwrite (global) variables and functions

  function funcCA() {
    outCB.innerHTML += '<br >funcCA-globalVar   : ' + globalVar;
    outCB.innerHTML += '<br >funcCA-globalVar   : ' + globalVar;
    outCB.innerHTML += '<br >funcCA-globalConst : ' + globalConst;
    outCB.innerHTML += '<br >funcCA-global      : ' + global;
    // outCB.innerHTML += '<br >funcCA-localGlobal : ' + localGlobal;
  }

  var globalVar = 111;
  var globalVar = 222;
  const globalConst = 333;
  global = 444;

  function funcCB() {
    localGlobal = 555;
    outCB.innerHTML += '<br >funcCB-globalVar   : ' + globalVar;
    outCB.innerHTML += '<br >funcCB-globalVar   : ' + globalVar;
    outCB.innerHTML += '<br >funcCB-globalConst : ' + globalConst;
    outCB.innerHTML += '<br >funcCB-global      : ' + global;
    outCB.innerHTML += '<br >funcCB-localGlobal : ' + localGlobal;
  }
   
  funcCA();
  funcCB();
  outCB.innerHTML += '<br >globalVar   : ' + globalVar;
  outCB.innerHTML += '<br >globalVar   : ' + globalVar;
  outCB.innerHTML += '<br >globalConst : ' + globalConst;
  outCB.innerHTML += '<br >global      : ' + global;
  outCB.innerHTML += '<br >localGlobal : ' + localGlobal;
  outCB.innerHTML += '<br >';

  var varGlobal = this;
  var varGlobal = this;
  const constGlobal = this;
  outCB.innerHTML += '<br >varGlobal   : ' + varGlobal;
  outCB.innerHTML += '<br >varGlobal   : ' + varGlobal;
  outCB.innerHTML += '<br >constGlobal : ' + constGlobal;
  outCB.innerHTML += '<br >globalScope : ' + this;
  outCB.innerHTML += '<br >';

  // STATIC MODE
  // -> all modern browsers support running javascript in (Strict Mode)
  // -> NB: in (strict) mode undeclared variables are not automatically (global)
  // -- or not event a variable, error occurred 

  function funcCC() {
    'use strict'
    var varLocal = 11;
    // Local = 22;

    outCB.innerHTML += '<br >varLocal : ' + varLocal;
    // outCB.innerHTML += '<br >Local : ' + Local;
  }

  funcCC();
  outCB.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
outCB.innerHTML += 'ex-ba : function closures';
outCB.innerHTML += '<hr >'; ExBA();
outCB.innerHTML += '<br >ex-bb : scope';
outCB.innerHTML += '<hr >'; ExBB();