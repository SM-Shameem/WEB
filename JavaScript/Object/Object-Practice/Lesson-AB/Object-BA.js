///// OBJECTS PROPERTIES ///////////////////////////////////////////////////////
// 1. javascript object properties
// 2. accessing javascript properties
// 3. javascript (for..in) loop
// 4. adding new properties
// 5. deleting properties
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

function ExAA() {

}

////////////////////////////////////////////////////////////////////////////////
outBA.innerHTML += 'ex-aa : object properties | accessing properties';
outBA.innerHTML += '<hr >'; ExAA();
outBA.innerHTML += '<br >ex-ab : object properties and (for..in) loop';
outBA.innerHTML += '<hr >'; ExAB();
outBA.innerHTML += '<br >adding properties and deleting properties';
outBA.innerHTML += '<hr >'; ExAC();
outBA.innerHTML += '<br >nested object | nested array and object';
outBA.innerHTML += '<hr >'; ExAD();
outBA.innerHTML += '<br >property attributes | prototype property';
outBA.innerHTML += '<hr >'; ExAE();
