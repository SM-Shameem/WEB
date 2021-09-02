///// OBJECTS //////////////////////////////////////////////////////////////////
// 1. real-life objects, properties, and methods
// 2. javascript objects
// 3. object defination
// 4. object properties
// 5. accessing object properties
// 6. object methods
// 7. the (this) keyword
// 8. accessing object methods
// 9. do not declare Strings, Numbers, and Booleans as objects

////////////////////////////////////////////////////////////////////////////////
var outAA = document.createElement('div');
outAA.setAttribute('id', 'styleOne');
document.body.appendChild(outAA);

////////////////////////////////////////////////////////////////////////////////
// in real life, a car in an object
// a car has properties like (weight and color) and method like (start and stop)
// all car has same properties but the property values differ from car to car
// all car has same methods but the methods are performed at different time

// # javascript object
// javascript variable are containers for data values
// javascript objects are variable too, but object can contain many values
// to declare an (object), first (var | let | const) keyword, then (objectName),
// -> then (=) operator, then (object-defination) start with (second-bracket)
// in object defination, values are written as (name:value) pair
// -> (name) and (value) are seperated by a (colon)
// -> and each (pair) is seperated by a (coma)
// -> each (pair) is called (property)
// -> all (properties) of an (object) are enclosed with (second-bracket)
// -> object-property (value) can be (literal) or (method) defination
// NB: it is a common practice to declare objects with the (const) keyword

