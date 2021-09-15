///// ClASS INHERITANCE ///////////////////////////////////////////////////////
// 1. class inritance
// 2. getters and setters
// 3. hosting

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

  let letBA1 = new DrivedBA();
  let letBA2 = new DrivedBA(100, 200);
  letBA1.setProperty(11, 22);
  letBA2.setProperty(10, 20);
  letBA1.printValue('letBA1');
  letBA2.printValue('letBA2');
  outDB.innerHTML += '<br >';

  // drived class two
  // no-base-constructor and base-method-property,
  // -> this case drived-constructor required (super) without (arguments)
  // NB : calling the (base-property and base-method)
  class DrivedBB extends BaseAB {
    constructor() {
      super();
      this.setProperty(arguments[0], arguments[1]);
      outDB.innerHTML += '<br >' + arguments[2] + ' : proOne : ' + this.proOne;
      outDB.innerHTML += '<br >' + arguments[2] + ' : proTwo : ' + this.proTwo;
    }
  }

  let letBB1 = new DrivedBB();
  let letBB2 = new DrivedBB(33, 44, 'letBB2');
  outDB.innerHTML += '<br >';

  // drived class three
  class DrivedBC extends BaseAB {
    callBase() {
      this.setProperty(arguments[0], arguments[1]);
      outDB.innerHTML += '<br >' + arguments[2] + ' : proOne : ' + this.proOne;
      outDB.innerHTML += '<br >' + arguments[2] + ' : proTwo : ' + this.proTwo;
    }
  }

  let letBC1 = new DrivedBC();
  let letBC2 = new DrivedBC(55, 66);
  letBC1.callBase(55, 66, 'letBC1');
  letBC2.callBase(50, 60, 'letBC2');
  outDB.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # getters and setters
// classes also allows you to use (getters and setters)
// it can be smart to use (getters and setters) for your (properties),
// -> especially if you want to do something special with the value before returning them,
// -> or before you set them
// -> to add (getters and setters) in the class, use the (get and set) keywords
// NB : even if the (getter) is a method,
// -> you do not use parentheses when you want to get the (property) value
// -> to use a (setter), use the same syntax as when you set a (property) value, without parentheses
// the name of (getter/setter) method cannot be same as the name of the (property)
// -> many programmers use an underscore character (_) before the (property) name
// -> to seperate the (getter/setter) from the actual (property)

function ExBB() {
  class Car {
    constructor(brand) {
      this.carName = brand;
    }

    get cName() {
      return this.carName;
    }

    set cName(arg) {
      this.carName = arg;
    }
  }

  let carOne = new Car('Toyota');
  outDB.innerHTML += '<br >car name : ' + carOne.cName;

  carOne.cName = 'Honda';
  outDB.innerHTML += '<br >car name : ' + carOne.cName;
  outDB.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # hosting
// unlike functions, and other javascript declarations, class declarations are not hosted
// -> that means, you must declare a class before you can use it
// NB : for other declarations, like functions,
// -> you will not get an error when you try to use it before it is declared,
// -> because the default behavior of javascript declarations are hosting
// -> (moving the declaration to the top)

// class-declaration is not hosted, so can not use any class before declaring it
// let carTwo = new Car('Honda');
// carTwo.print('carTwo');
// outDB.innerHTML += '<br >';

function ExBC() {
  class Car {
    constructor(brand) {
      this.carName = brand;
    }

    print() {
      outDB.innerHTML += '<br >' + arguments[0] + ' : carName : ' + this.carName;
    }
  }

  let carOne = new Car('Toyota');
  carOne.print('carOne');
  outDB.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
outDB.innerHTML += 'ex-ba : class inheritance';
outDB.innerHTML += '<hr >'; ExBA();
outDB.innerHTML += '<br >ex-bb : getters and setters';
outDB.innerHTML += '<hr >'; ExBB();
outDB.innerHTML += '<br >ex-bc : hosting';
outDB.innerHTML += '<hr >'; ExBC();
