///// STATIC, GET/SET, HOSTING /////////////////////////////////////////////////
// 1. class (static) keyword (methods and properties)
// 2. getters and setters in class
// 3. class hosging

////////////////////////////////////////////////////////////////////////////////
var outDC = document.createElement('div');
outDC.setAttribute('id', 'styleOne');
document.body.appendChild(outDC);

////////////////////////////////////////////////////////////////////////////////
// # class (static) keyword
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

  var carOne = new Car('Toyota');
  outDC.innerHTML += 'carOne : ' + Car.print();
  outDC.innerHTML += '<br >carOne : ' + Car.printInfo(carOne);
  outDC.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // static-method must call through its class-name
  // static-method has all the statement as other method has
  // to access (properties) inside (static) method, have to pass the object as its argument
  // static-method has only one argument
  // static-method can return
  class ClassAA {
    constructor() {
      this.proOne = arguments[0];
      ClassAA.printValue(ClassAA);
      outDC.innerHTML += '<br >static-return : ' + ClassAA.printValue(ClassAA);
    }

    callStatic() {
      ClassAA.printValue(ClassAA);
      outDC.innerHTML += '<br >static-return : ' + ClassAA.printValue(ClassAA);
    }

    static printValue() {
      outDC.innerHTML += '<br >arguments : ' + arguments[0];
      return arguments[0].proOne;
    }
  }

  var varAA = new ClassAA(11);
  varAA.callStatic();
  ClassAA.printValue(varAA);
  outDC.innerHTML += '<br >varAA : ' + ClassAA.printValue(varAA);
  outDC.innerHTML += '<br >';
}

//////////////////////////////////////////////////////////////////////////////
// # static-property, global-property, constructor, method, static-method and inheritance
// class properties must be method
// we can declare class-global (property) as (simple or static)
// -> do not use (var | var | const | this) keywords to declare class-global (properties)
// -> it may show syntax error but it will works, basically class expect only (methods)

