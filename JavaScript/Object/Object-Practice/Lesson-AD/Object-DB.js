///// ClASS INHERITANCE ///////////////////////////////////////////////////////
// 1. class inritance
// 2. multi-inheritance | chain-inheritance

////////////////////////////////////////////////////////////////////////////////
var outDB = document.createElement('div');
outDB.setAttribute('id', 'styleTwo');
document.body.appendChild(outDB);

////////////////////////////////////////////////////////////////////////////////
// # class inheritance
// to create a class (inheritance), use the (extends) keyword
// -> a class created with a class (inheritance), inherits all the methods from another class
// NB : inheritance is useful for code reusability:
// -> reuse (properties and methods) of an existing class when create a new class

// in case of drived-constructor, (super) is required to call (base-properties)
// -> if (properties) define inside (base-constructor) then (super) required (arguments)
// -> if (properties) define inside (methods) then (super) does not required (arguments)
// -> if (properties) define inside (global/static) then (super) does not required (arguments)

function ExBA() {

  // base class
  class Car {
    constructor(brand) {
      this.carName = brand;
    }

    info() {
      outDB.innerHTML += '<br >car name -> ' + this.carName;
      // return this.carName;
    }
  }

  // drived class (inherit - Car class)
  // concept not clear .....................
  class CarInfo extends Car {
    constructor(brand, model) {
      super(brand);     // what is the function of (super()) ...............
      this.carModel = model;
    }

    showInfo() {
      this.info();

      // outDB.innerHTML += '<br >car name : ' + this.info();
      outDB.innerHTML += '<br >car model: ' + this.carModel;
    }
  }

  let carOne = new CarInfo('Ford', 'Mustang');
  carOne.showInfo();
  outDB.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // base class one
  class BaseAA {
    constructor() {
      this.proOne = arguments[0];
      this.proTwo = arguments[1];
      outDB.innerHTML += '<br >BaseAA-Constructor ..';
    }

    printValue() {
      outDB.innerHTML += '<br >' + arguments[0] + ' : proOne : ' + this.proOne;
      outDB.innerHTML += '<br >' + arguments[0] + ' : proTwo : ' + this.proTwo;
    }
  }

  // drived class one - no defination
  // if we do not define the constructor of drived class, then
  // -> it will added the (constructor with (super) with required arguments for base-properties)
  // --> we can call (base-method) through (drived-object)
  class DrivedAA extends BaseAA {

  }

  let letAA1 = new DrivedAA();
  let letAA2 = new DrivedAA(11, 22);
  letAA1.printValue('letAA1');
  letAA2.printValue('letAA2');
  outDB.innerHTML += '<br >';

  // drived class two - only constructor .................
  // if define, the drived class constructor - then (1st) statement will be the (super()) statement
  // -> the (super()) method should have the required arguments, depends on (base) class
  // -> without (arguments), the (super()) method can not access the (base-properties)
  class DrivedAB extends BaseAA {
    constructor() {
      super();
      outDB.innerHTML += '<br >DrivedAB-Constructor ..';
    }
  }

  let letAB1 = new DrivedAB();
  let letAB2 = new DrivedAB(33, 44);
  letAB1.printValue('letAB1');
  letAB2.printValue('letAB2');
  outDB.innerHTML += '<br >';

  // drived class three - only constructor (new propert) and (super() with arguments)
  // number of (arguments) of (super) depends on numbers of (base-properties)
  // -> sequence of (arguments) of (super) is according to the sequence of (base-properties)
  // -> we can access (one or all) the (base-properties) by defining the (arguments) of (super)
  // -> (arguments) of (super) refere from the (arguments) of (drived-constructor)
  // we can also (add new property) to (drive-constructor) also
  class DrivedAC extends BaseAA {
    constructor() {
      super(arguments[0]);
      this.proThree = arguments[2];
      outDB.innerHTML += '<br >DrivedAC-Constructor ..';
    }
  }

  let letAC1 = new DrivedAC();
  let letAC2 = new DrivedAC(10, 11, 22);
  letAC1.printValue('letAC1');
  letAC2.printValue('letAC2');
  outDB.innerHTML += '<br >proThree : ' + letAC1.proThree;
  outDB.innerHTML += '<br >proThree : ' + letAC2.proThree;
  outDB.innerHTML += '<br >';

  // drived class three - only constructor (calling base-method without super-arguments)
  // the (super) has no arguments ............
  // --> (base-method) calling inside (drived-constructor) using (this) keyword
  class DrivedAD extends BaseAA {
    constructor() {
      super();
      this.printValue('DrivedAD');
    }
  }

  let letAD1 = new DrivedAD();
  let letAD2 = new DrivedAD(33, 44);
  outDB.innerHTML += '<br >';

  // drived class four - only constructor (calling base-method with super-arguments)
  class DrivedAE extends BaseAA {
    constructor() {
      super(arguments[0], arguments[1]);
      this.proThree = arguments[2];
      this.printValue('DrivedAE');
    }
  }

  let letAE1 = new DrivedAE();
  let letAE2 = new DrivedAE(55, 66, 77);
  outDB.innerHTML += '<br >letAE1.proThree : ' + letAE1.proThree;
  outDB.innerHTML += '<br >letAE2.proThree : ' + letAE2.proThree;
  outDB.innerHTML += '<br >';

  // drived class five - only method with (adding new property)
  // calling (base-method)
  // (base-properties) are assigned through automatically by (drive-constructor)
  // (new-property) in (drived-method) will assigned through the argument of (drived-method)
  class DrivedAF extends BaseAA {
    callBase() {
      this.printValue('DrivedAF');
      this.proThree = arguments[0];
      outDB.innerHTML += '<br >DrivedAF-proThree : ' + this.proThree;
    }
  }

  let letAF1 = new DrivedAF();
  let letAF2 = new DrivedAF(88, 99);
  letAF1.callBase(100);
  letAF2.callBase(200);
  outDB.innerHTML += '<hr >';

  // ---------------------------------------------------------------------------
  // base class two
  class BaseAB {
    setProperty() {
      this.proOne = arguments[0];
      this.proTwo = arguments[1];
    }

    printValue() {
      outDB.innerHTML += '<br >' + arguments[0] + ' : proOne : ' + this.proOne;
      outDB.innerHTML += '<br >' + arguments[0] + ' : proTwo : ' + this.proTwo;
    }
  }

  // drived class one
  class DrivedBA extends BaseAB {

  }

  let letBA = new DrivedBA(100, 200);
  letBA.setProperty(11, 22);
  letBA.printValue('letBA');
  outDB.innerHTML += '<br >';

  // drived class two
  // no-base-constructor and base-method-property,
  // -> this case drived-constructor required (super) without (arguments)
  // NB : calling the (base-property and base-method)
  class DrivedBB extends BaseAB {
    constructor() {
      super();    // ......................................
      this.setProperty(arguments[0], arguments[1]);
      outDB.innerHTML += '<br >' + arguments[2] + ' : proOne : ' + this.proOne;
      outDB.innerHTML += '<br >' + arguments[2] + ' : proTwo : ' + this.proTwo;
    }
  }

  let letBB = new DrivedBB(33, 44, 'letBB');
  outDB.innerHTML += '<br >';

  // drived class three
  class DrivedBC extends BaseAB {
    callBase() {
      this.setProperty(arguments[0], arguments[1]);
      outDB.innerHTML += '<br >' + arguments[2] + ' : proOne : ' + this.proOne;
      outDB.innerHTML += '<br >' + arguments[2] + ' : proTwo : ' + this.proTwo;
    }
  }

  let letBC = new DrivedBC(55, 66);
  letBC.callBase(55, 66, 'letBC');
  outDB.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # multi-inheritance | chain-inheritance
// javascript does not support multiple inheritace
// drived class inheritance (chain-inheritance)

function ExBB() {

  // base class one
  class BaseAA {
    constructor() {
      this.proOne = arguments[0];
      this.proTwo = arguments[1];
    }

    printBaseAA() {
      outDB.innerHTML += '<br >' + arguments[0] + ' : proOne : ' + this.proOne;
      outDB.innerHTML += '<br >' + arguments[0] + ' : proTwo : ' + this.proTwo;
    }
  }

  // drived class one ..........................................................
  // auto-constructor access automatically the (base-properties) defined by (base-constructor)
  class DrivedAA extends BaseAA {
    callBaseAA() {
      this.proThree = arguments[0];
      this.printBaseAA(arguments[1]);
      outDB.innerHTML += '<br >' + arguments[1] + ' : proThree : ' + this.proThree;
    }
  }

  let letAA = new DrivedAA(11, 22);
  letAA.callBaseAA(33, 'letAA');
  outDB.innerHTML += '<br >';

  // drived class inheritance ..................................................
  // auto-constructor access automatically the (base-properties) defined by (base-constructor)
  // (properties) defined by (method), is accessed (manually)
  class DrivedAB extends DrivedAA {
    callDrivedAA() {
      this.callBaseAA(arguments[0], arguments[1]);
    }

    callProperties() {
      this.printBaseAA(arguments[0]);
      this.callBaseAA(this.proThree, arguments[0]);
      outDB.innerHTML += '<br >' + arguments[0] + ' : proOne   : ' + this.proOne;
      outDB.innerHTML += '<br >' + arguments[0] + ' : proTwo   : ' + this.proTwo;
      outDB.innerHTML += '<br >' + arguments[0] + ' : proThree : ' + this.proThree;
    }
  }

  let letAB = new DrivedAB(10, 20);
  letAB.callDrivedAA(30, 'letAB');
  outDB.innerHTML += '<br >';

  letAB.callProperties('letAB');
  outDB.innerHTML += '<br >';

  // drived constructor and inheritance ........................................
  // (base-constructor-properties) accessed by (constructor-super)
  // (drived-method-properties) accessed (manually)
  class DrivedAC extends DrivedAB {
    constructor() {
      super(arguments[0], arguments[1]);
      this.callBaseAA(arguments[2], 'DrivedAC');
      this.proFour = arguments[3];
    }

    printDrivedAC() {
      outDB.innerHTML += '<br >' + arguments[0] + ' : proOne   : ' + this.proOne;
      outDB.innerHTML += '<br >' + arguments[0] + ' : proTwo   : ' + this.proTwo;
      outDB.innerHTML += '<br >' + arguments[0] + ' : proThree : ' + this.proThree;
      outDB.innerHTML += '<br >' + arguments[0] + ' : proFour  : ' + this.proFour;
    }
  }

  let letAC = new DrivedAC(11, 22, 33, 44);
  letAC.printDrivedAC('letAC');
  outDB.innerHTML += '<br >';

  // drived class and inheritance ..............................................
  // as if (method-properties) are also recognized by the previous constructor, so
  // -> (auto-constructor) access (base-constructor-properties) and (drived-method-properties)
  class DrivedAD extends DrivedAC {
    printDrivedAD() {
      outDB.innerHTML += '<br >' + arguments[0] + ' : proOne   : ' + this.proOne;
      outDB.innerHTML += '<br >' + arguments[0] + ' : proTwo   : ' + this.proTwo;
      outDB.innerHTML += '<br >' + arguments[0] + ' : proThree : ' + this.proThree;
      outDB.innerHTML += '<br >' + arguments[0] + ' : proFour  : ' + this.proFour;
    }
  }

  let letAD = new DrivedAD(101, 202, 303, 404);
  letAD.printDrivedAD('letAD');
  outDB.innerHTML += '<br >';

  // drived class and inheritance ..............................................
  // as if (method-properties) are also recognized by the previous constructor, so
  // -> (constructor-super) can access (base-constructor-properties) and (drived-method-properties)
  class DrivedAE extends DrivedAC {
    constructor() {
      super(arguments[0], arguments[1], arguments[2], arguments[3]);
    }

    printDrivedAE() {
      outDB.innerHTML += '<br >' + arguments[0] + ' : proOne   : ' + this.proOne;
      outDB.innerHTML += '<br >' + arguments[0] + ' : proTwo   : ' + this.proTwo;
      outDB.innerHTML += '<br >' + arguments[0] + ' : proThree : ' + this.proThree;
      outDB.innerHTML += '<br >' + arguments[0] + ' : proFour  : ' + this.proFour;
    }
  }

  let letAE = new DrivedAE(111, 222, 333, 444);
  letAE.printDrivedAE('letAE');
  outDB.innerHTML += '<hr >';

  // ---------------------------------------------------------------------------

  // base class - (properties) defined by (constructor)
  class BaseAB {
    constructor() {
      this.proOne = arguments[0];
      this.proTwo = arguments[1];
    }

    printBaseAB() {
      outDB.innerHTML += '<br >' + arguments[0] + ' : proOne : ' + this.proOne;
      outDB.innerHTML += '<br >' + arguments[0] + ' : proTwo : ' + this.proTwo;
    }
  }

  // drived class - (properties) definde by (methods)
  class DrivedBA extends BaseAB {
    setProperties() {
      this.proThree = arguments[0];
      this.proFour = arguments[1];
    }

    printDrivedBA() {
      this.printBaseAB(arguments[0]);
      outDB.innerHTML += '<br >' + arguments[0] + ' : proThree : ' + this.proThree;
      outDB.innerHTML += '<br >' + arguments[0] + ' : proFour  : ' + this.proFour;
    }
  }

  let letBA = new DrivedBA(11, 22);
  letBA.setProperties(33, 44);
  letBA.printDrivedBA('letBA');
  outDB.innerHTML += '<br >';

  // drived class - (constructor-properties) recognized by (auto-constructor)
  // drived class - (method-propertied) recognized by (manually)
  class DrivedBB extends DrivedBA {
    printDrivedBB() {
      this.printBaseAB(arguments[0]);
      this.setProperties(arguments[1], arguments[2]);
      outDB.innerHTML += '<br >' + arguments[0] + ' : proThree : ' + this.proThree;
      outDB.innerHTML += '<br >' + arguments[0] + ' : proFour  : ' + this.proFour;
    }
  }

  let letBB = new DrivedBB(10, 20);
  // letBB.setProperties(30, 40);
  letBB.printDrivedBB('letBB', 300, 400);
  outDB.innerHTML += '<br >';

  // drived class - (constructor-properties) recognized by (super)
  // drived class - (method-properties) recognized (manually)
  class DrivedBC extends DrivedBA {
    constructor() {
      super(arguments[0], arguments[1]);
      this.setProperties(arguments[2], arguments[3]);
      this.proFive = arguments[4];
    }

    printDrivedBC() {
      this.printDrivedBA(arguments[0]);
      outDB.innerHTML += '<br >' + arguments[0] + ' : proFive  : ' + this.proFive;
    }
  }

  let letBC = new DrivedBC(11, 22, 33, 44, 55);
  letBC.printDrivedBC('letBC');
  outDB.innerHTML += '<br >';

  // drived class - (constructor/method-properties) are recognized by (auto/super-constructor)
  class DrivedBD extends DrivedBC {
    // constructor() {
    //   // super();
    //   super(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    // }

    printDrivedBD() {
      this.printDrivedBC(arguments[0]);
    }
  }

  let letBD = new DrivedBD(10, 20, 30, 40, 50);
  letBD.printDrivedBD('letBD');
  outDB.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
outDB.innerHTML += 'ex-ba : class inheritance';
outDB.innerHTML += '<hr >'; ExBA();
outDB.innerHTML += '<br >ex-cb : multi-inheritance and chain-inheritance';
outDB.innerHTML += '<hr >'; ExBB();
