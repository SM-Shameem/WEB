///// OBJECTS CONSTRUCTOR //////////////////////////////////////////////////////
// 1. object constructor or object-types (blueprints / classes)
// 2. the (this) keyword
// 3. adding a property to an object
// 4. adding a method to an object
// 5. adding a property to a constructor
// 6. adding a method to a constructor
// 7. built-in javascript constructor
// 8. did you know (string object, number object, boolean object)

////////////////////////////////////////////////////////////////////////////////
var outCA = document.createElement('div');
outCA.setAttribute('id', 'styleOne');
document.body.appendChild(outCA);

////////////////////////////////////////////////////////////////////////////////
// # object constructor | the (this) keyword
// before constructor we had crearting single object
// object-constructor is the template of object
// we can create more than one object of the the same type by creating object-constructor
// -> the way to create an (object-type), is to use an (object-constructor-function)
// -> objects of same type are created by calling the constructor function with (new) keyword
// NB : it is good practice to name constructor functions with an (upper-case first) varter

// in javascript, the thing called (this) is the object that owns the code
// the value of (this), when used in an object, is the object itself
// -> in constructor-function (this) does not have a value.
// -> (this) is (substitute) for the (new-object)
// -> the value of (this) will become the (new-object) when a new object is created
// NB : (this) is not a variable. it is a keyword. the value of (this) is unchangable

function ExAA() {

  // single object defination
  var varAA = {
    proOne: null,
    proTwo: null,
    methodOne: function () {
      this.proOne = arguments[0];
      this.proTwo = arguments[1];
      outCA.innerHTML += '<br >proOne + proTwo : ' + this.methodTwo();
    },

    methodTwo: function () {
      return this.proOne + this.proTwo;
    },
  };

  varAA.methodOne(11, 22);
  outCA.innerHTML += '<br >';

  // object constructor defination
  var VarAB = function () {
    var localOne = 1;
    globalOne = 2;
    this.proOne = 3;
    this.proTwo = 4;

    this.funcOne = function () {
      outCA.innerHTML += '<br >localOne     : ' + localOne;
      outCA.innerHTML += '<br >globalOne    : ' + globalOne;
      outCA.innerHTML += '<br >proOne       : ' + this.proOne;
      outCA.innerHTML += '<br >proTwo       : ' + this.proTwo;
      outCA.innerHTML += '<br >funcTwo      : ' + this.funcTwo();
      outCA.innerHTML += '<br >value (this) : ' + this;
    };

    this.funcTwo = function () {
      return this.proOne + this.proTwo + localOne + globalOne;
    };

    outCA.innerHTML += '<br >constructor (this) : ' + this;
    outCA.innerHTML += '<br >localOne    : ' + localOne;
    outCA.innerHTML += '<br >globalOne   : ' + globalOne;

    //outCA.innerHTML += '<br >proOne      : ' + proOne;
    outCA.innerHTML += '<br >this.proTwo : ' + this.proTwo;
    outCA.innerHTML += '<br >';
  };

  var varAB1 = new VarAB();
  var varAB2 = new VarAB();

  varAB1.localOne = 11;
  varAB1.globalOne = 22;
  varAB1.proOne = 33;
  varAB1.proTwo = 44;
  varAB1.funcOne();
  outCA.innerHTML += '<br >varAB1.localOne  : ' + varAB1.localOne;
  outCA.innerHTML += '<br >varAB1.globalOne : ' + varAB1.globalOne;
  outCA.innerHTML += '<br >';

  globalOne = 100;

  varAB2.localOne = 10;
  varAB2.globalOne = 20;
  varAB2.proOne = 30;
  varAB2.proTwo = 40;
  varAB2.funcOne();
  outCA.innerHTML += '<br >varAB2.localOne  : ' + varAB2.localOne;
  outCA.innerHTML += '<br >varAB2.globalOne : ' + varAB2.globalOne;
  outCA.innerHTML += '<br >';

  //outCA.innerHTML += '<br >localOne  : ' + localOne;
  outCA.innerHTML += '<br >globalOne : ' + globalOne;

  //outCA.innerHTML += '<br >proOne    : ' + proOne;
  //outCA.innerHTML += '<br >proTwo    : ' + proTwo;
  outCA.innerHTML += '<br >';

  VarAB();
}

////////////////////////////////////////////////////////////////////////////////
// # adding a property to an (object | constructor)
// adding new property to an existing object is easy
// but adding new property to an existing constructor is not same as object
// -> to add a new property to a constructor, you must add it to constructor function
// -> we can define value to properties using arguments or (arguments) property or (literal)