// static-property can call through its (className) instead (objectName)
// static-property can call through its (className) inside (method) instead (this) keyword
// global-property can call through (this) in (method) and through (object)
// -> global-property value is same for each-object
function ExCB() {
  class BaseAA {
    globalOne = 11;       // call through (this) in (method) and through (object)
    static staticOne = 22;  // use (ClassName) in (method and object), instead (this/object)

    // static/global (properties) cannot declared inside (constructor/method/static method)
    setProperty() {
      // static LocalStatic = 33;
      // local = 44;
      this.propertyOne = 55;

      // outDC.innerHTML += '<br >' + arguments[0] + '-local : ' + local;
      // outDC.innerHTML += '<br >' + arguments[0] + '-local : ' + this.local;
      outDC.innerHTML += '<br >' + arguments[0] + '-propertyOne : ' + this.propertyOne;
      outDC.innerHTML += '<br >' + arguments[0] + '-globalOne   : ' + this.globalOne;
      outDC.innerHTML += '<br >' + arguments[0] + '-staticOne   : ' + BaseAA.staticOne;
    }

    // static/global (properties) cannot declared inside (constructor/method/static method)
    // ->(static method) cannot access (global-property)
    static staticMethod() {
      // static LocalStatic = 66;
      // local = 77;
      this.propertyOne = 88;

      // outDC.innerHTML += '<br >' + arguments[0] + '-local : ' + local;
      // outDC.innerHTML += '<br >' + arguments[0] + '-local : ' + this.local;
      outDC.innerHTML += '<br >' + arguments[0] + '-propertyOne : ' + this.propertyOne;
      outDC.innerHTML += '<br >' + arguments[0] + '-globalOne   - ' + this.globalOne;
      outDC.innerHTML += '<br >' + arguments[0] + '-staticOne   : ' + BaseAA.staticOne;
    }
  }

  // global-property and static-property with inherited-class (wihout constructor)
  class DrivedAA extends BaseAA {
    printBase() {
      outDC.innerHTML += '<br >' + arguments[0] + '-globalOne : ' + this.globalOne;
      outDC.innerHTML += '<br >' + arguments[0] + '-staticOne : ' + BaseAA.staticOne;

      this.setProperty('NS-drivedAA');
      BaseAA.staticMethod('ST-drivedAA');
    }
  }

  var varAA = new DrivedAA();
  varAA.printBase('varAA');
  outDC.innerHTML += '<br >';

  // global-property and static-property with inherited-class (wih constructor)
  // -> in case of drived-constructor, (super) is required to call (base-properties)
  // -> if (properties) define inside (base-constructor) then (super) required (arguments)
  // -> if (properties) define inside (methods) then (super) does not required (arguments)
  // -> if (properties) define inside (global/static) then (super) does not required (arguments)
  class DrivedAB extends BaseAA {
    constructor() {
      super();
      outDC.innerHTML += '<br >consturctor .........';

      outDC.innerHTML += '<br >' + arguments[0] + '-globalOne : ' + this.globalOne;
      outDC.innerHTML += '<br >' + arguments[0] + '-staticOne : ' + BaseAA.staticOne;

      this.setProperty('NS-drivedAB');
      BaseAA.staticMethod('ST-drivedAB');
    }
  }

  var varAB = new DrivedAB('varAB');
  outDC.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // different types of property | different types of scope | constructor | chain-inheritance
  // .......................... incompvar
  class BaseAB {
    globalPro = null;
    static staticPro = null;

    // static/global (properties) cannot declared inside (constructor/method/static method)
    constructor() {
      // localPro = arguments[1];
      // static lstaticPro = arguments[2];
      
      this.constPro = arguments[0];
    }

    getProperty() {
      this.methodPro = arguments[0];
    }

    static sgetProperty() {
      this.smethodPro = arguments[1];
    }
  }

  // without constructor
  class DrivedBA extends BaseAB {
    printValue() {
      outDC.innerHTML += '<br >' + arguments[0] + '-globalPro  : ' + this.globalPro;
      outDC.innerHTML += '<br >' + arguments[0] + '-staticPro  : ' + DrivedBA.staticPro;
      outDC.innerHTML += '<br >' + arguments[0] + '-constPro   : ' + this.constPro;
      outDC.innerHTML += '<br >' + arguments[0] + '-methodPro  : ' + this.methodPro;
      outDC.innerHTML += '<br >' + arguments[0] + '-smethodPro - ' + this.smethodPro;
    }

    static sprintValue() {
      outDC.innerHTML += '<br >' + arguments[0] + '-globalPro  : ' + arguments[1].globalPro;
      outDC.innerHTML += '<br >' + arguments[0] + '-staticPro  - ' + arguments[1].staticPro;
      outDC.innerHTML += '<br >' + arguments[0] + '-constPro   : ' + arguments[1].constPro;
      outDC.innerHTML += '<br >' + arguments[0] + '-methodPro  : ' + arguments[1].methodPro;
      outDC.innerHTML += '<br >' + arguments[0] + '-smethodPro : ' + this.smethodPro;
    }
  }

  var varBA = new DrivedBA(11);
  varBA.globalPro = 22;
  DrivedBA.staticPro = 33;
  varBA.getProperty(44);
  DrivedBA.sgetProperty(varBA, 55);

  varBA.printValue('NS-varBA');
  DrivedBA.sprintValue('ST-varBA', varBA);
  outDC.innerHTML += '<br >';

  // with constructor
  class DrivedBB extends BaseAB {
    constructor() {
      super(arguments[0]);
    }

    printValue() {
      outDC.innerHTML += '<br >' + arguments[0] + '-globalPro  : ' + this.globalPro;
      outDC.innerHTML += '<br >' + arguments[0] + '-staticPro  : ' + DrivedBA.staticPro;
      outDC.innerHTML += '<br >' + arguments[0] + '-constPro   : ' + this.constPro;
      outDC.innerHTML += '<br >' + arguments[0] + '-methodPro  : ' + this.methodPro;
      outDC.innerHTML += '<br >' + arguments[0] + '-smethodPro - ' + this.smethodPro;
    }

    static sprintValue() {
      outDC.innerHTML += '<br >' + arguments[0] + '-globalPro  : ' + arguments[1].globalPro;
      outDC.innerHTML += '<br >' + arguments[0] + '-staticPro  - ' + arguments[1].staticPro;
      outDC.innerHTML += '<br >' + arguments[0] + '-constPro   : ' + arguments[1].constPro;
      outDC.innerHTML += '<br >' + arguments[0] + '-methodPro  : ' + arguments[1].methodPro;
      outDC.innerHTML += '<br >' + arguments[0] + '-smethodPro : ' + this.smethodPro;
    }
  }

  var varBB = new DrivedBB(10);
  varBB.globalPro = 20;
  DrivedBB.staticPro = 30;
  varBB.getProperty(40);
  DrivedBB.sgetProperty(varBA, 50);

  varBB.printValue('NS-varBB');
  DrivedBB.sprintValue('ST-varBB', varBB);
  outDC.innerHTML += '<br >';

  // assigning value through constructor
  class DrivedBC extends BaseAB {
    constructor() {
      super(arguments[0]);
      this.getProperty(444);
      DrivedBC.sgetProperty(DrivedBC, 555);
    }

    printValue() {
      outDC.innerHTML += '<br >' + arguments[0] + '-globalPro  : ' + this.globalPro;
      outDC.innerHTML += '<br >' + arguments[0] + '-staticPro  : ' + DrivedBA.staticPro;
      outDC.innerHTML += '<br >' + arguments[0] + '-constPro   : ' + this.constPro;
      outDC.innerHTML += '<br >' + arguments[0] + '-methodPro  : ' + this.methodPro;
      outDC.innerHTML += '<br >' + arguments[0] + '-smethodPro - ' + this.smethodPro;
    }

    static sprintValue() {
      outDC.innerHTML += '<br >' + arguments[0] + '-globalPro  : ' + arguments[1].globalPro;
      outDC.innerHTML += '<br >' + arguments[0] + '-staticPro  - ' + arguments[1].staticPro;
      outDC.innerHTML += '<br >' + arguments[0] + '-constPro   : ' + arguments[1].constPro;
      outDC.innerHTML += '<br >' + arguments[0] + '-methodPro  : ' + arguments[1].methodPro;
      outDC.innerHTML += '<br >' + arguments[0] + '-smethodPro : ' + this.smethodPro;
    }
  }

  var varBC = new DrivedBC(111);
  varBC.printValue('NS-DrivedBC');
  DrivedBC.sprintValue('ST-DrivedBC', DrivedBC);
  outDC.innerHTML += '<br >';

  class DrivedBD extends DrivedBC {
    printValue() {
      outDC.innerHTML += '<br >' + arguments[0] + '-globalPro  : ' + this.globalPro;
      outDC.innerHTML += '<br >' + arguments[0] + '-staticPro  : ' + DrivedBA.staticPro;
      outDC.innerHTML += '<br >' + arguments[0] + '-constPro   : ' + this.constPro;
      outDC.innerHTML += '<br >' + arguments[0] + '-methodPro  : ' + this.methodPro;
      outDC.innerHTML += '<br >' + arguments[0] + '-smethodPro - ' + this.smethodPro;
    }

    static sprintValue() {
      outDC.innerHTML += '<br >' + arguments[0] + '-globalPro  : ' + arguments[1].globalPro;
      outDC.innerHTML += '<br >' + arguments[0] + '-staticPro  - ' + arguments[1].staticPro;
      outDC.innerHTML += '<br >' + arguments[0] + '-constPro   : ' + arguments[1].constPro;
      outDC.innerHTML += '<br >' + arguments[0] + '-methodPro  : ' + arguments[1].methodPro;
      outDC.innerHTML += '<br >' + arguments[0] + '-smethodPro : ' + this.smethodPro;
    }
  }

  var varBD = new DrivedBD(11);
  varBD.printValue('NS-varBD');
  DrivedBD.sprintValue('ST-varBD', varBD);
  outDC.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// getters and setters in class with (inheritance and static/global)
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
function ExCC() {
  class Car {
    constructor(brand) {
      this.carName = brand;
    }

    get getSet() {
      return this.carName;
    }

    set getSet(arg) {
      this.carName = arg;
    }
  }

  var carOne = new Car('Toyota');
  outDC.innerHTML += '<br >car name : ' + carOne.getSet;

  carOne.getSet = 'Honda';
  outDC.innerHTML += '<br >car name : ' + carOne.getSet;
  outDC.innerHTML += '<br >';

  // inheritance and get/set
  class Model extends Car {
    constructor() {
      super(arguments[0]);
      this.carModel = arguments[1];
    }

    printValue() {
      outDC.innerHTML += '<br >car name : ' + this.getSet;
      outDC.innerHTML += '<br >car model : ' + this.carModel;
    }
  }

  var carInfo = new Model('Toyota', 'lexus');
  carInfo.printValue();
  outDC.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // (static/global) properties and (inheritance) with (get/set)
  // --> static-method call (getSet) through (object-argument) .........
  class BaseAA {
    propertyOne = null;
    static staticOne = null;

    constructor() {
      outDC.innerHTML += '<br >propertyOne : ' + this.propertyOne;
      outDC.innerHTML += '<br >staticOne   : ' + BaseAA.staticOne;
    }

    set getSet(arg) {
      this.propertyOne = arg.proValue;
      BaseAA.staticOne = arg.staticValue;
    }

    get getSet() {
      return this.propertyOne + BaseAA.staticOne;
    }
  }

  var varAA = new BaseAA();
  varAA.getSet = { proValue: 11, staticValue: 22 };
  outDC.innerHTML += '<br >propertyOne + staticOne : ' + varAA.getSet;
  outDC.innerHTML += '<br >';

  // without constructor
  class DrivedAA extends BaseAA {

    // non-static-method calls (properties and methods) through (this)
    callBase() {
      this.getSet = { proValue: 10, staticValue: 20 };
      outDC.innerHTML += '<br >' + arguments[0] + ' : ' + this.getSet;
    }

    // static-method calls (properties and methods) through (object-argument)
    static scallBase() {
      arguments[1].getSet = { proValue: 30, staticValue: 40 };
      outDC.innerHTML += '<br >' + arguments[0] + ' : ' + arguments[1].getSet;
    }
  }

  var varAB = new DrivedAA();
  varAB.callBase('NS-varAB');
  DrivedAA.scallBase('ST-varAB', varAB);
  outDC.innerHTML += '<br >';

  // with constructor
  class DrivedAB extends BaseAA {
    constructor() {
      super();
      outDC.innerHTML += '<br >consturctor .........';
    }

    // non-static-method calls (properties and methods) through (this)
    printBase() {
      this.getSet = { proValue: 10, staticValue: 20 };
      outDC.innerHTML += '<br >' + arguments[0] + ' : ' + this.getSet;
    }

    // static-method calls (properties and methods) through (object-argument)
    static sprintBase() {
      arguments[1].getSet = { proValue: 30, staticValue: 40 };
      outDC.innerHTML += '<br >' + arguments[0] + ' : ' + arguments[1].getSet;
    }
  }

  var varAC = new DrivedAB();
  varAC.printBase('NS-varAC');
  DrivedAB.sprintBase('ST-varAC', varAC);
  outDC.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # class hosting
// unlike functions, and other javascript declarations, class declarations are not hosted
// -> that means, you must declare a class before you can use it
// NB : for other declarations, like functions,
// -> you will not get an error when you try to use it before it is declared,
// -> because the default behavior of javascript declarations are hosting
// -> (moving the declaration to the top)
function ExCD() {

  // class-declaration is not hosted, so can not use any class before declaring it
  // var carTwo = new Car('Honda');
  // carTwo.print('carTwo');
  // outDC.innerHTML += '<br >';
  class Car {
    constructor(brand) {
      this.carName = brand;
    }

    print() {
      outDC.innerHTML += '<br >' + arguments[0] + ' : carName : ' + this.carName;
    }
  }

  var carOne = new Car('Toyota');
  carOne.print('carOne');
  outDC.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
outDC.innerHTML += 'ex-ca : class (static) keyword';
outDC.innerHTML += '<hr >'; ExCA();
outDC.innerHTML += '<br >ex-cb : static-property and global-property with inheritance';
outDC.innerHTML += '<hr >'; ExCB();
outDC.innerHTML += '<br >ex-bc : getters and setters in class with inheritance and static/global';
outDC.innerHTML += '<hr >'; ExCC();
outDC.innerHTML += '<br >ex-bd : class hosting';
outDC.innerHTML += '<hr >'; ExCD();
