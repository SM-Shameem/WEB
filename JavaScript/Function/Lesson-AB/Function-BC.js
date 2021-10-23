///// FUNCTION INVOCATION //////////////////////////////////////////////////////
// 01. javascript function invocation
// 02. invoking a javascript function
// 03. invoking a function as a function
// 04. the (this) keyword
// 05. the Global object
// 06. invoking a function as a method
// 07. invoking a function with a function constructor

////////////////////////////////////////////////////////////////////////////////
var outBC = document.createElement('div');
outBC.setAttribute('id', 'styleOne');
document.body.appendChild(outBC);

////////////////////////////////////////////////////////////////////////////////
// # function invocation | invoking a function | invoking a function as a function

function ExCA() {

}

////////////////////////////////////////////////////////////////////////////////
// # the (this) keyword | the Global object

function ExCB() {

}

////////////////////////////////////////////////////////////////////////////////
// # invoking a function as a method | invoking a function with a function constructor

function ExCB() {

}

////////////////////////////////////////////////////////////////////////////////
outBC.innerHTML += 'ex-ca : invocation | invoking a function | invoking a function as a function';
outBC.innerHTML += '<hr >'; ExCA();
outBC.innerHTML += '<br >ex-cb : the (this) keyword | the Global object';
outBC.innerHTML += '<hr >'; ExCB();
outBC.innerHTML += '<br >ex-cc : invoking as a method | invoking as a constructor';
outBC.innerHTML += '<hr >'; ExCC();
