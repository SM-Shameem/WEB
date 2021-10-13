///// FUNCTION INTRO ///////////////////////////////////////////////////////////
// 01. javascript function and syntax
// 02. function invocation
// 03. function return
// 04. why function
// 05. the () operator invokes the function
// 06. functions used as variable values
// 07. local variables

////////////////////////////////////////////////////////////////////////////////
var outAA = document.createElement('div');
outAA.setAttribute('id', 'styleOne');
document.body.appendChild(outAA);

////////////////////////////////////////////////////////////////////////////////
// # function and why | function syntax | function return
// -> javascript function is a block of code and executed when invokes it (call it)
// -> function is much the same as a procedure or a subroutine
// -> You can reuse code: Define the code once, and use it many times.
// -> You can use the same code many times with different arguments, to produce different results.

// # function syntax -
// -> function is defined with the (function) keyword, followed by (name), followed by (parentheses)
// -> function-name can contain (letter | digits | underscore | dollar-sign), as like variable
// -> the parentheses may include one or more (parameters) are seperated by (comma)
// -> the code to be executed, by the function, is placed inside (curly-brackets),
//    is place after (parentheses)
// -> inside (curly-brackets), function may have (return) statement,
//    with or without other statements

// # function arguments -
// -> function (parameters) are listed inside the (parentheses), in the function-defination
// -> function (arguments) are the (values) received by the function, when it is invoked
// -> inside function the arguments (parameters) behave as local variable

// # function return -
// -> the (return) statement only return data value
// -> it can be single-literal, variable, array, object, or expression-result
// -> when javascript reaches a (return) statement, the function will stop executing
// -> If the function was invoked from a statement,
//    JavaScript will "return" to execute the code after the invoking statement.
// -> Functions often compute a return value. The return value is "returned" back to the "caller"

function ExAA() {
  // function basic structure
  function funcAA() {
    outAA.innerHTML += '<br >javascript function ..........';
  }

  // function with single argument
  function funcAB(arg) {
    outAA.innerHTML += '<br >javascript function : ' + arg;
  }

  // function with multiple arguments and local variable
  function funcAC(argOne, argTwo) {
    let local = argOne + argTwo;
    outAA.innerHTML += '<br >argOne + argTwo : ' + local;
  }

  // function with return statement
  function funcAD() {
    return 'return statement';
  }

  // function with arguments and return type
  function funcAE(argOne, argTwo) {
    return argOne + argTwo;
  }

  // function with arguments, local variable, conditional statement, and return statement
  function funcAF(argOne, argTwo, argN) {
    let localOne;

    if (argOne > argTwo) {
      localOne = argOne + argN;
    } else {
      localOne = argTwo + argN;
    }

    return localOne;
  }

  // function with arguments, return statements with condition
  function funcAG(argOne, argTwo, argThree, argFour, argN) {
    if (argOne < argTwo) return argThree;
    else if (argOne > argTwo) return argFour;
    else return argN;
  }

  funcAA();
  funcAB('arg one');
  funcAC(10, 20);
  outAA.innerHTML += '<br >funcAD return : ' + funcAD();
  outAA.innerHTML += '<br >funcAE return : ' + funcAE(10, 'taka');
  outAA.innerHTML += '<br >funcAF return : ' + funcAF(10, 20, 30);

  // re-calling function with different arguments
  outAA.innerHTML += '<br >funcAG return : ' + funcAG(10, 20, 'greater', 'less', 'equal');
  outAA.innerHTML += '<br >funcAG return : ' + funcAG(20, 10, 'greater', 'less', 'equal');
  outAA.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # function invocation | The () Operator Invokes the Function
// -> the code inside the function will execute when something (invokes/calls) the function
// -> 1. when an event occurs (like click on a button)
// -> 2. when it is invoked from javascript code
// -> 3. self invoked (automatically)

// -> accessing a function without () will return the function object instead of the function result

function ExAB() {
  // in a function, virtual-element can not react on event
  // reason :

  // events invokes
  let elementOne = document.createElement('button');
  elementOne.setAttribute('onclick', 'funcOne(this)');
  outAA.appendChild(elementOne);

  elementOne.style.marginTop = '10px';
  elementOne.style.marginBottom = '10px';
  elementOne.style.width = '75px';
  elementOne.style.padding = '4px';
  elementOne.style.borderRadius = '5px';
  elementOne.innerHTML += 'Click';

  function funcOne() {
    outAA.innerHTML += '<br >object-domain : ' + arguments[0];
    outAA.innerHTML += '<br >object-domain : ' + this;
  }

  // invokes javascript
  funcOne(this);
  outAA.innerHTML += '<br >funcOne : ' + funcOne;

  // self-invokes
  (function funcTwo() {
    outAA.innerHTML += '<br >object-domain : ' + arguments[0];
  })(this);

  outAA.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # Functions used as variable values | Local variables
// -> functions can be used the same way as you use variables,
//    in all types of formulas, assignments, and calculations

// -> variables declared within a javascript function, become LOCAL to the function
// -> local variables can only be accessed from within the function
// -> since local variables are only recognized inside their functions,
//    variables with the same name can be used in different function
// -> local variables are created when a function starts, and deleted when function is completed

function ExAC() {
  function funcOne(arg) {
    return arg + 10;
  }

  // function used as variable
  outAA.innerHTML += '<br >funcOne : ' + funcOne(10);

  function funcTwo(arg) {
    let letOne = 10;
    outAA.innerHTML += '<br >funcTwo : ' + (arg + letOne);
  }

  // local variable added with arguments
  funcTwo(10);

  function funcThree(arg) {
    let letOne = 10;
    return arg + letOne;
  }

  // same name local variable used in different function
  outAA.innerHTML += '<br >funcThree : ' + funcThree(10);
  outAA.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
outAA.innerHTML += 'ex-aa : function and why | function syntax | function return';
outAA.innerHTML += '<hr >'; ExAA();
outAA.innerHTML += '<br >ex-ab : function invocation | The () Operator Invokes the Function';
outAA.innerHTML += '<hr >'; ExAB();
outAA.innerHTML += '<br >ex-ac : Functions Used as Variable Values | Local Variables';
outAA.innerHTML += '<hr >'; ExAC();
