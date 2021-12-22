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
// 3. adding properties and deleting properties
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
// -> 23. javascript iterable (concept incomplete)
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
// -> 29. static-property and global-property with inheritance (syntax incomplete)
// -> 30. getters and setters in class with inheritance and static/global (manipulate incomplete)
// 31. class hosting
//
// # object Sets()
// 32. javascript sets | how to create a set | sets are objects
// 33. set methods & (add | forEach | values | key | entries)
// 34. size | has | delete | clear
//
// # object Maps()
// 35. javascript Maps | how to create a map | maps are objects
// 36. map methods & (set | get | clear | has | size | delete)
// 37. forEach | keys | values | entries
// 38. javascript object vs maps | object as keys
//
// # object references
// 39. ES5 object methods (managing objects)
//     Object | Object.defineProperty | Object.defineProperties
// 40. ES5 object methods (accessing objects)
//     Object.getOwnPropertyNames | Object.keys
//     -> Object.getOwnPropertyDescriptor | Object.getPrototypeOf (incomplete)
// 41. ES5 object methods (protecting objects)
//     Object.preventExtensions | Object.seal | Object.freeze
//     Object.isExtensible | Object.isSealed | Object.isFrozen
// 42. objec property attributes
//     value | writable
//     configurable | enumerable

////////////////////////////////////////////////////////////////////////////////
let outBD = document.createElement('div');
outBD.setAttribute('id', 'styleTwo');
document.body.appendChild(outBD);

////////////////////////////////////////////////////////////////////////////////
// object defination | properties (attribute) | properties (method)
// object accessors | object constructor | object prototype

