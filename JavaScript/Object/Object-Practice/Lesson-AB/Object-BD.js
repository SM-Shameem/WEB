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

function ExDA() {
  
}

////////////////////////////////////////////////////////////////////////////////
outBD.innerHTML += 'ex-da : object accessors (getters and setters) | the (get | set) keywords';
outBD.innerHTML += '<hr >'; ExDA();
outBD.innerHTML += '<br >ex-db : javascript function or getters';
outBD.innerHTML += '<hr >'; ExDB();
outBD.innerHTML += '<br >data quality | why using (getters and setters)';
outBD.innerHTML += '<hr >'; ExDC();
outBD.innerHTML += '<br >Object.defineProperty';
outBD.innerHTML += '<hr >'; ExDD();
