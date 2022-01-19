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
// # class & extended class - (static | hosting)
function ExDC() {
    class ClassAA {
        constructor(argOne, argTwo) {
            this.proOne = argOne;
            this.proTwo = argTwo;
        }

        static printValue() {
            // here, this (static) method is accessing (object-properties) 
            outCD.innerHTML += '<br >ST-ClassAA-proOne : ' + arguments[0].proOne;
            outCD.innerHTML += '<br >ST-ClassAA-proTwo : ' + arguments[0].proTwo;
            outCD.innerHTML += '<br >ST-ClassAA-sumValue : ' + 
            ClassAA.sumValue(arguments[0].proOne, arguments[0].proTwo);
        }

        static sumValue() {
            // here, this (static) method is accessing (general-variable)
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

            this.showValue();
            OBJ.showValue();
            ClassAA.printValue(OBJ);    
        }
    }

    let letAB = new DriveAA(1, 2);
    letAB.callBase();
    outCD.innerHTML += '<br >';

    class DriveAB extends ClassAA {
        constructor() {
            super(arguments[0], arguments[1]);
            let OBJ = new ClassAA(55, 66);
            this.callBase(OBJ);
        }

        callBase() {
            this.showValue();
            arguments[0].showValue();
            ClassAA.printValue(arguments[0]);
            
        }
    }

    let letBB = new DriveAB(110, 220);
    outCD.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # object-method - (vanilla javascript built-in)
function ExDD() {
    // creating object
    // Object({});
    // Object.create();

    // defining object-property 
    // Object.defineProperty();
    // Object.defineProperties();

    // checking object prevention status
    // Object.isExtensible();
    // Object.isSealed();
    // Object.isFrozen();

    // object prevention 
    // Object.preventExtensions();
    // Object.seal();
    // Object.freeze();

    // object status
    // Object.getOwnPropertyDescriptor();
    // Object.getOwnPropertyDescriptors();
    // Object.getOwnPropertyNames();
    // Object.getPrototypeOf();
    // Object.keys();
}

////////////////////////////////////////////////////////////////////////////////
// # accessor | iterator
function ExDE() {
    let letAA = {
        proOne: null,
        proTwo: null,
        method: function () {
            this.GetSet = { valueOne: 10, valueTwo: 20 };
            outCD.innerHTML += '<br >letAA-proOne : ' + this.proOne;
            outCD.innerHTML += '<br >letAA-proTwo : ' + this.proTwo;
            outCD.innerHTML += '<br >letAA-GetSet : ' + this.GetSet;
        },

        set GetSet(arg) {
            this.proOne = arg.valueOne;
            this.proTwo = arg.valueTwo;
        },

        get GetSet() {
            return this.proOne + this.proTwo;
        }
    };

    // ----------------------------------------------------
    let letAB = Object({
        proOne: 11,
        proTwo: 22,
        method: function () {
            this.GetSet = { valueOne: arguments[0], valueTwo: arguments[1] };
            outCD.innerHTML += '<br >letAB-proOne : ' + this.proOne;
            outCD.innerHTML += '<br >letAB-proTwo : ' + this.proTwo;
            outCD.innerHTML += '<br >letAB-GetSet : ' + this.GetSet;
        },

        set GetSet(arg) {
            this.proOne = arg.valueOne;
            this.proTwo = arg.valueTwo;
        },

        get GetSet() {
            return this.proOne + this.proTwo;
        },
    });

    letAA.method();
    outCD.innerHTML += '<br >';
    letAB.method(11, 22);
    outCD.innerHTML += '<br >';
    
    // ----------------------------------------------------
    // object-constructor and object-accessors
    let letAC = function () {
        this.proOne = null;
        this.proTwo = null;
        this.method = function () {
            this.GetSet = { valueOne: arguments[0], valueTwo: arguments[1] };
            outCD.innerHTML += '<br >letAC-proOne : ' + this.proOne;
            outCD.innerHTML += '<br >letAC-proTwo : ' + this.proTwo;
            outCD.innerHTML += '<br >letAC-GetSet : ' + this.GetSet;
        };
    };

    Object.defineProperty(letAC.prototype, 'GetSet', {
        get: function () {
            return this.proOne + this.proTwo;
        },

        set: function (arg) {
            this.proOne = arg.valueOne;
            this.proTwo = arg.valueTwo;
        },
    });

    let letAC1 = new letAC();
    letAC1.method(11, 22);
    outCD.innerHTML += '<br >';

    // ----------------------------------------------------
    // object-class and object-accessors 
    class ClassAD {
        constructor() {
            this.proOne = null;
            this.proTwo = null;
            this.GetSet = { valueOne: arguments[0], valueTwo: arguments[1] };
        }

        method() {
            outCD.innerHTML += '<br >ClassAD-proOne : ' + this.proOne;
            outCD.innerHTML += '<br >ClassAD-proTwo : ' + this.proTwo;
            outCD.innerHTML += '<br >ClassAD-GetSet : ' + this.GetSet;
        }

        get GetSet() {
            return this.proOne + this.proTwo;
        }

        set GetSet(arg) {
            this.proOne = arg.valueOne;
            this.proTwo = arg.valueTwo;
        }
    }

    class ClassAE {
        method() {
            this.proOne = null;
            this.proTwo = null;
            this.GetSet = { valueOne: arguments[0], valueTwo: arguments[1] };
            outCD.innerHTML += '<br >ClassAE-proOne : ' + this.proOne;
            outCD.innerHTML += '<br >ClassAE-proTwo : ' + this.proTwo;
            outCD.innerHTML += '<br >ClassAE-GetSet : ' + this.GetSet;
        }

        get GetSet() {
            return this.proOne + this.proTwo;
        }

        set GetSet(arg) {
            this.proOne = arg.valueOne;
            this.proTwo = arg.valueTwo;
        }
    }

    let letAD1 = new ClassAD(10, 20);
    letAD1.method();
    outCD.innerHTML += '<br >';

    let letAE1 = new ClassAE();
    letAE1.method(111, 222);
    outCD.innerHTML += '<br >';

    // ----------------------------------------------------
    // extended object-class with constructor and object-accessors
    class DriveAF extends ClassAD {
        constructor() {
            outCD.innerHTML += '<br >DriveAF .......';
            super(arguments[0], arguments[1]);
            this.method();
        }
    } 

    class DriveAG extends ClassAE {
        constructor() {
            outCD.innerHTML += '<br >DriveAG .......';
            this.method(arguments[0], arguments[1]);
        }
    }

    let letAF1 = new DriveAF(11, 22);
    outCD.innerHTML += '<br >';
    let letAG1 = new DriveAF(10, 20);
    outCD.innerHTML += '<br >';

    // ----------------------------------------------------
    // extended object-class without constructor and object-accessors
    class DriveAH extends ClassAD {
        callBase() {
            outCD.innerHTML += '<br >DriveAH ........';
            this.method();
        }
    }

    class DriveAI extends ClassAE {
        callBase() {
            outCD.innerHTML += '<br >DriveAI ........';
            this.method(arguments[0], arguments[1]);
        }
    }

    let letAH1 = new DriveAH(101, 202);
    letAH1.callBase();
    outCD.innerHTML += '<br >';
    let letAI1 = new DriveAI();
    letAI1.callBase(110, 220);
    outCD.innerHTML += '<br >';

    // ------------------------------------------------------------------------
    // home made iterator -- returns an object-method
    let letBA = function () {
        let local = arguments[0];
        return {
            method: function () {
                local++;
                return {
                    value: local,
                };
            },
        };
    };

    let letBA1 = new letBA(11);
    outCD.innerHTML += '<br >letBA1.method().value : ' + letBA1.method().value;
    outCD.innerHTML += '<br >letBA1.method().value : ' + letBA1.method().value;
    outCD.innerHTML += '<br >letBA1.method().value : ' + letBA1.method().value;
    outCD.innerHTML += '<br >';

    // ------------------------------------------------------------------------
    // home made iterator -- returns a function 
    function funcBB() {
        let local = arguments[0];
        return function () {
            local++;
            return local;
        };
    }

    let letBB1 = new funcBB(11);
    outCD.innerHTML += '<br >letBB1 : ' + letBB1();
    outCD.innerHTML += '<br >letBB1 : ' + letBB1();
    outCD.innerHTML += '<br >';

    let letBC = function () {
        let local = arguments[0];
        let innerFunc = function () {
            local++;
            return local;
        };
        return innerFunc;
    };

    let letBC1 = new letBC(22);
    outCD.innerHTML += '<br >letBC1 : ' + letBC1();
    outCD.innerHTML += '<br >letBC1 : ' + letBC1();
    outCD.innerHTML += '<br >';

    // ------------------------------------------------------------------------
    // home made iterable - returns a function, more complex
    let letBD = function () {
        let local1 = arguments[0];
        return function () {
            let local2 = arguments[0];
            return local1 + local2; 
        };
    };

    let letBD1 = new letBD(10);
    outCD.innerHTML += '<br >letBD1 : ' + letBD1(20);
    outCD.innerHTML += '<br >';

    let letBE = function () {
        let local1 = arguments[0];
        return function () {
            let local2 = arguments[0];
            return function () {
                let local3 = arguments[0];
                return function () {
                    let local4 = arguments[0];
                    return local1 + local2 + local3 + local4;
                };
            };
        };
    };

    let letBE1 = new letBE(10);
    outCD.innerHTML += '<br >letBE1 : ' + letBE1(20)(30)(40);
    outCD.innerHTML += '<br >';

    // ---------------------------------- check it later -------------------
    // let letBE1 = new letBE(10);
    // let letBE2 = letBE1(20);
    // let letBE3 = letBE2(30);
    // let letBE4 = new letBE3(40);
    // outCD.innerHTML += '<br >letBE4 : ' + letBE3(40);
    // outCD.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # Sets | Maps - vanilla javascript built-in methods
function ExDF() {
    let letAA = new Set([1, 2, 3]);
    let setIterator = letAA.values();
    outCD.innerHTML += '<br >setIterator : ' + setIterator.next().value;
    outCD.innerHTML += '<br >setIterator : ' + setIterator.next().value;
    outCD.innerHTML += '<br >setIterator : ' + setIterator.next().value;
    outCD.innerHTML += '<br >setIterator : ' + setIterator.next().value;
    outCD.innerHTML += '<br >';

    letAA.add(4);
    setIterator = letAA.values();
    outCD.innerHTML += '<br >setIterator : ' + setIterator.next().value;
    outCD.innerHTML += '<br >setIterator : ' + setIterator.next().value;
    outCD.innerHTML += '<br >setIterator : ' + setIterator.next().value;
    outCD.innerHTML += '<br >setIterator : ' + setIterator.next().value;
    outCD.innerHTML += '<br >';

    let letAB = new Map([
        [1, 'a'],
        [2, 'b'],
        [3, 'c']
    ]);
    let mapIterator = letAB.values();
    outCD.innerHTML += '<br >mapIterator : ' + mapIterator.next().value;
    outCD.innerHTML += '<br >mapIterator : ' + mapIterator.next().value;
    outCD.innerHTML += '<br >mapIterator : ' + mapIterator.next().value;
    outCD.innerHTML += '<br >mapIterator : ' + mapIterator.next().value;
    outCD.innerHTML += '<br >';

    letAB.add(4, 'd');
    mapIterator = letAB.value();
    outCD.innerHTML += '<br >mapIterator : ' + mapIterator.next().value;
    outCD.innerHTML += '<br >mapIterator : ' + mapIterator.next().value;
    outCD.innerHTML += '<br >mapIterator : ' + mapIterator.next().value;
    outCD.innerHTML += '<br >mapIterator : ' + mapIterator.next().value;
    outCD.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # function review
function ExDG() {

}

////////////////////////////////////////////////////////////////////////////////
// # scope-hoisting-strict review
function ExDH() {

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
outCD.innerHTML += '<br >ex-df : Sets and Maps';
outCD.innerHTML += '<hr >'; ExDF();
outCD.innerHTML += '<br >ex-dg : function review';
outCD.innerHTML += '<hr >'; ExDG();
outCD.innerHTML += '<br >ex-dh : scope-hoisting-strict';
outCD.innerHTML += '<hr >'; ExDH();
