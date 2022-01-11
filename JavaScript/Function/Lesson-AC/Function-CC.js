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
    // outCC.innerHTML += '<br >localThree (undeclared) : ' + localThree;
    outCC.innerHTML += '<br >';

    // # THE (LET & CONST) KEYWORDS
    // -> variables defined with (let and const) are hoisted to the top of the block
    // -- but not initialized 
    // -> meaning, the block of code is aware of the variable 
    // -- but cannot be used until it has been declared 
    // -> using a (let) variable before it is declared will result in a (ReferenceError)
    // NB: variable is in (temporal dead zone) from the start of the block until it is declared
    // -- in case of (let) it will be (ReferenceError) and in case of (const) will not run

    varAA = 10;
    outCC.innerHTML += '<br >varAA : ' + varAA;
    var varAA;

    letAA = 20;
    outCC.innerHTML += '<br >letAA : ' + letAA;
    // let letAA;       // referenceError

    constAA = 30;
    outCC.innerHTML += '<br >constAA : ' + constAA;
    // const constAA;   // syntax error

    outCC.innerHTML += '<br >';    

    // # JAVASCRIPT INITIALIZATIONS ARE NOT HOISTED 
    // -> javascript only hoists declarations, not initializations 
    // -> in javascript, declaration of a variable is hoisted 
    // -- but initialization of a variable is not hoisted (initialization refers assigning-value)
    // NB: we can not (use) any variable without (declare or initialization)

    var varBA = 10;
    var varBB;
    outCC.innerHTML += '<br >varBA : ' + varBA;
    outCC.innerHTML += '<br >varBB : ' + varBB;
    outCC.innerHTML += '<br >varBC : ' + varBC;
    outCC.innerHTML += '<br >varBD : ' + varBD;
    // outCC.innerHTML += '<br >varBD : ' + varBE;
    varBB = 20;
    var varBC = 30;
    var varBD;
    outCC.innerHTML += '<br >';

    // # DECLARE YOUR VARIABLE AT THE TOP
    // -> hosting is (to many developers) an unknown or overlooked behavior of javascript 
    // -> if a developer doesn't understand hoisting, programs many contain bugs (errors)
    // -> to avoid bugs, always declare all variable at the beginning of every scope 
    // -> since this is how javascript interprets the code, it is always a good rule 
    // -> NB: javascript in (strict) mode does not allow variables to be used if they are not declared
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
    // # JAVASCRIPT (Use Strict) & WHY (Strict) MODE
    // -> (use strict) defines that javascript code should be executed in (strict mode)
    // -> (strict) mode makes it easier to write (secure) javascript 
    // -> (strict) mode changes previously accepted (bad syntax) into real error
    // -> as an example, in normal javascript, mistyping a variable name create a new (global) variable
    // -- in strict mode, this will throw an error, making it impossible to accidentally create a (global) variable
    // -> in normal javascript, a developer will not receive any error feedback assigning value to non-writable properties 
    // -> in (strict) mode, any assignment to a non-writable property, a getter-only property, a non-existing variable, 
    // -- or a non-existing object, will throw an error

    // # THE ("use strict") DIRECTIVE
    // -> the (use strict) directive was new in ECMAScript version 5
    // -> it is not a statement, but a literal expression, ignored by earlier versions of javascript 
    // -> the purpose of (use strict) is to indicate that the code should be executed in (strict mode)
    // -> with (strict) mode, you can not, use undeclared variable 
    // -> all modern browser support, (use strict) except IE9 and lower
    // NB: you can use (strict) mode in all your program. 
    // -- it helps you to write cleaner code, like preventing you from using undeclared variables 
    // -- (use strict) is just a (string), so EI9 will not throw an error if it does not understand it

    // # DECLARING (Strict) MODE 
    // -> the (strict) mode is declared by adding ("use strict";) to the beginning of a (script or function)
    // -> declared at the beginning of a (script), it is (global) scope (all code in the script will execute in - strict - mode)
    // -> declared inside a function, it has local scope (only the code inside the function is in - strict - mode) 
    // NB : you can not declare any code before (use strict) statement of (global or function) scope
    // -- so the (use strict) statement must declare at the first of any scope

     // # THE ("use strict";) SYNTAX & NOT ALLOWED IN (strict) MODE & FUTURE PROOF
    // -> the syntax, for declaring strict mode, was designed to be compatible with older versions of javascript 
    // -> compiling a numeric literal (4 + 5) or string literal ('john dee') in a javascript program has no side effect. 
    // -- it simply compiles to a non existing variable and dies 
    // -> so ('use strict';) only matters to new compilers that "understand" the meaning of it

    // var varAA = 10;
    // varAB = 20;
    // outCC.innerHTML += '<br >varAA : ' + varAA;
    // outCC.innerHTML += '<br >varAB : ' + varAB;

    function funcAA() {
        'use strict';
        var varAC = 30;
        // varAD = 40;
        outCC.innerHTML += '<br >varAC : ' + varAC;
        // outCC.innerHTML += '<br >varAD : ' + varAD;
        outCC.innerHTML += '<br >';
    }
    
    // -> 1. using a variable, without declaring it, is not allowed 
    // -> 2. objects are variables too, so using an object, without declaring it, is not allowed

    // -> 3. deleting a variable (or object) is not allowed 
    // -> 4. deleting a function is not allowed
    
    // -> 5. duplicating a parameter name is not allowed

    function funcAB() {
        // 'use strict';
        varAA = 10;             // in (strict) mode - declaration of a variable is required
        objAA = { proOne: 20 }; // in (strict) mode - declaration of an object is required
        // in (strict) mode - duplicating argument-name, in-general reference-error but in-strict mode script erro
        function funcAA(argOne, argTwo//, argOne
            ) {
            return argOne + argTwo;
        }

        outCC.innerHTML += '<br >varAA  : ' + varAA;
        outCC.innerHTML += '<br >objAA  : ' + objAA;
        outCC.innerHTML += '<br >funcAA : ' + funcAA(10, 20);
        outCC.innerHTML += '<br >objAA.proOne : ' + objAA.proOne;

        // delete varAA;    // deleting (variable) - in-general is reference-error but in-strict mode is script-error
        // delete objAA;    // deleting (object) - in-general is reference-error but in-strict mode is script-error
        // delete funcAA;   // deleting (function) - in-general is referenc-error but in-strict mode is script-error
        delete objAA.proOne;

        outCC.innerHTML += '<br >varAA : ' + varAA;
        outCC.innerHTML += '<br >objAA : ' + objAA;
        outCC.innerHTML += '<br >funcAA: ' + funcAA(10, 20);
        outCC.innerHTML += '<br >objAA.proOne : ' + objAA.proOne;
    }

    // -> 6. octal numeric literals are not allowed 
    // -> 7. octal escape character are not allowed 

    // -> 8. deleting an undeletable property is not allowed 
    // -> 9. writing to a read-only property is not allowed
    // -> 10. writing to a get-only property is not allowed 
   
    function funcAC() {
        'use strict';
        
        // var varBA = 011;    // in (strict) mode - octal numeber is not acceptable
        // var varBB = '\012'; // in (strict) mode - octal escape character is nto acceptable 

        // outCC.innerHTML += '<br >varBA : ' + varBA;
        // outCC.innerHTML += '<br >varBB : ' + varBB;
        // outCC.innerHTML += '<br >';

        var ConstOne = function () {
            this.proOne = 11;
            this.proTwo = 22;
        };

        Object.defineProperty(ConstOne.prototype, 'proThree', { value: 33 });
        Object.defineProperty(ConstOne.prototype, 'proFour', { value: 44, writable: false });
        Object.defineProperty(ConstOne.prototype, 'GetSet', {
            get: function () {
                return 55;
            },
        });

        var varAC = new ConstOne();
        outCC.innerHTML += '<br >varAC.proOne : ' + varAC.proOne;
        outCC.innerHTML += '<br >varAC.proTwo : ' + varAC.proTwo;
        outCC.innerHTML += '<br >varAC.proThree : ' + varAC.proThree;
        outCC.innerHTML += '<br >varAC.proFour : ' + varAC.proFour;
        outCC.innerHTML += '<br >varAC.GetSet : ' + varAC.GetSet;
        outCC.innerHTML += '<br >';

        varAC.proOne = 10;
        delete varAC.proTwo;
        // delete ConstOne.prototype.proThree; // in (strict) mode - deleting (prototype-property) is not allowed
        // varAC.proFour = 40;                 // in (strict) mode - changing value of (non-writable) property is not allowed
        // varAC.GetSet = 50;                  // in (strict) mode - setting value to (get-only) property is not allowed

        outCC.innerHTML += '<br >varAC.proOne : ' + varAC.proOne;
        outCC.innerHTML += '<br >varAC.proTwo : ' + varAC.proTwo;
        outCC.innerHTML += '<br >varAC.proThree : ' + varAC.proThree;
        outCC.innerHTML += '<br >varAC.proFour : ' + varAC.proFour;
        outCC.innerHTML += '<br >varAC.GetSet : ' + varAC.GetSet;
    }

    // -> 11. for security reasons, (eval()) is not allowed to create variables in the scope from which it was called     
    // -> 12. the word (eval) cannot be used as a variable     
    // -> 13. the word (arguments) cannot be used as a variable 
    // -> 14. the (with) statement is not allowed 
    
    function funcAD() {
        // 'use strict';
        var eval = 111;         // in (strict) mode - (eval) keyword can not be used as variable name
        var arguments = 222;    // in (strict) mode - (arguments) property can not be used as variable name

        outCC.innerHTML += '<br >eval : ' + eval;
        outCC.innerHTML += '<br >arguments : ' + arguments;

        // in (strict) mode - (with) statement is not allowed
        with (Math) {
            x = cos(2);
            outCC.innerHTML += '<br >Math.cos(2) : ' + x;
        }

        // in (strict) mode - (eval()) method is not allowed
        // outCC.innerHTML += '<br >varAC : ' + eval('4 + 2');
    }

    // -> 15. the (this) keyword in function behaves differently in (strict) mode
    // -> 16. the (this) keyword refers to the object that called the function 
    
    function funcAE() {
        'use strict';

    }

    // -> 17. if the object is not specified, function in (strict) mode will return (undefined) 
    // -- and function in (normal) mode will return (global object - window) 
    // -> 18. keywords reserved for future javascript versions can NOT be used as variable names in (strict) mode 
    // -- these are (implements | interface | let | package | private | protected | public | static | yield)
    
    // NB : the ("use strict") directive is only recognized at the (beginning) of a (script or function)

    funcAA(); outCC.innerHTML += '<br >';
    funcAB(); outCC.innerHTML += '<br >';
    funcAC(); outCC.innerHTML += '<br >';
    funcAD(); outCC.innerHTML += '<br >';
    funcAE(); outCC.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
outCC.innerHTML += 'ex-ca : hoisting';
outCC.innerHTML += '<hr >'; ExCA();
outCC.innerHTML += '<br >ex-cb : strict';
outCC.innerHTML += '<hr >'; ExCB();
