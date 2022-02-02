///// ARROW FUNCTION ///////////////////////////////////////////////////////////
// 01. javascript arrow function
// 02. what about (this)

////////////////////////////////////////////////////////////////////////////////
var outAC = document.createElement('div');
outAC.setAttribute('id', 'styleOne');
document.body.appendChild(outAC);

////////////////////////////////////////////////////////////////////////////////
// # javascript arrow function
// -> arrow function were introduced in ES6
// -> arrow function allow us to write shorter function syntax
// -> it gets shorter, if the function has only one statement,
//    and the statement returns a value, we can remove the brakets and the (return) keyword
// NB: this works only if the function has only one statement
// -> if you have parameters, you pass them inside the parentheses
//    in fact, if you have only one parameter, you can skip the parentheses as well

function ExCA() {

  // arrow function
  var varAA = () => {
    outAC.innerHTML += '<br >arrow function ........';
  };

  var varAB = (argOne, argTwo) => {
    outAC.innerHTML += '<br >arrow function ........';
    return argOne + argTwo;
  };

  var varAC = (argOne, argTwo, argThree) => {
    var local = null;

    if (argOne < argTwo) return argThree;
    else {
      local = argOne + argTwo;
      return local;
    }
  };

  var varAD = (argOne, argTwo) => {
    var local = argOne + argTwo;

    if (local > 50) outAC.innerHTML += '<br >sum is greater-than';
    else outAC.innerHTML += '<br >sum is less-than';
  };

  varAA();
  varAB();
  outAC.innerHTML += '<br >varAB-return : ' + varAB(10, 20);
  outAC.innerHTML += '<br >varAC-return : ' + varAC(10, 20, 0);
  varAD(20, 40);
  outAC.innerHTML += '<br >';

  // shorter arrow function
  var varAE = (argOne, argTwo) => argOne + argTwo;
  var varAF = () => 'string-one';
  var varAG = arg => arg + 10;
  var varAH = arg => arg;
  var varAI = arg => {
    var local = 10;

    if (local > arg) outAC.innerHTML += '<br >local is greater-than arg';
    else outAC.innerHTML += '<br >local is less-than arg';
  };

  outAC.innerHTML += '<br >varAE-return : ' + varAE(10, 20);
  outAC.innerHTML += '<br >varAF-return : ' + varAF();
  outAC.innerHTML += '<br >varAG-return : ' + varAG(100);
  outAC.innerHTML += '<br >varAH-return : ' + varAH('string-two');
  varAI(30);
  outAC.innerHTML += '<br >';

  // self-invoking arrow function
  (arg => outAC.innerHTML += '<br >self-invoking arrow - value : ' + arg)(10);

  outAC.innerHTML += '<br >self-invoking arrow - return : ' + (() => {
    var local = 10;

    if (local > 50) return 'greater-than';
    else return 'less-than';
  })();

  outAC.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # what about (this)
// -> the handling of (this) is also different in arrow functions compared to regular functions
// -> in short, with arrow functions there are no binding of (this)
// -> in regular functions the (this) keyword represented the object that called the function,
//    which could be the window, the document, a button or whatever
// -> with arrows functions the (this) keyword always represents the object
//    that defined the arrow function

function ExCB() {
  // arrow function does not support (arguments) property

  var funcOne = function () {
    outAC.innerHTML += '<br >func-' + arguments[0] + '-object-domain : ' + this;
  };

  var arrowOne = (arg) => {
    outAC.innerHTML += '<br >arrow-' + arg + '-object-domain : ' + this;
  };

  funcOne('direct');
  window.addEventListener('load', funcOne);
  window.addEventListener('load', funcOne('event'));

  // document.addEvnetListener('load', funcOne());

  arrowOne('direct');
  window.addEventListener('load', arrowOne);
  window.addEventListener('load', arrowOne('event'));

  // document.addEvnetListener('load', arrowOne());

  outAC.innerHTML += '<br >';

  // var elementOne = document.createElement('button');
  // outAC.appendChild(elementOne);
  // elementOne.addEventListener('click', funcTwo('button'));
}

////////////////////////////////////////////////////////////////////////////////
outAC.innerHTML += 'ex-ca : javascript arrow function';
outAC.innerHTML += '<hr >'; ExCA();
outAC.innerHTML += '<br >ex-cb : what about (this)';
outAC.innerHTML += '<hr >'; ExCB();