function ExDA() {
  let letAA = {
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
      outBD.innerHTML += '<br >letAA.proOne    : ' + this.proOne;
      outBD.innerHTML += '<br >letAA.proTwo    : ' + this.proTwo;
      outBD.innerHTML += '<br >proOne + proTwo : ' + this.method();
    },
  };

  letAA.setGet = { valueOne: 11, valueTwo: 22 };
  letAA.setGet;
  outBD.innerHTML += '<br >';

  // ---------------------------------------------------------------------------

  letAB = { };
  letAB.proOne = 10;
  letAB.proTwo = 20;
  letAB.method = function () {
    outBD.innerHTML += '<br >proOne + proTwo : ' + (this.proOne + this.proTwo);
  };

  letAB.method();
  delete(letAB.proOne);
  letAB.method();
  letAB.method;
  letAB['proOne'] = 30;
  letAB.method();
  outBD.innerHTML += '<br >';

  // ---------------------------------------------------------------------------

  let letAC = new Object({});
  let letAD = Object.create({});  // using second-brackets inside parentheses is required

  letAC.proOne = null;
  letAC.proTwo = null;
  letAC.method = function () {
    this.proOne = arguments[0];
    this.proTwo = arguments[1];
    outBD.innerHTML += '<br >proOne + proTwo : ' + (this.proOne + this.proTwo);
  };

  letAD.proOne = null;
  letAD.proTwo = null;
  letAD.method = function () {
    this.proOne = arguments[0];
    this.proTwo = arguments[1];
    outBD.innerHTML += '<br >proOne + proTwo : ' + (this.proOne + this.proTwo);
  };

  let letAE = new Object({
    proOne: 10,
    proTwo: 20,
    method: function () {
      outBD.innerHTML += '<br >proOne + proTwo : ' + (this.proOne + this.proTwo);
    },
  });

  let letAF = Object.create({
    proOne: 11,
    proTwo: 22,
    method: function () {
      outBD.innerHTML += '<br >proOne + proTwo : ' + (this.proOne + this.proTwo);
    },
  });

  letAC.method(11, 22);
  letAD.method(33, 44);
  letAE.method();
  letAF.method();
  outBD.innerHTML += '<br >';

  // ---------------------------------------------------------------------------

  let LetAG = function () {
    this.proOne = arguments[0];
    this.proTwo = arguments[1];
    this.method = function () {
      return this.proOne + this.proTwo;
    };
  };

  let letAG1 = new LetAG(11, 22);
  let letAG2 = new LetAG(33, 44);
  outBD.innerHTML += '<br >letAG1.method : ' + letAG1.method();
  outBD.innerHTML += '<br >letAG2.method : ' + letAG2.method();
  outBD.innerHTML += '<br >';

  letAG1.methodTwo = function () {
    return (this.proOne - this.proTwo);
  };

  letAG2.methodTwo = function () {
    return (this.proTwo - this.proOne);
  };

  outBD.innerHTML += '<br >letAG1.methodTwo : ' + letAG1.methodTwo();
  outBD.innerHTML += '<br >letAG2.methodTwo : ' + letAG2.methodTwo();

  // after defining additional prototype property, value will be defined at declaration is constant
  // it will not assignable through the constructor arguments
  LetAG.prototype.proThree = 10;
  LetAG.prototype.printValue = function () {
    outBD.innerHTML += '<br > LetAG.proOne   : ' + this.proOne;
    outBD.innerHTML += '<br > LetAG.proTwo   : ' + this.proTwo;
    outBD.innerHTML += '<br > LetAG.proThree : ' + this.proThree;
  };

  let letAG3 = new LetAG(10, 20, 30);
  letAG3.printValue();
  outBD.innerHTML += '<br >';

  // ---------------------------------------------------------------------------

  let letAH = {
    proOne: [1, 2, 3],
    proTwo: {
      nstOne: 10,
      nstTwo: 20,
    },
  };

  let LetAI = function () {
    this.proOne = letAH;
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

  let letAI = new LetAI();
  let letAJ = letAI;    // objects are mutable
  letAI.method();
  letAJ.method();
  outBD.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // self-referencing object and constructor and class
  // self-reference must assign later after defining object
  // in-case of self-referencing use (var) instead of (let) for (object)
  // -> but we can assign (self-reference) value later, if object defined with (let)

  let letAK = {
    proOne: 11,
    proTwo: 22,
  }

  let letAL = {
    proThree: letAK,
    proFour: null,
  }

  // letAL.proThree = letAK;
  letAL.proFour = letAL;

  outBD.innerHTML += '<br >letAL.proThree.proOne : ' + letAL.proThree.proOne;
  outBD.innerHTML += '<br >letAL.proThree.proTwo : ' + letAL.proThree.proTwo;
  outBD.innerHTML += '<br >letAL.proFour.proThree.proOne : ' + letAL.proFour.proThree.proOne;
  outBD.innerHTML += '<br >letAL.proFour.proThree.proTwo : ' + letAL.proFour.proThree.proTwo;
  outBD.innerHTML += '<br >';

  let LetAM = function () {
    this.proOne = arguments[0];
    this.proTwo = arguments[1];
  };

  let letAN = {
    proThree: new LetAM(10, 20),
    proFour: null,
  };

  letAN.proFour = letAN;
  outBD.innerHTML += '<br >letAN.proFour.proThree.proOne : ' + letAN.proFour.proThree.proOne;
  outBD.innerHTML += '<br >letAN.proFour.proThree.proTwo : ' + letAN.proFour.proThree.proTwo;
  outBD.innerHTML += '<br >';

  class ClassAO {
    constructor() {
      this.proOne = arguments[0];
      this.proTwo = arguments[1];
    }
  }

  let letAP = {
    proThree: new ClassAO(111, 222),
    proFour: null,
  };

  letAP.proFour = letAP;
  outBD.innerHTML += '<br >letAP.proFour.proThree.proOne : ' + letAP.proFour.proThree.proOne;
  outBD.innerHTML += '<br >letAP.proFour.proThree.proTwo : ' + letAP.proFour.proThree.proTwo;
  outBD.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// object implements | iterable

function ExDB() {
  // object | object-constructor can not hoisted
  // let letALhost = new LetAL(letAK);
  // let letAMhost = new LetAM();
  // outBD.innerHTML += '<br >letAK.proOne : ' + letAK.proOne;
  // outBD.innerHTML += '<br >letALhost.method : ' + letALhost.method();
  // outBD.innerHTML += '<br >letAMhost.method : ' + letAMhost.method();
  // outBD.innerHTML += '<br >';

  let letAK = {
    proOne: null,
    proTwo: null,
  };

  let LetAL = function () {
    this.proOne = arguments[0];
    this.method = function () {
      outBD.innerHTML += '<br >proOne.proOne : ' + this.proOne.proOne;
      outBD.innerHTML += '<br >proOne.proTwo : ' + this.proOne.proTwo;
    };
  };

  let LetAM = function () {
    this.proOne = letAK;
    this.proTwo = new LetAL(letAK);
    this.method = function () {
      this.proOne.proOne = 10;
      this.proOne.proTwo = 20;
      this.proTwo.method();
    };
  };

  letAK.proOne = 11;
  letAK.proTwo = 22;
  outBD.innerHTML += '<br >letAK.proOne : ' + letAK.proOne;
  outBD.innerHTML += '<br >letAK.proTwo : ' + letAK.proTwo;

  let letAL = new LetAL(letAK);
  letAL.method();

  let letAM = new LetAM();
  letAM.method();
  outBD.innerHTML += '<br >';

  // ---------------------------------------------------------------------------

  // argument-return and reference as object
  const constAA = function (arg) {
    arg.proOne = 111;
    arg.proTwo = 222;
    return arg;
  };

  outBD.innerHTML += '<br >conatAA(letAK).proOne (return) : ' + constAA(letAK).proOne;
  outBD.innerHTML += '<br >conatAA(letAK).proTwo (return) : ' + constAA(letAK).proTwo;
  outBD.innerHTML += '<br >letAK.proOne (reference)       : ' + letAK.proOne;
  outBD.innerHTML += '<br >letAK.proTwo (reference)       : ' + letAK.proTwo;
  outBD.innerHTML += '<br >';

  // arguments-return and reference as object-constructor
  const constAB = function () {
    let local = new LetAL(letAK);
    local.proOne.proOne = 110;
    local.proOne.proTwo = 220;
    return local;
  };

  constAB();
  outBD.innerHTML += '<br >letAK.proOne   : ' + letAK.proOne;
  outBD.innerHTML += '<br >letAK.proTwo   : ' + letAK.proTwo;
  outBD.innerHTML += '<br >constAB.method : ' + constAB().proOne.proOne;
  outBD.innerHTML += '<br >constAB.method : ' + constAB().proOne.proTwo;

  // here, the (constAB) expression returning object but object-method not returning
  constAB().method();
  outBD.innerHTML += '<br >';

  // ---------------------------------------------------------------------------

  let letArray = [1, 2, 3];
  let letString = 'string';

  for (let i = 0; i < letArray.length; i++)
    outBD.innerHTML += '<br >letArray[' + i + '] : ' + letArray[i];

  for (let i = 0; i < letString.length; i++)
    outBD.innerHTML += '<br >letString[' + i + '] : ' + letString[i];

  // home made iterable
  let LetObject = function () {
    let n = arguments[0];
    return {
      method: function () {
        n++;
        return { value: n };
      },
    };
  };

  let constructor = new LetObject(10);
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

  let letBA = new ClassBA(11, 22);
  letBA.printValue();

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

  let letBB = new ClassBB();
  letBB.setValue(11, 22);
  letBB.printValue();

  // ---------------------------------------------------------------------------
  // inheritance

  class ClassInheritBA extends ClassBA {
    constructor() {
      super(arguments[0], arguments[1]);
      this.proThree = arguments[2];
    }

    calculate() {
      let result = this.proOne + this.proTwo + this.proThree;
      return result;
    }

    print() {
      this.printValue();
      outBD.innerHTML += '<br >classInheritBA.proThree : ' + this.proThree;
      outBD.innerHTML += '<br >proOne + proTwo + proThree : ' + this.calculate();
    }
  }

  let letInheritBA = new ClassInheritBA(11, 22, 33);
  letInheritBA.print();

  class ClassInheritBB extends ClassBA {
    setValue() {
      this.proThree = arguments[0];
    }

    print() {
      this.printValue();
      outBD.innerHTML += '<br >classInheritBB.proThree : ' + this.proThree;
    }
  }

  let letInheritBB = new ClassInheritBB(10, 20);
  letInheritBB.setValue(30);
  letInheritBB.print();

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

  let letInheritBC = new ClassInheritBC(111, 222, 333);
  letInheritBC.print();

  class ClassInheritBD extends ClassBB {
    print() {
      this.setValue(arguments[0], arguments[1]);
      this.proThree = arguments[2];
      this.printValue();
      outBD.innerHTML += '<br >classInheritBD.proThree : ' + this.proThree;
    }
  }

  let letInheritBD = new ClassInheritBD();
  letInheritBD.print(100, 200, 300);
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

  let letCA = new ClassCA();
  letCA.methodOne();
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

  let letCB = new ClassCB();
  letCB.methodOne();
  outBD.innerHTML += '<br >object.global-proOne   : ' + letCB.proOne;
  outBD.innerHTML += '<br >class.static.proTwo   : ' + ClassCB.proTwo;

  // global property must accessed through (object)
  // outBD.innerHTML += '<br >global-proOne- : ' + this.proOne;

  // private field cannot access through object
  // outBD.innerHTML += '<br >proThree : ' + letCB.#proThree;
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

  let letCC = new ClassCC();
  letCC.showValue();

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

  let letCD = new ClassCD();
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

  let letCE = new ClassCE();
  letCE.getSet = { valueOne: 11, valueTwo: 22 };
  letCE.getSet;

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

  let letCF = new ClassCF();
  letCF.setProperty(10, 20, 30, 40);
  letCF.showValue();

  class ClassCG extends ClassCF {
    constructor() {
      super();
      this.setProperty(arguments[0], arguments[1], arguments[2], arguments[3]);
      this.showValue();
    }
  }

  let letCG = new ClassCG(1, 2, 3, 4);
  outBD.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// ES5 object-methods

function ExDD() {
  let letAA = {
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
  Object.defineProperty(letAA, 'setGet', {
    get: function () {
      return (this.proOne - this.proTwo);
    }
  });

  // literal add new property and set value
  letAA.proThree = letAA.setGet;

  // defineProperty - ES5 method
  Object.defineProperty(letAA, 'methodTwo', {
    value: function () {
      return this.method() + this.proThree;
    }
  });

  // literal add new method
  letAA.methodThree = function () {
    outBD.innerHTML += '<br >letAA.proOne    : ' + this.proOne;
    outBD.innerHTML += '<br >letAA.proTwo    : ' + this.proTwo;
    outBD.innerHTML += '<br >letAA.proThree  : ' + this.proThree;
    outBD.innerHTML += '<br >letAA.methodTwo : ' + this.methodTwo();
  }

  // defineProperties - ES5 method - add and modify object-properties
  // and set attributes
  Object.defineProperties(letAA, {
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

  letAA.setGet = { valueOne: 11, valueTwo: 22 };
  letAA.methodThree();
  outBD.innerHTML += '<br >letAA.methodFour : ' + letAA.methodFour(10, 20);
  letAA.getSet = { valueOne: 111, valueTwo: 222 };
  outBD.innerHTML += '<br >letAA.getSet : ' + letAA.getSet;
  outBD.innerHTML += '<br >';

  // ---------------------------------------------------------------------------

  // create - ES5 method - create new object
  let letAB = Object.create({
    proOne: null,
    proTwo: null,
    method: function () {
      outBD.innerHTML += '<br >letAB.proOne : ' + this.proOne;
      outBD.innerHTML += '<br >letAB.proTwo : ' + this.proTwo;
      outBD.innerHTML += '<br >letAB.setGet : ' + this.setGet;
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
  outBD.innerHTML += '<br >letAB : ' + Object.getOwnPropertyDescriptor(letAB, 'proOne');
  outBD.innerHTML += '<br >letAB : ' + Object.getPrototypeOf(letAB);
  outBD.innerHTML += '<br >';

  // isExtensible | isSealed | isFrozen - ES5 methods
  outBD.innerHTML += '<br >letAB (extensible) : ' + Object.isExtensible(letAB);
  outBD.innerHTML += '<br >letAB (sealed)     : ' + Object.isSealed(letAB);
  outBD.innerHTML += '<br >letAB (frozen)     : ' + Object.isFrozen(letAB);
  outBD.innerHTML += '<br >';

  // changing properties
  letAB.setGet = { valueOne: 11, valueTwo: 22 };
  letAB.method();
  outBD.innerHTML += '<br >';

  letAB.proThree = 33;
  Object.defineProperty(letAB, 'proFour', { value: 44, enumerable: true });
  Object.defineProperty(letAB, 'proThree', { enumerable: false });
  letAB.methodOne = function () {
    outBD.innerHTML += '<br >letAB.proOne : ' + letAB.proOne;
    outBD.innerHTML += '<br >letAB.proTwo : ' + letAB.proTwo;
    outBD.innerHTML += '<br >letAB.proThree : ' + letAB.proThree;
    outBD.innerHTML += '<br >letAB.proFour : ' + letAB.proFour;
  }

  Object.defineProperty(letAB, 'method', { enumerable: false });
  Object.defineProperty(letAB, 'setGet', { enumerable: false });

  // getOwnPropertyNames and keys - ES5 methods - to show the list of properties of object
  outBD.innerHTML += '<br >letAB : ' + Object.getOwnPropertyNames(letAB);
  outBD.innerHTML += '<br >letAB : ' + Object.keys(letAB);
  outBD.innerHTML += '<br >';

  // preventExtensions | seal | freeze
  // the (freeze) method - prevent any changes of an object event its prototype also
  Object.freeze(letAB);
  letAB.proFive = 55;     // adding new property
  delete(letAB.proFour);  // delete existing property
  letAB.proThree = 30;    // changing value
  Object.defineProperty(letAB, 'proTwo', { writable: false });  // changing configuration
  letAB.proTwo = 20;

  outBD.innerHTML += '<br >letAB : ' + Object.getOwnPropertyNames(letAB);
  outBD.innerHTML += '<br >letAB.proTwo   : ' + letAB.proTwo;
  outBD.innerHTML += '<br >letAB.proThree : ' + letAB.proThree;
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
  // let hoistAA = new ClassAA(1, 2);    // class-hoisting - not allowed
  // hostAA.valueOne();
  // letAB.method(3, 4);                 // object-hoisting - not allowed
  let hoistAC1 = new FuncAC(5, 6);       // constructor-hoisting (func-declaration)- allowed
  let hositAC2 = new FuncAC(7, 8);
  // let hosisAD1 = new LetAD(300, 400);  // constructor-hoisting (exp-declaration) - not allowed

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

  let letAB = {
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

  let LetAD = function () {
    this.proOne = arguments[0];
    this.proTwo = arguments[1];
    outBD.innerHTML += '<br >letAD : ' + (this.proOne + this.proTwo);
    // return this.proOne + this.proTwo;
  };

  // -------------------------------------------
  funcAA();
  outBD.innerHTML += '<br >letAB.method : ' + letAB.method(11, 22);
  let letAC = new FuncAC(10, 20);
  let letAD = new LetAD(100, 200);

  // -------------------------------------------
  function FuncAE() {
    this.proOne = arguments[0];
    this.proTwo = arguments[1];
    return this.proOne + this.proTwo;
  }

  let LetAF = function () {
    this.proOne = arguments[0];
    this.proTwo = arguments[1];
    return this.proOne + this.proTwo;
  };

  // -------------------------------------------
  let letAE1 = new FuncAE(true, false);
  let letAF1 = new LetAF(true, false);
  let letAE2 = new FuncAE(false, true);
  let letAF2 = new LetAF(false, true);
  outBD.innerHTML += '<br >letAE1-return : ' + letAE1;
  outBD.innerHTML += '<br >letAF1-return : ' + letAF1;
  outBD.innerHTML += '<br >letAE1.proOne : ' + letAE1.proOne;
  outBD.innerHTML += '<br >letAF1.proOne : ' + letAF1.proOne;
  outBD.innerHTML += '<br >letAE2.proTwo : ' + letAE2.proTwo;
  outBD.innerHTML += '<br >letAF2.proTwo : ' + letAF2.proTwo;

  outBD.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  let letAF = new Set([1, 2, 3]);
  for (let x of letAF) outBD.innerHTML += '<br >letAF : ' + x;
  for (let x of letAF.values()) outBD.innerHTML += '<br >letAF : ' + x;
  for (let x of letAF.keys()) outBD.innerHTML += '<br >letAF : ' + x;
  for (let x of letAF.entries()) outBD.innerHTML += '<br >letAF : ' + x;
  for (let [x, y] of letAF.entries()) outBD.innerHTML += '<br >letAF : ' + x + ' > ' + y;
  outBD.innerHTML += '<br >';

  let letAG = new Map([
    [1, 'a'],
    [2, 'b'],
    [3, 'c'],
  ]);
  for (let x of letAG) outBD.innerHTML += '<br >letAG : ' + x;
  for (let x of letAG.values()) outBD.innerHTML += '<br >letAG : ' + x;
  for (let x of letAG.keys()) outBD.innerHTML += '<br >letAG : ' + x;
  for (let x of letAG.entries()) outBD.innerHTML += '<br >letAG : ' + x;
  for (let [x, y] of letAG.entries()) outBD.innerHTML += '<br >letAG : ' + x + ' > ' + y;
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
    let local = arguments[0];
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

  let letAA = new funcAA(33);
  let letAB = new funcAB(44);

  // letAA();
  // letAB();

  outBD.innerHTML += '<br >letAA (funcAA) : ' + letAA;
  outBD.innerHTML += '<br >letAB (funcAB) : ' + letAB;

  // letAA.constNested();   // nested-function can not call through object
  letAB.method();           // nested-function as method can call through object

  outBD.innerHTML += '<br >letAA.local : ' + letAA.local;   // undefined - not an object-constructor
  outBD.innerHTML += '<br >letAB.proOne : ' + letAB.proOne;
  outBD.innerHTML += '<br >';

  // practice 02 ...............................................................
  // function expression - call as (function) and (creating object)
  // inside function or expression -
  // any (local variable or nested function) will defined as property and method
  let LetAC = function () {
    let local = arguments[0];
    outBD.innerHTML += '<br >LetAC-local : ' + local;

    function funcNested() {
      outBD.innerHTML += '<br >funcNested statement ......';
    }
  };

  let LetAD = function () {
    this.proOne = arguments[0];
    outBD.innerHTML += '<br >LetAD-proOne : ' + this.proOne;

    function methodOne() {
      outBD.innerHTML += '<br >methodOne statement ....';
    }

    this.methodTwo = function () {
      outBD.innerHTML += '<br >methodTwo statement ....';
    };
  };

  LetAC(100);
  LetAD(200);

  let letAC = new LetAC(111);
  let letAD = new LetAD(222);

  // letAD.methodOne();
  letAD.methodTwo();
  outBD.innerHTML += '<br >letAD.proOne : ' + this.proOne;
  outBD.innerHTML += '<br >';

  // practice 03 ...............................................................
  // incase of arrow-expression (this) keyword has no effect so declaring object not possible
  let LetAE = (arg) => {
    let local = arg;
    outBD.innerHTML += '<br >LetAE-arg : ' + local;

    function funcNested() {
      outBD.innerHTML += '<br >funcNested statement ...';
    }
  };

  // let LetAF = (arg) => {
  //   this.proOne = arg;
  //   outBD.innerHTML += '<br >LetAF-proOne : ' + proOne;
  //
  //   this.method() {
  //     outBD.innerHTML += '<br >method statement ...';
  //   };
  // };

  LetAE(1);
  // LetAF(2);

  // let letAE = new LetAE(3);
  // let letAF = new LetAF(4);
  //
  // letAE.funcNested();
  // letAF.method();
  // outBD.innerHTML += '<br >letAF.proOne : ' + letAF.proOne;
  outBD.innerHTML += '<br >';

  // practice 04 ...............................................................
  let letAG = new Function('argOne', 'return argOne');
  outBD.innerHTML += '<br >letAG : ' + letAG(111);
  outBD.innerHTML += '<br >';

  // practice 05 ...............................................................
  let letAH = (function () {
    let local = arguments[0];
    outBD.innerHTML += '<br >letAH : ' + local;

    function funcNested() {
      outBD.innerHTML += '<br >funcNested statement ...';
    }

    funcNested();
  })(11);

  let LetAI = (function () {
    this.proOne = arguments[0];
    outBD.innerHTML += '<br >letAI : ' + this.proOne;

    this.method = (function () {
      outBD.innerHTML += '<br >method statement ...';
    })();
  })(22);

  outBD.innerHTML += '<br >';

  // practice 06 ...............................................................
  // home made iterator - function return object-method - return object-property
  // function-expression creates an object, that returns an object (has a method)
  // -> method returns and object (has a property)

  let LetAJ = function () {
    this.proOne = arguments[0];
    let local = arguments[0];
    return {
      method: function () {
        this.proOne++;
        local++;
        return { valuePro: this.proOne, valueLocal: local };
      },
    };
  };

  let letAJ = new LetAJ(10, 11);
  outBD.innerHTML += '<br >letAJ.method().valuePro   : ' + letAJ.method().valuePro;
  outBD.innerHTML += '<br >letAJ.method().valuePro   : ' + letAJ.method().valuePro;
  outBD.innerHTML += '<br >letAJ.method().valueLocal : ' + letAJ.method().valueLocal;
  outBD.innerHTML += '<br >letAJ.method().valueLocal : ' + letAJ.method().valueLocal;
  outBD.innerHTML += '<br >';

  let LetAK = function () {
    let local = arguments[0];

    function funcNested() {
      local++;
      return { value: local };
    }

    let localObject = {
      method: function () {
        local++;
        return { value: local };
      },
    };

    if (arguments[0] < 20) return new funcNested();
    else return localObject;
  };

  let letAK1 = new LetAK(10);
  outBD.innerHTML += '<br >letAK1 : ' + letAK1.value;
  outBD.innerHTML += '<br >letAK1 : ' + letAK1.value;

  let letAK2 = new LetAK(30);
  outBD.innerHTML += '<br >letAK2 : ' + letAK2.method().value;
  outBD.innerHTML += '<br >letAK2 : ' + letAK2.method().value;
  outBD.innerHTML += '<br >';

  // practice 07 ...............................................................
  // method can be (expression or arrow-expression)
  // method-expression can define (this) but (method-arrow) cannot define (this)

  let LetAL = function () {
    this.proOne = arguments[0];
    this.method = (arg) => {
      this.proOne += arg;
      outBD.innerHTML += '<br >LetAL-proOne : ' + this.proOne;
    };
    this.methodOne = (() => {
      outBD.innerHTML += '<br >arrow-method self-invoke';
    })();
  };

  let letAL1 = new LetAL(100);
  letAL1.method(20);
  letAL1.method(30);
  let letAL2 = new LetAL(200);
  letAL2.method(11);
  letAL2.method(22);
  outBD.innerHTML += '<br >';

  let letAM = {
    proOne: null,
    proTwo: null,
    method: function (arg) {
      this.proOne += arg;
      outBD.innerHTML += '<br >letAM-proOne : ' + this.proOne;
    },

    methodTwo: (arg) => {
      this.proTwo += arg;
      outBD.innerHTML += '<br >letAM-proTwo : ' + this.proTwo;
    }
  };

  letAM.method(11);
  letAM.methodTwo(11);
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
      // let print = function () {
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

  let letAA = new ClassAA(11, 22);
  let letAB = new ClassAA(10, 20);
  letAA.print();
  letAB.print();
  // letAA.method();
  outBD.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // nested (method / func-expression / func-defination) for (object allowed / class disallowed)

  let letAC = {
    proOne: null,
    method: function () {
      this.proOne = arguments[0];
      outBD.innerHTML += '<br >proOne : ' + this.proOne;
      this.methodNested = function () {
        outBD.innerHTML += '<br >statement of nested-method : ' + this.proOne;
      };
      let nestedExpre = function () {
        outBD.innerHTML += '<br >statement of nested-expre : ' + this.proOne;
      };
      nestedExpre();
    },
  };

  letAC.method(11);
  letAC.methodNested();
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
      // let nestedExpre = function () {
      //   outBD.innerHTML += '<br >statement of nested-expre : ' + this.proOne;
      // };
      // nestedExpre();
    }
  }

  let letAD = new ClassAD(10);
  letAD.method();
  letAD.methodNested();
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

  let letAE = new ClassAE();
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
