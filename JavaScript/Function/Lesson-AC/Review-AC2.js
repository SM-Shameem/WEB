///// OBJECT-CLASS-FUNCTION REVIEW 2 ///////////////////////////////////////////
// 1. OBJECT
// 2. CLASS
// 3. OBJECT-METHODS
// 4. MUTABLE-ITERATOR-DISPLAY-ACCESSOR
// 5. FUNCTION
// 6. SCOPE-HOISTING-STRICT

////////////////////////////////////////////////////////////////////////////////
var outCE = document.createElement('div');
outCE.setAttribute('id', 'styleFour');
document.body.appendChild(outCE);

////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
outCE.innerHTML += '<br >ex-ea : accessors | iterator | display';
outCE.innerHTML += '<hr >'; ExEA();
outCE.innerHTML += '<br >ex-eb : Sets and Maps';
outCE.innerHTML += '<hr >'; ExEB();
outCE.innerHTML += '<br >ex-ec : function review';
outCE.innerHTML += '<hr >'; ExEC();
outCE.innerHTML += '<br >ex-ed : scope-hoisting-strict';
outCE.innerHTML += '<hr >'; ExED();