function ExAA() {
  // declaring variables
  var carType = 'TOYOTA';
  var carModel = '500';
  var carColor = 'white';

  // object defination ..........................................
  var car = { type: 'HONDA', model: 'AX20', color: 'Silver' };

  function NestedOne() {
    if (arguments.length > 1) {
      outAA.innerHTML += '<br >carType  : ' + arguments[0];
      outAA.innerHTML += '<br >carModel : ' + arguments[1];
      outAA.innerHTML += '<br >carColor : ' + arguments[2];
    } else {

      // accessing object properties ............................
      // like (arguments[0].propertyName)
      outAA.innerHTML += '<br >carType  : ' + arguments[0].type;
      outAA.innerHTML += '<br >carModel : ' + arguments[0].model;
      outAA.innerHTML += '<br >carColor : ' + arguments[0].color;
    }
  }

  NestedOne(carType, carModel, carColor);
  NestedOne(car);   // using an object as an argument ..........
  outAA.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # object defination, object properties, and accessing object properties
// in javascript an object can define or create with object-literal
// space and line break are not important
// an object defination can span multiple-lines

// the (name:values) pairs in JavaScript (objects) are called (properties)
// object properties value can be any-type-of literals (string | number | boolean)
// object properties value can be (array | object) also
// an object can have (mixed or same) type of properties

// object properties can be accessed in two ways
// -> using (.) operator or using ([]) third brackets (propertyName must be quotated), like -
// -> objectName.propertyName (this notation is best-practice)
// -> objectName["propertyName"] (this notation is not best-practice)
// NB : javascript (objects) are container for (named values) called properties

function ExAB() {
  var objAA = { proOne: 11, proTwo: 22, proThree: true };

  // object property can be (span) in multiple-lines
  // in-case of multiple-lines, the last property should ends with the (,) comma, like others
  var objAB = {
    proOne: 'string',
    proTwo: false,
    proThree: 10,
  };

  outAA.innerHTML += '<br >objAA.proOne   : ' + objAA.proOne;
  outAA.innerHTML += '<br >objAA.proTwo   : ' + objAA['proTwo'];
  outAA.innerHTML += '<br >objAA.proThree : ' + objAA.proThree;
  outAA.innerHTML += '<br >objAB.proOne   : ' + objAB['proOne'];
  outAA.innerHTML += '<br >objAB.proTwo   : ' + objAB.proTwo;
  outAA.innerHTML += '<br >objAB.proThree : ' + objAB['proThree'];
  outAA.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # object method, accessing methods, (this) keyword
// objects can also have methods
// methods are (actions) that can be performed on (object)
// methods are stored in (properties) as (function definations)
// NB: a (method) is a (function) stored as a (property)

// a (method) can be accessed as like other property using the (.) operator
// -> but there must have the () parentheses followed by the (methodName)
// -> here, (methodName) is the (propertyName) which have the (method defination)
// without () parentheses, if a method call through object, it will return its defination

// in a function defination, (this) refers to the owner of the function
// if a function is a (method) of an (object) then the (object) is the owner of that function
// if a function declared stand-alone the the (document) is the owner of that function
// so in case of (method), (this) referes that (object)
// if a (function) stand-alone, then (this) referes the (document)

// method defination
// method defination is a same as function, but here (propertyName) is used to call that method
// -> and there is no (methodName) after the function keyword
// -> so syntax -
// -> first (propertyName), then (:) clone, then (function) keyword, then (parentheses)
// -> after (parentheses), function defination is start inside (curly-brackets) as well

function ExAC() {
  var varAA = {
    proOne: 11,
    proTwo: 22,

    // method-defination is declared as property-value
    // this method executes two output statements
    // here, (this) keyword referest the (EX03) object
    // so, all the members of (EX03) can be called through (this) keyword,
    // -> from of its any member methods
    methodOne: function () {
      outAA.innerHTML += '<br >proOne : ' + this.proOne;
      outAA.innerHTML += '<br >proTwo : ' + this.proTwo;
    },

    // this method executes only the return statement
    methodTwo: function () {
      return this.proOne + this.proTwo;
    },

    // any object-member can not call directly,
    // (this) keyword is required to call any (property or method)
    methodThree: function () {

      //methodOne();
      outAA.innerHTML += '<br >' + this.methodTwo();

      //outAA.innerHTML += '<br >' + proOne;
      outAA.innerHTML += '<br >' + this.proTwo;
    },
  };

  // here method is accessed through its object
  // method is called with parentheses, so it shows the output of the method-action
  varAA.methodOne();
  outAA.innerHTML += '<br >proOne + proTwo : ' + varAA.methodTwo();
  outAA.innerHTML += '<br >';

  // here method is called without parentheses, so it shows the output of the method-defination
  outAA.innerHTML += '<br >methodOne : ' + varAA.methodOne;
  outAA.innerHTML += '<br >methodTwo : ' + varAA.methodTwo;
  outAA.innerHTML += '<br >';

  varAA.methodThree();
  outAA.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// when a javascript variable is declared with the (new) keyword, then it created as an object
// avoid (String, Number, and Boolean) objects, it can slow down execution speed

function ExAD() {

  // (String | Number | Boolean) should not declare as object
  // inside parentheses of (String() | Number() | Boolean()) method, have to define the value
  var varAA = new String();
  var varAB = new Number();
  var varAC = new Boolean();

  // but (Object) can be declared using the (new) keyword followed by the (Object()) method
  // -> here ({}) curly-brackets should used inside the parentheses of (Object()) method
  // -> we can define (object-defination) inside ({}) curly-brackets
  var varAD = new Object({});

  outAA.innerHTML += '<br >varAA (string-object)  : ' + varAA;
  outAA.innerHTML += '<br >varAB (number-object)  : ' + varAB;
  outAA.innerHTML += '<br >varAC (boolean-object) : ' + varAC;
  outAA.innerHTML += '<br >varAD (object)         : ' + varAD;
  outAA.innerHTML += '<br >';

  var varAE = new String('string');
  var varAF = new Number(11);
  var varAG = new Boolean(false);
  var varAH = new Object({
    proOne: 11,
    proTwo: true,
    proThree: 'string',
  });

  outAA.innerHTML += '<br >varAE (string-object)  : ' + varAE;
  outAA.innerHTML += '<br >varAF (number-object)  : ' + varAF;
  outAA.innerHTML += '<br >varAG (boolean-object) : ' + varAG;
  outAA.innerHTML += '<br >varAH.proOne   : ' + varAH.proOne;
  outAA.innerHTML += '<br >varAH.proTwo   : ' + varAH.proTwo;
  outAA.innerHTML += '<br >varAH.proThree : ' + varAH.proThree;
}

////////////////////////////////////////////////////////////////////////////////
outAA.innerHTML += '<br >ex-aa : real life object, properties and methods';
outAA.innerHTML += '<hr >'; ExAA();
outAA.innerHTML += '<br >ex-ab : ojbect defination, object properties, and accessing properties';
outAA.innerHTML += '<hr >'; ExAB();
outAA.innerHTML += '<br >ex-ac : object method, accessing methods, (this) keyword';
outAA.innerHTML += '<hr >'; ExAC();
outAA.innerHTML += '<br >ex-ad : do not declare strings, numbers, and booleans as object';
outAA.innerHTML += '<hr >'; ExAD();
