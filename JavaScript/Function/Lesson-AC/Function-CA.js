///// FUNCTION CALL-APPLY //////////////////////////////////////////////////////
// 01. Function Call
// 02. Function Apply

////////////////////////////////////////////////////////////////////////////////
let outCA = document.createElement('div');
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

  let letAA = new FuncOne();
  outCA.innerHTML += '<br >';

  letAA.funcNested();
  outCA.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // THE (CALL) METHOD
  // # the (call) method is a predefined javascript method
  // -> it can be used to invoke (call) a method with an owner object as an argument (parameter)
  // -> NB: with (call) an object can use a method belonging to another object

  // THE (CALL) METHOD WITH ARGUMENTS
  // # the (call) method can accept arguments

  let letAB = {
    methodOne: function () {
      return this.firstName + this.lastName;
    },

    methodTwo: function () {
      return this.firstName + this.lastName + ', ' + arguments[0] + ', ' + arguments[1];
    },
  };

  let letAC = {
    firstName: 'john ',
    lastName: 'doe ',
  };

  let letAD = {
    firstName: 'mary ',
    lastName: 'doe ',
  };

  // access properties of one object from another using the (call) method
  outCA.innerHTML += '<br >letAC : ' + letAB.methodOne.call(letAC);
  outCA.innerHTML += '<br >letAD : ' + letAB.methodOne.call(letAD);

  // access properties of one object from another using the (call) method with arguments
  outCA.innerHTML += '<br >letAC : ' + letAB.methodTwo.call(letAC, 'new york', 'USA');
  outCA.innerHTML += '<br >letAD : ' + letAB.methodTwo.call(letAD, 'london', 'Europe');
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

  let letBA = {
    methodOne: function () {
      return this.proOne + this.proTwo;
    },

    methodTwo: function (arg) {
      return this.proOne + this.proTwo + arg + arguments[1];
    },
  };

  let letBB = {
    proOne: 10,
    proTwo: 20,
  };

  let letBC = {
    proOne: 11,
    proTwo: 22,
  };

  // the (apply) method is used as like (call) method
  outCA.innerHTML += '<br >letBB : ' + letBA.methodOne.apply(letBB);
  outCA.innerHTML += '<br >letBC : ' + letBA.methodOne.apply(letBC);

  // the (apply) method is used as like (call) method but using arguments is different like index
  outCA.innerHTML += '<br >letBB : ' + letBA.methodTwo.apply(letBB, [10.5, 20.5]);
  outCA.innerHTML += '<br >letBC : ' + letBA.methodTwo.apply(letBC, [11.5, 22.5]);
  outCA.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // DIFFERENCE BETWEEN (CALL and APPLY)
  // # the (call) method takes arguments seperately
  // -> the (apply) method takes arguments as na array
  // NB: the (apply) method is very handy if you want to use an array instead of an argument list

  // THE (APPLY) METHOD WITH ARGUMENTS
  // # the (apply) method accepts arguments in an array

  let letCA = {
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

  let letCB = {
    proOne: 10,
    proTwo: 20,
  };

  let letCC = {
    proOne: 11,
    proTwo: 22,
  };

  outCA.innerHTML += '<br >letCB-apply : ' + letCA.methodOne.apply(letCB);
  outCA.innerHTML += '<br >letCB-apply : ' + letCA.methodTwo.apply(letCB, [30]);
  outCA.innerHTML += '<br >letCC-apply : ' + letCA.methodOne.apply(letCC);
  outCA.innerHTML += '<br >letCC-apply : ' + letCA.methodTwo.apply(letCC, [33]);
  outCA.innerHTML += '<br >letCC-apply : ' + letCA.methodThree.apply(letCC, [33, 44, 55]);
  outCA.innerHTML += '<br >';

  outCA.innerHTML += '<br >letCB-call : ' + letCA.methodOne.call(letCB);
  outCA.innerHTML += '<br >letCB-call : ' + letCA.methodTwo.call(letCB, 30);
  outCA.innerHTML += '<br >letCC-call : ' + letCA.methodThree.call(letCC, 33, 44, 55);
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
