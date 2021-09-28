///// OBJECTS REFERENCES ///////////////////////////////////////////////////////
// 1. ES5 object methods
// 2. changing a property value
// 3. changing meta data
// 4. listing all properties
// 5. listing enumerable properties
// 6. adding a property
// 7. adding getters and setters
// 8. a counter example

////////////////////////////////////////////////////////////////////////////////
var outEC = document.createElement('div');
outEC.setAttribute('id', 'styleOne');
document.body.appendChild(outEC);

////////////////////////////////////////////////////////////////////////////////
// # property attributes | prototype property
// all (properties) have a (name). in addition they also have a (value)
// -> the (value) is one of the property's (attributes)
// -> other (attributes) are (enumerable | configurable | writable)
// -> these (attributes) define how the (property) can be accessed
// in javascript, all attributes can be read,
// -> but only the value attribute can be changed (and only if the property is writable)
// NB : ECMAScript5 has methods for both (getting and setting) all property attributes

// javascript objects inherit the properties of their prototype
// the (delete) keyword does not delete inherited properties,
// -> but if you delete a (prototype-proeprty), it will affect all (objects-inherited)
// -----------------------------------------------------------------------------

// # ES5 object methods (managing objects)
// ECMAScript 5 (2009) added a lot of new Object Methods of javascript
// 1. creat object with an existing object as prototype - Object.create()
// 2. adding or changing an object property - Object.defineProperty(object, property, descriptor)
// 3. adding or changing object properties - Object.defineProperties(object, descriptors)
// 4. accessing properties - Object.getOwnPropertyDescriptor(object, property)
// 5. accessing the property - Object.getPropertyOf(object)
// 6. returns all properties as an array - Object.OwnPropertyNames(object)
// 7. returns enumerable properties as an array - Object.keys(object)

function ExCA() {

}

////////////////////////////////////////////////////////////////////////////////
// # ES5 object methods (managing objects)
// ESMAScript 5 (2009) added a lot of new Object Methods of javascript
// 1. prevents adding properties to an object - Object.preventExtensions(object)
// 2. returns true if properties can be added to an object - Object.isExtensible(object)
// 3. prevents changes of object properties (not value) - Object.seal(object)
// 4. returns true if object is sealed - Object.isSealed(object)
// 5. prevents any changes to an object - Object.freeze(object)
// 6. returns true if object is frozen - Object.isForzen(object)

function ExCB() {

}

////////////////////////////////////////////////////////////////////////////////
// # ES5 object methods (examples)
// 1. changing a property value
// 2. changing (meta-data) of a property
// 3. listing all properties
// 4. listing enumerable properties
// 5. adding a property
// 6. adding getters and setters

function ExCC() {

}

////////////////////////////////////////////////////////////////////////////////
outEC.innerHTML += 'ex-ca : ES5 object methods (managing objects)';
outEC.innerHTML += '<hr >'; ExCA();
outEC.innerHTML += '<br >ex-cb : `ES5 object methods (protecting objects)`';
outEC.innerHTML += '<hr >'; ExCB();
outEC.innerHTML += '<br >ex-cc : ES5 object methods (examples)';
outEC.innerHTML += '<hr >'; ExCC();
