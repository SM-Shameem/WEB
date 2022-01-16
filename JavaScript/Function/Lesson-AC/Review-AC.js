///// OBJECT-CLASS-FUNCTION REVIEW 2 ///////////////////////////////////////////
// 1. OBJECT
// 2. CLASS
// 3. OBJECT-METHODS
// 4. MUTABLE-ITERATOR-DISPLAY-ACCESSOR
// 5. FUNCTION
// 6. SCOPE-HOISTING-STRICT

////////////////////////////////////////////////////////////////////////////////
var outCD = document.createElement('div');
outCD.setAttribute('id', 'styleTwo');
document.body.appendChild(outCD);

////////////////////////////////////////////////////////////////////////////////
// # object review | nested object | nesting object | object mutable
function ExDA() {
    // 'use strict';

    // ----------------------------------------------------------------------
    // object declaration 
    var varAA = {
        proOne: 11,
        proTwo: 22,
        method: function () {
            return this.proOne + this.proTwo;
        },
    };

    var varAB = Object.create({});  // must use { } for empty object
    var varAC = Object({});         // should use { } for empty object

    varAB.proOne = 33;
    varAB.proTwo = 44;
    varAB.method = function () {
        return this.proOne + this.proTwo;
    };
    varAC.proOne = 55;
    varAC.proTwo = 66;
    varAC.method = function () {
        return this.proOne + this.proTwo;
    };

    var varAD = Object.create({
        proOne: 77,
        proTwo: 88,
        method: function () {
            return this.proOne + this.proTwo;
        },
    });

    var varAE = Object({
        proOne: 99,
        proTwo: 111, 
        method: function () {
            return this.proOne + this.proTwo;
        },
    });

    outCD.innerHTML += '<br >varAA.method : ' + varAA.method();
    outCD.innerHTML += '<br >varAB.method : ' + varAB.method();
    outCD.innerHTML += '<br >varAC.method : ' + varAC.method();
    outCD.innerHTML += '<br >varAD.method : ' + varAD.method();
    outCD.innerHTML += '<br >varAE.method : ' + varAE.method();
    outCD.innerHTML += '<br >';

    // ----------------------------------------------------------------------
    // object nesting | object and array nesting | object mutable | object member as object or array
    var varBA = {
        proOne: 11,
        proTwo: 22,
        method: function () {
            return this.proOne + this.proTwo;
        },
    };

    var varBB = [ 10, 20 ];

    var varBC = {
        proOne: varBA,
        proTwo: varBB,
        proThree: {
            nestOne: 33,
            nestTwo: [ 30, 40 ],
        },
        proFour: [
            { 
                arrayObjOne: 44, 
                arrayObjTwo: 55,
            },
            [ 50 ]
        ],
    };

    var varBD = varBC;
    outCD.innerHTML += '<br >varBC.proOne.proOne : ' + varBC.proOne.proOne;
    outCD.innerHTML += '<br >varBD.proOne.proTwo : ' + varBD.proOne.proTwo;
    outCD.innerHTML += '<br >varBD.proOne.method : ' + varBD.proOne.method();
    outCD.innerHTML += '<br >varBC.proTwo[0] : ' + varBC.proTwo[0];
    outCD.innerHTML += '<br >varBD.proTwo[1] : ' + varBD.proTwo[1];
    outCD.innerHTML += '<br >varBC.proThree.nestOne : ' + varBC.proThree.nestOne;
    outCD.innerHTML += '<br >varBD.proThree.nestTwo[0] : ' + varBD.proThree.nestTwo[0];
    outCD.innerHTML += '<br >varBD.proThree.nestTwo[1] : ' + varBD.proThree.nestTwo[1];
    outCD.innerHTML += '<br >varBC.proFour[0].arrayObjOne : ' + varBC.proFour[0].arrayObjOne;
    outCD.innerHTML += '<br >varBD.proFour[0].arrayObjTwo : ' + varBD.proFour[0].arrayObjTwo;
    outCD.innerHTML += '<br >varBC.proFour[1][0] : ' + varBC.proFour[1][0];
    outCD.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # object-constructor | class review | class inheritance
function ExDB() {
     // object-constructor as function expression
     var VarAA = function () {
        let localOne = arguments[0];
        let localTwo = arguments[1];
        this.proOne = localOne;
        this.proTwo = localTwo;
        this.method = function () {
            return this.proOne + this.proTwo;
        };
    };

    var varAA1 = new VarAA(10, 20);
    var varAA2 = new VarAA(222, 333);
    outCD.innerHTML += '<br >varAA1.method() : ' + varAA1.method();
    outCD.innerHTML += '<br >varAA2.method() : ' + varAA2.method();
    outCD.innerHTML += '<br >';

    // object-constructor as function definition 
    function FuncAA() {
        this.proOne = arguments[0];
        this.proTwo = arguments[1];
        this.method = function () {
            outCD.innerHTML += '<br >proOne : ' + this.proOne;
            outCD.innerHTML += '<br >proTwo : ' + this.proTwo;
            outCD.innerHTML += '<br >printSum: ' + printSum();            
        };

        let localOne = this.proOne;
        let localTwo = this.proTwo;

        function printSum() {
            return localOne + localTwo;
        }
    }

    var varAA3 = new FuncAA(11, 22);
    var varAA4 = new FuncAA(33, 44);
    varAA3.method();
    varAA4.method();
    outCD.innerHTML += '<br >';

    // --------------------------------------------------------------
    // class definition with constructor
    class ClassAA {
        constructor() {
            this.proOne = arguments[0];
            this.proTwo = arguments[1];
        }

        printValue() {
            outCD.innerHTML += '<br >proOne : ' + this.proOne;
            outCD.innerHTML += '<br >proTwo : ' + this.proTwo;
            outCD.innerHTML += '<br >printSum : ' + this.printSum();
        }

        printSum() {
            return this.proOne + this.proTwo;
        }
    }

    var varAA5 = new ClassAA(10, 20);
    var varAA6 = new ClassAA(30, 40);
    varAA5.printValue();
    varAA6.printValue();
    outCD.innerHTML += '<br >';
    
    // class definition without constructor
    class ClassAB {
        getValue () {
            this.proOne = arguments[0];
            this.proTwo = arguments[1];
        }

        printValue () {
            outCD.innerHTML += '<br >proOne : ' + this.proOne;
            outCD.innerHTML += '<br >proTwo : ' + this.proTwo;
        }
    }

    var varAB1 = new ClassAB();
    var varAB2 = new ClassAB();
    varAB1.getValue(11, 22);
    varAB2.getValue(33, 44);
    varAB1.printValue();
    varAB2.printValue();
    outCD.innerHTML += '<br >';

    // --------------------------------------------------------------
    // extended class definition with constructor
    class BaseAA {
        constructor() {
            this.proOne = arguments[0];
            this.proTwo = arguments[1];
        }

        printValue() {
            outCD.innerHTML += '<br >BaseAA-proOne : ' + this.proOne;
            outCD.innerHTML += '<br >BaseAA-proTwo : ' + this.proTwo;
        }
    }

    class BaseAB {
        getValue() {
            this.proOne = arguments[0];
            this.proTwo = arguments[1];
        }

        printValue() {
            outCD.innerHTML += '<br >BaseAB-proOne : ' + this.proOne;
            outCD.innerHTML += '<br >BaseAB-proTwo : ' + this.proTwo;
        }
    }

    let letAA = new BaseAA(11, 22);
    let letAB = new BaseAB();
    letAB.getValue(10, 20);
    letAA.printValue();
    letAB.printValue();
    outCD.innerHTML += '<br >';

    // extended class with constructor
    class ClassBA extends BaseAA {
        constructor() {
            super(111, 222);
            this.printValue();
        }
    }

    class ClassBB extends BaseAB {
        constructor() {
            super();
            this.getValue(100, 200);
            this.printValue();
        }
    }

    let letBA = new ClassBA();
    let letBB = new ClassBB();
    outCD.innerHTML += '<br >';

    // extended class without constructor
    class DriveBA extends BaseAA {
        callBase() {
            this.printValue();
        }
    }

    class DriveBB extends BaseAB {
        callBase() {
            this.getValue(110, 220);
            this.printValue();
        }
    }

    let letCA = new DriveBA();
    let letCB = new DriveBB();
    letCA.callBase();
    letCB.callBase();
    outCD.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # class & extended class - (static | hosting | strict)
function ExDC() {
    class ClassAA {
        constructor(argOne, argTwo) {
            this.proOne = argOne;
            this.proTwo = argTwo;
        }

        static printValue() {
            outCD.innerHTML += '<br >ST-ClassAA-proOne : ' + arguments[0].proOne;
            outCD.innerHTML += '<br >ST-ClassAA-proTwo : ' + arguments[0].proTwo;
            outCD.innerHTML += '<br >ST-ClassAA-sumValue : ' + 
            ClassAA.sumValue(arguments[0].proOne, arguments[0].proTwo);
        }

        static sumValue() {
            return arguments[0] + arguments[1];
        }

        showValue() {
            outCD.innerHTML += '<br >NS-ClassAA-proOne : ' + this.proOne;
            outCD.innerHTML += '<br >NS-ClassAA-proTwo : ' + this.proTwo;
            outCD.innerHTML += '<br >NS-ClassAA-sumValue : ' + 
            ClassAA.sumValue(this.proOne, this.proTwo);
        }
    }

    let letAA = new ClassAA(101, 202);
    ClassAA.printValue(letAA);
    letAA.showValue();
    outCD.innerHTML += '<br >';

    
    class DriveAA extends ClassAA {
        callBase() {
            let OBJ = new ClassAA(21, 32);
            ClassAA.printValue(OBJ);
            this.showValue();
        }
    }

    let letAB = new DriveAA(1, 2);
    letAB.callBase();
    outCD.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # object-method
function ExDD() {

}

////////////////////////////////////////////////////////////////////////////////
// # iterator | accessor | display
function ExDE() {

}

////////////////////////////////////////////////////////////////////////////////
// # function review
function ExDF() {

}

////////////////////////////////////////////////////////////////////////////////
// # scope-hoisting-strict review
function ExDG() {

}

////////////////////////////////////////////////////////////////////////////////
outCD.innerHTML += 'ex-da : object review | nested object | nesting object and array | object mutable';
outCD.innerHTML += '<hr >'; ExDA();
outCD.innerHTML += '<br >ex-db : object constructor | class review | class inheritance';
outCD.innerHTML += '<hr >'; ExDB();
outCD.innerHTML += '<br >ex-dc : class & extended class - (static | hosting | strict)';
outCD.innerHTML += '<hr >'; ExDC();
outCD.innerHTML += '<br >ex-dd : object-method review';
outCD.innerHTML += '<hr >'; ExDD();
outCD.innerHTML += '<br >ex-de : iterator | accessors | display';
outCD.innerHTML += '<hr >'; ExDE();
outCD.innerHTML += '<br >ex-df : function review';
outCD.innerHTML += '<hr >'; ExDF();
outCD.innerHTML += '<br >ex-dg : scope-hoisting-strict';
outCD.innerHTML += '<hr >'; ExDG();