///// FUNCTION-OBJECT REVIEW AND MANIPULATION //////////////////////////////////
// # object fundamental
// 1. real-life object, properties, and methods
// 2. object-definition, object-properties, and accessing properties
// 3. object-methods, accessing methods, and (this) keyword
// 4. do not declare (string | number | boolean) as object
//
// # the (this) keyword
// 12. the (this) keyword used alone (default)
// 13. the (this) in a method (default/strict)
// 14. the (this) in a function (default/strict)
// 15. the (this) in a event-handler
// 16. the (this) in a explicit-function binding/object-method binding
//
// # object definition
// 5. javascript object and primitives
// 6. objects are variable, object-properties, and object-methods
// 7. different ways of creating and declaring object
// 8. creating object/empty-object using (literal/new keyword)
// 9. objects are mutable
//
// # object properties
// 1. object properties and accessing properties
// 2. object properties and (for..in) loop
// 3. adding properties and devaring properties
// 4. nested object and nested array and object
//
// # object methods
// 5. object method and accessing methods
// 6. using (this) keyword to access members inside methods
// 7. adding a method to an object and using built-in method
//
// # object accessors
// 12. object accessors (getter and setter) and the (get and set) keyword
// 13. why use (getters and setters) and difference bettween (method and getters)
// 14. adding (getters and setters) to an existing object using (Object.defineProperty()) method
//
// # object constructor
// 15. object constructor | the (this) keyword
// 16. adding a properties to an (object | constructor)
// 17. adding a methods to an (object | constructor)
// 18. built-in object constructor (boolean | number | string)
//
// # object prototype
// 19. object prototype | prototype inheritance
// 20. using (prototype property)
//
// # object display
// 8. display object, display object-properties and using (for..in) loop
// 9. converting object to array using (Object.value()) method
// 10. converting object to string (JSON notation) using (Object.stringify()) method
// 11. stringify (array | date | function)
//
// # object iterable
// 21. iterabors | iterating over a (string | array)
// 22. home made iterable (object as argument | object as return)
// -> 23. javascript iterable (concept incompvare)
//
// # class fundamental
// 10. javascript class and using a class
// 11. constructor and class method
//
// # class introduction
// 24. class syntax | using class
// 25. class constructor | class methods
//
// # class inheritance
// 26. class inheritance
// 27. multi-inheritance and chain-inheritance
//
// # static, getters/setters, and hosting
// 28. static keyword (methods and properties)
// -> 29. static-property and global-property with inheritance (syntax incompvare)
// -> 30. getters and setters in class with inheritance and static/global (manipulate incompvare)
// 31. class hosting
//
// # object Sets()
// 32. javascript sets | how to create a set | sets are objects
// 33. set methods & (add | forEach | values | key | entries)
// 34. size | has | devare | clear
//
// # object Maps()
// 35. javascript Maps | how to create a map | maps are objects
// 36. map methods & (set | get | clear | has | size | devare)
// 37. forEach | keys | values | entries
// 38. javascript object vs maps | object as keys
//
// # object references
// 39. ES5 object methods (managing objects)
//     Object | Object.defineProperty | Object.defineProperties
// 40. ES5 object methods (accessing objects)
//     Object.getOwnPropertyNames | Object.keys
//     -> Object.getOwnPropertyDescriptor | Object.getPrototypeOf (incompvare)
// 41. ES5 object methods (protecting objects)
//     Object.preventExtensions | Object.seal | Object.freeze
//     Object.isExtensible | Object.isSealed | Object.isFrozen
// 42. objec property attributes
//     value | writable
//     configurable | enumerable

////////////////////////////////////////////////////////////////////////////////
var outBD = document.createElement('div');
outBD.setAttribute('id', 'styvarwo');
document.body.appendChild(outBD);

////////////////////////////////////////////////////////////////////////////////
// object defination | properties (attribute) | properties (method)
// object accessors | object constructor | object prototype

