///// OBJECT DEFINATION ////////////////////////////////////////////////////////
// 1. javascript object
// 2. javascript primitives
// 3. objects are variables
// 4. object properties
// 5. object methods
// 6. creating a javascript object
// 7. using an object literal
// 8. using the javascript keyword (new)
// 9. javascript objects are mutable

////////////////////////////////////////////////////////////////////////////////
var outAD = document.createElement('div');
outAD.setAttribute('id', 'styvarwo');
document.body.appendChild(outAD);

////////////////////////////////////////////////////////////////////////////////
// # javascript objects and primitives
// in javascript, object are king. if you understand object, you understand javascript
// in javascript, almost everything is an object
// all javascript value, except primitives, are object
// -> boolean | number | string can be object (if defined with the NEW keyword)
// -> dates and maths are always object
// -> RegExp are always object
// -> arrays are always object
// -> functions are always object
// -> objects are always object

// a primitive value is a value that has no (property or method)
// primitive values are immutable (they are hardcoded) and therefore cannot be changed
// javascript defines five (5) types of primitive data-types -
// -> string | number | boolean
// -> null | undefined
// NB: (x = 30), any one can change the value of (x), but no one can change the value of (30)
// NB: primitive examples -
// -> string -> 'this is a string'
// -> number -> 11 (any integer or float)
// -> boolean -> true (true or false)
// -> null -> null (null is always unll)
// -> undefined -> undefined (undefined is alwasy undefined)

