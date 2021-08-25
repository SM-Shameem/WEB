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
outAD.setAttribute('id', 'styleTwo');
document.body.appendChild(outAD);

////////////////////////////////////////////////////////////////////////////////
// # javascript objects and primitives
// in javascript, object are king. if you understand object, you understand javascript
// in javascript, almost everything is an object
// all javascript value, except primitives, are object
// -> boolean | number | string can be object (if defined with the NEW  keyword)
// -> dates and maths are always object
// -> RegExp are always object
// -> arrays are always object
// -> functions are always object

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

}

////////////////////////////////////////////////////////////////////////////////
outAD.innerHTML += 'ex-da : ';
outAD.innerHTML += '<br >'; ExDA();
