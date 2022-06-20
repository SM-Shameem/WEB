///// OBJECT-CLASS-FUNCTION REVIEW 2 ///////////////////////////////////////////
// 1. OBJECT
// 2. CLASS
// 3. OBJECT-METHODS
// 4. MUTABLE-ITERATOR-DISPLAY-ACCESSOR
// 5. FUNCTION
// 6. SCOPE-HOISTING-STRICT

////////////////////////////////////////////////////////////////////////////////
var outCD = document.createElement('div');
outCD.setAttribute('id', 'styleThree');
document.body.appendChild(outCD);

////////////////////////////////////////////////////////////////////////////////
function ExDA() {
    // --- example 01 ----------------------------------------------------------
    // declaring an object (literal syntax) - with two properties and one method
    const constAA = {
        proOne: null,
        proTwo: null,
        method: function () {
            return this.proOne + this.proTwo;
        }
    };

    constAA.proOne = 10;
    constAA.proTwo = 20;
    outCD.innerHTML += '<br >constAA.method : ' + constAA.method();

    // --- example 02 ----------------------------------------------------------
    // declaring object using - Object() and object.create()
    const constAB = new Object({
        proOne: null,
        proTwo: null,
        method: function () {
            return this.proOne + this.proTwo;
        }
    });

    const constAC = Object.create({
        proOne: null,
        proTwo: null,
        method: function () {
            return this.proOne + this.proTwo;
        }
    });

    constAB.proOne = 111;
    constAB.proTwo = 222;
    constAC.proOne = 333;
    constAC.proTwo = 444;
    outCD.innerHTML += '<br >constAB.method : ' + constAB.method();
    outCD.innerHTML += '<br >constAC.method : ' + constAC.method();
    outCD.innerHTML += '<br >';
    
    // =============================================================================
    // object - adding and deleting members to existing object
    // declaring (empty) object
    const constAD = { };                    // literal
    const constAE = new Object();           // object constructor 
    const constAF = Object.create({});      // create method - required bracket

    // --- example 03 ----------------------------------------------------------
    // adding properties and method - to existing literal-object
    constAD.proOne = 10;
    constAD.proTwo = 20;
    constAD.method = function () {
        if (this.proOne == null || this.proTwo == null) return 'property is deleted';
        else return this.proOne + this.proTwo;
    }
    
    // adding properties and method - to existing object 
    constAE.proOne = 30;
    constAE.proTwo = 40;
    constAE.method = function () {
        if (this.proOne == null || this.proTwo == null) return 'property is deleted';
        else return this.proOne + this.proTwo;
    };
    
    constAF.proOne = 50;
    constAF.proTwo = 60;
    constAF.method = function () {
        if (this.proOne == null || this.proTwo == null) return 'property is deleted';
        else return this.proOne + this.proTwo;
    };

    outCD.innerHTML += '<br >constAD : ' + constAD;
    outCD.innerHTML += '<br >constAE : ' + constAE;
    outCD.innerHTML += '<br >constAF : ' + constAF;
    outCD.innerHTML += '<br >';

    outCD.innerHTML += '<br >constAD.method : ' + constAD.method();
    outCD.innerHTML += '<br >constAE.method : ' + constAE.method();
    outCD.innerHTML += '<br >constAF.method : ' + constAF.method();
    outCD.innerHTML += '<br >';
    
    // --- example 04 ----------------------------------------------------------
    // deleting object members
    delete constAA.proOne;
    delete constAB.proOne;
    delete constAC.proOne;

    outCD.innerHTML += '<br >constAA.method : ' + constAA.method();
    outCD.innerHTML += '<br >constAB.method : ' + constAB.method();
    outCD.innerHTML += '<br >constAC.method : ' + constAC.method();

    delete constAD.proOne;
    delete constAE.proTwo;
    delete constAF.method();

    outCD.innerHTML += '<br >constAD.method : ' + constAD.method();
    outCD.innerHTML += '<br >constAE.method : ' + constAE.method();
    outCD.innerHTML += '<br >constAF.method : ' + constAF.method();
    outCD.innerHTML += '<br >';

    // =============================================================================
    // --- example 05 ----------------------------------------------------------
    // declaring object using - constructor 
    const ConstAG = function () {
        this.proOne = null;
        this.proTwo = null;
        this.method = function () {
            return this.proOne + this.proTwo;
        };
    };

    ConstAG.proOne = 11;
    ConstAG.proTwo = 22;
    outCD.innerHTML += '<br >ConstAG.proOne : ' + ConstAG.proOne;
    outCD.innerHTML += '<br >ConstAG.proTwo : ' + ConstAG.proTwo;
    // outCD.innerHTML += '<br >ConstAG.method : ' + ConstAG.method();

    let letAG1 = new ConstAG();
    let letAG2 = new ConstAG();
    letAG1.proOne = 10;
    letAG1.proTwo = 20;
    letAG2.proOne = 30;
    letAG2.proTwo = 40;
    outCD.innerHTML += '<br >letAG1 : ' + letAG1.method();
    outCD.innerHTML += '<br >letAG2 : ' + letAG2.method();
    outCD.innerHTML += '<br >'; 

    // --- example 06 ----------------------------------------------------------
    // adding properties or methods to constructor 
    ConstAG.proThree = 33;
    outCD.innerHTML += '<br >ConstAG.proThree : ' + ConstAG.proThree;

}

////////////////////////////////////////////////////////////////////////////////
outCD.innerHTML += 'ex-da : object review | nested object | nesting object and array | object mutable';
outCD.innerHTML += '<hr >'; ExDA();
outCD.innerHTML += '<br >ex-db : object constructor | class review | class inheritance';
outCD.innerHTML += '<hr >'; ExDB();
outCD.innerHTML += '<br >ex-dc : class & extended class - (static | hosting)';
outCD.innerHTML += '<hr >'; ExDC();
outCD.innerHTML += '<br >ex-dd : object-method review';
outCD.innerHTML += '<hr >'; ExDD();
outCD.innerHTML += '<br >ex-de : accessors | iterator | display';
outCD.innerHTML += '<hr >'; ExDE();
