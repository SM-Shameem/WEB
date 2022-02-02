///// OBJECTS PROPERTIES ///////////////////////////////////////////////////////
// 1. javascript object properties
// 2. accessing javascript properties
// 3. javascript (for..in) loop
// 4. adding new properties
// 5. devaring properties
// 6. nested object
// 7. nested arrays and objects
// 8. property attributes
// 9. prototype properties

////////////////////////////////////////////////////////////////////////////////
var outBA = document.createElement('div');
outBA.setAttribute('id', 'styleOne');
document.body.appendChild(outBA);

////////////////////////////////////////////////////////////////////////////////
// # object properties | accessing properties
// properties are the most important part of any javascript object
// properties are the values associated with a javascript object
// a javascript object is a collection of unordered properties
// properties can usually be changed, added and devared, but some are read only

// the syntax for accessing the property of an object is -
// -> objectName.propertyName
// -> objectName["propertyName"]
// -> objectName[expression]
// NB : the (expression) must evaluate to a (propertyName)

function ExAA() {
  const constAA = {
    proOne: 11,
    proTwo: 22,
    proThree: 33,
  };

  // using (index notation) for accessing (property) is not good practice
  // -> to access property should use (dot) operator
  outBA.innerHTML += '<br >constAA.proOne : ' + constAA.proOne;
  outBA.innerHTML += '<br >constAA.proTwo : ' + constAA['proTwo'];

  // using (expression) to accessing (property)
  var x = 'proThree';
  outBA.innerHTML += '<br >constAA.proThree : ' + constAA[x];

  // using (expression) - eligal expression
  x = 'proOne' + 'proTwo';
  outBA.innerHTML += '<br >constAA.x : ' + constAA[x];

  // (propertyName) can not be accessed directly, must have to access through its object
  //outBA.innerHTML += '<br >constAA.proThree : ' + proThree;
  outBA.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # object properties and (for..in) loop
// javascript (for..in) loops through the properties of an object
// -> the block of code inside of the (for..in) loop will be executed once for each property

function ExAB() {
  const constAA = {
    proOne: 11,
    proTwo: 22,
    proThree: 33,
    proFour: true,
    proFive: 'string',
    proSix: 44.55,
  };

  // using (for..in) loop to access object (properties)
  for (var x in constAA)
    outBA.innerHTML += '<br >constAA.' + x + ' : ' + constAA[x];
  outBA.innerHTML += '<br >';

  // using (for..in) loop to access array (indexes)
  var varAA = [1, 2, 3, 4, 5];
  for (var x in varAA)
    outBA.innerHTML += '<br >varAA[' + x + '] : ' + varAA[x];
  outBA.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # adding properties | devaring properties
// we can add an new property to an existing object by simply giving it a value
// the (devare) keyword devares a property for an object
// -> after devare a property, it can not be used, till it is added back again
// -> the (devare) operator is only worked on (object-property), not for (variable or function)
// -> the (devare) should not used on (built-in) javascript (object-properties), it will crash

function ExAC() {
  const constAA = {
    proOne: 11,
    proTwo: 22,
  };

  constAA.proThree = 33;    // adding new property to existing object (const object)
  constAA.proOne = 10;      // changing value of existing property (const object)

  outBA.innerHTML += '<br >constAA.proOne   : ' + constAA.proOne;
  outBA.innerHTML += '<br >constAA.proTwo   : ' + constAA.proTwo;
  outBA.innerHTML += '<br >constAA.proThree : ' + constAA.proThree;
  outBA.innerHTML += '<br >';

  // devare existing and added-new properties
  devare constAA.proTwo;
  devare constAA['proThree'];

  outBA.innerHTML += '<br >constAA.proOne   : ' + constAA.proOne;
  outBA.innerHTML += '<br >constAA.proTwo   : ' + constAA.proTwo;
  outBA.innerHTML += '<br >constAA.proThree : ' + constAA.proThree;
  outBA.innerHTML += '<br >';

  // re-added devared properties
  constAA.proTwo = 20;
  constAA.proThree = 30;

  outBA.innerHTML += '<br >constAA.proOne   : ' + constAA.proOne;
  outBA.innerHTML += '<br >constAA.proTwo   : ' + constAA.proTwo;
  outBA.innerHTML += '<br >constAA.proThree : ' + constAA.proThree;
  outBA.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # nested object | nested array and object
// value in a object can be another object
// nested object-properties can be accessed using the (dot or index) notation or expression
// -> objectName.proName.NestedProName
// -> objectName.proName[NestedProName]
// -> objectName[proName][NestedProName]
// -> objectName[x1][x2] (here, x1 = 'proName' | x2 = 'NestedProName')

// value in object can be arrays, and
// -> values in array can be objects
// the (for..in) loop can be used to access (nested array-object) combination

function ExAD() {

  var varAA = ['a', ['b', 'c']];
  const constAA = { proOne: 11, proTwo: [1, 2] };

  // nested objec and array
  // property value as an object or array
  // array index as an object or array
  const constAB = {
    proOne: 111,
    proTwo: { NestOne: 10, NestTwo: 20, },
    proThree: [101, 202],
    proFour: constAA,
    proFive: varAA,
  };

  outBA.innerHTML += '<br >varAA : ' + varAA;
  outBA.innerHTML += '<br >constAA : ' + constAA;
  outBA.innerHTML += '<br >constAA.proOne : ' + constAA.proOne;
  outBA.innerHTML += '<br >constAA.proTwo : ' + constAA.proTwo;
  outBA.innerHTML += '<br >';

  outBA.innerHTML += '<br >constAB.proOne : ' + constAB.proOne;
  outBA.innerHTML += '<br >constAB.proTwo : ' + constAB.proTwo;
  outBA.innerHTML += '<br >constAB.proTwo.NestOne : ' + constAB.proTwo.NestOne;
  outBA.innerHTML += '<br >constAB.proTwo.NestTwo : ' + constAB.proTwo.NestTwo;
  outBA.innerHTML += '<br >constAB.proThree : ' + constAB.proThree;
  outBA.innerHTML += '<br >constAB.proThree[0] : ' + constAB.proThree[0];
  outBA.innerHTML += '<br >constAB.proThree[1] : ' + constAB.proThree[1];
  outBA.innerHTML += '<br >constAB.proFour : ' + constAB.proFour;
  outBA.innerHTML += '<br >constAB.proFour.proOne : ' + constAB.proFour.proOne;
  outBA.innerHTML += '<br >constAB.proFour.proTwo : ' + constAB.proFour.proTwo;
  outBA.innerHTML += '<br >constAB.proFour.proTwo[0] : ' + constAB.proFour.proTwo[0];
  outBA.innerHTML += '<br >constAB.proFour.proTwo[1] : ' + constAB.proFour.proTwo[1];
  outBA.innerHTML += '<br >';

  outBA.innerHTML += '<br >constAB.proFive    : ' + constAB.proFive;
  outBA.innerHTML += '<br >constAB.proFive[0] : ' + constAB.proFive[0];
  outBA.innerHTML += '<br >constAB.proFive[1] : ' + constAB.proFive[1];
  outBA.innerHTML += '<br >';

  // nested objec and array accessing notation
  const constAC = {
    proOne: { nestOne: 11, nestTwo: 22 },
    proTwo: [1, 2],
    proThree: constAA,
    proFour: varAA,
  };

  outBA.innerHTML += '<br >constAC.proOne.nestOne : ' + constAC.proOne.nestOne;
  outBA.innerHTML += '<br >constAC.proOne[nestTwo]: ' + constAC.proOne['nestTwo'];
  outBA.innerHTML += '<br >constAC.proTwo[0] : ' + constAC.proTwo[0];
  outBA.innerHTML += '<br >constAC["proTwo"][1]: ' + constAC['proTwo'][1];

  outBA.innerHTML += '<br >constAC["proThree"]["proOne"] : ' + constAC['proThree']['proOne'];
  outBA.innerHTML += '<br >constAC["proThree"].proTwo : ' + constAC['proThree'].proTwo;
  outBA.innerHTML += '<br >constAC["proThree"]["proTwo"][0] : ' + constAC['proThree']['proTwo'][0];
  outBA.innerHTML += '<br >constAC.proThree.proTwo[1] : ' + constAC.proThree.proTwo[1];
  outBA.innerHTML += '<br >constAC["proFour"] : ' + constAC["proFour"];
  outBA.innerHTML += '<br >constAC["proFour"][0] : ' + constAC['proFour'][0];
  outBA.innerHTML += '<br >constAC.proFour[1] : ' + constAC.proFour[1];
  outBA.innerHTML += '<br >constAC["proFour"][1][0] : ' + constAC["proFour"][1][0];
  outBA.innerHTML += '<br >constAC.proFour[1][1] : ' + constAC.proFour[1][1];
  outBA.innerHTML += '<br >';

  // nested object and array, accessing through (for..in) loop
  const constAD = {
    proOne: { nestOne: 11, nestTwo: 22 },
    proTwo: [10, 20],
  };

  for (var x in constAD) {
    for (var y in constAD[x])
      outBA.innerHTML += '<br >constAD.' + x + '.' + y + ' : ' + constAD[x][y];
  }

  outBA.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
outBA.innerHTML += 'ex-aa : object properties | accessing properties';
outBA.innerHTML += '<hr >'; ExAA();
outBA.innerHTML += '<br >ex-ab : object properties and (for..in) loop';
outBA.innerHTML += '<hr >'; ExAB();
outBA.innerHTML += '<br >ex-ac : adding properties | devaring properties';
outBA.innerHTML += '<hr >'; ExAC();
outBA.innerHTML += '<br >ex-ad : nested object | nested array and object';
outBA.innerHTML += '<hr >'; ExAD();
