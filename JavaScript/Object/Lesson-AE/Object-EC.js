///// OBJECTS REFERENCES ///////////////////////////////////////////////////////
// 1. ES5 object methods
// 2. changing a property value
// 3. changing meta data
// 4. listing all properties
// 5. listing enumerable properties
// 6. adding a property
// 7. adding getters and setters
// 8. a counter example

////////////////////////////////////////////////////////////////////////////////
var outEC = document.createElement('div');
outEC.setAttribute('id', 'styleOne');
document.body.appendChild(outEC);

////////////////////////////////////////////////////////////////////////////////
// # property attributes | prototype property
// all (properties) have a (name), in addition they also have a (value)
// -> the (value) is one of the property's (attributes)
// -> other (attributes) are (enumerable | configurable | writable)
// -> these (attributes) define how the (property) can be accessed
// in javascript, all (attributes) can be read,
// -> but only the (value attribute) can be changed (and only if the property is writable)
// NB : ECMAScript5 has methods for both (getting and setting) all property attributes

// javascript objects inherit the properties of their prototype
// the (devare) keyword does not devare inherited properties,
// -> but if you devare a (prototype-proeprty), it will affect all (objects-inherited)
// -----------------------------------------------------------------------------

// # ES5 object methods (managing objects)
// ECMAScript 5 (2009) added a lot of new Object Methods of javascript
// 1. creat object with an existing object as prototype - Object.create()
// 2. adding or changing an object property - Object.defineProperty(object, property, descriptor)
// 3. adding or changing object properties - Object.defineProperties(object, descriptors)

