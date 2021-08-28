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
var outBD = document.createElement('div');
outBD.setAttribute('id', 'styleOne');
document.body.appendChild(outBD);

////////////////////////////////////////////////////////////////////////////////
// # object accessors (getters and setters) | the (get and set) keywords
// ECMAScript 5 (ES5 2009) introduced (getters and setters)
// getters and setters allow you to-define object accessors (computed properties)
// -> the (get) keyword is used for (getter)
// -> the (set) keyword is used for (setter)
// -> (get and set) keywords are used to define function
// -> (set) keyword is used to set the value for attribute through arguments, it cannot return
// -> (get) keyword is used to return value of attribute, it cannot receive arguments
// -> (getters and setters) function (name) should be same, though can be different
// NB: cannot add (getters and setters) to an existing object, through accessing notation
// -> in this case, have to use the (object.defineProperty()) method

function ExDA() {

}

////////////////////////////////////////////////////////////////////////////////
// # method or getters | data quality | why use (get and set)
// a (getter) can be accessed as like (attribute), it does not use parentheses
// javasctip can secure better data quality when using (getters and setters)
// why using (getters and setters) -
// -> it gives simple syntax
// -> it allows equal syntax for properties and methods
// -> it can secure better data quality
// -> it is useful for doing things behind-the-scenes

function ExDB() {

}

////////////////////////////////////////////////////////////////////////////////
// # object.defineProperty() is used to add (getters and setters) to an existing object

function ExDC() {

}

////////////////////////////////////////////////////////////////////////////////
outBD.innerHTML += 'ex-da : object accessors (getters and setters) | the (get | set) keywords';
outBD.innerHTML += '<hr >'; ExDA();
outBD.innerHTML += '<br >ex-db : method or getters | data quality | why use (get and set)';
outBD.innerHTML += '<hr >'; ExDB();
outBD.innerHTML += '<br >ex-bc : object.defineProperty used to add (getters and setters)';
outBD.innerHTML += '<br >'; ExDC();