function ExAB() {
  // object defination
  var varAA = {
    proOne: 11,
    proTwo: 22,
  };

  // constructor defination
  var VarAB = function () {
    this.proOne = arguments[0];
    this.proTwo = arguments[1];
    this.proThree = 'default-value';
  };

  // object declaration
  var varAB1 = new VarAB(1, 2);
  var varAB2 = new VarAB(3, 4);

  outCA.innerHTML += '<br >varAA.proOne : ' + varAA.proOne;
  outCA.innerHTML += '<br >varAA.proTwo : ' + varAA.proTwo;
  outCA.innerHTML += '<br >varAB1.proOne : ' + varAB1.proOne;
  outCA.innerHTML += '<br >varAB1.proTwo : ' + varAB1.proTwo;
  outCA.innerHTML += '<br >varAB2.proOne : ' + varAB2.proOne;
  outCA.innerHTML += '<br >varAB2.proTwo : ' + varAB2.proTwo;

  // add new property to existing object and to declared object
  varAA.proThree = 33;
  varAB1.proThree = 5;

  outCA.innerHTML += '<br >varAA.proThree : ' + varAA.proThree;
  outCA.innerHTML += '<br >varAB1.proThree : ' + varAB1.proThree;
  outCA.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # adding a method to an (object | constructor)
// adding new method to an existing object is easy
// constructor function can also define methods
// it is not possible to add new method to an existing constructor as the same way as object do
// adding method to a constructor must be done inside the constructor function

function ExAC() {

  // object defination with method
  var varAA = {
    proOne: null,
    proTwo: null,
    method: function () {
      this.proOne = arguments[0];
      this.proTwo = arguments[1];
      outCA.innerHTML += '<br >proOne + proTwo : ' + this.returnMethod();
    },

    returnMethod: function () {
      return this.proOne + this.proTwo;
    },
  };

  // adding new method to an existing object
  varAA.printMethod = function () {
    outCA.innerHTML += '<br >proOne : ' + this.proOne;
    outCA.innerHTML += '<br >proTwo : ' + this.proTwo;
  };

  varAA.method(11, 22);
  varAA.printMethod();
  outCA.innerHTML += '<br >';

  // constructor defination with method
  const FuncAA = function () {
    this.proOne = null;
    this.proTwo = null;
    this.method = function () {
      this.proOne = arguments[0];
      this.proTwo = arguments[1];
      outCA.innerHTML += '<br >proOne + proTwo : ' + this.returnMethod();
    };

    this.returnMethod = function () {
      return this.proOne + this.proTwo;
    };
  };

  var varAB = new FuncAA();
  var varAC = new FuncAA();

  // adding new method to an declared object (not to constructor or another object)
  varAB.printMethod = function () {
    outCA.innerHTML += '<br >proOne : ' + this.proOne;
    outCA.innerHTML += '<br >proTwo : ' + this.proTwo;
  };

  varAB.method(11, 22);
  varAC.method(33, 44);
  varAB.printMethod();
  outCA.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # built-in object constructor
// javascript has built-in constructors for (native-object)
// NB : the (Math()) object is not in the list.
// -> the (Math()) is a (global) object, the (new) keyword cannot be used on (Math)

// though, javascript has (object) version of (primitive) data-types (String | Number | Boolean)
// -> primitive values are much faster than creating complex-object
// -> should use string-literal ("") instead of (new String())
// -> should use number-literal (0) instead of (new Number())
// -> should use boolean-literal (true/false) instead of (new Boolean())
// -> should use pattern-literal (/()/) instead of (new RegExp())
// -> should use function-expressions (() {}) instead of (new Function())
// -> should use array-literal ([]) instead of (new Array())
// -> should use object-literal ({}) instead of (new Object())

// Normally, strings are created as primitives: firstName = "John"
// But strings can also be created as objects using the new keyword: firstName = new String("John")
// Normally, numbers are created as primitives: x = 30
// But numbers can also be created as objects using the new keyword: x = new Number(30)
// Normally, booleans are created as primitives: x = false
// But booleans can also be created as objects using the new keyword: x = new Boolean(false)

function ExAD() {
  var varAA = new String('string');   // string object (do not use string constructor)
  var varAA = 'string';               // string literal is more faster than string object

  var varAB = new Number(11);         // number object (do not use number constructor)
  var varAB = 11;                     // number literal is more faster than number object

  var varAC = new Boolean(true);      // boolean object (do not use boolean constructor)
  var varAC = false;                  // boolean literal is more faster than boolean object

  var varAD = new RegExp();

  var varAE = new Date();             // date object (date constructor)
  var varAE = Date();                 // date literal is more faster than date object

  var varAF = new Function();         // function object (function constructor)
  var varAF = function () {};         // function expression is more faster than function object

  var varAG = new Array([]);          // array object (array constructor)
  var varAG = [];                     // array literal is more faster than array object

  var varAH = new Object({});         // object object (object constructor)
  var varAH = { };                    // object literal is more faster than object object

  outCA.innerHTML += '<br >string-object (varAA)  : ' + varAA;
  outCA.innerHTML += '<br >string-literal (varAA) : ' + varAA;
  outCA.innerHTML += '<br >number-object (varAB)  : ' + varAB;
  outCA.innerHTML += '<br >number-literal (varAB) : ' + varAB;
  outCA.innerHTML += '<br >bool-object (varAC)    : ' + varAC;
  outCA.innerHTML += '<br >bool-literal (varAC)   : ' + varAC;
  outCA.innerHTML += '<br >';

  outCA.innerHTML += '<br >regExp-object (varAD)    : ' + varAD;
  outCA.innerHTML += '<br >date-object (varAE)      : ' + varAE;
  outCA.innerHTML += '<br >date-literal (varAE)     : ' + varAE;
  outCA.innerHTML += '<br >function-object (varAF)  : ' + varAF;
  outCA.innerHTML += '<br >function-literal (varAF) : ' + varAF;
  outCA.innerHTML += '<br >array-object (varAG)     : ' + varAG;
  outCA.innerHTML += '<br >array-literal (varAG)    : ' + varAG;
  outCA.innerHTML += '<br >object-object (varAH)    : ' + varAH;
  outCA.innerHTML += '<br >object-literal (varAH)   : ' + varAH;
  outCA.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
outCA.innerHTML += 'ex-aa : object-constructor | the (this) keyword';
outCA.innerHTML += '<hr >'; ExAA();
outCA.innerHTML += '<br >ex-ab : adding a property to an (object | constructor)';
outCA.innerHTML += '<hr >'; ExAB();
outCA.innerHTML += '<br >ex-ac : adding a method to an (object | constructor)';
outCA.innerHTML += '<hr >'; ExAC();
outCA.innerHTML += '<br >ex-ad : built-in object constructor | boolean, number, string';
outCA.innerHTML += '<hr >'; ExAD();
