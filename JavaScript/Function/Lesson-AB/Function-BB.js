///// FUNCTION PARAMETERS //////////////////////////////////////////////////////
// 01. javascript function parameters
// 02. function parameters and arguments
// 03. parameter rules
// 04. default parameters
// 05. the arguments object
// 06. arguments are passed by value
// 07. objects are passed by reference

////////////////////////////////////////////////////////////////////////////////
var outBB = document.createElement('div');
outBB.setAttribute('id', 'styleTwo');
document.body.appendChild(outBB);

////////////////////////////////////////////////////////////////////////////////
// # javascript function parameters | function parameters and arguments

function ExBA() {

}

////////////////////////////////////////////////////////////////////////////////
// # parameter rules | default parameters | the arguments object

function ExBB() {

}

////////////////////////////////////////////////////////////////////////////////
// # arguments are passed by value | objects are passed by reference

function ExBB() {

}

////////////////////////////////////////////////////////////////////////////////
outBB.innerHTML += 'ex-ba : javascript function parameters | function parameters and arguments';
outBB.innerHTML += '<hr >'; ExBA();
outBB.innerHTML += '<br >ex-bb : parameter rules | default parameters | the arguments object';
outBB.innerHTML += '<hr >'; ExBB();
outBB.innerHTML += '<br >ex-bc : arguments are passed by value | object are passed by reference';
outBB.innerHTML += '<hr >'; ExBC();