function ExDA() {
  var varAA;
  var varAB = 10;
  var varAC = true;
  var varAD = 'string';
  var varAE = [10, true, 'string'];
  var varAF = { proOne: 10, proTwo: true, proThree: 'string' };
  var varAG = new Date();
  var varAH = function () { };

  outAD.innerHTML += '<br >varAA (undefined) : ' + typeof varAA;
  outAD.innerHTML += '<br >varAB (number)    : ' + typeof varAB;
  outAD.innerHTML += '<br >varAC (boolean)   : ' + typeof varAC;
  outAD.innerHTML += '<br >varAD (string)    : ' + typeof varAD;
  outAD.innerHTML += '<br >varAE (array)     : ' + typeof varAE;
  outAD.innerHTML += '<br >varAF (object)    : ' + typeof varAF;
  outAD.innerHTML += '<br >varAG (date)      : ' + typeof varAG;
  outAD.innerHTML += '<br >varAH (function)  : ' + typeof varAH;
  outAD.innerHTML += '<br >';

  var varAI = new Number(11);
  var varAJ = new Boolean(false);
  var varAK = new String('string');

  outAD.innerHTML += '<br > varAI (number)  : ' + typeof varAI;
  outAD.innerHTML += '<br > varAJ (boolean) : ' + typeof varAJ;
  outAD.innerHTML += '<br > varAK (string)  : ' + typeof varAK;
  outAD.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # objects are variable | object-properties | object-method
// javascript variables can contain (single value), are scaler-variable
// javascript variables can also contain (many values), are complex-variable
// javascript objects are variables too, but objects can contain many values
// objects are written as (name:value) pair (name and value seperated by colon)
// and each (name:value) pairs are seperated by (comma)
// NB: so, javascript object is a collection of (named values)
// NB: it is a common practice to declare objects with the (const) keyword
// NB: though we can declare any object as (var | var)

// these (name:value) pairs are called (properties)
// and all (properties) are defined inside (curly-brackets)
// object (properties) can be both (primitive-value | other-object | function)
// objects written as (name value) pairs are similar to -
// -> associative array in PHP
// -> dictionaris in python
// -> hash table in c
// -> hash map in java
// -> hashes in ruby and perl

// methods are (actions) that can be performed on object
// an (object-method) is an (object-property) containing a (function-defination)
// NB: so, javascript objects are containers for (named value), called (property | method)

function ExDB() {
  // javascript variables
  var varAA = 10;
  var varAB = true;
  var varAC = 'string';

  outAD.innerHTML += '<br >varAA : ' + varAA;
  outAD.innerHTML += '<br >varAB : ' + varAB;
  outAD.innerHTML += '<br >varAC : ' + varAC;
  outAD.innerHTML += '<br >';

  // javascript variable (contain many values), called object
  var varAD = { proOne: 11, proTwo: false };
  var varAE = { proOne: 10, proTwo: 20 };
  const constAF = { proOne: true, proTwo: false };

  outAD.innerHTML += '<br >varAD.proOne   : ' + varAD.proOne;
  outAD.innerHTML += '<br >varAD.proTwo   : ' + varAD.proTwo;
  outAD.innerHTML += '<br >varAE.proOne   : ' + varAE.proOne;
  outAD.innerHTML += '<br >varAE.proTwo   : ' + varAE.proTwo;
  outAD.innerHTML += '<br >constAF.proOne : ' + constAF.proOne;
  outAD.innerHTML += '<br >constAF.proTwo : ' + constAF.proTwo;
  outAD.innerHTML += '<br >';

  // object (var | var | const), changing (property and property-values)
  varAD.proThree = null;
  varAD.proOne = 111;
  outAD.innerHTML += '<br >varAD.proOne   : ' + varAD.proOne;
  outAD.innerHTML += '<br >varAD.proThree : ' + varAD.proThree;

  varAE.proThree = null;
  varAE.proOne = 222;
  outAD.innerHTML += '<br >varAE.proOne   : ' + varAE.proOne;
  outAD.innerHTML += '<br >varAE.proThree : ' + varAE.proThree;

  constAF.proThree = null;

  constAF.proOne = 333;
  outAD.innerHTML += '<br >constAF.proOne   : ' + constAF.proOne;
  outAD.innerHTML += '<br >constAF.proThree : ' + constAF.proThree;

  outAD.innerHTML += '<br >';

  // object with (properties and method)
  const constAG = {
    proOne: undefined,
    proTwo: undefined,
    methodOne: function () {
      this.proOne = arguments[0];
      this.proTwo = arguments[1];
    },

    methodTwo: function () {
      outAD.innerHTML += '<br >proOne : ' + this.proOne;
      outAD.innerHTML += '<br >proTwo : ' + this.proTwo;
    },
  };

  constAG.methodOne(11.50, 22.50);
  constAG.methodTwo();

  constAG.proOne = 111.11;
  constAG.proThree = true;
  constAG.methodTwo();
  outAD.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # creating javascript object
// with javascript, can create or define user-define object
// there are different ways to create new objects -
// -> create a (single-object) using an (object-literal)
// -> create a (single-object) using the keyword (new) with (Object()) method
// -> create an (object) using the (Object.create()) method
// -> define the (object-constructor), then create (more than one object) of that type

function ExDC() {

  // (literal) defination of an object
  var varAA = { propertyOne: 11, propertyTwo: 22 };

  // (Object()) method defination of an object
  var varAB = new Object({ propertyOne: 11, propertyTwo: false });

  // (Object.create()) method defination of an object
  // (Object.create()) method does not use (NEW) to create an object
  var varAC = Object.create({ propertyOne: 'string', propertyTwo: 11.11 });

  // (constructor) defination of an object
  // in-case of (constructor) defination (name) should start with (capital) latter
  // we can declare (more than one) object of a (constructor) type
  var VarAD = function () {
    this.propertyOne = arguments[0];
    this.propertyTwo = arguments[1];
  };

  var objAA = new VarAD(11, true);
  var objAB = new VarAD(false, 'string');

  outAD.innerHTML += '<br >varAA.propertyOne : ' + varAA.propertyOne;
  outAD.innerHTML += '<br >varAA.propertyTwo : ' + varAA.propertyTwo;
  outAD.innerHTML += '<br >varAB.propertyOne : ' + varAB.propertyOne;
  outAD.innerHTML += '<br >varAB.propertyTwo : ' + varAB.propertyTwo;
  outAD.innerHTML += '<br >varAC.propertyOne : ' + varAC.propertyOne;
  outAD.innerHTML += '<br >varAC.propertyTwo : ' + varAC.propertyTwo;
  outAD.innerHTML += '<br >objAA.propertyOne : ' + objAA.propertyOne;
  outAD.innerHTML += '<br >objAA.proeprtyTwo : ' + objAA.propertyTwo;
  outAD.innerHTML += '<br >objAB.propertyOne : ' + objAB.propertyOne;
  outAD.innerHTML += '<br >objAB.propertyTwo : ' + objAB.propertyTwo;
  outAD.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # creating object & empty-object using (literal and NEW keyword)
// this is the easiest way to create a javascript object
// using an object-literal, you both define and create an object in one statement
// an object-literal is a list of (name:value) pairs inside curly-brackets {}
// spaces and line-breaks are not important
// an object-defination can span multiple-lines
// NB : can create (empty-object), only using the (curly-brackets) without any properties
// -> and later can add (properties) to that (empty-object)

// can create object using the (Object()) method with (NEW) keyword
// object-literal and Object() method do the same thing but should use (object-literal)
// NB : using the (NEW) keyword with (Object()) method can slow the execution speed

function ExDD() {

  // object is created by (literal) first-one | (Object()) method second-one
  // if one-line-defination, then no need to use (,) comma at the end of the last-property
  var varAA = { propertyOne: 11, propertyTwo: 22 };
  var varAB = new Object({ propertyOne: 10, propertyTwo: 20 });

  outAD.innerHTML += '<br >varAA.propertyOne : ' + varAA.propertyOne;
  outAD.innerHTML += '<br >varAA.propertyTwo : ' + varAA.propertyTwo;
  outAD.innerHTML += '<br >varAB.propertyOne : ' + varAB.propertyOne;
  outAD.innerHTML += '<br >varAB.propertyTwo : ' + varAB.propertyTwo;
  outAD.innerHTML += '<br >';

  // literal-object-defination span, adding properties and methods, type variation
  // if defination-span, then last-property should ends with (,) comma
  var varAC = {
    propertyOne: 11,
    propertyTwo: true,
    propertyThree: 'string',
    methodOne: function () {
      outAD.innerHTML += '<br >propertyOne   : ' + this.propertyOne;
      outAD.innerHTML += '<br >propertyTwo   : ' + this.propertyTwo;
      outAD.innerHTML += '<br >propertyThree : ' + this.propertyThree;
      this.methodTwo();
    },

    methodTwo: function () {
      outAD.innerHTML += '<br >propertyThree : ' + this.propertyThree.length;
    },
  };

  varAC.methodOne();

  // method-object-defination span, adding properties and methods, type variation
  // if defination-span, then last-property should ends with (,) comma
  var varAD = new Object({
    propertyOne: undefined,
    propertyTwo: undefined,
    propertyThree: undefined,

    methodOne: function (argOne, argTwo) {
      this.propertyOne = argOne;
      this.propertyTwo = argTwo;
      this.propertyThree = arguments[2];
    },

    methodTwo: function () {
      outAD.innerHTML += '<br >propertyOne   : ' + this.propertyOne;
      outAD.innerHTML += '<br >propertyTwo   : ' + this.propertyTwo;
      outAD.innerHTML += '<br >propertyThree : ' + this.propertyThree;
    },
  });

  varAD.methodOne(222, false, 'string');
  varAD.methodTwo();

  // (empty-object) is created by (literal) first-one | (Object()) method second-one
  // (empty-object) in method-defination, should declare the {} curly-brackets in parentheses
  var varAE = {};
  var varAF = new Object({});
  var varAG = new Object();

  varAE.propertyOne = 111;
  varAF.propertyOne = 100;
  varAG.propertyOne = 110;

  outAD.innerHTML += '<br >varAE.porpertyOne : ' + varAE.propertyOne;
  outAD.innerHTML += '<br >varAF.propertyOne : ' + varAF.propertyOne;
  outAD.innerHTML += '<br >varAG.propertyOne : ' + varAG.propertyOne;
  outAD.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # objects are mutable
// objects are mutable, they are address by (reference), not by (value)
// so if we assign an object to a variable, then both will be the same-object
// -> in this case, we can do the same operation to the object using both of them

function ExDE() {
  var varAA = {
    proOne: undefined,
    proTwo: undefined,
    methodOne: function () {
      this.proOne = arguments[0];
      this.proTwo = arguments[1];
    },

    methodTwo: function () {
      outAD.innerHTML += '<br >proOne : ' + this.proOne;
      outAD.innerHTML += '<br >proTwo : ' + this.proTwo;
      outAD.innerHTML += '<br >proOne + proTwo : ' + (this.proOne + this.proTwo);
    },
  };

  var varAB = varAA;
  varAB.methodOne(11, 22);
  varAA.methodTwo();
}

////////////////////////////////////////////////////////////////////////////////
outAD.innerHTML += 'ex-da : javascript objects & primitives';
outAD.innerHTML += '<hr >'; ExDA();
outAD.innerHTML += '<br >ex-db : objects are variable, object-properties & object-methods';
outAD.innerHTML += '<hr >'; ExDB();
outAD.innerHTML += '<br >ex-dc : different ways of creating object';
outAD.innerHTML += '<hr >'; ExDC();
outAD.innerHTML += '<br >ex-dd : creating object & empty-object using (literal/NEW keyword)';
outAD.innerHTML += '<hr >'; ExDD();
outAD.innerHTML += '<br >ex-de : objects are mutable';
outAD.innerHTML += '<hr >'; ExDE();
