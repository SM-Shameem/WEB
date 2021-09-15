///// ClASS STATIC /////////////////////////////////////////////////////////////
// 1. class (static) mode

////////////////////////////////////////////////////////////////////////////////
var outDC = document.createElement('div');
outDC.setAttribute('id', 'styleOne');
document.body.appendChild(outDC);

////////////////////////////////////////////////////////////////////////////////
// # static mode
// (static) class methods are defined on the class itself
// you can not call a (static-method) on an (object), only on an (object-class)
// -> if you want to use the (object) inside the (static-method), you can send it as a (parameter)

function ExCA() {
  class Car {
    constructor(brand) {
      this.carName = brand;
    }

    static print() {
      return 'static-method';
    }

    static printInfo() {
      return arguments[0].carName;
    }
  }

  let carOne = new Car('Toyota');
  outDC.innerHTML += '<br >carOne : ' + Car.print();
  outDC.innerHTML += '<br >carOne : ' + Car.printInfo(carOne);
  outDC.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # multi-base and multi-extended
// javascript does not support multiple inheritace
// -> drived class inheritance

function ExCB() {

  // base class one
  class BaseAC {
    constructor() {
      this.proOne = arguments[0];
      this.proTwo = arguments[1];
    }

    printBaseAC() {
      outDC.innerHTML += '<br >' + arguments[0] + ' : proOne : ' + this.proOne;
      outDC.innerHTML += '<br >' + arguments[0] + ' : proTwo : ' + this.proTwo;
    }
  }

  // drived class one ..........................................................
  // auto-constructor access automatically the (base-properties) defined by (base-constructor)
  class DrivedCA extends BaseAC {
    callBase() {
      this.proThree = arguments[0];
      this.printBaseAC(arguments[1]);
      outDC.innerHTML += '<br >' + arguments[1] + ' : proThree : ' + this.proThree;
    }
  }

  let letCA = new DrivedCA(11, 22);
  letCA.callBase(33, 'letCA');
  outDC.innerHTML += '<br >';

  // drived class inheritance ..................................................
  // auto-constructor access automatically the (base-properties) defined by (base-constructor)
  // (properties) defined by (method), is accessed (manually)
  class DrivedCB extends DrivedCA {
    callDrivedCA() {
      this.callBase(arguments[0], arguments[1]);
    }

    callProperties() {
      this.printBaseAC(arguments[0]);
      this.callBase(this.proThree, arguments[0]);
      outDC.innerHTML += '<br >' + arguments[0] + ' : proOne   : ' + this.proOne;
      outDC.innerHTML += '<br >' + arguments[0] + ' : proTwo   : ' + this.proTwo;
      outDC.innerHTML += '<br >' + arguments[0] + ' : proThree : ' + this.proThree;
    }
  }

  let letCB = new DrivedCB(10, 20);
  letCB.callDrivedCA(30, 'letCA');
  outDC.innerHTML += '<br >';

  letCB.callProperties('letCB');
  outDC.innerHTML += '<br >';

  // drived constructor and inheritance ........................................
  // (base-constructor-properties) accessed by (constructor-super)
  // (drived-method-properties) accessed (manually)
  class DrivedCC extends DrivedCB {
    constructor() {
      super(arguments[0], arguments[1]);
      this.callBase(arguments[2], 'DrivedCC');
      this.proFour = arguments[3];
    }

    printDrivedCC() {
      outDC.innerHTML += '<br >' + arguments[0] + ' : proOne   : ' + this.proOne;
      outDC.innerHTML += '<br >' + arguments[0] + ' : proTwo   : ' + this.proTwo;
      outDC.innerHTML += '<br >' + arguments[0] + ' : proThree : ' + this.proThree;
      outDC.innerHTML += '<br >' + arguments[0] + ' : proFour  : ' + this.proFour;
    }
  }

  let letCC = new DrivedCC(11, 22, 33, 44);
  letCC.printDrivedCC('letCC');
  outDC.innerHTML += '<br >';

  // drived class and inheritance ..............................................
  // as if (method-properties) are also recognized by the previous constructor, so
  // -> (auto-constructor) access (base-constructor-properties) and (drived-method-properties)
  class DrivedCD extends DrivedCC {
    printDrivedCD() {
      outDC.innerHTML += '<br >' + arguments[0] + ' : proOne   : ' + this.proOne;
      outDC.innerHTML += '<br >' + arguments[0] + ' : proTwo   : ' + this.proTwo;
      outDC.innerHTML += '<br >' + arguments[0] + ' : proThree : ' + this.proThree;
      outDC.innerHTML += '<br >' + arguments[0] + ' : proFour  : ' + this.proFour;
    }
  }

  let letCD = new DrivedCD(101, 202, 303, 404);
  letCD.printDrivedCD('letCD');
  outDC.innerHTML += '<br >';

  // drived class and inheritance ..............................................
  // as if (method-properties) are also recognized by the previous constructor, so
  // -> (constructor-super) can access (base-constructor-properties) and (drived-method-properties)
  class DrivedCE extends DrivedCC {
    constructor() {
      super(arguments[0], arguments[1], arguments[2], arguments[3]);
    }

    printDrivedCE() {
      outDC.innerHTML += '<br >' + arguments[0] + ' : proOne   : ' + this.proOne;
      outDC.innerHTML += '<br >' + arguments[0] + ' : proTwo   : ' + this.proTwo;
      outDC.innerHTML += '<br >' + arguments[0] + ' : proThree : ' + this.proThree;
      outDC.innerHTML += '<br >' + arguments[0] + ' : proFour  : ' + this.proFour;
    }
  }

  let letCE = new DrivedCE(111, 222, 333, 444);
  letCE.printDrivedCE('letCE');
  outDC.innerHTML += '<hr >';

  // ---------------------------------------------------------------------------

  // base class - (properties) defined by (constructor)
  class BaseAD {
    constructor() {
      this.proOne = arguments[0];
      this.proTwo = arguments[1];
    }

    printBaseAD() {
      outDC.innerHTML += '<br >' + arguments[0] + ' : proOne : ' + this.proOne;
      outDC.innerHTML += '<br >' + arguments[0] + ' : proTwo : ' + this.proTwo;
    }
  }

  // drived class - (properties) definde by (methods)
  class DrivedDA extends BaseAD {
    setProperties() {
      this.proThree = arguments[0];
      this.proFour = arguments[1];
    }

    printDrivedDA() {
      this.printBaseAD(arguments[0]);
      outDC.innerHTML += '<br >' + arguments[0] + ' : proThree : ' + this.proThree;
      outDC.innerHTML += '<br >' + arguments[0] + ' : proFour  : ' + this.proFour;
    }
  }

  let letDA = new DrivedDA(11, 22);
  letDA.setProperties(33, 44);
  letDA.printDrivedDA('letDA');
  outDC.innerHTML += '<br >';

  // drived class - (constructor-properties) recognized by (auto-constructor)
  // drived class - (method-propertied) recognized by (manually)
  class DrivedDB extends DrivedDA {
    printDrivedDB() {
      this.printBaseAD(arguments[0]);
      this.setProperties(arguments[1], arguments[2]);
      outDC.innerHTML += '<br >' + arguments[0] + ' : proThree : ' + this.proThree;
      outDC.innerHTML += '<br >' + arguments[0] + ' : proFour  : ' + this.proFour;
    }
  }

  let letDB = new DrivedDB(10, 20);
  // letDB.setProperties(30, 40);
  letDB.printDrivedDB('letDB', 300, 400);
  outDC.innerHTML += '<br >';

  // drived class - (constructor-properties) recognized by (super)
  // drived class - (method-properties) recognized (manually)
  class DrivedDC extends DrivedDA {
    constructor() {
      super(arguments[0], arguments[1]);
      this.setProperties(arguments[2], arguments[3]);
      this.proFive = arguments[4];
    }

    printDrivedDC() {
      this.printDrivedDA(arguments[0]);
      outDC.innerHTML += '<br >' + arguments[0] + ' : proFive  : ' + this.proFive;
    }
  }

  let letDC = new DrivedDC(11, 22, 33, 44, 55);
  letDC.printDrivedDC('letDC');
  outDC.innerHTML += '<br >';

  // drived class - (constructor/method-properties) are recognized by (auto/super-constructor)
  class DrivedDD extends DrivedDC {
    // constructor() {
    //   // super();
    //   super(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    // }

    printDrivedDD() {
      this.printDrivedDC(arguments[0]);
    }
  }

  let letDD = new DrivedDD(10, 20, 30, 40, 50);
  letDD.printDrivedDD('letDD');
}

////////////////////////////////////////////////////////////////////////////////
outDC.innerHTML += 'ex-ca : class (static) mode';
outDC.innerHTML += '<hr >'; ExCA();
outDC.innerHTML += '<br >ex-cb : multi-base and multi-drived';
outDC.innerHTML += '<hr >'; ExCB();
