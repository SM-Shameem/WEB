///// OBJECTS METHODS //////////////////////////////////////////////////////////
// 1. javascript object methods
// 2. the (this) keyword
// 3. javascript methods
// 4. accessing object methods
// 5. adding a method to an object
// 6. using built-in methods

////////////////////////////////////////////////////////////////////////////////
var outBB = document.createElement('div');
outBB.setAttribute('id', 'styleOne');
document.body.appendChild(outBB);

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
outBB.innerHTML += 'ex-ba : object methods | accessing methods';
outBB.innerHTML += '<hr >'; ExBA();
outBB.innerHTML += '<br >ex-bb : using (this) keyword to access members inside methods';
outBB.innerHTML += '<hr>'; ExBB();
outBB.innerHTML += '<br >ex-bc : adding a method to an object | using built-in method';
outBB.innerHTML += '<hr >'; ExBC();
