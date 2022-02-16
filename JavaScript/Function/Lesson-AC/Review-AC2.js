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
// # accessors | iterator | display
function ExEA() {
  // ------------------------------------------------------------------------
  // single object declaration with accessors
  let letAA = {
    proOne: null,
    proTwo: null,
    set SetGet(arg) {
      this.proOne = arg.valueOne;
      this.proTwo = arg.valueTwo;
    },

    get SetGet() {
      return this.proOne + this.proTwo;
    },

    method: function () {
      this.SetGet = { valueOne: arguments[0], valueTwo: arguments[1] };
      outCE.innerHTML += '<br >letAA-proOne : ' + this.proOne;
      outCE.innerHTML += '<br >letAA-proTwo : ' + this.proTwo;
      outCE.innerHTML += '<br >letAA-SetGet : ' + this.SetGet;
    },
  };

  letAA.method(10, 20);
  outCE.innerHTML += '<br >';

  // ------------------------------------------------------------------------
  // object constructor declaration with accessors
  let LetAB = function () {
    this.proOne = null;
    this.proTwo = null;
    this.method = function () {
      this.SetGet = { valueOne: arguments[0], valueTwo: arguments[1] };
      outCE.innerHTML += '<br >LetAB-proOne : ' + this.proOne;
      outCE.innerHTML += '<br >LetAB-proTwo : ' + this.proTwo;
      outCE.innerHTML += '<br >LetAB-SetGet : ' + this.SetGet;
    };
  };

  Object.defineProperty(LetAB.prototype, 'SetGet', {
    set: function (arg) {
      this.proOne = arg.valueOne;
      this.proTwo = arg.valueTwo;
    },

    get: function () {
      return this.proOne + this.proTwo;
    },
  });

  let letAB1 = new LetAB();
  letAB1.method(11, 22);
  outCE.innerHTML += '<br >';

  // ------------------------------------------------------------------------
  // object-class declaration with accessors
  class LetAC {
    method() {
      this.SetGet = { valueOne: arguments[0], valueTwo: arguments[1] };
      outCE.innerHTML += '<br >LetAC-proOne : ' + this.proOne;
      outCE.innerHTML += '<br >LetAC-proTwo : ' + this.proTwo;
      outCE.innerHTML += '<br >LetAC-SetGet : ' + this.SetGet;
    }

    set SetGet(arg) {
      this.proOne = arg.valueOne;
      this.proTwo = arg.valueTwo;
    }

    get SetGet() {
      return this.proOne + this.proTwo;
    }
  }

  let letAC1 = new LetAC();
  letAC1.method(11, 22);
  outCE.innerHTML += '<br >';

  // ------------------------------------------------------------------------
  // object-class declaration with constructor and accessors
  class LetAD {
    constructor() {
      this.SetGet = { valueOne: arguments[0], valueTwo: arguments[1] };
      outCE.innerHTML += '<br >LetAD-proOne : ' + this.proOne;
      outCE.innerHTML += '<br >LetAD-proTwo : ' + this.proTwo;
      outCE.innerHTML += '<br >LetAD-SetGet : ' + this.SetGet;
    }

    set SetGet(arg) {
      this.proOne = arg.valueOne;
      this.proTwo = arg.valueTwo;
    }

    get SetGet() {
      return this.proOne + this.proTwo;
    }
  }

  let letAD1 = new LetAD(11, 22);
  outCE.innerHTML += '<br >';

   // ------------------------------------------------------------------------
  // object-extClass declaration and accessors
  class LetAE extends LetAC {
    callBase() {
      outCE.innerHTML += '<br >LetAE-extends';
      this.method(arguments[0], arguments[1]);
    }
  }

  class LetAF extends LetAC {
    constructor() {
      outCE.innerHTML += '<br >LetAF-extends';
      super();
      this.method(111, 222);
    }
  }

  let letAE1 = new LetAE();
  letAE1.callBase(100, 200);
  let letAF1 = new LetAF();
  outCE.innerHTML += '<br >';

  class LetAG extends LetAD {
    callBase() {
      outCE.innerHTML += '<br >LetAG-extends';
    }
  }

  class LetAH extends LetAD {
    constructor() {      
      outCE.innerHTML += '<br >LetAH-extends';
      super(arguments[0], arguments[1]);
    }
  }

  let letAG1 = new LetAG();
  letAG1.callBase();
  let letAH1 = new LetAH(110, 220);
  outCE.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // object-constructor return 
  let LetBA = function () {
    let local = arguments[0];
    return function () {
      local++;
      return local;
    };
  };

  let letBA1 = new LetBA(11);
  outCE.innerHTML += '<br >letBA1 : ' + letBA1();
  outCE.innerHTML += '<br >letBA1 : ' + letBA1();
  outCE.innerHTML += '<br >';

  let LetBB = function () {
    let localOne = arguments[0];
    this.pro = arguments[0];
    return function () {
      localOne++;
      this.pro++;
      return {
        nestOne: localOne,
        nestTwo: this.pro,
      };
    };      
  };

  let letBB1 = new LetBB(11);
  outCE.innerHTML += '<br >letBB1().nestOne : ' + letBB1().nestOne;
  outCE.innerHTML += '<br >letBB1().nestOne : ' + letBB1().nestOne;
  outCE.innerHTML += '<br >letBB1().nestTwo : ' + letBB1().nestTwo;
  outCE.innerHTML += '<br >letBB1().nestTwo : ' + letBB1().nestTwo;
  outCE.innerHTML += '<br >';

  // --------------------------------------------------------------------------
  let LetBC = function () {
    let local = arguments[0];
    return local;
  };

  let LetBD = function () {
    this.property = arguments[0];
    return this.property;
  };

  let LetBE = function () {
    let local = arguments[0];
    return function () {
      return local;
    };
  };

  let LetBF = function () {
    this.property = arguments[0];
    return function () {
      return this.property;
    };
  };

  let LetBG = function () {
    this.proOne = arguments[0];
    let localOne = arguments[0];
    return {
      nestOne: this.proOne,
      nestTwo: localOne,
      nestThree: function () {
        return this.proOne;
      },
      nestFour: function () {
        return localOne;
      },
    };
  };

    let letBC1 = new LetBC(11);
    let letBD1 = new LetBD(22);
    let letBE1 = new LetBE(33);
    let letBF1 = new LetBF(44);
    let letBG1 = new LetBG(55);

    outCE.innerHTML += '<br >func-exp : return local';
    outCE.innerHTML += '<br >LetBC(10)    : ' + LetBC(10);
    outCE.innerHTML += '<br >letBC1       : ' + letBC1;
    outCE.innerHTML += '<br >letBC1.local : ' + letBC1.local;
    // outCE.innerHTML += '<br >letBC1()  : ' + letBC1();
    outCE.innerHTML += '<br >';

    outCE.innerHTML += '<br >func-exp : return property';
    outCE.innerHTML += '<br >LetBD(20)       : ' + LetBD(10);
    outCE.innerHTML += '<br >letBD1          : ' + letBD1;
    outCE.innerHTML += '<br >letBD1.property : ' + letBD1.property;
    // outCE.innerHTML += '<br >letBD1()        : ' + letBD1();
    outCE.innerHTML += '<br >';

    outCE.innerHTML += '<br >fun-exp : return func - return local';
    outCE.innerHTML += '<br >LetBC(30)-func : ' + LetBD(30);
    outCE.innerHTML += '<br >letBC1         : ' + letBC1;
    outCE.innerHTML += '<br >letBC1.local   : ' + letBC1.local;
    // outCE.innerHTML += '<br >letBC1()       : ' + letBC1();
    outCE.innerHTML += '<br >';

    outCE.innerHTML += '<br >fun-exp : return func - return property';
    outCE.innerHTML += '<br >LetBD(40)-func : ' + LetBD(40);
    outCE.innerHTML += '<br >letBD1         : ' + letBD1;
    outCE.innerHTML += '<br >letBD1.property: ' + LetBD.property;
    outCE.innerHTML += '<br >letBD1()       : ' + LetBD();
    outCE.innerHTML += '<br >';

    outCE.innerHTML += '<br >fun-exp : return obj - property as (local | property)';
    outCE.innerHTML += '<br >';

    outCE.innerHTML += '<br >fun-exp : return obj - method return local | property';
    outCE.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # Sets | Maps
function ExEB() {

}

////////////////////////////////////////////////////////////////////////////////
// # function review
function ExEC() {

}

////////////////////////////////////////////////////////////////////////////////
// # scope-hoisting-strict review
function ExED() {

}

////////////////////////////////////////////////////////////////////////////////
outCE.innerHTML += '<br >ex-ea : accessors | iterator | display';
outCE.innerHTML += '<hr >'; ExEA();
outCE.innerHTML += '<br >ex-eb : Sets and Maps';
outCE.innerHTML += '<hr >'; ExEB();
outCE.innerHTML += '<br >ex-ec : function review';
outCE.innerHTML += '<hr >'; ExEC();
outCE.innerHTML += '<br >ex-ed : scope-hoisting-strict';
outCE.innerHTML += '<hr >'; ExED();
