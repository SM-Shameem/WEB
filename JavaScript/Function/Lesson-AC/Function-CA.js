///// FUNCTION CALL-APPLY //////////////////////////////////////////////////////
// 01. Function Call
// 02. Function Apply

////////////////////////////////////////////////////////////////////////////////
var outCA = document.createElement('div');
outCA.setAttribute('id', 'styleOne');
document.body.appendChild(outCA);

////////////////////////////////////////////////////////////////////////////////
// # function call
// 1. method reuse
// 2. all functions are methods
// 3. the (this) keyword
// 4. the (call()) method
// 5. the (call()) method with arguments

function ExAA() {

  // METHOD REUSE
  // # with the call-method, you can write a method that can be used on different objects

  // ALL FUNCTIONS ARE METHODS
  // # in javascript all functions are object methods
  // -> if a function is not a method of a javascript object, it is a function of global-object

  // THE (THIS) KEYWORD
  // # in a function defination, (this) refers to the owner of the function

  function FuncOne() {
    this.funcNested = function () {
      outCA.innerHTML += '<br >funcNested : ' + this;
    };

    outCA.innerHTML += '<br >funcOne : ' + this;
    this.funcNested();
  }

  FuncOne();
  outCA.innerHTML += '<br >';

  var varAA = new FuncOne();
  outCA.innerHTML += '<br >';

  varAA.funcNested();
  outCA.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // THE (CALL) METHOD
  // # the (call) method is a predefined javascript method
  // -> it can be used to invoke (call) a method with an owner object as an argument (parameter)
  // -> NB: with (call) an object can use a method belonging to another object

  // THE (CALL) METHOD WITH ARGUMENTS
  // # the (call) method can accept arguments

  var varAB = {
    methodOne: function () {
      return this.firstName + this.lastName;
    },

    methodTwo: function () {
      return this.firstName + this.lastName + ', ' + arguments[0] + ', ' + arguments[1];
    },
  };

  var varAC = {
    firstName: 'john ',
    lastName: 'doe ',
  };

  var varAD = {
    firstName: 'mary ',
    lastName: 'doe ',
  };

  // access properties of one object from another using the (call) method
  outCA.innerHTML += '<br >varAC : ' + varAB.methodOne.call(varAC);
  outCA.innerHTML += '<br >varAD : ' + varAB.methodOne.call(varAD);

  // access properties of one object from another using the (call) method with arguments
  outCA.innerHTML += '<br >varAC : ' + varAB.methodTwo.call(varAC, 'new york', 'USA');
  outCA.innerHTML += '<br >varAD : ' + varAB.methodTwo.call(varAD, 'london', 'Europe');
  outCA.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # function apply
// 1. method reuse
// 2. the (apply()) method
// 3. difference between (call()) and (apply())
// 4. the (apply()) method with arguments
// 5. simulate a (max) method on arrays
// 6. javascript (strict()) mode

function ExAB() {

  // METHOD REUSE & THE (APPLY) METHOD
  // # with the (apply) method, you can write a method that can be used on different object
  // -> the (apply) method is similar to the (call) method

  var varBA = {
    methodOne: function () {
      return this.proOne + this.proTwo;
    },

    methodTwo: function (arg) {
      return this.proOne + this.proTwo + arg + arguments[1];
    },
  };

  var varBB = {
    proOne: 10,
    proTwo: 20,
  };

  var varBC = {
    proOne: 11,
    proTwo: 22,
  };

  // the (apply) method is used as like (call) method
  outCA.innerHTML += '<br >varBB : ' + varBA.methodOne.apply(varBB);
  outCA.innerHTML += '<br >varBC : ' + varBA.methodOne.apply(varBC);

  // the (apply) method is used as like (call) method but using arguments is different like index
  outCA.innerHTML += '<br >varBB : ' + varBA.methodTwo.apply(varBB, [10.5, 20.5]);
  outCA.innerHTML += '<br >varBC : ' + varBA.methodTwo.apply(varBC, [11.5, 22.5]);
  outCA.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // DIFFERENCE BETWEEN (CALL and APPLY)
  // # the (call) method takes arguments seperately
  // -> the (apply) method takes arguments as na array
  // NB: the (apply) method is very handy if you want to use an array instead of an argument list

  // THE (APPLY) METHOD WITH ARGUMENTS
  // # the (apply) method accepts arguments in an array

  var varCA = {
    methodOne() {
      return this.proOne + this.proTwo;
    },

    methodTwo() {
      return this.proOne + this.proTwo + arguments[0];
    },

    methodThree(arg) {
      return this.proOne + this.proTwo + arg + arguments[1] + arguments[2];
    },
  };

  var varCB = {
    proOne: 10,
    proTwo: 20,
  };

  var varCC = {
    proOne: 11,
    proTwo: 22,
  };

  outCA.innerHTML += '<br >varCB-apply : ' + varCA.methodOne.apply(varCB);
  outCA.innerHTML += '<br >varCB-apply : ' + varCA.methodTwo.apply(varCB, [30]);
  outCA.innerHTML += '<br >varCC-apply : ' + varCA.methodOne.apply(varCC);
  outCA.innerHTML += '<br >varCC-apply : ' + varCA.methodTwo.apply(varCC, [33]);
  outCA.innerHTML += '<br >varCC-apply : ' + varCA.methodThree.apply(varCC, [33, 44, 55]);
  outCA.innerHTML += '<br >';

  outCA.innerHTML += '<br >varCB-call : ' + varCA.methodOne.call(varCB);
  outCA.innerHTML += '<br >varCB-call : ' + varCA.methodTwo.call(varCB, 30);
  outCA.innerHTML += '<br >varCC-call : ' + varCA.methodThree.call(varCC, 33, 44, 55);
  outCA.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // SIMULATE (MAX) METHOD WITH ARRAY
  // # you can find the largest number (in a list of numbers) using the (Math.max()) method
  // -> since (array) do not have a (max) method, you can apply the (Math.max) method instead
  // -> NB: here, first argument of (apply) method can be (null)

  // THE (STRICT) MODE
  // # in javascript (strict) mode, if the first argument of the (apply) method is not an object,
  // - it becomes the owner (object) of the invoked function.
  // - in (non-strict) mode, it becomes the global object

  outCA.innerHTML += '<br >max-return : ' + Math.max(1, 2, 3);
  outCA.innerHTML += '<br >max-apply-return : ' + Math.max.apply(Math, [1, 2, 3]);
  outCA.innerHTML += '<br >max-apply-return : ' + Math.max.apply(0, [1, 2, 3]);
    outCA.innerHTML += '<br >max.apply-return : ' + Math.max.apply(null, [1, 2, 3]);
  outCA.innerHTML += '<br >max-apply-return : ' + Math.max.apply(' ', [1, 2, 3]);
  outCA.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
outCA.innerHTML += 'ex-aa : function call';
outCA.innerHTML += '<hr >'; ExAA();
outCA.innerHTML += '<br >ex-ab : function apply';
outCA.innerHTML += '<hr >'; ExAB();
