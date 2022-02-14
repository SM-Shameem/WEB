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
  // object-iterator
  let letBA = {
    proOne: null,

    methodOne: function () {
      this.proOne = arguments[0];
      return this.proOne;
    },

    methodTwo: function () {
      this.proOne = arguments[0];
      return function () {
        this.proOne++;
        return this.proOne;
      };
    },

    methodThree: function () {
      this.proOne = arguments[0];
      return {
        method: function () {
          this.proOne++;
          return this.proOne;
        },
      };
    },
  };

  outCE.innerHTML += '<br >letBA.methodOne : ' + letBA.methodOne(11);
  outCE.innerHTML += '<br >letBA.methodTwo : ' + letBA.methodTwo(11);
  outCE.innerHTML += '<br >letBA.methodThree : ' + letBA.methodThree(11).method();
  outCE.innerHTML += '<br >';

  let LetBB = function () {
    this.proOne = arguments[0];
    let localOne = arguments[0];
    return function () {
      this.proOne++;
      localOne++;
      return {
        nestOne: this.proOne,
        nestTwo: localOne,
      };
    };
  };

  let letBB1 = new LetBB(11);
  outCE.innerHTML += '<br >letBB1.nestOne : ' + letBB1.nestOne;
  outCE.innerHTML += '<br >letBB1.nestTwo : ' + letBB1.nestTwo;
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
