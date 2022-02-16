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
        proFive: {
            nestOne: 100,
            methodOne: function () {
                return 100 + this.nestOne;
            },
            methodTwo: function () {
                this.proOne = arguments[0];
                return this.proOne + this.nestOne;
            },
            methodThree: function () {
                this.proOne = arguments[0];
                return {
                    value: this.nestOne + this.proOne,
                };
            },
            methodFour: function () {
                this.proOne = arguments[0];
                return {
                    value: this.nestOne + this.proOne,
                    method: function () {
                        return this.nestOne + this.proOne;
                    },
                };
            },
        },
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
    outCD.innerHTML += '<br >varBC.proFive.nestOne : ' + varBC.proFive.nestOne;
    outCD.innerHTML += '<br >varBC.proFive.methodOne : ' + varBC.proFive.methodOne();
    outCD.innerHTML += '<br >varBC.proFive.methodTwo : ' + varBC.proFive.methodTwo(100);
    outCD.innerHTML += '<br >varBC.proFive.methodThree.value : ' + varBC.proFive.methodThree(200).value;
    outCD.innerHTML += '<br >varBC.proFive.methodFour.value : ' + varBC.proFive.methodFour(300).value;
    outCD.innerHTML += '<br >varBC.proFive.methodFour.method : ' + varBC.proFive.methodFour(400).method();
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
// # object-method
function ExDD() {
    // creaing object
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
// # accessor | iterator | display
function ExDE() {
    let letAA = {
        proOne: null,
        proTwo: null,
        method: function () {
            this.GetSet = { valueOne: 11, valueTwo: 22 };
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

    letAA.method();
    outCD.innerHTML += '<br >';

    let letAB = Object({
        proOne: null,
        proTwo: null,
        method: function () {
            this.GetSet = { valueOne: 10, valueTwo: 20 };
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

    letAB.method();
    outCD.innerHTML += '<br >';

    // --------------------------------------------------------------
    // object-accessors with object-constructor
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

    // using (defineProperty) method to define (object-accessors) to (constructor)
    Object.defineProperty(letAC.prototype, 'GetSet', {
        get: function () {
            return this.proOne + this.proTwo;
        },

        set: function (arg) {
            this.proOne = arg.valueOne;
            this.proTwo = arg.valueTwo;
        }
    });

    let letAC1 = new letAC();
    letAC1.method(111, 222);
    outCD.innerHTML += '<br >';

    // --------------------------------------------------------------
    // object-accessors with class
    class ClassAD {
        constructor() {
            this.proOne = null;
            this.proTwo = null;
        }

        method() {
            this.GetSet = { valueOne: arguments[0], valueTwo: arguments[1] };
            outCD.innerHTML += '<br >ClassAD-proOne : ' + this.proOne;
            outCD.innerHTML += '<br >ClassAD-proTwo : ' + this.proTwo;
            outCD.innerHTML += '<br >ClassAD-GetSet : ' + this.GetSet;
        }

        set GetSet(arg) {
            this.proOne = arg.valueOne;
            this.proTwo = arg.valueTwo;
        }

        get GetSet() {
            return this.proOne + this.proTwo;
        }
    }

    let letAD1 = new ClassAD();
    letAD1.method(100, 200);
    outCD.innerHTML += '<br >';

    // --------------------------------------------------------------
    // home made iterable - returning (object-method return property)
    let letBA = function () {
        let local = 0;
        return {
            method: function () {
                local++;
                return {
                    valueOne: local,
                };
            },
        };
    };

    let letBA1 = new letBA();
    outCD.innerHTML += '<br >letBA1 : ' + letBA1.method().valueOne;
    outCD.innerHTML += '<br >letBA1 : ' + letBA1.method().valueOne;
    outCD.innerHTML += '<br >';

    // home made iterable - return (object method return variable)
    let letBB = function () {
        let local = arguments[0];
        return {
            methodOne: function () {
                local++;
                return local;
            },
        };
    };

    let letBB1 = new letBB(11);
    outCD.innerHTML += '<br >letBB1 : ' + letBB1.methodOne();
    outCD.innerHTML += '<br >';

    // home made iterable - return (object method return complex multiple)
    let letBC = function () {
        let local = arguments[0];
        return {
            methodOne: function () {
                this.proOne = arguments[0];
                return local + this.proOne;
            },
        };
    };

    let letBD = function () {
        let local = arguments[0];
        return {
            methodOne: function () {
                this.proOne = arguments[0];
                return {
                    proTwo: null,
                    objReturn: local + this.proOne,
                };
            },
            methodTwo: function () {
                this.proOne = arguments[0];
                return {
                    proTwo: null,
                    method: function () {
                        // this.proTwo = arguments[0];
                        return local + this.proOne;
                    },
                };
            },
        };
    };

    let letBC1 = new letBC(11);
    outCD.innerHTML += '<br >letBC1 : ' + letBC1.methodOne(22);

    let letBD1 = new letBD(11);
    outCD.innerHTML += '<br >letBD1 : ' + letBD1.methodOne(22).objReturn;
    outCD.innerHTML += '<br >letBD1 : ' + letBD1.methodTwo(22).method();
    outCD.innerHTML += '<br >';


    // home made iterable - returning (function - expression)
    let letCA = function () {
        let local = 0;
        return function () {
            local++;
            return {
                valueOne: local,
            };
        };
    };

    // home made iterable - returning (function - definition)
    let letCB = function () {
        let local = 0;
        return function method() {
            local++;
            return {
                valueOne: local,
            };
        };
    };

    // home made iterable - returning (nested function)
    let letCC = function () {
        let local = 0;
        function method() {
            local++;
            return {
                valueOne: local,
            };
        }
        return method;
    };

    let letCA1 = new letCA();
    let letCB1 = new letCB();
    let letCC1 = new letCC();
    outCD.innerHTML += '<br >letCA1 : ' + letCA1().valueOne;
    outCD.innerHTML += '<br >letCA1 : ' + letCA1().valueOne;
    outCD.innerHTML += '<br >letCB1 : ' + letCB1().valueOne;
    outCD.innerHTML += '<br >letCB1 : ' + letCB1().valueOne;
    outCD.innerHTML += '<br >letCC1 : ' + letCC1().valueOne;
    outCD.innerHTML += '<br >letCC1 : ' + letCC1().valueOne;
    outCD.innerHTML += '<br >';

    // --------------------------------------------------------------
    // home made iterator - complex
    let letDA = function () {
        let localOne = arguments[0];
        return function () {
            let localTwo = arguments[0];
            return localOne + localTwo;
        };
    };

    let letDA1 = new letDA(10);
    outCD.innerHTML += '<br >letDA1 : ' + letDA1(20);

    // home made iterator - complex multiple
    let letDB = function () {
        let localOne = arguments[0];
        return function () {
            let localTwo = arguments[0];
            return function () {
                let localThree = arguments[0];
                return localOne + localTwo + localThree;
            };
        };
    };

    let letDB1 = new letDB(10);
    outCD.innerHTML += '<br >letDB1 : ' + letDB1(20)(30);

    let letDB2 = letDB1(20);
    let letDB3 = letDB2(30);
    outCD.innerHTML += '<br >letDB3 : ' + letDB3;
    outCD.innerHTML += '<br >';
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
