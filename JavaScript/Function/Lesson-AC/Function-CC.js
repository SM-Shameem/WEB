///// HOISTING-STRICT //////////////////////////////////////////////////////////
// 01. Hoisting
// 02. Strict

////////////////////////////////////////////////////////////////////////////////
let outCC = document.createElement('div');
outCC.setAttribute('id', 'styleOne');
document.body.appendChild(outCC);

////////////////////////////////////////////////////////////////////////////////
// # hoisting
// 01. javascript declarations are hoisted
// 02. the (let and const) keywords
// 03. javascript initializations are not hoisted
// 04. declare your variables at the top
function ExCA() {
    // # JAVASCRIPT DECLARATIONS ARE HOISTED
    // -> hoisting is javascript's default behavior of moving declaration to the top
    // -> in javascript, a variable can be declared after it has been used 
    // -> in other word, a variable can be used before it has been declared
    // -> so, hoisting is javascript's default behavior of moving all 
    // -- declarations to the top of the current scope 
    // -- to the top of the current script or the current function

    // -> in function scope undeclared variable become automatically global but if we declared it later
    // -- inside that function, then it become local
    globalOne = 11; 
    outCC.innerHTML += '<br >globalOne (undeclared) : ' + globalOne;

    var globalOne;
    outCC.innerHTML += '<br >globalOne (declared) : ' + globalOne;

    function funcAA() {
        localOne = 22; 
        localTwo = 33;
        localThree = 44;
        outCC.innerHTML += '<br >localOne (undeclared) : ' + localOne;
        outCC.innerHTML += '<br >localTwo (undeclared) : ' + localTwo;
        outCC.innerHTML += '<br >localThree (undeclared) : ' + localThree;

        var localThree;
        outCC.innerHTML += '<br >localThree (declared) : ' + localThree;
    }

    funcAA();
    var localTwo;
    outCC.innerHTML += '<br >localOne (declared) : ' + localOne;
    outCC.innerHTML += '<br >localTwo (declared-out) : ' + localTwo;
    outCC.innerHTML += '<br >localThree (undeclared) : ' + localThree;
    outCC.innerHTML += '<br >';

    // # THE (LET & CONST) KEYWORDS
    // -> variables defined with (let and const) are hoisted to the top of the block
    // -- but not initialized 
    // -> meaning, the block of code is aware of the variable 
    // -- but cannot be used until it has been declared 
    // -> using a (let) variable before it is declared will result in a (ReferenceError)
    // NB: variable is in (temporal dead zone) from the start of the block until it is declared
    // -- in case of (let) it will be (ReferenceError) and in case of (const) will not run

    // # JAVASCRIPT INITIALIZATIONS ARE NOT HOISTED 
    // -> javascript only hoists declarations, not initializations 
    // -> 

}

////////////////////////////////////////////////////////////////////////////////
// # strict
// 01. use (strict)
// 02. the (use strict) directive
// 03. declaring (strict) mode
// 04. the (use strict) syntax
// 05. why (strict) mode
// 06. not allowed in (strict) mode
// 07. future proof
function ExCB() {

}

////////////////////////////////////////////////////////////////////////////////
outCC.innerHTML += 'ex-ca : hoisting';
outCC.innerHTML += '<hr >'; ExCA();
outCC.innerHTML += '<br >ex-cb : strict';
outCC.innerHTML += '<hr >'; ExCB();