function ExCA() {
  // single-object defination - procedure 1 : using (literal) - good practice
  var varAA = {
    proOne: null,
    proTwo: null,
    method: function () {
      return this.proOne + this.proTwo;
    },
  };

  varAA.proOne = 11;
  varAA.proTwo = 22;
  outEC.innerHTML += '<br >varAA : ' + varAA.method();

  // single-object defination - procedure 2 : using (new Object()) method - not good practice
  var varAB = new Object({
    proOne: null,
    proTwo: null,
    method: function () {
      return this.proOne + this.proTwo;
    },
  });

  varAB.proOne = 11;
  varAB.proTwo = 22;
  outEC.innerHTML += '<br >varAB : ' + varAB.method();
  outEC.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // 1. creating new object - Object.create();
  // single-object defination - procedure 3
  var varAC = Object.create({
    proOne: null,
    proTwo: null,
    method: function () {
      return this.proOne + this.proTwo;
    },
  });

  varAC.proOne = 11;
  varAC.proTwo = 22;
  outEC.innerHTML += '<br >varAC : ' + varAC.method();

  // ---------------------------------------------------------------------------
  // 2. adding and changing object-property - Object.defineProperty(object, property, descriptor)
  // 3. adding and changing object-properties - Object.defineProperties(object, descriptor)

  // Object.defineProperty() - add new attribute -------------------------------
  // -> (here property set as non-writable)
  Object.defineProperty(varAC, 'proThree', { value: null });
  outEC.innerHTML += '<br >varAC.proThree : ' + varAC.proThree;

  // Object.defineProperty() - add new method ----------------------------------
  Object.defineProperty(varAC, 'methodOne', {
    value: function () {
      return this.method() + this.proThree;
    },
  });

  outEC.innerHTML += '<br >varAC.methodOne : ' + varAC.methodOne();

  // Object.defineProperty() - add getter and setter ---------------------------
  Object.defineProperty(varAC, 'getSet', {
    set: function () {
      this.proOne = arguments[0].valueOne;
      this.proTwo = arguments[0].valueTwo;
      this.proThree = arguments[0].valueThree;
    },

    get: function () {
      return this.proOne + this.proTwo + this.proThree;
    },
  });

  varAC.getSet = { valueOne: 10, valueTwo: 20, valueThree: 30 };
  outEC.innerHTML += '<br >varAC.getSet : ' + varAC.getSet;
  outEC.innerHTML += '<br >';

  // Object.defineProperties() -------------------------------------------------
  Object.defineProperties(varAC, {
    proFour: { value: null, writable: true },

    methodTwo: {
      value: function () {
        this.proFour += 10;
        return this.proFour;
      },
    },

    setGet: {
      set: function () {
        this.proOne = arguments[0].valueOne;
        this.proTwo = arguments[0].valueTwo;
        this.proThree = arguments[0].valueThree;
        this.proFour = arguments[0].valueFour;
      },

      get: function () {
        outEC.innerHTML += '<br >varAC.proOne   : ' + this.proOne;
        outEC.innerHTML += '<br >varAC.proTwo   : ' + this.proTwo;
        outEC.innerHTML += '<br >varAC.proThree : ' + this.proThree;
        outEC.innerHTML += '<br >varAC.proFour  : ' + this.proFour;
      },
    },
  });

  varAC.setGet = { valueOne: 'a', valueTwo: 'b', valueThree: 'c', valueFour: 'd' };
  varAC.setGet;
  outEC.innerHTML += '<br >varAC.methodTwo : ' + varAC.methodTwo();
  outEC.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // object-template defination - using (constructor)
  var VarAD = function () {
    this.proOne = arguments[0];
    this.proTwo = arguments[1];
    this.method = function () {
      return this.proOne + this.proTwo;
    };
  };

  var varAD1 = new VarAD(11, 22);
  outEC.innerHTML += '<br >varAD : ' + varAD1.method();

  // object-template defination - using (class)
  class ClassAE {
    constructor() {
      this.proOne = arguments[0];
      this.proTwo = arguments[1];
    }

    method() {
      return this.proOne + this.proTwo;
    }
  }

  var varAE = new ClassAE(11, 22);
  outEC.innerHTML += '<br >varAE : ' + varAE.method();
  outEC.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // javascript objects inherit the properties of their prototype
  // the (devare) keyword does not devare inherited properties,
  // -> but if you devare a (prototype-proeprty), it will affect all (objects-inherited)

  // adding new (prototype-property-attribute) - constructor -------------------
  // this (proThree) property is not (writable)
  Object.defineProperty(VarAD.prototype, 'proThree', { value: 33 });
  outEC.innerHTML += '<br >varAD1.proThree : ' + varAD1.proThree;

  // adding new (prototpe-property-method) - constructor -----------------------
  Object.defineProperty(VarAD.prototype, 'methodOne', {
    value: function () {
      return this.method() + this.proThree;
    },
  });

  outEC.innerHTML += '<br >varAD1.methodOne : ' + varAD1.methodOne();

  // adding new (prototype-property-getter/setter) - constructor ---------------
  Object.defineProperty(VarAD.prototype, 'setGet', {
    set: function () {
      this.proOne = arguments[0].valueOne;
      this.proTwo = arguments[0].valueTwo;
      this.proThree = arguments[0].valueThree;
    },

    get: function () {
      return this.proOne + this.proTwo + this.proThree;
    },
  });

  varAD1.setGet = { valueOne: 10, valueTwo: 20, valueThree: 0 };
  outEC.innerHTML += '<br >varAD1.setGet : ' + varAD1.setGet;
  outEC.innerHTML += '<br >';

  // adding new (prototype-properties : attributes and methods) - class --------
  Object.defineProperties(ClassAE.prototype, {
    proThree: { value: 33 },
    methodOne: {
      value: function () {
        return this.method() + this.proThree;
      },
    },

    setGet: {
      set: function () {
        this.proOne = arguments[0].valueOne;
        this.proTwo = arguments[0].valueTwo;
        this.proThree = arguments[0].valueThree;
      },

      get: function () {
        return this.proOne + this.proTwo + this.proThree;
      },
    },
  });

  outEC.innerHTML += '<br >varAE.proThree : ' + varAE.proThree;
  outEC.innerHTML += '<br >varAE.methodOne : ' + varAE.methodOne();

  varAE.setGet = { valueOne: 10, valueTwo: 20, valueThree: 0 };
  outEC.innerHTML += '<br >varAE.setGet : ' + varAE.setGet;
  outEC.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # ES5 object methods (accessing property)
// ESMAScript 5 (2009) added a lot of new Object Methods of javascript
// 1. returns all properties as an array - Object.getOwnPropertyNames(object)
// 2. returns enumerable properties as an array - Object.keys(object)

// 3. accessing properties - Object.getOwnPropertyDescriptor(object, property)
// 4. accessing the property - Object.getPrototypeOf(object)

function ExCB() {
  // single-object declaration -------------------------------------------------
  var varAA = {
    proOne: 11,
    proTwo: 22,
    method: function () {
      return this.proOne + this.proTwo;
    },
  };

  outEC.innerHTML += '<br >varAA.method   : ' + varAA.method();
  outEC.innerHTML += '<br >varAA.proOne   : ' + Object.getOwnPropertyDescriptor(varAA, 'proOne');
  outEC.innerHTML += '<br >varAA.proTwo   : ' + Object.getOwnPropertyDescriptor(varAA, 'proTwo');
  outEC.innerHTML += '<br >varAA.proThree : ' + Object.getOwnPropertyDescriptor(varAA, 'proThree');
  outEC.innerHTML += '<br >varAA : ' + Object.getPrototypeOf(varAA);
  outEC.innerHTML += '<br >varAA : ' + Object.getOwnPropertyNames(varAA);
  outEC.innerHTML += '<br >varAA : ' + Object.keys(varAA);
  outEC.innerHTML += '<br >';

  // object-template declaration - constructor ---------------------------------
  var VarAB = function () {
    this.proOne = arguments[0];
    this.proTwo = arguments[1];
    this.method = function () {
      return this.proOne + this.proTwo;
    };
  };

  var varAB1 = new VarAB(11, 22);

  outEC.innerHTML += '<br >varAB1.method : ' + varAB1.method();
  outEC.innerHTML += '<br >varAB1 : ' + Object.getOwnPropertyNames(varAB1);
  outEC.innerHTML += '<br >varAB1 : ' + Object.keys(varAB1);
  outEC.innerHTML += '<br >varAB1 : ' + Object.getOwnPropertyDescriptor(varAB1, 'proTwo');
  outEC.innerHTML += '<br >varAB1 : ' + Object.getPrototypeOf(varAB1);
  outEC.innerHTML += '<br >';

  outEC.innerHTML += '<br >varAB  : ' + Object.getOwnPropertyNames(VarAB);
  outEC.innerHTML += '<br >varAB  : ' + Object.keys(VarAB);
  outEC.innerHTML += '<br >varAB  : ' + Object.getOwnPropertyDescriptor(VarAB, 'proOne');
  outEC.innerHTML += '<br >varAB  : ' + Object.getPrototypeOf(VarAB);
  outEC.innerHTML += '<br >';

  // add new method to (template-object)
  varAB1.printValue = function () {
    outEC.innerHTML += '<br >varAB.proOne : ' + this.proOne;
    outEC.innerHTML += '<br >varAB.proTwo : ' + this.proTwo;
  };

  varAB1.printValue();
  outEC.innerHTML += '<br >varAB1 : ' + Object.getOwnPropertyNames(varAB1);
  outEC.innerHTML += '<br >varAB1 : ' + Object.keys(varAB1);
  outEC.innerHTML += '<br >varAB  : ' + Object.getOwnPropertyNames(VarAB);
  outEC.innerHTML += '<br >varAB  : ' + Object.keys(VarAB);
  outEC.innerHTML += '<br >';

  // add new method to (prototype)
  Object.defineProperty(VarAB.prototype, 'callMethod', {
    vlaue: function () {
      outEC.innerHTML += '<br >varAB.method * 10 : ' + (this.method() * 10);
    },
  });

  // varAB1.callMethod();
  outEC.innerHTML += '<br >varAB1 : ' + Object.getOwnPropertyNames(varAB1);
  outEC.innerHTML += '<br >varAB1 : ' + Object.keys(varAB1);
  outEC.innerHTML += '<br >varAB  : ' + Object.getOwnPropertyNames(VarAB);
  outEC.innerHTML += '<br >varAB  : ' + Object.keys(VarAB);
  outEC.innerHTML += '<br >';

  // object-template declaration - class ---------------------------------------
  class ClassAC {
    constructor() {
      this.proOne = arguments[0];
      this.proTwo = arguments[1];
    }

    printValue() {
      outEC.innerHTML += '<br >proOne : ' + this.proOne;
      outEC.innerHTML += '<br >proTwo : ' + this.proTwo;
    }
  }

  var varAC = new ClassAC(11, 22);
  varAC.printValue();

  outEC.innerHTML += '<br >varAC   : ' + Object.getOwnPropertyNames(varAC);
  outEC.innerHTML += '<br >varAC   : ' + Object.keys(varAC);
  outEC.innerHTML += '<br >ClassAC : ' + Object.getOwnPropertyNames(ClassAC);
  outEC.innerHTML += '<br >ClassAC : ' + Object.keys(ClassAC);
  outEC.innerHTML += '<br >';

  Object.defineProperty(ClassAC.prototype, 'proThree', { value: 33 });
  outEC.innerHTML += '<br >varAC.proThree : ' + varAC.proThree;

  outEC.innerHTML += '<br >varAC   : ' + Object.getOwnPropertyNames(varAC);
  outEC.innerHTML += '<br >varAC   : ' + Object.keys(varAC);
  outEC.innerHTML += '<br >ClassAC : ' + Object.getOwnPropertyNames(ClassAC);
  outEC.innerHTML += '<br >ClassAC : ' + Object.keys(ClassAC);
  outEC.innerHTML += '<br >';

  Object.defineProperty(varAC, 'proFour', { value: 44 });
  outEC.innerHTML += '<br >varAC.proFour : ' + varAC.proFour;

  outEC.innerHTML += '<br >varAC   : ' + Object.getOwnPropertyNames(varAC);
  outEC.innerHTML += '<br >varAC   : ' + Object.keys(varAC);
  outEC.innerHTML += '<br >ClassAC : ' + Object.getOwnPropertyNames(ClassAC);
  outEC.innerHTML += '<br >ClassAC : ' + Object.keys(ClassAC);
  outEC.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # ES5 object methods (managing objects)
// ESMAScript 5 (2009) added a lot of new Object Methods of javascript
// 1. returns true if properties can be added to an object - Object.isExtensible(object)
// 2. returns true if object is sealed - Object.isSealed(object)
// 3. returns true if object is frozen - Object.isFrozen(object)

// modifing objects - before using (protecting) methods
// 4. preventExtensions -
// -> prevents new properties from ever being added to an object

// 5. seal -
// -> prevents new properties from ever being added to an object
// -> making all existing properties as non-configurable
// -> NB: value of existing properties can still be changed as long as they are (writable)

// 6. freeze -
// -> 1. prevents new properties from ever being added to an object
// -> 2. prevents existing properties from being removed
// -> 3. making all existing properties as non-configurable (enumerable | writable | configurable)
// -> 4. value of existing properties can not be changed
// -> 5. prevents its prototype from being changed
// --> freeze() returns the same object that was passed in

function ExCC() {
  // single-object defination
  var varAA = {
    proOne: 11,
    proTwo: 22,
    proThree: 33,
    proFour: 44,
    method: function () {
      return (this.proOne + this.proTwo + this.proThree + this.proFour + this.proFive);
    },
  };

  outEC.innerHTML += '<br >varAA.method : ' + varAA.method();
  outEC.innerHTML += '<br >varAA (isExtensible) : ' + Object.isExtensible(varAA);
  outEC.innerHTML += '<br >varAA (isSealed) : ' + Object.isSealed(varAA);
  outEC.innerHTML += '<br >varAA (isFrozen) : ' + Object.isFrozen(varAA);
  outEC.innerHTML += '<br >---------------------------------------------------';

  // ----------------------------------------------------------
  // (add) off
  Object.preventExtensions(varAA);
  outEC.innerHTML += '<br >varAA (names) : ' + Object.getOwnPropertyNames(varAA);
  outEC.innerHTML += '<br >varAA (isExtensible) : ' + Object.isExtensible(varAA);
  outEC.innerHTML += '<br >value | configure | devare | (add) - off';
  outEC.innerHTML += '<br >';

  Object.defineProperty(varAA, 'proOne', { value: 10 });
  Object.defineProperty(varAA, 'proTwo', { writable: false });
  varAA.proTwo = 20;
  devare(varAA.proThree);

  // Object.defineProperty(varAA, 'proFive', { value: 50 });

  outEC.innerHTML += '<br >varAA.proOne : ' + varAA.proOne;
  outEC.innerHTML += '<br >varAA.proTwo : ' + varAA.proTwo;
  outEC.innerHTML += '<br >varAA.proThree : ' + varAA.proThree;
  outEC.innerHTML += '<br >varAA.proFive : ' + varAA.proFive;
  outEC.innerHTML += '<br >................';

  // ----------------------------------------------------------
  // (configure | devare | add) off
  Object.seal(varAA);
  outEC.innerHTML += '<br >varAA (names) : ' + Object.getOwnPropertyNames(varAA);
  outEC.innerHTML += '<br >varAA (isSealed) : ' + Object.isSealed(varAA);
  outEC.innerHTML += '<br >value | (configure | devare | add) - off';
  outEC.innerHTML += '<br >';

  Object.defineProperty(varAA, 'proOne', { value: 100 });

  // Object.defineProperty(varAA, 'proTwo', { writable: true });
  varAA.proTwo = 200;       // as previously (writable: false), no effect - but not off
  devare(varAA.proFour);    // off - but no error

  // Object.defineProperty(varAA, 'proFive', { value: 500 });

  outEC.innerHTML += '<br >varAA.proOne : ' + varAA.proOne;
  outEC.innerHTML += '<br >varAA.proTwo : ' + varAA.proTwo;
  outEC.innerHTML += '<br >varAA.proFour : ' + varAA.proFour;
  outEC.innerHTML += '<br >varAA.proFive : ' + varAA.proFive;
  outEC.innerHTML += '<br >.................';

  // ----------------------------------------------------------
  // (value | configure | devare | add) off
  Object.freeze(varAA);
  outEC.innerHTML += '<br >varAA (names) : ' + Object.getOwnPropertyNames(varAA);
  outEC.innerHTML += '<br >varAA (isFrozen) : ' + Object.isFrozen(varAA);
  outEC.innerHTML += '<br >(value | configure | devare | add) - off';
  outEC.innerHTML += '<br >';

  // Object.defineProperty(varAA, 'proOne', { value: 1 });
  // Object.defineProperty(varAA, 'proTwo', { configurable: true });
  // varAA.proTwo = 2;
  devare(varAA.proFour);    // off - but no erro

  // Object.defineProperty(varAA, 'proFive', { value: 5 });

  outEC.innerHTML += '<br >varAA.proOne : ' + varAA.proOne;
  outEC.innerHTML += '<br >varAA.proTwo : ' + varAA.proTwo;
  outEC.innerHTML += '<br >varAA.proFour : ' + varAA.proFour;
  outEC.innerHTML += '<br >varAA.proFive : ' + varAA.proFive;
  outEC.innerHTML += '<br >varAA (names) : ' + Object.getOwnPropertyNames(varAA);
  outEC.innerHTML += '<br >.................';

  // ---------------------------------------------------------------------------
  // object-template defination - constructor
  var VarAB = function () {
    this.proOne = arguments[0];
    this.proTwo = arguments[1];
    this.proThree = arguments[2];
    this.proFour = arguments[3];
    this.method = function () {
      return this.proOne + this.proTwo + this.proThree + this.proFour;
    };
  };

  var varAB1 = new VarAB(11, 22, 33, 44);
  outEC.innerHTML += '<br >varAB.method : ' + varAB1.method();
  outEC.innerHTML += '<br >varAB1 (isExtensible) : ' + Object.isExtensible(varAB1);
  outEC.innerHTML += '<br >varAB1 (isSealed) : ' + Object.isSealed(varAB1);
  outEC.innerHTML += '<br >varAB1 (isFrozen) : ' + Object.isFrozen(varAB1);
  outEC.innerHTML += '<br >VarAB (isExtensible) : ' + Object.isExtensible(VarAB);
  outEC.innerHTML += '<br >VarAB (isSealed) : ' + Object.isSealed(VarAB);
  outEC.innerHTML += '<br >VarAB (isFrozen) : ' + Object.isFrozen(VarAB);
  outEC.innerHTML += '<br >---------------------------------------------------';

  // ----------------------------------------------------------
  // value | configuration | devare | add - prototype : all active
  Object.preventExtensions(VarAB);
  outEC.innerHTML += '<br >VarAB (names) : ' + Object.getOwnPropertyNames(varAB1);
  outEC.innerHTML += '<br >VarAB (isExtensible) : ' + Object.isExtensible(VarAB);
  outEC.innerHTML += '<br >value | configure | devare | add';
  outEC.innerHTML += '<br >';

  VarAB.prototype.proOne = 10;
  Object.defineProperty(VarAB.prototype, 'proTwo', { configurable: true, writable: false });
  VarAB.prototype.proTwo = 20;   // value-on | configure-on, for (writable-false), no-effect
  VarAB.prototype.proThree = 30;
  devare(VarAB.prototype.proThree);
  Object.defineProperty(VarAB.prototype, 'proFive', { value: 50 });

  outEC.innerHTML += '<br >VarAB.prototype.proOne : ' + VarAB.prototype.proOne;
  outEC.innerHTML += '<br >VarAB.prototype.proTwo (con-t | wri-f) : ' + VarAB.prototype.proTwo;
  outEC.innerHTML += '<br >VarAB.prototype.proThree : ' + VarAB.prototype.proThree;
  outEC.innerHTML += '<br >VarAB.prototype.proFive : ' + VarAB.prototype.proFive;
  outEC.innerHTML += '<br >................';

  // ----------------------------------------------------------
  // add - prototype-object : inactive
  Object.preventExtensions(varAB1);
  outEC.innerHTML += '<br >varAB1 (names) : ' + Object.getOwnPropertyNames(varAB1);
  outEC.innerHTML += '<br >varAB1 (isExtensible) : ' + Object.isExtensible(varAB1);
  outEC.innerHTML += '<br >value | configure | devare | (add) - off';
  outEC.innerHTML += '<br >';

  varAB1.proOne = 11.11;
  Object.defineProperty(varAB1, 'proTwo', { enumerable: true });
  varAB1.proThree = 33.33;
  devare(varAB1.proThree);

  // Object.defineProperty(varAB1, 'proFive', { value: 55.44 });

  outEC.innerHTML += '<br >varAB1.proOne : ' + varAB1.proOne;
  outEC.innerHTML += '<br >varAB1.proTwo (enu-t) : ' + Object.keys(varAB1);
  outEC.innerHTML += '<br >varAB1.proThree : ' + varAB1.proThree;
  outEC.innerHTML += '<br >varAB1.proFive : ' + varAB1.proFive;
  outEC.innerHTML += '<br >................';

  // ----------------------------------------------------------
  // value | configure | devare | add - all active
  var varAB2 = new VarAB(55, 66, 77, 88);
  Object.seal(VarAB);
  outEC.innerHTML += '<br >VarAB1 (names) : ' + Object.getOwnPropertyNames(varAB1);
  outEC.innerHTML += '<br >VarAB2 (names) : ' + Object.getOwnPropertyNames(varAB2);
  outEC.innerHTML += '<br >VarAB (isSealed) : ' + Object.isSealed(VarAB);
  outEC.innerHTML += '<br >value | configure | devare | add';
  outEC.innerHTML += '<br >';

  VarAB.prototype.proOne = 50;
  Object.defineProperty(VarAB.prototype, 'proTwo', { writable: true });
  VarAB.prototype.proTwo = 60;       // as previously (writable: false), no effect - but not off
  VarAB.prototype.proFour = 80;
  devare(VarAB.prototype.proFour);    // off - but no error
  Object.defineProperty(VarAB.prototype, 'proSix', { value: 100 });

  outEC.innerHTML += '<br >VarAB.prototype.proOne : ' + VarAB.prototype.proOne;
  outEC.innerHTML += '<br >VarAB.prototype.proTwo (wri-t) : ' + VarAB.prototype.proTwo;
  outEC.innerHTML += '<br >VarAB.prototype.proFour : ' + VarAB.prototype.proFour;
  outEC.innerHTML += '<br >VarAB.prototype.proSix : ' + VarAB.prototype.proSix;
  outEC.innerHTML += '<br >.................';

  // ----------------------------------------------------------
  // devare | add - prototype-object : inactive
  Object.seal(varAB2);
  outEC.innerHTML += '<br >varAB1 (names) : ' + Object.getOwnPropertyNames(varAB2);
  outEC.innerHTML += '<br >varAB1 (isSealed) : ' + Object.isSealed(varAB2);
  outEC.innerHTML += '<br >value | configure | (devare | add) - off';
  outEC.innerHTML += '<br >';

  varAB2.proOne = 55.55;

  // Object.defineProperty(varAB2, 'proTwo', { enumerable: false });
  varAB2.proThree = 88.88;
  devare(varAB2.proThree);   // off - but no error

  // Object.defineProperty(varAB2, 'proFive', { value: 99.99 });

  outEC.innerHTML += '<br >varAB2.proOne : ' + varAB2.proOne;
  outEC.innerHTML += '<br >varAB2.proTwo (enu-t) : ' + Object.keys(varAB2);
  outEC.innerHTML += '<br >varAB2.proThree : ' + varAB2.proThree;
  outEC.innerHTML += '<br >varAB2.proFive : ' + varAB2.proFive;
  outEC.innerHTML += '<br >................';

  // ----------------------------------------------------------
  // value | configure | devare | add - all active
  var varAB3 = new VarAB(111, 222, 333, 444);
  Object.freeze(VarAB);
  outEC.innerHTML += '<br >VarAB1 (names) : ' + Object.getOwnPropertyNames(varAB1);
  outEC.innerHTML += '<br >VarAB2 (names) : ' + Object.getOwnPropertyNames(varAB2);
  outEC.innerHTML += '<br >VarAB3 (names) : ' + Object.getOwnPropertyNames(varAB3);
  outEC.innerHTML += '<br >VarAB (isFrozen) : ' + Object.isFrozen(VarAB);
  outEC.innerHTML += '<br >value | configure | add | devare';
  outEC.innerHTML += '<br >';

  VarAB.prototype.proOne = 100;
  Object.defineProperty(VarAB.prototype, 'proTwo', { writable: false });
  VarAB.prototype.proTwo = 200;       // as previously (writable: false), no effect - but not off
  VarAB.prototype.proFour = 400;
  devare(VarAB.prototype.proFour);    // off - but no error
  Object.defineProperty(VarAB.prototype, 'proSeven', { value: 700 });

  outEC.innerHTML += '<br >VarAB.prototype.proOne : ' + VarAB.prototype.proOne;
  outEC.innerHTML += '<br >VarAB.prototype.proTwo (wri-f) : ' + VarAB.prototype.proTwo;
  outEC.innerHTML += '<br >VarAB.prototype.proFour : ' + VarAB.prototype.proFour;
  outEC.innerHTML += '<br >VarAB.prototype.proSeven : ' + VarAB.prototype.proSeven;
  outEC.innerHTML += '<br >.................';

  // ----------------------------------------------------------
  // value | configure | devare | add - prototype-object : inactive
  Object.freeze(varAB3);
  outEC.innerHTML += '<br >varAB3 (names) : ' + Object.getOwnPropertyNames(varAB3);
  outEC.innerHTML += '<br >varAB3 (isFrozen) : ' + Object.isFrozen(varAB3);
  outEC.innerHTML += '<br >value | configure | devare | add';
  outEC.innerHTML += '<br >';

  // varAB3.proOne = 111.11;
  // Object.defineProperty(varAB3, 'proTwo', { enumerable: false });

  varAB3.proFour = 444.44;
  devare(varAB3.proFour);   // off - but not error

  // Object.defineProperty(varAB3, 'proFive', { value: 555.55 });

  outEC.innerHTML += '<br >varAB3.proOne : ' + varAB3.proOne;
  outEC.innerHTML += '<br >varAB3.proTwo (con-n) : ' + Object.keys(varAB3);
  outEC.innerHTML += '<br >varAB3.proFour : ' + varAB3.proFour;
  outEC.innerHTML += '<br >varAB3.proFive : ' + varAB3.proFive;
  outEC.innerHTML += '<br >................';

  // ---------------------------------------------------------------------------
  // object-template defination - class
  class ClassAC {
    constructor() {
      this.proOne = arguments[0];
      this.proTwo = arguments[1];
      this.proThree = arguments[2];
      this.proFour = arguments[3];
    }

    printValue() {
      return this.proOne + this.proTwo + this.proThree + this.proFour;
    }
  }

  outEC.innerHTML += '<br >ClassAC (isExtensible) : ' + Object.isExtensible(ClassAC);
  outEC.innerHTML += '<br >ClassAC (isSealed) : ' + Object.isSealed(ClassAC);
  outEC.innerHTML += '<br >ClassAC (isFrozen) : ' + Object.isFrozen(ClassAC);
  outEC.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // add - class-object - inactive
  var varAC1 = new ClassAC(11, 22, 33, 44);
  Object.preventExtensions(varAC1);
  outEC.innerHTML += '<br >varAC1 (names) : ' + Object.getOwnPropertyNames(varAC1);
  outEC.innerHTML += '<br >varAC1 (isExtensible) : ' + Object.isExtensible(varAC1);
  outEC.innerHTML += '<br >value | configure | devare | add';
  outEC.innerHTML += '<br >';

  varAC1.proOne = 11.11;
  Object.defineProperty(varAC1, 'proTwo', { enumerable: false });
  varAC1.proThree = 33.33;
  devare(varAC1.proThree);

  // Object.defineProperty(varAC1, 'proFive', { value: 55.55 });

  outEC.innerHTML += '<br >varAC1.proOne   : ' + varAC1.proOne;
  outEC.innerHTML += '<br >varAC1.proTwo (enu-f) : ' + Object.keys(varAC1);
  outEC.innerHTML += '<br >varAC1.proThree : ' + varAC1.proThree;
  outEC.innerHTML += '<br >varAC1.proFive  : ' + varAC1.proFive;
  outEC.innerHTML += '<br >................';

  // ---------------------------------------------------------------------------
  // configure | devare | add - class-object - inactive
  var varAC2 = new ClassAC(55, 66, 77, 88);
  Object.seal(varAC2);
  outEC.innerHTML += '<br >varAC2 (names) : ' + Object.getOwnPropertyNames(varAC2);
  outEC.innerHTML += '<br >varAC2 (isSealed) : ' + Object.isSealed(varAC2);
  outEC.innerHTML += '<br >value | configure | devare | add';
  outEC.innerHTML += '<br >';

  varAC2.proOne = 55.55;

  // Object.defineProperty(varAC2, 'proTwo', { enumerable: false });
  varAC2.proThree = 77.77;    // inactive - no error
  devare(varAC2.proThree);

  // Object.defineProperty(varAC2, 'proFive', { value: 99.99 });

  outEC.innerHTML += '<br >varAC2.proOne   : ' + varAC2.proOne;
  outEC.innerHTML += '<br >varAC2.proTwo (enu-f) : ' + Object.keys(varAC2);
  outEC.innerHTML += '<br >varAC2.proThree : ' + varAC2.proThree;
  outEC.innerHTML += '<br >varAC2.proFive  : ' + varAC2.proFive;
  outEC.innerHTML += '<br >................';

  // ---------------------------------------------------------------------------
  // value | configure | devare | add - class-object - inactive
  var varAC3 = new ClassAC(111, 222, 333, 444);
  Object.freeze(varAC3);
  outEC.innerHTML += '<br >varAC3 (names) : ' + Object.getOwnPropertyNames(varAC3);
  outEC.innerHTML += '<br >varAC3 (isFrozen) : ' + Object.isFrozen(varAC3);
  outEC.innerHTML += '<br >value | configure | devare | add';
  outEC.innerHTML += '<br >';

  varAC3.proOne = 55.55;

  // Object.defineProperty(varAC3, 'proTwo', { enumerable: false });
  varAC3.proThree = 77.77;    // inactive - no error
  devare(varAC3.proThree);

  // Object.defineProperty(varAC3, 'proFive', { value: 99.99 });

  outEC.innerHTML += '<br >varAC3.proOne   : ' + varAC3.proOne;
  outEC.innerHTML += '<br >varAC3.proTwo (enu-f) : ' + Object.keys(varAC3);
  outEC.innerHTML += '<br >varAC3.proThree : ' + varAC3.proThree;
  outEC.innerHTML += '<br >varAC3.proFive  : ' + varAC3.proFive;
  outEC.innerHTML += '<br >................';
}

////////////////////////////////////////////////////////////////////////////////
// # javascript object-property
// -> all properties must have a (name)
// -> all properties must be (an attribute or a method)
// -> there are 4 types of attributes (value | enumerable | configurable | writeable)
// -> all attributes must be readable
// -> only (value attributes) can be changable (if the property is - writable)

// -> configrable : if (true), then the (property-descriptor) can (change) and
// the (property) can (devare) from the corresponding object
// default value is (false)
// -> enumerable : if (true), then (property) shows up during (enumeration) ot the
// properties on the corresponding object
// default value is (false)
// NB : enumerable means countable

// a (data descriptor) also has the following optional keys
// -> value : the value associated with the (property)
// can be valid javascript value (number, object, function, etc)
// default value is (undefined)
// -> writable : if (ture), then (value) associated with the (property) can (changed)
// with an (assignment operator)
// default value is (false)

// an (accessor descriptor) also has the following optional keys
// -> get :
// -> set :

function ExCD() {
  // single-object defination
  // in-case of (literal) definaion, property-attributes has default value is (true)
  var varAA = {
    proOne: 11,
    proTwo: 22,
    method: function () {
      outEC.innerHTML += '<br >varAA.proOne : ' + this.proOne;
      outEC.innerHTML += '<br >varAA.proTwo : ' + this.proTwo;
    },
  };

  varAA.method();
  outEC.innerHTML += '<br >';

  varAA.proTwo = 33;
  devare(varAA.proOne);
  varAA.method();
  outEC.innerHTML += '<br >';

  // in-case of (Object) method defination, property-attributes has default value is (false)
  // property-attribute has defualt value for (data) is (ture)
  var varAB = Object.create({
    proOne: 10,
    proTwo: 20,
    method: function () {
      outEC.innerHTML += '<br >varAB.proOne : ' + this.proOne;
      outEC.innerHTML += '<br >varAB.proTwo : ' + this.proTwo;
    },
  });

  varAB.method();
  outEC.innerHTML += '<br >';

  varAB.proTwo = 30;
  devare(varAB.proOne);
  varAB.method();
  outEC.innerHTML += '<br >';

  // in-case of (defineProperty) method, all attribute has default value is (false)
  var varAC = { };
  Object.defineProperties(varAC, {
    proOne: { value: 11 },
    proTwo: { value: 22, configurable: true },
    method: {
      value: function () {
        outEC.innerHTML += '<br >varAC.proOne : ' + this.proOne;
        outEC.innerHTML += '<br >varAC.proTwo : ' + this.proTwo;
      },
    },
  });

  outEC.innerHTML += '<br ># proOne - all default | proTwo - configurable';
  varAC.method();
  outEC.innerHTML += '<br >';

  outEC.innerHTML += '<br >> proOne - devare | proTwo - change';
  varAC.proTwo = 33;
  devare(varAC.proOne);
  varAC.method();
  outEC.innerHTML += '<br >';

  // ---------------------------------------
  Object.defineProperties(varAC, {
    proThree: { value: 33, writable: true },
    proFour: { value: 44, configurable: true },
    methodTwo: {
      value: function () {
        outEC.innerHTML += '<br >varAC.proThree : ' + this.proThree;
        outEC.innerHTML += '<br >varAC.proFour : ' + this.proFour;
      },
    },
  });

  outEC.innerHTML += '<br ># proThree - writable | proFour - configurable | all value change';
  varAC.proThree = 30;
  varAC.proFour = 40;
  varAC.methodTwo();
  outEC.innerHTML += '<br >';

  outEC.innerHTML += '<br >> all devare';
  devare(varAC.proThree);
  devare(varAC.proFour);
  varAC.methodTwo();
  outEC.innerHTML += '<br >';

  // ------------------------------------------
  Object.defineProperties(varAC, {
    proThree: { writable: false },
    proFour: { value: 40, configurable: true },
  });

  outEC.innerHTML += '<br ># proThree - not-writable | proFour - configurable | all value change';
  varAC.proThree = 111;
  varAC.proFour = 222;
  varAC.methodTwo();
  outEC.innerHTML += '<br >';

  Object.defineProperty(varAC, 'proFour', { writable: true });

  outEC.innerHTML += '<br >> proThree - not-writable | proFour - configurable > writable';
  varAC.proThree = 333;
  varAC.proFour = 444;
  varAC.methodTwo();
  outEC.innerHTML += '<br >';

  // ------------------------------------------
  var varAD = Object.create({});

  Object.defineProperties(varAD, {
    proOne: { value: 11 },
    proTwo: { value: 22 },
    method: {
      value: function () {
        outEC.innerHTML += '<br >varAD.proOne : ' + this.proOne;
        outEC.innerHTML += '<br >varAD.proTwo : ' + this.proTwo;
      },
    },
  });

  outEC.innerHTML += '<br ># proOne - default | proTwo - default';
  outEC.innerHTML += '<br >varAD : ' + Object.getOwnPropertyNames(varAD);
  outEC.innerHTML += '<br >varAD : ' + Object.keys(varAD);
  outEC.innerHTML += '<br >';

  Object.defineProperties(varAD, {
    proThree: { value: 33, configurable: true },
    proFour: { value: 44, enumerable: true },
    methodOne: {
      value: function () {
        outEC.innerHTML += '<br >varAD.proThree : ' + this.proThree;
        outEC.innerHTML += '<br >varAD.proFour : ' + this.proFour;
      },
    },
  });

  outEC.innerHTML += '<br ># proThree - configurable | proFour - enumerable';
  outEC.innerHTML += '<br >varAD : ' + Object.getOwnPropertyNames(varAD);
  outEC.innerHTML += '<br >varAD : ' + Object.keys(varAD);
  outEC.innerHTML += '<br >';

  Object.defineProperties(varAD, {
    proThree: { enumerable: true },

    // proFour: { writable: true },
    // methodOne: { enumerable: true },
  });

  outEC.innerHTML += '<br >> proThree - enumerable | proFour - writable | methodOne - enumerable';
  outEC.innerHTML += '<br >varAD : ' + Object.getOwnPropertyNames(varAD);
  outEC.innerHTML += '<br >varAD : ' + Object.keys(varAD);
  outEC.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // object-template defination - class
  class ClassAE {
    constructor() {
      this.proOne = arguments[0];
      this.proTwo = arguments[1];
    }

    method() {
      return this.proOne + this.proTwo;
    }
  }

  var varAE = new ClassAE(10, 20);

  // var varAE = {
  //   proOne: 10,
  //   proTwo: 20,
  //   method: function () {
  //     outEC.innerHTML += '<br >varAE.proOne : ' + this.proOne;
  //     outEC.innerHTML += '<br >varAE.proTwo : ' + this.proTwo;
  //   },
  // };

  // var varAE = new Object({
  //   proOne: 10,
  //   proTwo: 20,
  //   method: function () {
  //     outEC.innerHTML += '<br >varAE.proOne : ' + this.proOne;
  //     outEC.innerHTML += '<br >varAE.proTwo : ' + this.proTwo;
  //   },
  // });

  // var varAE = Object.create({
  //   proOne: 10,
  //   proTwo: 20,
  //   method: function () {
  //     outEC.innerHTML += '<br >varAE.proOne : ' + this.proOne;
  //     outEC.innerHTML += '<br >varAE.proTwo : ' + this.proTwo;
  //   },
  // });

  // var varAE = {};
  // Object.defineProperties(varAE, {
  //   proOne: { vlaue: 30 },
  //   proTwo: { value: 40 },
  //   method: {
  //     value: function () {
  //       outEC.innerHTML += '<br >varAE.proOne : ' + this.proOne;
  //       outEC.innerHTML += '<br >varAE.proTwo : ' + this.proTwo;
  //     },
  //   },
  // });

  outEC.innerHTML += '<br >class-object | literal | Object.create | new Object | defineProperty';
  outEC.innerHTML += '<br >1. class-object : attribute - true | method - false';
  outEC.innerHTML += '<br >2. literal : attribute - true | method - true';
  outEC.innerHTML += '<br >3. new Object : attribute - true | method - true';
  outEC.innerHTML += '<br >4. Object.create : attribute - false | method - false';
  outEC.innerHTML += '<br >5. defineProperty : names-true (attribute | method) | keys-false';

  outEC.innerHTML += '<br >classAE - ' + Object.getOwnPropertyNames(ClassAE);
  outEC.innerHTML += '<br >classAE - ' + Object.keys(ClassAE);
  outEC.innerHTML += '<br >varAE (names) - ' + Object.getOwnPropertyNames(varAE);
  outEC.innerHTML += '<br >varAE (keys) - ' + Object.keys(varAE);
  outEC.innerHTML += '<br >';

  // ---------------------------------------------
  Object.defineProperties(varAE, {
    proOne: { value: 111 },
    proTwo: { value: 222 },
  });

  outEC.innerHTML += '<br ># attribute - true | method - false | value - change';
  outEC.innerHTML += '<br >varAE.method : ' + varAE.method();
  outEC.innerHTML += '<br >varAE (names): ' + Object.getOwnPropertyNames(varAE);
  outEC.innerHTML += '<br >varAE (keys) : ' + Object.keys(varAE);
  outEC.innerHTML += '<br >';

  Object.defineProperties(varAE, {
    proOne: { writable: false },
    proTwo: { enumerable: false },

    // method: { configurable: true },
  });

  varAE.proOne = 100;
  varAE.proTwo = 200;

  outEC.innerHTML += '<br >proOne - non-writable | proTwo - non-enumerable';
  outEC.innerHTML += '<br >varAE.method : ' + varAE.method();
  outEC.innerHTML += '<br >varAE (names): ' + Object.getOwnPropertyNames(varAE);
  outEC.innerHTML += '<br >varAE (keys) : ' + Object.keys(varAE);
  outEC.innerHTML += '<br >';

  Object.defineProperties(varAE, {
    proOne: { configurable: false },
    proTwo: { writable: false },
  });

  devare(varAE.proOne);
  devare(varAE.proTwo);
  outEC.innerHTML += '<br >proOne - non-configurable | proTwo - non-writable | devare all';
  outEC.innerHTML += '<br >varAE.method : ' + varAE.method();
  outEC.innerHTML += '<br >varAE (names): ' + Object.getOwnPropertyNames(varAE);
  outEC.innerHTML += '<br >varAE (keys) : ' + Object.keys(varAE);
  outEC.innerHTML += '<br >';

  Object.defineProperties(varAE, {
    // proOne: { configurable: true },
    proTwo: { value: 300 },
  });

  devare(varAE.proOne);
  devare(varAE.proTwo);
  outEC.innerHTML += '<br >proOne - configurable | proTwo - defineProperty | devare all';
  outEC.innerHTML += '<br >varAE.method : ' + varAE.method();
  outEC.innerHTML += '<br >varAE (names): ' + Object.getOwnPropertyNames(varAE);
  outEC.innerHTML += '<br >varAE (keys) : ' + Object.keys(varAE);
  outEC.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
outEC.innerHTML += 'ex-ca : ES5 object methods (managing objects)';
outEC.innerHTML += '<hr >'; ExCA();
outEC.innerHTML += '<br >ex-cb : ES5 object methods (accessing property)';
outEC.innerHTML += '<hr >'; ExCB();
outEC.innerHTML += '<br >ex-cc : ES5 object methods (protecting objects)';
outEC.innerHTML += '<hr >'; ExCC();
outEC.innerHTML += '<br >ex-cc : ES5 object methods (examples)';
outEC.innerHTML += '<hr >'; ExCD();
