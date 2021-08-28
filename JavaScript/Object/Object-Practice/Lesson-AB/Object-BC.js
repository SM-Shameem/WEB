///// OBJECTS ACCESSORS ////////////////////////////////////////////////////////
// 1. javascript object accessors
// 2. javascript accessors (getters and setters)
// 3. javascript getter (the get keyword)
// 4. javascript setter (the set keyword)
// 5. javascript function or getter
// 6. data quality
// 7. why using getters and setters
// 8. Object.defineProperty()

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
// -> displaying the (object) using (Object.values())
// -> displaying the (object) using (JSON.stringify())

// the properties of an object can be displayed as a string
// the properties of an object can be collected in a loop
// -> to get the value of object through (for..in) loop,
// -> have to use (objectName[variableName])
// -> cannot use (objectName.variableName)

function ExCA() {

}

////////////////////////////////////////////////////////////////////////////////
// # using (Object.values()) | (JSON.stringify())
// any javascript object can be converted to an array using (Object.value())
// any javascript object can be stringified (converted to a string)
// -> with the javascript function (JSON.stringify())
// -> after (stringify), the result will be a string as a JSON notation

function ExCB() {

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

}

////////////////////////////////////////////////////////////////////////////////
outBC.innerHTML += 'ex-ca : display object | display object-properties | in (for..in) loop';
outBC.innerHTML += '<hr >'; ExCA();
outBC.innerHTML += '<br >using (Object.values()) | (JSON.stringify())';
outBC.innerHTML += '<hr >'; ExCB();
outBC.innerHTML += '<br >stringify dates | stringify functions | stringify arrays';
outBC.innerHTML += '<hr >'; EXCC();
