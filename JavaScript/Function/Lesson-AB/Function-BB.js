///// FUNCTION PARAMETERS //////////////////////////////////////////////////////
// 01. javascript function parameters
// 02. function parameters and arguments
// 03. parameter rules
// 04. default parameters
// 05. the arguments object
// 06. arguments are passed by value
// 07. objects are passed by reference

////////////////////////////////////////////////////////////////////////////////
var outBB = document.createElement('div');
outBB.setAttribute('id', 'styleTwo');
document.body.appendChild(outBB);

////////////////////////////////////////////////////////////////////////////////
// # javascript function parameters | parameters and arguments | parameter rules

function ExBA() {

  // -> a javascript function does not perform any checking on parameter values (arguments)
  // -> earlier in this tutorial, you learned that functions can have parameters

  // -> function (parameters) are the names listed in the (function declaration)
  // -> function (arguments) are the (real values) passed to (and received by) the function

  // -> javascript function definitions do not specify (data types) for (parameters)
  // -> javascript function do not perform (type checking) on the passed (arguments)
  // -> javascript function do not check the (number) of (arguments) received
  // ---------------------------------------------------------------------------

  function funcAA(argOne, argTwo, argThree) {
    outBB.innerHTML += '<br >funcAA-argOne : ' + argOne;
    outBB.innerHTML += '<br >funcAA-argTwo : ' + argTwo;
    outBB.innerHTML += '<br >funcAA-argThree : ' + argThree;
  }

  const constAB = function (argOne, argTwo, argThree, argFour) {
    outBB.innerHTML += '<br >constAB-argOne : ' + argOne;
    outBB.innerHTML += '<br >constAB-argTwo : ' + argTwo;
    outBB.innerHTML += '<br >constAB-argThree : ' + argThree;
    outBB.innerHTML += '<br >constAB-argFour : ' + argFour;
  };

  // parameters are declared inside parentheses
  const constAC = (argOne, argTwo) => {
    outBB.innerHTML += '<br >constAC-argOne : ' + argOne;
    outBB.innerHTML += '<br >constAC-argTwo : ' + argTwo;
  };

  // arguments are assigned inside parentheses
  funcAA(11, 'strin-one', 22.50);
  constAB(true, 10, 'string-one', 20.40);
  constAC(22, 30, 40.50);
  outBB.innerHTML += '<br >';

  // here, (arg) identifier is (parameter) and (111) is (argument)
  (function (arg) {
    outBB.innerHTML += '<br >self-invoking arg : ' + arg;
  })(111);

  ((argOne, argTwo) => {
    outBB.innerHTML += '<br >self-invoking argOne : ' + argOne;
    outBB.innerHTML += '<br >self-invoking argTwo : ' + argTwo;
  })(222, 333);

  outBB.innerHTML += '<br >';

  // === syntax mainipulation practice =========================================
  // in javascript, (argument) can be (literal | variable | expression | return)

  var varOne = 22;
  var varTwo = () => 33;

  const constAD = function (arg) {
    outBB.innerHTML += '<br >constAD - arg : ' + arg;
  };

  constAD(11);
  constAD(varOne);
  constAD(varOne + 11);
  constAD(varTwo());
  constAD(11 + varOne + varTwo());
  outBB.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # default parameters | the arguments object

function ExBB() {

  // -> if a function is called with (missing arguments) less-than declared,
  //    the missing values are set to (undefined)
  // -> sometimes this is acceptable,
  //    but sometimes it is better to assign a default value to the parameter
  // -> ECMAScript 2015 allows default parameter values in the function declaration
  // ---------------------------------------------------------------------------

  // ECMAScript 2019 allows default parameter values in the function declaration
  function funcAA(argOne, argTwo = 2) {
    outBB.innerHTML += '<br >funcAA-argOne : ' + argOne;
    outBB.innerHTML += '<br >funcAA-argTwo : ' + argTwo;
  }

  funcAA();
  funcAA(10, 20);

  // regular parameter(s) should come before default parameter(s)
  var constAB = function (argOne = true, argTwo = 'string-one', argThree) {
    outBB.innerHTML += '<br >constAB-argOne : ' + argOne;
    outBB.innerHTML += '<br >constAB-argTwo : ' + argTwo;
    outBB.innerHTML += '<br >constAB-argThree : ' + argThree;
  };

  constAB();
  constAB(11, 22, 33);

  var constAC = (arg = 1) => {
    outBB.innerHTML += '<br >constAC-arg : ' + arg;
  };

  constAC();
  constAC(111);
  outBB.innerHTML += '<br >';

  // -> javascript function have a built-in object called the (arguments) object
  // -> the argument object contains an array of the arguments used when the function was called
  // -> NB : if a function is called with (too many arguments) more than declared,
  //    this arguments can be reached using (the arguments object)
  // -> this way, can simply use a function to find the highest value in a list of numbers
  //    or create a function to sum all input values
  // ---------------------------------------------------------------------------

  function funcBA(argOne, argTwo, argThree) {
    outBB.innerHTML += '<br >funcBA-arguments[0] : ' + arguments[0];
    outBB.innerHTML += '<br >funcBA-arguments[1] : ' + arguments[1];
    outBB.innerHTML += '<br >funcBA-arguments[2] : ' + arguments[2];
    outBB.innerHTML += '<br >funcBA-arguments[3] : ' + arguments[3];
    outBB.innerHTML += '<br >funcBA-argThree : ' + argThree;
  }

  const constBB = function () {
    outBB.innerHTML += '<br >constBB-arguments[0] : ' + arguments[0];
    outBB.innerHTML += '<br >constBB-arguments[1] : ' + arguments[1];
  };

  // arrow function does not have (arguments) object
  const constBC = arg => {
    outBB.innerHTML += '<br >constBC-arg : ' + arg;
    outBB.innerHTML += '<br >constBC-arguments[1] : ' + arguments[1];
  };

  (function (argOne, argTwo) {
    outBB.innerHTML += '<br >self-invoking-argOne : ' + argOne;
    outBB.innerHTML += '<br >self-invoking-argTwo : ' + argTwo;
    outBB.innerHTML += '<br >self-invoking-arguments[2] : ' + arguments[2];
    outBB.innerHTML += '<br >self-invoking-arguments[3] : ' + arguments[3];
  })(1, 2, 3, 4);

  funcBA(11, 22, 33, 44);
  constBB(10, 20);
  constBC(111, 222);
  outBB.innerHTML += '<br >';

  function funcBD() {
    for (var i = 0; arguments.length > i; i++)
      outBB.innerHTML += '<br >funcBD-arguments[' + i + '] : ' + arguments[i];
  }

  funcBD(1, 2, 3);
  funcBD(11, 22);
  funcBD(10, 20, 30, 40);
  funcBD(10, true, 'string', 22.1, 5);
  outBB.innerHTML += '<br >';

  // # syntax manipulating practice
  // ---------------------------------------------------------------------------

  // condition defines with (agruments.length),
  // so number of arguments defines the loop iteration number
  // does not affect parameter number and it's default value
  // NB : default value of (parameter) can not read the (arguments) object

  function funcCA(argOne, argTwo = 2, argThree) {
    for (var i = 0; arguments.length > i; i++)
      outBB.innerHTML += '<br >funcCA-arguments[' + i + '] : ' + arguments[i];

    if (arguments.length < 2) {
      outBB.innerHTML += '<br >funcCA-arguments[0] : ' + arguments[0];
      outBB.innerHTML += '<br >funcCA-arguments[1] : ' + arguments[1];
      outBB.innerHTML += '<br >funcCA-arguments[2] : ' + arguments[2];
      outBB.innerHTML += '<br >funcCA-argOne   : ' + argOne;
      outBB.innerHTML += '<br >funcCA-argTwo   : ' + argTwo;
      outBB.innerHTML += '<br >funcCA-argThree : ' + argThree;
    }
  }

  funcCA(11, 22, 33, 44);
  funcCA(10);
  outBB.innerHTML += '<br >';

  // algorithm - arringing mumbers - approach one (using - array)
  const constCB = function (array) {
    var temp = 0;
    for (var i = 0; i < array.length; i++) {
      for (var j = i; j < array.length; j++) {
        if (array[j] < array[i]) {
          temp = array[j];
          array[j] = array[i];
          array[i] = temp;
        }
      }
    }

    return array;
  };

  outBB.innerHTML += '<br >constCB-array : ' + constCB([3, 2, 6, 1, 8]);

  // algorithm - arringing numbers - approach two (using - arguments)
  const constCD = function () {
    var array = [Infinity];
    for (var i = 0; i < arguments.length; i++) {
      for (var j = 0; j < arguments.length; j++) {
        if (arguments[j] < array[i]) {
          if (i == 0) {
            array[i] = arguments[j];
            array[i + 1] = Infinity;
          } else if (arguments[j] > array[i - 1]) {
            array[i] = arguments[j];
            if (arguments.length != (i + 1))
              array[i + 1] = Infinity;
          }
        }
      }
    }

    return array;
  };

  outBB.innerHTML += '<br >constCB-arguments : ' + constCD(3, 2, 6, 1, 8);

  // algorithm - arringing numbers - approach two (using - arguments)
  const constCE = function () {
    var temp = [null];
    for (var i = 0; i < arguments.length; i++) {
      for (var j = i; j < arguments.length; j++) {
        if (arguments[j] < arguments[i]) {
          temp[0] = arguments[j];
          arguments[j] = arguments[i];
          arguments[i] = temp[0];
        }
      }
    }

    for (var i = 0; i < arguments.length; i++)
      temp[i] = arguments[i];

    return temp;
  };

  outBB.innerHTML += '<br >constCB-arguments : ' + constCE(3, 2, 6, 1, 8);
  outBB.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # arguments are passed by value | objects are passed by reference

function ExBC() {

  // -> the parameters, in a function call, arg the function arguments
  // -> javascript arguments are passed by value, the function only gets to know the values,
  //    not the arguments location
  // -> if a function changes an argument's value, it does not change the parameter's original value
  // -> NB : changes to arguments are not visible (reflected) outside the function
  // ---------------------------------------------------------------------------

  const constAA = function () {
    outBB.innerHTML += '<br >arguments[0] : ' + arguments[0];
    arguments[0] = 'value-changed';
  };

  constAA(10);
  var varOne = 11;
  constAA(varOne);
  outBB.innerHTML += '<br >varOne : ' + varOne;
  outBB.innerHTML += '<br > ';

  // -> in javascript, object references are values
  // -> because of this, objects will behave like they are passed by reference
  // -> if a function changes an object property, it changes the original value
  // -> NB : changes to object properties are visible (reflected) outside the function
  // ---------------------------------------------------------------------------

  const constAB = function () {
    outBB.innerHTML += '<br >arguments[0] : ' + arguments[0].proOne;
    arguments[0].proOne = 'value-changed';
  };

  var varTwo = {
    proOne: 11,
  };

  outBB.innerHTML += '<br >varTwo.proOne : ' + varTwo.proOne;
  constAB(varTwo);
  outBB.innerHTML += '<br >varTwo.proOne : ' + varTwo.proOne;
  outBB.innerHTML += '<br >';

  // # syntax manipulating practice
  // ---------------------------------------------------------------------------

}

////////////////////////////////////////////////////////////////////////////////
outBB.innerHTML += 'ex-ba : function parameters | parameters and arguments | parameter rules';
outBB.innerHTML += '<hr >'; ExBA();
outBB.innerHTML += '<br >ex-bb : default parameters | the arguments object';
outBB.innerHTML += '<hr >'; ExBB();
outBB.innerHTML += '<br >ex-bc : arguments are passed by value | object are passed by reference';
outBB.innerHTML += '<hr >'; ExBC();