function ExDA() {
  var varAA = {
    proOne: null,
    proTwo: null,
    method: function () {
      return this.proOne + this.proTwo;
    },

    set setGet(arg) {
      this.proOne = arg.valueOne;
      this.proTwo = arg.valueTwo;
    },

    get setGet() {
      outBD.innerHTML += '<br >varAA.proOne    : ' + this.proOne;
      outBD.innerHTML += '<br >varAA.proTwo    : ' + this.proTwo;
      outBD.innerHTML += '<br >proOne + proTwo : ' + this.method();
    },
  };

  varAA.setGet = { valueOne: 11, valueTwo: 22 };
  varAA.setGet;
  outBD.innerHTML += '<br >';

  // ---------------------------------------------------------------------------

  varAB = { };
  varAB.proOne = 10;
  varAB.proTwo = 20;
  varAB.method = function () {
    outBD.innerHTML += '<br >proOne + proTwo : ' + (this.proOne + this.proTwo);
  };

  varAB.method();
  devare(varAB.proOne);
  varAB.method();
  varAB.method;
  varAB['proOne'] = 30;
  varAB.method();
  outBD.innerHTML += '<br >';

  // ---------------------------------------------------------------------------

  var varAC = new Object({});
  var varAD = Object.create({});  // using second-brackets inside parentheses is required

  varAC.proOne = null;
  varAC.proTwo = null;
  varAC.method = function () {
    this.proOne = arguments[0];
    this.proTwo = arguments[1];
    outBD.innerHTML += '<br >proOne + proTwo : ' + (this.proOne + this.proTwo);
  };

  varAD.proOne = null;
  varAD.proTwo = null;
  varAD.method = function () {
    this.proOne = arguments[0];
    this.proTwo = arguments[1];
    outBD.innerHTML += '<br >proOne + proTwo : ' + (this.proOne + this.proTwo);
  };

  var varAE = new Object({
    proOne: 10,
    proTwo: 20,
    method: function () {
      outBD.innerHTML += '<br >proOne + proTwo : ' + (this.proOne + this.proTwo);
    },
  });

  var varAF = Object.create({
    proOne: 11,
    proTwo: 22,
    method: function () {
      outBD.innerHTML += '<br >proOne + proTwo : ' + (this.proOne + this.proTwo);
    },
  });

  varAC.method(11, 22);
  varAD.method(33, 44);
  varAE.method();
  varAF.method();
  outBD.innerHTML += '<br >';

  // ---------------------------------------------------------------------------

  var VarAG = function () {
    this.proOne = arguments[0];
    this.proTwo = arguments[1];
    this.method = function () {
      return this.proOne + this.proTwo;
    };
  };

  var varAG1 = new VarAG(11, 22);
  var varAG2 = new VarAG(33, 44);
  outBD.innerHTML += '<br >varAG1.method : ' + varAG1.method();
  outBD.innerHTML += '<br >varAG2.method : ' + varAG2.method();
  outBD.innerHTML += '<br >';

  varAG1.methodTwo = function () {
    return (this.proOne - this.proTwo);
  };

  varAG2.methodTwo = function () {
    return (this.proTwo - this.proOne);
  };

  outBD.innerHTML += '<br >varAG1.methodTwo : ' + varAG1.methodTwo();
  outBD.innerHTML += '<br >varAG2.methodTwo : ' + varAG2.methodTwo();

  // after defining additional prototype property, value will be defined at declaration is constant
  // it will not assignable through the constructor arguments
  VarAG.prototype.proThree = 10;
  VarAG.prototype.printValue = function () {
    outBD.innerHTML += '<br > VarAG.proOne   : ' + this.proOne;
    outBD.innerHTML += '<br > VarAG.proTwo   : ' + this.proTwo;
    outBD.innerHTML += '<br > VarAG.proThree : ' + this.proThree;
  };

  var varAG3 = new VarAG(10, 20, 30);
  varAG3.printValue();
  outBD.innerHTML += '<br >';

  // ---------------------------------------------------------------------------

  var varAH = {
    proOne: [1, 2, 3],
    proTwo: {
      nstOne: 10,
      nstTwo: 20,
    },
  };

  var VarAI = function () {
    this.proOne = varAH;
    this.proTwo = [
      11, 22,
      {
        arrOne: true,
        arrTwo: false,
      },
    ];

    this.method = function () {
      outBD.innerHTML += '<br >proOne.proOne[0] : ' + this.proOne.proOne[0];
      outBD.innerHTML += '<br >proOne.proOne[1] : ' + this.proOne.proOne[1];
      outBD.innerHTML += '<br >proOne.proOne[2] : ' + this.proOne.proOne[2];
      outBD.innerHTML += '<br >proOne.proTwo.nstOne : ' + this.proOne.proTwo.nstOne;
      outBD.innerHTML += '<br >proOne.proTwo.nstTwo : ' + this.proOne.proTwo.nstTwo;
      outBD.innerHTML += '<br >proTwo[0] : ' + this.proTwo[0];
      outBD.innerHTML += '<br >proTwo[1] : ' + this.proTwo[1];
      outBD.innerHTML += '<br >proTwo[2].arrOne : ' + this.proTwo[2].arrOne;
      outBD.innerHTML += '<br >proTwo[2].arrTwo : ' + this.proTwo[2].arrTwo;
    };
  };

  var varAI = new VarAI();
  var varAJ = varAI;    // objects are mutable
  varAI.method();
  varAJ.method();
  outBD.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // self-referencing object and constructor and class
  // self-reference must assign later after defining object
  // in-case of self-referencing use (var) instead of (var) for (object)
  // -> but we can assign (self-reference) value later, if object defined with (var)

  var varAK = {
    proOne: 11,
    proTwo: 22,
  }

  var varAL = {
    proThree: varAK,
    proFour: null,
  }

  // varAL.proThree = varAK;
  varAL.proFour = varAL;

  outBD.innerHTML += '<br >varAL.proThree.proOne : ' + varAL.proThree.proOne;
  outBD.innerHTML += '<br >varAL.proThree.proTwo : ' + varAL.proThree.proTwo;
  outBD.innerHTML += '<br >varAL.proFour.proThree.proOne : ' + varAL.proFour.proThree.proOne;
  outBD.innerHTML += '<br >varAL.proFour.proThree.proTwo : ' + varAL.proFour.proThree.proTwo;
  outBD.innerHTML += '<br >';

  var VarAM = function () {
    this.proOne = arguments[0];
    this.proTwo = arguments[1];
  };

  var varAN = {
    proThree: new VarAM(10, 20),
    proFour: null,
  };

  varAN.proFour = varAN;
  outBD.innerHTML += '<br >varAN.proFour.proThree.proOne : ' + varAN.proFour.proThree.proOne;
  outBD.innerHTML += '<br >varAN.proFour.proThree.proTwo : ' + varAN.proFour.proThree.proTwo;
  outBD.innerHTML += '<br >';

  class ClassAO {
    constructor() {
      this.proOne = arguments[0];
      this.proTwo = arguments[1];
    }
  }

  var varAP = {
    proThree: new ClassAO(111, 222),
    proFour: null,
  };

  varAP.proFour = varAP;
  outBD.innerHTML += '<br >varAP.proFour.proThree.proOne : ' + varAP.proFour.proThree.proOne;
  outBD.innerHTML += '<br >varAP.proFour.proThree.proTwo : ' + varAP.proFour.proThree.proTwo;
  outBD.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// object implements | iterable

function ExDB() {
  // object | object-constructor can not hoisted
  // var varALhost = new VarAL(varAK);
  // var varAMhost = new VarAM();
  // outBD.innerHTML += '<br >varAK.proOne : ' + varAK.proOne;
  // outBD.innerHTML += '<br >varALhost.method : ' + varALhost.method();
  // outBD.innerHTML += '<br >varAMhost.method : ' + varAMhost.method();
  // outBD.innerHTML += '<br >';

  var varAK = {
    proOne: null,
    proTwo: null,
  };

  var VarAL = function () {
    this.proOne = arguments[0];
    this.method = function () {
      outBD.innerHTML += '<br >proOne.proOne : ' + this.proOne.proOne;
      outBD.innerHTML += '<br >proOne.proTwo : ' + this.proOne.proTwo;
    };
  };

  var VarAM = function () {
    this.proOne = varAK;
    this.proTwo = new VarAL(varAK);
    this.method = function () {
      this.proOne.proOne = 10;
      this.proOne.proTwo = 20;
      this.proTwo.method();
    };
  };

  varAK.proOne = 11;
  varAK.proTwo = 22;
  outBD.innerHTML += '<br >varAK.proOne : ' + varAK.proOne;
  outBD.innerHTML += '<br >varAK.proTwo : ' + varAK.proTwo;

  var varAL = new VarAL(varAK);
  varAL.method();

  var varAM = new VarAM();
  varAM.method();
  outBD.innerHTML += '<br >';

  // ---------------------------------------------------------------------------

  // argument-return and reference as object
  const constAA = function (arg) {
    arg.proOne = 111;
    arg.proTwo = 222;
    return arg;
  };

  outBD.innerHTML += '<br >conatAA(varAK).proOne (return) : ' + constAA(varAK).proOne;
  outBD.innerHTML += '<br >conatAA(varAK).proTwo (return) : ' + constAA(varAK).proTwo;
  outBD.innerHTML += '<br >varAK.proOne (reference)       : ' + varAK.proOne;
  outBD.innerHTML += '<br >varAK.proTwo (reference)       : ' + varAK.proTwo;
  outBD.innerHTML += '<br >';

  // arguments-return and reference as object-constructor
  const constAB = function () {
    var local = new VarAL(varAK);
    local.proOne.proOne = 110;
    local.proOne.proTwo = 220;
    return local;
  };

  constAB();
  outBD.innerHTML += '<br >varAK.proOne   : ' + varAK.proOne;
  outBD.innerHTML += '<br >varAK.proTwo   : ' + varAK.proTwo;
  outBD.innerHTML += '<br >constAB.method : ' + constAB().proOne.proOne;
  outBD.innerHTML += '<br >constAB.method : ' + constAB().proOne.proTwo;

  // here, the (constAB) expression returning object but object-method not returning
  constAB().method();
  outBD.innerHTML += '<br >';

  // ---------------------------------------------------------------------------

  var varArray = [1, 2, 3];
  var varString = 'string';

  for (var i = 0; i < varArray.length; i++)
    outBD.innerHTML += '<br >varArray[' + i + '] : ' + varArray[i];

  for (var i = 0; i < varString.length; i++)
    outBD.innerHTML += '<br >varString[' + i + '] : ' + varString[i];

  // home made iterable
  var VarObject = function () {
    var n = arguments[0];
    return {
      method: function () {
        n++;
        return { value: n };
      },
    };
  };

  var constructor = new VarObject(10);
  outBD.innerHTML += '<br >constructor.method.value : ' + constructor.method().value;
  outBD.innerHTML += '<br >constructor.method.value : ' + constructor.method().value;
  outBD.innerHTML += '<br >constructor.method.value : ' + constructor.method().value;
  outBD.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// class syntax and using class | class constructor | class methods
// class inheritance | multi-inheritance | chain-inheritance
// class hosting
// static keyword (methods)
// -> static-property and global-property with inheritance (syntax)
// -> getters and setters in class with inheritance and static/global (manipulate)

function ExDC() {
  class ClassBA {
    constructor() {
      this.proOne = arguments[0];
      this.proTwo = arguments[1];
    }

    printValue() {
      outBD.innerHTML += '<br >classBA.proOne : ' + this.proOne;
      outBD.innerHTML += '<br >classBA.proTwo : ' + this.proTwo;
    }
  }

  var varBA = new ClassBA(11, 22);
  varBA.printValue();

  class ClassBB {
    setValue() {
      this.proOne = arguments[0];
      this.proTwo = arguments[1];
    }

    printValue() {
      outBD.innerHTML += '<br >classBB.proOne : ' + this.proOne;
      outBD.innerHTML += '<br >classBB.proTwo : ' + this.proTwo;
    }
  }

  var varBB = new ClassBB();
  varBB.setValue(11, 22);
  varBB.printValue();

  // ---------------------------------------------------------------------------
  // inheritance

  class ClassInheritBA extends ClassBA {
    constructor() {
      super(arguments[0], arguments[1]);
      this.proThree = arguments[2];
    }

    calculate() {
      var result = this.proOne + this.proTwo + this.proThree;
      return result;
    }

    print() {
      this.printValue();
      outBD.innerHTML += '<br >classInheritBA.proThree : ' + this.proThree;
      outBD.innerHTML += '<br >proOne + proTwo + proThree : ' + this.calculate();
    }
  }

  var varInheritBA = new ClassInheritBA(11, 22, 33);
  varInheritBA.print();

  class ClassInheritBB extends ClassBA {
    setValue() {
      this.proThree = arguments[0];
    }

    print() {
      this.printValue();
      outBD.innerHTML += '<br >classInheritBB.proThree : ' + this.proThree;
    }
  }

  var varInheritBB = new ClassInheritBB(10, 20);
  varInheritBB.setValue(30);
  varInheritBB.print();

  class ClassInheritBC extends ClassBB {
    constructor() {
      super();
      this.setValue(arguments[0], arguments[1]);
      this.proThree = arguments[2];
    }

    print() {
      this.printValue();
      outBD.innerHTML += '<br >classInheritBC.proThree : ' + this.proThree;
    }
  }

  var varInheritBC = new ClassInheritBC(111, 222, 333);
  varInheritBC.print();

  class ClassInheritBD extends ClassBB {
    print() {
      this.setValue(arguments[0], arguments[1]);
      this.proThree = arguments[2];
      this.printValue();
      outBD.innerHTML += '<br >classInheritBD.proThree : ' + this.proThree;
    }
  }

  var varInheritBD = new ClassInheritBD();
  varInheritBD.print(100, 200, 300);
  outBD.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // class-static keyword | class-static-property | class-global-property | class inheritance
  // static properties and method can access (inside/outside) class using (className)
  // -> not (objectName / this)
  // static global-property can call with (className / this) inside (static method)
  // using (#) character before (global or static-global) property is (private) and
  // -> can not use outside the (class defination)

  class ClassCA {
    constructor() {
      outBD.innerHTML += '<br >classCA-constructor ';
    }

    methodOne() {
      outBD.innerHTML += '<br >classCA-method';
    }

    // static method
    static methodTwo() {
      outBD.innerHTML += '<br >classCA-static-method';
    }
  }

  var varCA = new ClassCA();
  varCA.methodOne();
  ClassCA.methodTwo();

  class ClassCB {
    proOne = 10;          // public global-field (not good practice)
    static proTwo = 20;   // public static-filed (not good practice)
    #proThree = 30;       // private global-field (not good practice)
    static #proFour = 40; // private static-filed (not good practice)

    methodOne() {
      outBD.innerHTML += '<br >classCB-method (proOne)    : ' + this.proOne;
      outBD.innerHTML += '<br >classCB-method (proTwo)-   : ' + ClassCB.proTwo;
      outBD.innerHTML += '<br >classCB-method (proThree)  : ' + this.#proThree;
      outBD.innerHTML += '<br >classCB-method (proFour)   : ' + ClassCB.#proFour;
      outBD.innerHTML += '<br >ClassCB.calculate(100, 200): ' + ClassCB.calculate(100, 200);
    }

    static calculate() {
      this.proOne = arguments[0];
      ClassCB.proTwo = arguments[1];
      if (this.proOne < ClassCB.proTwo) return this.proOne + ClassCB.proTwo;
      else return this.proOne - this.proTwo;
    }
  }

  var varCB = new ClassCB();
  varCB.methodOne();
  outBD.innerHTML += '<br >object.global-proOne   : ' + varCB.proOne;
  outBD.innerHTML += '<br >class.static.proTwo   : ' + ClassCB.proTwo;

  // global property must accessed through (object)
  // outBD.innerHTML += '<br >global-proOne- : ' + this.proOne;

  // private field cannot access through object
  // outBD.innerHTML += '<br >proThree : ' + varCB.#proThree;
  // outBD.innerHTML += '<br >proFour  : ' + ClassCB.#proFour;

  outBD.innerHTML += '<br >ClassCB.calculate(22, 11)- : ' + ClassCB.calculate(22, 11);
  outBD.innerHTML += '<br >';

  // inheritance and static without constructor
  // drived class can not access (base private property)
  class ClassCC extends ClassCB {
    showValue() {
      outBD.innerHTML += '<br >drived without constructor ...';
      outBD.innerHTML += '<br >ClassCB-global-proOne    : ' + this.proOne;
      outBD.innerHTML += '<br >ClassCB-static-proTwo    : ' + ClassCC.proTwo;

      // outBD.innerHTML += '<br >ClassCB-private-proThree : ' + this.#proThree;
      // outBD.innerHTML += '<br >ClassCB-private-proFour  : ' + ClassCB.#proFour;
      outBD.innerHTML += '<br >ClassCB-static-calculate  : ' + ClassCC.calculate(10, 20);
    }
  }

  var varCC = new ClassCC();
  varCC.showValue();

  // inheritance and static with constructor
  // super is required to access (global-property) if declaring constructor or base class
  class ClassCD extends ClassCB {
    constructor() {
      super();
      outBD.innerHTML += '<br >drived with constructor ...';
      outBD.innerHTML += '<br >ClassCB-global-proOne    : ' + this.proOne;
      outBD.innerHTML += '<br >ClassCB-static-proTwo    : ' + ClassCC.proTwo;

      // outBD.innerHTML += '<br >ClassCB-private-proThree : ' + this.#proThree;
      // outBD.innerHTML += '<br >ClassCB-private-proFour  : ' + ClassCB.#proFour;
      outBD.innerHTML += '<br >ClassCB-static-calculate  : ' + ClassCC.calculate(10, 20);
    }
  }

  var varCD = new ClassCD();
  outBD.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // set-get and class and inheritance

  class ClassCE {
    set getSet(arg) {
      this.proOne = arg.valueOne;
      this.proTwo = arg.valueTwo;
    }
    get getSet() {
      outBD.innerHTML += '<br >proOne : ' + this.proOne;
      outBD.innerHTML += '<br >proTwo : ' + this.proTwo;
    }
  }

  var varCE = new ClassCE();
  varCE.getSet = { valueOne: 11, valueTwo: 22 };
  varCE.getSet;

  class ClassCF extends ClassCE {
    setProperty() {
      this.getSet = { valueOne: arguments[0], valueTwo: arguments[1] };
      this.proThree = arguments[2];
      this.proFour = arguments[3];
    }
    showValue() {
      this.getSet;
      outBD.innerHTML += '<br >proThree : ' + this.proThree;
      outBD.innerHTML += '<br >proFour  : ' + this.proFour;
    }
  }

  var varCF = new ClassCF();
  varCF.setProperty(10, 20, 30, 40);
  varCF.showValue();

  class ClassCG extends ClassCF {
    constructor() {
      super();
      this.setProperty(arguments[0], arguments[1], arguments[2], arguments[3]);
      this.showValue();
    }
  }

  var varCG = new ClassCG(1, 2, 3, 4);
  outBD.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// ES5 object-methods

function ExDD() {
  var varAA = {
    proOne: null,
    proTwo: null,
    set setGet(arg) {
      this.proOne = arg.valueOne;
      this.proTwo = arg.valueTwo;
    },
    method: function () {
      return this.proOne + this.proTwo;
    },
  };

  // defineProperty - ES5 method
  // - to add new property and change property value
  // - set property attribute
  Object.defineProperty(varAA, 'setGet', {
    get: function () {
      return (this.proOne - this.proTwo);
    }
  });

  // literal add new property and set value
  varAA.proThree = varAA.setGet;

  // defineProperty - ES5 method
  Object.defineProperty(varAA, 'methodTwo', {
    value: function () {
      return this.method() + this.proThree;
    }
  });

  // literal add new method
  varAA.methodThree = function () {
    outBD.innerHTML += '<br >varAA.proOne    : ' + this.proOne;
    outBD.innerHTML += '<br >varAA.proTwo    : ' + this.proTwo;
    outBD.innerHTML += '<br >varAA.proThree  : ' + this.proThree;
    outBD.innerHTML += '<br >varAA.methodTwo : ' + this.methodTwo();
  }

  // defineProperties - ES5 method - add and modify object-properties
  // and set attributes
  Object.defineProperties(varAA, {
    proFour: { value: null, writable: true },
    proFive: { value: null, writable: true },
    methodFour: {
      value: function () {
        this.proFour = arguments[0];
        this.proFive = arguments[1];
        return this.proFour - this.proFive;
      }
    },
    getSet: {
      set: function (arg) {
        this.proFour = arg.valueOne;
        this.proFive = arg.valueTwo;
      },
      get: function () {
        return this.proFour + this.proFive;
      },
    },
  });

  varAA.setGet = { valueOne: 11, valueTwo: 22 };
  varAA.methodThree();
  outBD.innerHTML += '<br >varAA.methodFour : ' + varAA.methodFour(10, 20);
  varAA.getSet = { valueOne: 111, valueTwo: 222 };
  outBD.innerHTML += '<br >varAA.getSet : ' + varAA.getSet;
  outBD.innerHTML += '<br >';

  // ---------------------------------------------------------------------------

  // create - ES5 method - create new object
  var varAB = Object.create({
    proOne: null,
    proTwo: null,
    method: function () {
      outBD.innerHTML += '<br >varAB.proOne : ' + this.proOne;
      outBD.innerHTML += '<br >varAB.proTwo : ' + this.proTwo;
      outBD.innerHTML += '<br >varAB.setGet : ' + this.setGet;
    },
    set setGet(arg) {
      this.proOne = arg.valueOne;
      this.proTwo = arg.valueTwo;
    },
    get setGet() {
      return this.proOne + this.proTwo;
    },
  });

  // getOwnPropertyDescriptor and getPrototypeOf - ES5 methods
  outBD.innerHTML += '<br >varAB : ' + Object.getOwnPropertyDescriptor(varAB, 'proOne');
  outBD.innerHTML += '<br >varAB : ' + Object.getPrototypeOf(varAB);
  outBD.innerHTML += '<br >';

  // isExtensible | isSealed | isFrozen - ES5 methods
  outBD.innerHTML += '<br >varAB (extensible) : ' + Object.isExtensible(varAB);
  outBD.innerHTML += '<br >varAB (sealed)     : ' + Object.isSealed(varAB);
  outBD.innerHTML += '<br >varAB (frozen)     : ' + Object.isFrozen(varAB);
  outBD.innerHTML += '<br >';

  // changing properties
  varAB.setGet = { valueOne: 11, valueTwo: 22 };
  varAB.method();
  outBD.innerHTML += '<br >';

  varAB.proThree = 33;
  Object.defineProperty(varAB, 'proFour', { value: 44, enumerable: true });
  Object.defineProperty(varAB, 'proThree', { enumerable: false });
  varAB.methodOne = function () {
    outBD.innerHTML += '<br >varAB.proOne : ' + varAB.proOne;
    outBD.innerHTML += '<br >varAB.proTwo : ' + varAB.proTwo;
    outBD.innerHTML += '<br >varAB.proThree : ' + varAB.proThree;
    outBD.innerHTML += '<br >varAB.proFour : ' + varAB.proFour;
  }

  Object.defineProperty(varAB, 'method', { enumerable: false });
  Object.defineProperty(varAB, 'setGet', { enumerable: false });

  // getOwnPropertyNames and keys - ES5 methods - to show the list of properties of object
  outBD.innerHTML += '<br >varAB : ' + Object.getOwnPropertyNames(varAB);
  outBD.innerHTML += '<br >varAB : ' + Object.keys(varAB);
  outBD.innerHTML += '<br >';

  // preventExtensions | seal | freeze
  // the (freeze) method - prevent any changes of an object event its prototype also
  Object.freeze(varAB);
  varAB.proFive = 55;     // adding new property
  devare(varAB.proFour);  // devare existing property
  varAB.proThree = 30;    // changing value
  Object.defineProperty(varAB, 'proTwo', { writable: false });  // changing configuration
  varAB.proTwo = 20;

  outBD.innerHTML += '<br >varAB : ' + Object.getOwnPropertyNames(varAB);
  outBD.innerHTML += '<br >varAB.proTwo   : ' + varAB.proTwo;
  outBD.innerHTML += '<br >varAB.proThree : ' + varAB.proThree;
  outBD.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// object and class hoisting | Sets and Maps Objects
// object display | object iterable | this keyword
// -> class and object hosting not allowed
// -> object-constructor (expression declaration) hoisting not allowed
//    though (function expression) is not hoisted (function expression as object-constructor) not hoisted
// -> object-constructor (function declaration) hoisting allowed
//    though (function declaration) is hoisted (function declaration as object-constructor) hoisted

function ExDE() {
  // var hoistAA = new ClassAA(1, 2);    // class-hoisting - not allowed
  // hostAA.valueOne();
  // varAB.method(3, 4);                 // object-hoisting - not allowed
  var hoistAC1 = new FuncAC(5, 6);       // constructor-hoisting (func-declaration)- allowed
  var hositAC2 = new FuncAC(7, 8);
  // var hosisAD1 = new VarAD(300, 400);  // constructor-hoisting (exp-declaration) - not allowed

  // ---------------------------------------------------------------------------
  class ClassAA {
    constructor(argOne, argTwo) {
      this.proOne = argOne;
      this.proTwo = argTwo;
    }

    valueOne() {
      outBD.innerHTML += '<br >proOne : ' + this.proOne;
      outBD.innerHTML += '<br >proTwo : ' + this.proTwo;
    }
  }

  // class type assigned to parameter
  function funcAA(argOne = new ClassAA(111, 222)) {
    argOne.valueOne();
  }

  var varAB = {
    proOne: null,
    proTwo: null,
    method: function () {
      this.proOne = arguments[0];
      this.proTwo = arguments[1];
      return this.proOne + this.proTwo;
    }
  };

  // ---------------------------------------------------------------------------
  // if object-constructor (declaration/expression) has return statement then
  // -> it will now return any value throught its object
  // -> but output statement will show output at the time of declaring object

  function FuncAC() {
    this.proOne = arguments[0];
    this.proTwo = arguments[1];
    outBD.innerHTML += '<br >FuncAC : ' + (this.proOne + this.proTwo);
    // return this.proOne + this.proTwo;
  }

  var VarAD = function () {
    this.proOne = arguments[0];
    this.proTwo = arguments[1];
    outBD.innerHTML += '<br >varAD : ' + (this.proOne + this.proTwo);
    // return this.proOne + this.proTwo;
  };

  // -------------------------------------------
  funcAA();
  outBD.innerHTML += '<br >varAB.method : ' + varAB.method(11, 22);
  var varAC = new FuncAC(10, 20);
  var varAD = new VarAD(100, 200);

  // -------------------------------------------
  function FuncAE() {
    this.proOne = arguments[0];
    this.proTwo = arguments[1];
    return this.proOne + this.proTwo;
  }

  var VarAF = function () {
    this.proOne = arguments[0];
    this.proTwo = arguments[1];
    return this.proOne + this.proTwo;
  };

  // -------------------------------------------
  var varAE1 = new FuncAE(true, false);
  var varAF1 = new VarAF(true, false);
  var varAE2 = new FuncAE(false, true);
  var varAF2 = new VarAF(false, true);
  outBD.innerHTML += '<br >varAE1-return : ' + varAE1;
  outBD.innerHTML += '<br >varAF1-return : ' + varAF1;
  outBD.innerHTML += '<br >varAE1.proOne : ' + varAE1.proOne;
  outBD.innerHTML += '<br >varAF1.proOne : ' + varAF1.proOne;
  outBD.innerHTML += '<br >varAE2.proTwo : ' + varAE2.proTwo;
  outBD.innerHTML += '<br >varAF2.proTwo : ' + varAF2.proTwo;

  outBD.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  var varAF = new Set([1, 2, 3]);
  for (var x of varAF) outBD.innerHTML += '<br >varAF : ' + x;
  for (var x of varAF.values()) outBD.innerHTML += '<br >varAF : ' + x;
  for (var x of varAF.keys()) outBD.innerHTML += '<br >varAF : ' + x;
  for (var x of varAF.entries()) outBD.innerHTML += '<br >varAF : ' + x;
  for (var [x, y] of varAF.entries()) outBD.innerHTML += '<br >varAF : ' + x + ' > ' + y;
  outBD.innerHTML += '<br >';

  var varAG = new Map([
    [1, 'a'],
    [2, 'b'],
    [3, 'c'],
  ]);
  for (var x of varAG) outBD.innerHTML += '<br >varAG : ' + x;
  for (var x of varAG.values()) outBD.innerHTML += '<br >varAG : ' + x;
  for (var x of varAG.keys()) outBD.innerHTML += '<br >varAG : ' + x;
  for (var x of varAG.entries()) outBD.innerHTML += '<br >varAG : ' + x;
  for (var [x, y] of varAG.entries()) outBD.innerHTML += '<br >varAG : ' + x + ' > ' + y;
  outBD.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// object-function manipulation
// function-declaration | function-expression | arrow-expression
// function-constructor | self-invloking | used as variable
// object-declaration | object-constructor

function ExDF() {

  // practice 01 ...............................................................
  // function defination - call as (function) and (creating object)
  function funcAA() {
    var local = arguments[0];
    outBD.innerHTML += '<br >funcAA-local : ' + local;

    const constNested = function () {
      outBD.innerHTML += '<br >constNest statement ...';
    }
  }

  function funcAB() {
    this.proOne = arguments[0];
    outBD.innerHTML += '<br >funcAB-proOne : ' + this.proOne;

    this.method = function () {
      outBD.innerHTML += '<br >method statement ...';
    }
  }

  funcAA(11);
  funcAB(22);

  var varAA = new funcAA(33);
  var varAB = new funcAB(44);

  // varAA();
  // varAB();

  outBD.innerHTML += '<br >varAA (funcAA) : ' + varAA;
  outBD.innerHTML += '<br >varAB (funcAB) : ' + varAB;

  // varAA.constNested();   // nested-function can not call through object
  varAB.method();           // nested-function as method can call through object

  outBD.innerHTML += '<br >varAA.local : ' + varAA.local;   // undefined - not an object-constructor
  outBD.innerHTML += '<br >varAB.proOne : ' + varAB.proOne;
  outBD.innerHTML += '<br >';

  // practice 02 ...............................................................
  // function expression - call as (function) and (creating object)
  // inside function or expression -
  // any (local variable or nested function) will defined as property and method
  var VarAC = function () {
    var local = arguments[0];
    outBD.innerHTML += '<br >VarAC-local : ' + local;

    function funcNested() {
      outBD.innerHTML += '<br >funcNested statement ......';
    }
  };

  var VarAD = function () {
    this.proOne = arguments[0];
    outBD.innerHTML += '<br >VarAD-proOne : ' + this.proOne;

    function methodOne() {
      outBD.innerHTML += '<br >methodOne statement ....';
    }

    this.methodTwo = function () {
      outBD.innerHTML += '<br >methodTwo statement ....';
    };
  };

  VarAC(100);
  VarAD(200);

  var varAC = new VarAC(111);
  var varAD = new VarAD(222);

  // varAD.methodOne();
  varAD.methodTwo();
  outBD.innerHTML += '<br >varAD.proOne : ' + this.proOne;
  outBD.innerHTML += '<br >';

  // practice 03 ...............................................................
  // incase of arrow-expression (this) keyword has no effect so declaring object not possible
  var VarAE = (arg) => {
    var local = arg;
    outBD.innerHTML += '<br >VarAE-arg : ' + local;

    function funcNested() {
      outBD.innerHTML += '<br >funcNested statement ...';
    }
  };

  // var VarAF = (arg) => {
  //   this.proOne = arg;
  //   outBD.innerHTML += '<br >VarAF-proOne : ' + proOne;
  //
  //   this.method() {
  //     outBD.innerHTML += '<br >method statement ...';
  //   };
  // };

  VarAE(1);
  // VarAF(2);

  // var varAE = new VarAE(3);
  // var varAF = new VarAF(4);
  //
  // varAE.funcNested();
  // varAF.method();
  // outBD.innerHTML += '<br >varAF.proOne : ' + varAF.proOne;
  outBD.innerHTML += '<br >';

  // practice 04 ...............................................................
  var varAG = new Function('argOne', 'return argOne');
  outBD.innerHTML += '<br >varAG : ' + varAG(111);
  outBD.innerHTML += '<br >';

  // practice 05 ...............................................................
  var varAH = (function () {
    var local = arguments[0];
    outBD.innerHTML += '<br >varAH : ' + local;

    function funcNested() {
      outBD.innerHTML += '<br >funcNested statement ...';
    }

    funcNested();
  })(11);

  var VarAI = (function () {
    this.proOne = arguments[0];
    outBD.innerHTML += '<br >varAI : ' + this.proOne;

    this.method = (function () {
      outBD.innerHTML += '<br >method statement ...';
    })();
  })(22);

  outBD.innerHTML += '<br >';

  // practice 06 ...............................................................
  // home made iterator - function return object-method - return object-property
  // function-expression creates an object, that returns an object (has a method)
  // -> method returns and object (has a property)

  var VarAJ = function () {
    this.proOne = arguments[0];
    var local = arguments[0];
    return {
      method: function () {
        this.proOne++;
        local++;
        return { valuePro: this.proOne, valueLocal: local };
      },
    };
  };

  var varAJ = new VarAJ(10, 11);
  outBD.innerHTML += '<br >varAJ.method().valuePro   : ' + varAJ.method().valuePro;
  outBD.innerHTML += '<br >varAJ.method().valuePro   : ' + varAJ.method().valuePro;
  outBD.innerHTML += '<br >varAJ.method().valueLocal : ' + varAJ.method().valueLocal;
  outBD.innerHTML += '<br >varAJ.method().valueLocal : ' + varAJ.method().valueLocal;
  outBD.innerHTML += '<br >';

  var VarAK = function () {
    var local = arguments[0];

    function funcNested() {
      local++;
      return { value: local };
    }

    var localObject = {
      method: function () {
        local++;
        return { value: local };
      },
    };

    if (arguments[0] < 20) return new funcNested();
    else return localObject;
  };

  var varAK1 = new VarAK(10);
  outBD.innerHTML += '<br >varAK1 : ' + varAK1.value;
  outBD.innerHTML += '<br >varAK1 : ' + varAK1.value;

  var varAK2 = new VarAK(30);
  outBD.innerHTML += '<br >varAK2 : ' + varAK2.method().value;
  outBD.innerHTML += '<br >varAK2 : ' + varAK2.method().value;
  outBD.innerHTML += '<br >';

  // practice 07 ...............................................................
  // method can be (expression or arrow-expression)
  // method-expression can define (this) but (method-arrow) cannot define (this)

  var VarAL = function () {
    this.proOne = arguments[0];
    this.method = (arg) => {
      this.proOne += arg;
      outBD.innerHTML += '<br >VarAL-proOne : ' + this.proOne;
    };
    this.methodOne = (() => {
      outBD.innerHTML += '<br >arrow-method self-invoke';
    })();
  };

  var varAL1 = new VarAL(100);
  varAL1.method(20);
  varAL1.method(30);
  var varAL2 = new VarAL(200);
  varAL2.method(11);
  varAL2.method(22);
  outBD.innerHTML += '<br >';

  var varAM = {
    proOne: null,
    proTwo: null,
    method: function (arg) {
      this.proOne += arg;
      outBD.innerHTML += '<br >varAM-proOne : ' + this.proOne;
    },

    methodTwo: (arg) => {
      this.proTwo += arg;
      outBD.innerHTML += '<br >varAM-proTwo : ' + this.proTwo;
    }
  };

  varAM.method(11);
  varAM.methodTwo(11);
  outBD.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// class-function manipulation
// class-method cannot hold any nested method

function ExDG() {
  class ClassAA {
    constructor() {
      this.proOne = arguments[0];
      this.proTwo = arguments[1];
    }
    method() {
      // var print = function () {
      //   outBD.innerHTML += '<br >classAA-proOne : ' + this.proOne;
      //   outBD.innerHTML += '<br >classAA-proTwo : ' + this.proTwo;
      //   outBD.innerHTML += '<br >classAA-method : ' + this.method();
      // }
      //
      // print();
      return this.proOne + this.proTwo;
    }
    print() {
      outBD.innerHTML += '<br >proOne : ' + this.proOne;
      outBD.innerHTML += '<br >proTwo : ' + this.proTwo;
      outBD.innerHTML += '<br >method : ' + this.method();
    }
  }

  var varAA = new ClassAA(11, 22);
  var varAB = new ClassAA(10, 20);
  varAA.print();
  varAB.print();
  // varAA.method();
  outBD.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // nested (method / func-expression / func-defination) for (object allowed / class disallowed)

  var varAC = {
    proOne: null,
    method: function () {
      this.proOne = arguments[0];
      outBD.innerHTML += '<br >proOne : ' + this.proOne;
      this.methodNested = function () {
        outBD.innerHTML += '<br >statement of nested-method : ' + this.proOne;
      };
      var nestedExpre = function () {
        outBD.innerHTML += '<br >statement of nested-expre : ' + this.proOne;
      };
      nestedExpre();
    },
  };

  varAC.method(11);
  varAC.methodNested();
  outBD.innerHTML += '<br >';

  class ClassAD {
    constructor() {
      this.proOne = arguments[0];
    }
    method() {
      outBD.innerHTML += '<br >proOne : ' + this.proOne;
      this.methodNested = function () {
        outBD.innerHTML += '<br >statement of nested-method : ' + this.proOne;
      };
      // var nestedExpre = function () {
      //   outBD.innerHTML += '<br >statement of nested-expre : ' + this.proOne;
      // };
      // nestedExpre();
    }
  }

  var varAD = new ClassAD(10);
  varAD.method();
  varAD.methodNested();
  outBD.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // class method can not be an (func-defination/expression/arrow event property) syntax
  class ClassAE {
    // (method() {
    //   outBD.innerHTML += '<br >classAE-method statement';
    //   outBD.innerHTML += '<br >proOne : ' + this.proOne;
    // })();

    // proOne =
    // () => {
    //   return '<br >classAE-arrow statement';
    // };
  }

  var varAE = new ClassAE();
  outBD.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
outBD.innerHTML += 'ex-da : object review';
outBD.innerHTML += '<hr >'; ExDA();
outBD.innerHTML += '<br >ex-db : object implement';
outBD.innerHTML += '<hr >'; ExDB();
outBD.innerHTML += '<br >ex-dc : class review';
outBD.innerHTML += '<hr >'; ExDC();
outBD.innerHTML += '<br >ex-dd : ES5 object-method';
outBD.innerHTML += '<hr >'; ExDD();
outBD.innerHTML += '<br >ex-de : Sets and Maps objects | object display | object iterable';
outBD.innerHTML += '<hr >'; ExDE();
outBD.innerHTML += '<br >ex-df : object-function manipulation';
outBD.innerHTML += '<hr >'; ExDF();
outBD.innerHTML += '<br >ex-dg : class-function manipulation';
outBD.innerHTML += '<hr >'; ExDG();
