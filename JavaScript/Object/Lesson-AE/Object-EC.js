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
// the (delete) keyword does not delete inherited properties,
// -> but if you delete a (prototype-proeprty), it will affect all (objects-inherited)
// -----------------------------------------------------------------------------

// # ES5 object methods (managing objects)
// ECMAScript 5 (2009) added a lot of new Object Methods of javascript
// 1. creat object with an existing object as prototype - Object.create()
// 2. adding or changing an object property - Object.defineProperty(object, property, descriptor)
// 3. adding or changing object properties - Object.defineProperties(object, descriptors)

function ExCA() {
  // single-object defination - procedure 1 : using (literal) - good practice
  let letAA = {
    proOne: null,
    proTwo: null,
    method: function () {
      return this.proOne + this.proTwo;
    },
  };

  letAA.proOne = 11;
  letAA.proTwo = 22;
  outEC.innerHTML += '<br >letAA : ' + letAA.method();

  // single-object defination - procedure 2 : using (new Object()) method - not good practice
  let letAB = new Object({
    proOne: null,
    proTwo: null,
    method: function () {
      return this.proOne + this.proTwo;
    },
  });

  letAB.proOne = 11;
  letAB.proTwo = 22;
  outEC.innerHTML += '<br >letAB : ' + letAB.method();
  outEC.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // 1. creating new object - Object.create();
  // single-object defination - procedure 3
  let letAC = Object.create({
    proOne: null,
    proTwo: null,
    method: function () {
      return this.proOne + this.proTwo;
    },
  });

  letAC.proOne = 11;
  letAC.proTwo = 22;
  outEC.innerHTML += '<br >letAC : ' + letAC.method();

  // ---------------------------------------------------------------------------
  // 2. adding and changing object-property - Object.defineProperty(object, property, descriptor)
  // 3. adding and changing object-properties - Object.defineProperties(object, descriptor)

  // Object.defineProperty() - add new attribute -------------------------------
  // -> (here property set as non-writable)
  Object.defineProperty(letAC, 'proThree', { value: null });
  outEC.innerHTML += '<br >letAC.proThree : ' + letAC.proThree;

  // Object.defineProperty() - add new method ----------------------------------
  Object.defineProperty(letAC, 'methodOne', {
    value: function () {
      return this.method() + this.proThree;
    },
  });

  outEC.innerHTML += '<br >letAC.methodOne : ' + letAC.methodOne();

  // Object.defineProperty() - add getter and setter ---------------------------
  Object.defineProperty(letAC, 'getSet', {
    set: function () {
      this.proOne = arguments[0].valueOne;
      this.proTwo = arguments[0].valueTwo;
      this.proThree = arguments[0].valueThree;
    },

    get: function () {
      return this.proOne + this.proTwo + this.proThree;
    },
  });

  letAC.getSet = { valueOne: 10, valueTwo: 20, valueThree: 30 };
  outEC.innerHTML += '<br >letAC.getSet : ' + letAC.getSet;
  outEC.innerHTML += '<br >';

  // Object.defineProperties() -------------------------------------------------
  Object.defineProperties(letAC, {
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
        outEC.innerHTML += '<br >letAC.proOne   : ' + this.proOne;
        outEC.innerHTML += '<br >letAC.proTwo   : ' + this.proTwo;
        outEC.innerHTML += '<br >letAC.proThree : ' + this.proThree;
        outEC.innerHTML += '<br >letAC.proFour  : ' + this.proFour;
      },
    },
  });

  letAC.setGet = { valueOne: 'a', valueTwo: 'b', valueThree: 'c', valueFour: 'd' };
  letAC.setGet;
  outEC.innerHTML += '<br >letAC.methodTwo : ' + letAC.methodTwo();
  outEC.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // object-template defination - using (constructor)
  let LetAD = function () {
    this.proOne = arguments[0];
    this.proTwo = arguments[1];
    this.method = function () {
      return this.proOne + this.proTwo;
    };
  };

  let letAD1 = new LetAD(11, 22);
  outEC.innerHTML += '<br >letAD : ' + letAD1.method();

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

  let letAE = new ClassAE(11, 22);
  outEC.innerHTML += '<br >letAE : ' + letAE.method();
  outEC.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // javascript objects inherit the properties of their prototype
  // the (delete) keyword does not delete inherited properties,
  // -> but if you delete a (prototype-proeprty), it will affect all (objects-inherited)

  // adding new (prototype-property-attribute) - constructor -------------------
  // this (proThree) property is not (writable)
  Object.defineProperty(LetAD.prototype, 'proThree', { value: 33 });
  outEC.innerHTML += '<br >letAD1.proThree : ' + letAD1.proThree;

  // adding new (prototpe-property-method) - constructor -----------------------
  Object.defineProperty(LetAD.prototype, 'methodOne', {
    value: function () {
      return this.method() + this.proThree;
    },
  });

  outEC.innerHTML += '<br >letAD1.methodOne : ' + letAD1.methodOne();

  // adding new (prototype-property-getter/setter) - constructor ---------------
  Object.defineProperty(LetAD.prototype, 'setGet', {
    set: function () {
      this.proOne = arguments[0].valueOne;
      this.proTwo = arguments[0].valueTwo;
      this.proThree = arguments[0].valueThree;
    },

    get: function () {
      return this.proOne + this.proTwo + this.proThree;
    },
  });

  letAD1.setGet = { valueOne: 10, valueTwo: 20, valueThree: 0 };
  outEC.innerHTML += '<br >letAD1.setGet : ' + letAD1.setGet;
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

  outEC.innerHTML += '<br >letAE.proThree : ' + letAE.proThree;
  outEC.innerHTML += '<br >letAE.methodOne : ' + letAE.methodOne();

  letAE.setGet = { valueOne: 10, valueTwo: 20, valueThree: 0 };
  outEC.innerHTML += '<br >letAE.setGet : ' + letAE.setGet;
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
  let letAA = {
    proOne: 11,
    proTwo: 22,
    method: function () {
      return this.proOne + this.proTwo;
    },
  };

  outEC.innerHTML += '<br >letAA.method   : ' + letAA.method();
  outEC.innerHTML += '<br >letAA.proOne   : ' + Object.getOwnPropertyDescriptor(letAA, 'proOne');
  outEC.innerHTML += '<br >letAA.proTwo   : ' + Object.getOwnPropertyDescriptor(letAA, 'proTwo');
  outEC.innerHTML += '<br >letAA.proThree : ' + Object.getOwnPropertyDescriptor(letAA, 'proThree');
  outEC.innerHTML += '<br >letAA : ' + Object.getPrototypeOf(letAA);
  outEC.innerHTML += '<br >letAA : ' + Object.getOwnPropertyNames(letAA);
  outEC.innerHTML += '<br >letAA : ' + Object.keys(letAA);
  outEC.innerHTML += '<br >';

  // object-template declaration - constructor ---------------------------------
  let LetAB = function () {
    this.proOne = arguments[0];
    this.proTwo = arguments[1];
    this.method = function () {
      return this.proOne + this.proTwo;
    };
  };

  let letAB1 = new LetAB(11, 22);

  outEC.innerHTML += '<br >letAB1.method : ' + letAB1.method();
  outEC.innerHTML += '<br >letAB1 : ' + Object.getOwnPropertyNames(letAB1);
  outEC.innerHTML += '<br >letAB1 : ' + Object.keys(letAB1);
  outEC.innerHTML += '<br >letAB1 : ' + Object.getOwnPropertyDescriptor(letAB1, 'proTwo');
  outEC.innerHTML += '<br >letAB1 : ' + Object.getPrototypeOf(letAB1);
  outEC.innerHTML += '<br >';

  outEC.innerHTML += '<br >letAB  : ' + Object.getOwnPropertyNames(LetAB);
  outEC.innerHTML += '<br >letAB  : ' + Object.keys(LetAB);
  outEC.innerHTML += '<br >letAB  : ' + Object.getOwnPropertyDescriptor(LetAB, 'proOne');
  outEC.innerHTML += '<br >letAB  : ' + Object.getPrototypeOf(LetAB);
  outEC.innerHTML += '<br >';

  // add new method to (template-object)
  letAB1.printValue = function () {
    outEC.innerHTML += '<br >letAB.proOne : ' + this.proOne;
    outEC.innerHTML += '<br >letAB.proTwo : ' + this.proTwo;
  };

  letAB1.printValue();
  outEC.innerHTML += '<br >letAB1 : ' + Object.getOwnPropertyNames(letAB1);
  outEC.innerHTML += '<br >letAB1 : ' + Object.keys(letAB1);
  outEC.innerHTML += '<br >letAB  : ' + Object.getOwnPropertyNames(LetAB);
  outEC.innerHTML += '<br >letAB  : ' + Object.keys(LetAB);
  outEC.innerHTML += '<br >';

  // add new method to (prototype)
  Object.defineProperty(LetAB.prototype, 'callMethod', {
    vlaue: function () {
      outEC.innerHTML += '<br >letAB.method * 10 : ' + (this.method() * 10);
    },
  });

  // letAB1.callMethod();
  outEC.innerHTML += '<br >letAB1 : ' + Object.getOwnPropertyNames(letAB1);
  outEC.innerHTML += '<br >letAB1 : ' + Object.keys(letAB1);
  outEC.innerHTML += '<br >letAB  : ' + Object.getOwnPropertyNames(LetAB);
  outEC.innerHTML += '<br >letAB  : ' + Object.keys(LetAB);
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

  let letAC = new ClassAC(11, 22);
  letAC.printValue();

  outEC.innerHTML += '<br >letAC   : ' + Object.getOwnPropertyNames(letAC);
  outEC.innerHTML += '<br >letAC   : ' + Object.keys(letAC);
  outEC.innerHTML += '<br >ClassAC : ' + Object.getOwnPropertyNames(ClassAC);
  outEC.innerHTML += '<br >ClassAC : ' + Object.keys(ClassAC);
  outEC.innerHTML += '<br >';

  Object.defineProperty(ClassAC.prototype, 'proThree', { value: 33 });
  outEC.innerHTML += '<br >letAC.proThree : ' + letAC.proThree;

  outEC.innerHTML += '<br >letAC   : ' + Object.getOwnPropertyNames(letAC);
  outEC.innerHTML += '<br >letAC   : ' + Object.keys(letAC);
  outEC.innerHTML += '<br >ClassAC : ' + Object.getOwnPropertyNames(ClassAC);
  outEC.innerHTML += '<br >ClassAC : ' + Object.keys(ClassAC);
  outEC.innerHTML += '<br >';

  Object.defineProperty(letAC, 'proFour', { value: 44 });
  outEC.innerHTML += '<br >letAC.proFour : ' + letAC.proFour;

  outEC.innerHTML += '<br >letAC   : ' + Object.getOwnPropertyNames(letAC);
  outEC.innerHTML += '<br >letAC   : ' + Object.keys(letAC);
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
  let letAA = {
    proOne: 11,
    proTwo: 22,
    proThree: 33,
    proFour: 44,
    method: function () {
      return (this.proOne + this.proTwo + this.proThree + this.proFour + this.proFive);
    },
  };

  outEC.innerHTML += '<br >letAA.method : ' + letAA.method();
  outEC.innerHTML += '<br >letAA (isExtensible) : ' + Object.isExtensible(letAA);
  outEC.innerHTML += '<br >letAA (isSealed) : ' + Object.isSealed(letAA);
  outEC.innerHTML += '<br >letAA (isFrozen) : ' + Object.isFrozen(letAA);
  outEC.innerHTML += '<br >---------------------------------------------------';

  // ----------------------------------------------------------
  // (add) off
  Object.preventExtensions(letAA);
  outEC.innerHTML += '<br >letAA (names) : ' + Object.getOwnPropertyNames(letAA);
  outEC.innerHTML += '<br >letAA (isExtensible) : ' + Object.isExtensible(letAA);
  outEC.innerHTML += '<br >value | configure | delete | (add) - off';
  outEC.innerHTML += '<br >';

  Object.defineProperty(letAA, 'proOne', { value: 10 });
  Object.defineProperty(letAA, 'proTwo', { writable: false });
  letAA.proTwo = 20;
  delete(letAA.proThree);

  // Object.defineProperty(letAA, 'proFive', { value: 50 });

  outEC.innerHTML += '<br >letAA.proOne : ' + letAA.proOne;
  outEC.innerHTML += '<br >letAA.proTwo : ' + letAA.proTwo;
  outEC.innerHTML += '<br >letAA.proThree : ' + letAA.proThree;
  outEC.innerHTML += '<br >letAA.proFive : ' + letAA.proFive;
  outEC.innerHTML += '<br >................';

  // ----------------------------------------------------------
  // (configure | delete | add) off
  Object.seal(letAA);
  outEC.innerHTML += '<br >letAA (names) : ' + Object.getOwnPropertyNames(letAA);
  outEC.innerHTML += '<br >letAA (isSealed) : ' + Object.isSealed(letAA);
  outEC.innerHTML += '<br >value | (configure | delete | add) - off';
  outEC.innerHTML += '<br >';

  Object.defineProperty(letAA, 'proOne', { value: 100 });

  // Object.defineProperty(letAA, 'proTwo', { writable: true });
  letAA.proTwo = 200;       // as previously (writable: false), no effect - but not off
  delete(letAA.proFour);    // off - but no error

  // Object.defineProperty(letAA, 'proFive', { value: 500 });

  outEC.innerHTML += '<br >letAA.proOne : ' + letAA.proOne;
  outEC.innerHTML += '<br >letAA.proTwo : ' + letAA.proTwo;
  outEC.innerHTML += '<br >letAA.proFour : ' + letAA.proFour;
  outEC.innerHTML += '<br >letAA.proFive : ' + letAA.proFive;
  outEC.innerHTML += '<br >.................';

  // ----------------------------------------------------------
  // (value | configure | delete | add) off
  Object.freeze(letAA);
  outEC.innerHTML += '<br >letAA (names) : ' + Object.getOwnPropertyNames(letAA);
  outEC.innerHTML += '<br >letAA (isFrozen) : ' + Object.isFrozen(letAA);
  outEC.innerHTML += '<br >(value | configure | delete | add) - off';
  outEC.innerHTML += '<br >';

  // Object.defineProperty(letAA, 'proOne', { value: 1 });
  // Object.defineProperty(letAA, 'proTwo', { configurable: true });
  // letAA.proTwo = 2;
  delete(letAA.proFour);    // off - but no erro

  // Object.defineProperty(letAA, 'proFive', { value: 5 });

  outEC.innerHTML += '<br >letAA.proOne : ' + letAA.proOne;
  outEC.innerHTML += '<br >letAA.proTwo : ' + letAA.proTwo;
  outEC.innerHTML += '<br >letAA.proFour : ' + letAA.proFour;
  outEC.innerHTML += '<br >letAA.proFive : ' + letAA.proFive;
  outEC.innerHTML += '<br >letAA (names) : ' + Object.getOwnPropertyNames(letAA);
  outEC.innerHTML += '<br >.................';

  // ---------------------------------------------------------------------------
  // object-template defination - constructor
  let LetAB = function () {
    this.proOne = arguments[0];
    this.proTwo = arguments[1];
    this.proThree = arguments[2];
    this.proFour = arguments[3];
    this.method = function () {
      return this.proOne + this.proTwo + this.proThree + this.proFour;
    };
  };

  let letAB1 = new LetAB(11, 22, 33, 44);
  outEC.innerHTML += '<br >letAB.method : ' + letAB1.method();
  outEC.innerHTML += '<br >letAB1 (isExtensible) : ' + Object.isExtensible(letAB1);
  outEC.innerHTML += '<br >letAB1 (isSealed) : ' + Object.isSealed(letAB1);
  outEC.innerHTML += '<br >letAB1 (isFrozen) : ' + Object.isFrozen(letAB1);
  outEC.innerHTML += '<br >LetAB (isExtensible) : ' + Object.isExtensible(LetAB);
  outEC.innerHTML += '<br >LetAB (isSealed) : ' + Object.isSealed(LetAB);
  outEC.innerHTML += '<br >LetAB (isFrozen) : ' + Object.isFrozen(LetAB);
  outEC.innerHTML += '<br >---------------------------------------------------';

  // ----------------------------------------------------------
  // value | configuration | delete | add - prototype : all active
  Object.preventExtensions(LetAB);
  outEC.innerHTML += '<br >LetAB (names) : ' + Object.getOwnPropertyNames(letAB1);
  outEC.innerHTML += '<br >LetAB (isExtensible) : ' + Object.isExtensible(LetAB);
  outEC.innerHTML += '<br >value | configure | delete | add';
  outEC.innerHTML += '<br >';

  LetAB.prototype.proOne = 10;
  Object.defineProperty(LetAB.prototype, 'proTwo', { configurable: true, writable: false });
  LetAB.prototype.proTwo = 20;   // value-on | configure-on, for (writable-false), no-effect
  LetAB.prototype.proThree = 30;
  delete(LetAB.prototype.proThree);
  Object.defineProperty(LetAB.prototype, 'proFive', { value: 50 });

  outEC.innerHTML += '<br >LetAB.prototype.proOne : ' + LetAB.prototype.proOne;
  outEC.innerHTML += '<br >LetAB.prototype.proTwo (con-t | wri-f) : ' + LetAB.prototype.proTwo;
  outEC.innerHTML += '<br >LetAB.prototype.proThree : ' + LetAB.prototype.proThree;
  outEC.innerHTML += '<br >LetAB.prototype.proFive : ' + LetAB.prototype.proFive;
  outEC.innerHTML += '<br >................';

  // ----------------------------------------------------------
  // add - prototype-object : inactive
  Object.preventExtensions(letAB1);
  outEC.innerHTML += '<br >letAB1 (names) : ' + Object.getOwnPropertyNames(letAB1);
  outEC.innerHTML += '<br >letAB1 (isExtensible) : ' + Object.isExtensible(letAB1);
  outEC.innerHTML += '<br >value | configure | delete | (add) - off';
  outEC.innerHTML += '<br >';

  letAB1.proOne = 11.11;
  Object.defineProperty(letAB1, 'proTwo', { enumerable: true });
  letAB1.proThree = 33.33;
  delete(letAB1.proThree);

  // Object.defineProperty(letAB1, 'proFive', { value: 55.44 });

  outEC.innerHTML += '<br >letAB1.proOne : ' + letAB1.proOne;
  outEC.innerHTML += '<br >letAB1.proTwo (enu-t) : ' + Object.keys(letAB1);
  outEC.innerHTML += '<br >letAB1.proThree : ' + letAB1.proThree;
  outEC.innerHTML += '<br >letAB1.proFive : ' + letAB1.proFive;
  outEC.innerHTML += '<br >................';

  // ----------------------------------------------------------
  // value | configure | delete | add - all active
  let letAB2 = new LetAB(55, 66, 77, 88);
  Object.seal(LetAB);
  outEC.innerHTML += '<br >LetAB1 (names) : ' + Object.getOwnPropertyNames(letAB1);
  outEC.innerHTML += '<br >LetAB2 (names) : ' + Object.getOwnPropertyNames(letAB2);
  outEC.innerHTML += '<br >LetAB (isSealed) : ' + Object.isSealed(LetAB);
  outEC.innerHTML += '<br >value | configure | delete | add';
  outEC.innerHTML += '<br >';

  LetAB.prototype.proOne = 50;
  Object.defineProperty(LetAB.prototype, 'proTwo', { writable: true });
  LetAB.prototype.proTwo = 60;       // as previously (writable: false), no effect - but not off
  LetAB.prototype.proFour = 80;
  delete(LetAB.prototype.proFour);    // off - but no error
  Object.defineProperty(LetAB.prototype, 'proSix', { value: 100 });

  outEC.innerHTML += '<br >LetAB.prototype.proOne : ' + LetAB.prototype.proOne;
  outEC.innerHTML += '<br >LetAB.prototype.proTwo (wri-t) : ' + LetAB.prototype.proTwo;
  outEC.innerHTML += '<br >LetAB.prototype.proFour : ' + LetAB.prototype.proFour;
  outEC.innerHTML += '<br >LetAB.prototype.proSix : ' + LetAB.prototype.proSix;
  outEC.innerHTML += '<br >.................';

  // ----------------------------------------------------------
  // delete | add - prototype-object : inactive
  Object.seal(letAB2);
  outEC.innerHTML += '<br >letAB1 (names) : ' + Object.getOwnPropertyNames(letAB2);
  outEC.innerHTML += '<br >letAB1 (isSealed) : ' + Object.isSealed(letAB2);
  outEC.innerHTML += '<br >value | configure | (delete | add) - off';
  outEC.innerHTML += '<br >';

  letAB2.proOne = 55.55;

  // Object.defineProperty(letAB2, 'proTwo', { enumerable: false });
  letAB2.proThree = 88.88;
  delete(letAB2.proThree);   // off - but no error

  // Object.defineProperty(letAB2, 'proFive', { value: 99.99 });

  outEC.innerHTML += '<br >letAB2.proOne : ' + letAB2.proOne;
  outEC.innerHTML += '<br >letAB2.proTwo (enu-t) : ' + Object.keys(letAB2);
  outEC.innerHTML += '<br >letAB2.proThree : ' + letAB2.proThree;
  outEC.innerHTML += '<br >letAB2.proFive : ' + letAB2.proFive;
  outEC.innerHTML += '<br >................';

  // ----------------------------------------------------------
  // value | configure | delete | add - all active
  let letAB3 = new LetAB(111, 222, 333, 444);
  Object.freeze(LetAB);
  outEC.innerHTML += '<br >LetAB1 (names) : ' + Object.getOwnPropertyNames(letAB1);
  outEC.innerHTML += '<br >LetAB2 (names) : ' + Object.getOwnPropertyNames(letAB2);
  outEC.innerHTML += '<br >LetAB3 (names) : ' + Object.getOwnPropertyNames(letAB3);
  outEC.innerHTML += '<br >LetAB (isFrozen) : ' + Object.isFrozen(LetAB);
  outEC.innerHTML += '<br >value | configure | add | delete';
  outEC.innerHTML += '<br >';

  LetAB.prototype.proOne = 100;
  Object.defineProperty(LetAB.prototype, 'proTwo', { writable: false });
  LetAB.prototype.proTwo = 200;       // as previously (writable: false), no effect - but not off
  LetAB.prototype.proFour = 400;
  delete(LetAB.prototype.proFour);    // off - but no error
  Object.defineProperty(LetAB.prototype, 'proSeven', { value: 700 });

  outEC.innerHTML += '<br >LetAB.prototype.proOne : ' + LetAB.prototype.proOne;
  outEC.innerHTML += '<br >LetAB.prototype.proTwo (wri-f) : ' + LetAB.prototype.proTwo;
  outEC.innerHTML += '<br >LetAB.prototype.proFour : ' + LetAB.prototype.proFour;
  outEC.innerHTML += '<br >LetAB.prototype.proSeven : ' + LetAB.prototype.proSeven;
  outEC.innerHTML += '<br >.................';

  // ----------------------------------------------------------
  // value | configure | delete | add - prototype-object : inactive
  Object.freeze(letAB3);
  outEC.innerHTML += '<br >letAB3 (names) : ' + Object.getOwnPropertyNames(letAB3);
  outEC.innerHTML += '<br >letAB3 (isFrozen) : ' + Object.isFrozen(letAB3);
  outEC.innerHTML += '<br >value | configure | delete | add';
  outEC.innerHTML += '<br >';

  // letAB3.proOne = 111.11;
  // Object.defineProperty(letAB3, 'proTwo', { enumerable: false });

  letAB3.proFour = 444.44;
  delete(letAB3.proFour);   // off - but not error

  // Object.defineProperty(letAB3, 'proFive', { value: 555.55 });

  outEC.innerHTML += '<br >letAB3.proOne : ' + letAB3.proOne;
  outEC.innerHTML += '<br >letAB3.proTwo (con-n) : ' + Object.keys(letAB3);
  outEC.innerHTML += '<br >letAB3.proFour : ' + letAB3.proFour;
  outEC.innerHTML += '<br >letAB3.proFive : ' + letAB3.proFive;
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
  let letAC1 = new ClassAC(11, 22, 33, 44);
  Object.preventExtensions(letAC1);
  outEC.innerHTML += '<br >letAC1 (names) : ' + Object.getOwnPropertyNames(letAC1);
  outEC.innerHTML += '<br >letAC1 (isExtensible) : ' + Object.isExtensible(letAC1);
  outEC.innerHTML += '<br >value | configure | delete | add';
  outEC.innerHTML += '<br >';

  letAC1.proOne = 11.11;
  Object.defineProperty(letAC1, 'proTwo', { enumerable: false });
  letAC1.proThree = 33.33;
  delete(letAC1.proThree);

  // Object.defineProperty(letAC1, 'proFive', { value: 55.55 });

  outEC.innerHTML += '<br >letAC1.proOne   : ' + letAC1.proOne;
  outEC.innerHTML += '<br >letAC1.proTwo (enu-f) : ' + Object.keys(letAC1);
  outEC.innerHTML += '<br >letAC1.proThree : ' + letAC1.proThree;
  outEC.innerHTML += '<br >letAC1.proFive  : ' + letAC1.proFive;
  outEC.innerHTML += '<br >................';

  // ---------------------------------------------------------------------------
  // configure | delete | add - class-object - inactive
  let letAC2 = new ClassAC(55, 66, 77, 88);
  Object.seal(letAC2);
  outEC.innerHTML += '<br >letAC2 (names) : ' + Object.getOwnPropertyNames(letAC2);
  outEC.innerHTML += '<br >letAC2 (isSealed) : ' + Object.isSealed(letAC2);
  outEC.innerHTML += '<br >value | configure | delete | add';
  outEC.innerHTML += '<br >';

  letAC2.proOne = 55.55;

  // Object.defineProperty(letAC2, 'proTwo', { enumerable: false });
  letAC2.proThree = 77.77;    // inactive - no error
  delete(letAC2.proThree);

  // Object.defineProperty(letAC2, 'proFive', { value: 99.99 });

  outEC.innerHTML += '<br >letAC2.proOne   : ' + letAC2.proOne;
  outEC.innerHTML += '<br >letAC2.proTwo (enu-f) : ' + Object.keys(letAC2);
  outEC.innerHTML += '<br >letAC2.proThree : ' + letAC2.proThree;
  outEC.innerHTML += '<br >letAC2.proFive  : ' + letAC2.proFive;
  outEC.innerHTML += '<br >................';

  // ---------------------------------------------------------------------------
  // value | configure | delete | add - class-object - inactive
  let letAC3 = new ClassAC(111, 222, 333, 444);
  Object.freeze(letAC3);
  outEC.innerHTML += '<br >letAC3 (names) : ' + Object.getOwnPropertyNames(letAC3);
  outEC.innerHTML += '<br >letAC3 (isFrozen) : ' + Object.isFrozen(letAC3);
  outEC.innerHTML += '<br >value | configure | delete | add';
  outEC.innerHTML += '<br >';

  letAC3.proOne = 55.55;

  // Object.defineProperty(letAC3, 'proTwo', { enumerable: false });
  letAC3.proThree = 77.77;    // inactive - no error
  delete(letAC3.proThree);

  // Object.defineProperty(letAC3, 'proFive', { value: 99.99 });

  outEC.innerHTML += '<br >letAC3.proOne   : ' + letAC3.proOne;
  outEC.innerHTML += '<br >letAC3.proTwo (enu-f) : ' + Object.keys(letAC3);
  outEC.innerHTML += '<br >letAC3.proThree : ' + letAC3.proThree;
  outEC.innerHTML += '<br >letAC3.proFive  : ' + letAC3.proFive;
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
// the (property) can (delete) from the corresponding object
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
  let letAA = {
    proOne: 11,
    proTwo: 22,
    method: function () {
      outEC.innerHTML += '<br >letAA.proOne : ' + this.proOne;
      outEC.innerHTML += '<br >letAA.proTwo : ' + this.proTwo;
    },
  };

  letAA.method();
  outEC.innerHTML += '<br >';

  letAA.proTwo = 33;
  delete(letAA.proOne);
  letAA.method();
  outEC.innerHTML += '<br >';

  // in-case of (Object) method defination, property-attributes has default value is (false)
  // property-attribute has defualt value for (data) is (ture)
  let letAB = Object.create({
    proOne: 10,
    proTwo: 20,
    method: function () {
      outEC.innerHTML += '<br >letAB.proOne : ' + this.proOne;
      outEC.innerHTML += '<br >letAB.proTwo : ' + this.proTwo;
    },
  });

  letAB.method();
  outEC.innerHTML += '<br >';

  letAB.proTwo = 30;
  delete(letAB.proOne);
  letAB.method();
  outEC.innerHTML += '<br >';

  // in-case of (defineProperty) method, all attribute has default value is (false)
  let letAC = { };
  Object.defineProperties(letAC, {
    proOne: { value: 11 },
    proTwo: { value: 22, configurable: true },
    method: {
      value: function () {
        outEC.innerHTML += '<br >letAC.proOne : ' + this.proOne;
        outEC.innerHTML += '<br >letAC.proTwo : ' + this.proTwo;
      },
    },
  });

  outEC.innerHTML += '<br ># proOne - all default | proTwo - configurable';
  letAC.method();
  outEC.innerHTML += '<br >';

  outEC.innerHTML += '<br >> proOne - delete | proTwo - change';
  letAC.proTwo = 33;
  delete(letAC.proOne);
  letAC.method();
  outEC.innerHTML += '<br >';

  // ---------------------------------------
  Object.defineProperties(letAC, {
    proThree: { value: 33, writable: true },
    proFour: { value: 44, configurable: true },
    methodTwo: {
      value: function () {
        outEC.innerHTML += '<br >letAC.proThree : ' + this.proThree;
        outEC.innerHTML += '<br >letAC.proFour : ' + this.proFour;
      },
    },
  });

  outEC.innerHTML += '<br ># proThree - writable | proFour - configurable | all value change';
  letAC.proThree = 30;
  letAC.proFour = 40;
  letAC.methodTwo();
  outEC.innerHTML += '<br >';

  outEC.innerHTML += '<br >> all delete';
  delete(letAC.proThree);
  delete(letAC.proFour);
  letAC.methodTwo();
  outEC.innerHTML += '<br >';

  // ------------------------------------------
  Object.defineProperties(letAC, {
    proThree: { writable: false },
    proFour: { value: 40, configurable: true },
  });

  outEC.innerHTML += '<br ># proThree - not-writable | proFour - configurable | all value change';
  letAC.proThree = 111;
  letAC.proFour = 222;
  letAC.methodTwo();
  outEC.innerHTML += '<br >';

  Object.defineProperty(letAC, 'proFour', { writable: true });

  outEC.innerHTML += '<br >> proThree - not-writable | proFour - configurable > writable';
  letAC.proThree = 333;
  letAC.proFour = 444;
  letAC.methodTwo();
  outEC.innerHTML += '<br >';

  // ------------------------------------------
  let letAD = Object.create({});

  Object.defineProperties(letAD, {
    proOne: { value: 11 },
    proTwo: { value: 22 },
    method: {
      value: function () {
        outEC.innerHTML += '<br >letAD.proOne : ' + this.proOne;
        outEC.innerHTML += '<br >letAD.proTwo : ' + this.proTwo;
      },
    },
  });

  outEC.innerHTML += '<br ># proOne - default | proTwo - default';
  outEC.innerHTML += '<br >letAD : ' + Object.getOwnPropertyNames(letAD);
  outEC.innerHTML += '<br >letAD : ' + Object.keys(letAD);
  outEC.innerHTML += '<br >';

  Object.defineProperties(letAD, {
    proThree: { value: 33, configurable: true },
    proFour: { value: 44, enumerable: true },
    methodOne: {
      value: function () {
        outEC.innerHTML += '<br >letAD.proThree : ' + this.proThree;
        outEC.innerHTML += '<br >letAD.proFour : ' + this.proFour;
      },
    },
  });

  outEC.innerHTML += '<br ># proThree - configurable | proFour - enumerable';
  outEC.innerHTML += '<br >letAD : ' + Object.getOwnPropertyNames(letAD);
  outEC.innerHTML += '<br >letAD : ' + Object.keys(letAD);
  outEC.innerHTML += '<br >';

  Object.defineProperties(letAD, {
    proThree: { enumerable: true },

    // proFour: { writable: true },
    // methodOne: { enumerable: true },
  });

  outEC.innerHTML += '<br >> proThree - enumerable | proFour - writable | methodOne - enumerable';
  outEC.innerHTML += '<br >letAD : ' + Object.getOwnPropertyNames(letAD);
  outEC.innerHTML += '<br >letAD : ' + Object.keys(letAD);
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

  let letAE = new ClassAE(10, 20);

  // let letAE = {
  //   proOne: 10,
  //   proTwo: 20,
  //   method: function () {
  //     outEC.innerHTML += '<br >letAE.proOne : ' + this.proOne;
  //     outEC.innerHTML += '<br >letAE.proTwo : ' + this.proTwo;
  //   },
  // };

  // let letAE = new Object({
  //   proOne: 10,
  //   proTwo: 20,
  //   method: function () {
  //     outEC.innerHTML += '<br >letAE.proOne : ' + this.proOne;
  //     outEC.innerHTML += '<br >letAE.proTwo : ' + this.proTwo;
  //   },
  // });

  // let letAE = Object.create({
  //   proOne: 10,
  //   proTwo: 20,
  //   method: function () {
  //     outEC.innerHTML += '<br >letAE.proOne : ' + this.proOne;
  //     outEC.innerHTML += '<br >letAE.proTwo : ' + this.proTwo;
  //   },
  // });

  // let letAE = {};
  // Object.defineProperties(letAE, {
  //   proOne: { vlaue: 30 },
  //   proTwo: { value: 40 },
  //   method: {
  //     value: function () {
  //       outEC.innerHTML += '<br >letAE.proOne : ' + this.proOne;
  //       outEC.innerHTML += '<br >letAE.proTwo : ' + this.proTwo;
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
  outEC.innerHTML += '<br >letAE (names) - ' + Object.getOwnPropertyNames(letAE);
  outEC.innerHTML += '<br >letAE (keys) - ' + Object.keys(letAE);
  outEC.innerHTML += '<br >';

  // ---------------------------------------------
  Object.defineProperties(letAE, {
    proOne: { value: 111 },
    proTwo: { value: 222 },
  });

  outEC.innerHTML += '<br ># attribute - true | method - false | value - change';
  outEC.innerHTML += '<br >letAE.method : ' + letAE.method();
  outEC.innerHTML += '<br >letAE (names): ' + Object.getOwnPropertyNames(letAE);
  outEC.innerHTML += '<br >letAE (keys) : ' + Object.keys(letAE);
  outEC.innerHTML += '<br >';

  Object.defineProperties(letAE, {
    proOne: { writable: false },
    proTwo: { enumerable: false },

    // method: { configurable: true },
  });

  letAE.proOne = 100;
  letAE.proTwo = 200;

  outEC.innerHTML += '<br >proOne - non-writable | proTwo - non-enumerable';
  outEC.innerHTML += '<br >letAE.method : ' + letAE.method();
  outEC.innerHTML += '<br >letAE (names): ' + Object.getOwnPropertyNames(letAE);
  outEC.innerHTML += '<br >letAE (keys) : ' + Object.keys(letAE);
  outEC.innerHTML += '<br >';

  Object.defineProperties(letAE, {
    proOne: { configurable: false },
    proTwo: { writable: false },
  });

  delete(letAE.proOne);
  delete(letAE.proTwo);
  outEC.innerHTML += '<br >proOne - non-configurable | proTwo - non-writable | delete all';
  outEC.innerHTML += '<br >letAE.method : ' + letAE.method();
  outEC.innerHTML += '<br >letAE (names): ' + Object.getOwnPropertyNames(letAE);
  outEC.innerHTML += '<br >letAE (keys) : ' + Object.keys(letAE);
  outEC.innerHTML += '<br >';

  Object.defineProperties(letAE, {
    // proOne: { configurable: true },
    proTwo: { value: 300 },
  });

  delete(letAE.proOne);
  delete(letAE.proTwo);
  outEC.innerHTML += '<br >proOne - configurable | proTwo - defineProperty | delete all';
  outEC.innerHTML += '<br >letAE.method : ' + letAE.method();
  outEC.innerHTML += '<br >letAE (names): ' + Object.getOwnPropertyNames(letAE);
  outEC.innerHTML += '<br >letAE (keys) : ' + Object.keys(letAE);
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
