///// OBJECTS DISPLAY //////////////////////////////////////////////////////////
// 1. javascript display objects
// 2. how to display javascript objects
// 3. displaying object properties
// 4. displaying the object in a loop
// 6. using (Object.values())
// 7. using (JSON.stringify())
// 8. stringify dates
// 9. stringify functions
// 10. stringify arrays

////////////////////////////////////////////////////////////////////////////////
var outBC = document.createElement('div');
outBC.setAttribute('id', 'styleOne');
document.body.appendChild(outBC);

////////////////////////////////////////////////////////////////////////////////
// # display object | display object-properties | display object-properties in a loop
// displaing a javascript object will output ([object Object])
// some common solutions to display javascript objects are -
// -> displaying the (object properties) by name
// -> displaying the (object properties) in a loop
// -> displaying the (object) using (Object.values()), converting into array
// -> displaying the (object) using (JSON.stringify()), converting into string as JSON notation

// the properties of an object can be displayed as a string
// the properties of an object can be collected in a loop
// -> to get the value of object through (for..in) loop,
// -> have to use (objectName[variableName])
// -> cannot use (objectName.variableName)

function ExCA() {
  const constAA = {
    proOne: 11,
    proTwo: 22,
    method: function () {
      return this.proOne + this.proTwo;
    },
  };

  // simply object will display ([object Object])
  outBC.innerHTML += '<br >constAA : ' + constAA;
  outBC.innerHTML += '<br >constAA.proOne : ' + constAA.proOne;
  outBC.innerHTML += '<br >constAA.proTwo : ' + constAA.proTwo;
  outBC.innerHTML += '<br >constAA.method : ' + constAA.method();
  outBC.innerHTML += '<br >';

  // using (for .. in) loop
  for (var x in constAA)
    outBC.innerHTML += '<br >constAA.' + x + ' : ' + constAA[x];
  outBC.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # using (Object.values()) | (JSON.stringify())
// any javascript object can be converted to an array using (Object.value())
// any javascript object can be stringified (converted to a string)
// -> with the javascript function (JSON.stringify())
// -> after (stringify), the result will be a string as a JSON notation

function ExCB() {
  const constAA = {
    proOne: 11,
    proTwo: 22,
    method: function () {
      return this.proOne + this.proTwo;
    },
  };

  outBC.innerHTML += '<br >constAA : ' + constAA;
  outBC.innerHTML += '<br >constAA.proOne : ' + constAA.proOne;
  outBC.innerHTML += '<br >constAA[1]     : ' + constAA[1];
  outBC.innerHTML += '<br >constAA.method : ' + constAA.method();
  outBC.innerHTML += '<br >';

  // Object.values() - convert an object to an array
  var varAA = Object.values(constAA);
  outBC.innerHTML += '<br >varAA : ' + varAA;
  outBC.innerHTML += '<br >varAA[0]     : ' + varAA[0];
  outBC.innerHTML += '<br >varAA.proTwo : ' + varAA.proTwo;
  outBC.innerHTML += '<br >varAA[2]     : ' + varAA[2];
  outBC.innerHTML += '<br >';

  // JSON.stringify() - convert an object to an string as JSON notation
  // JSON.stringify cannot stringify any (object-method)
  var varAB = JSON.stringify(constAA);
  outBC.innerHTML += '<br >varAB : ' + varAB;
  outBC.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # stringify dates | stringify functions | stringify arrays
// JSON.stringify() will not stringify (functions)
// -> this can be fixed by converting the functions into (strings), before (stringify)
// -> the (toString) can be used to convert
// JSON.stringify() can stringify a javascript (date) into string
// JSON.stringify() can stringify a javascript (array) into string
// -> the result will be string as a JSON notation

function ExCC() {
  const constAA = {
    proOne: 11,
    proTwo: true,
    proThree: 'string',
    proFour: null,
    proFive: undefined,
  };

  const constAB = {
    proOne: 22,
    proTwo: true,
    proThree: 'string',
    proFour: [10, 20, 30],
  };

  const constAC = {
    proOne: 33,
    proTwo: false,
    proThree: 'string',
    proFour: Date(),
  };

  const constAD = {
    proOne: 33,
    proTwo: false,
    proThree: 'string',
    proFour: function () {
      var x = this.proOne;
    },
  };

  var varAA = JSON.stringify(constAA);
  outBC.innerHTML += '<br >varAA : ' + varAA;
  var varAB = JSON.stringify(constAB);
  outBC.innerHTML += '<br >varAB : ' + varAB;
  var varAC = JSON.stringify(constAC);
  outBC.innerHTML += '<br >varAC : ' + varAC;
  var varAD = JSON.stringify(constAD);
  outBC.innerHTML += '<br >varAD : ' + varAD;
}

////////////////////////////////////////////////////////////////////////////////
outBC.innerHTML += 'ex-ca : display object | display object-properties | in (for..in) loop';
outBC.innerHTML += '<hr >'; ExCA();
outBC.innerHTML += '<br >ex-cb : using (Object.values()) | (JSON.stringify())';
outBC.innerHTML += '<hr >'; ExCB();
outBC.innerHTML += '<br >ex-cc : stringify dates | stringify functions | stringify arrays';
outBC.innerHTML += '<hr >'; ExCC();
