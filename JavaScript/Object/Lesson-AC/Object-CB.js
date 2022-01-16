///// OBJECTS PROTOTYPES ///////////////////////////////////////////////////////
// 1. object prototypes
// 2. prototype inheritance
// 3. adding properties and methods to (objects | constructor)
// 4. using the prototype property

////////////////////////////////////////////////////////////////////////////////
var outCB = document.createElement('div');
outCB.setAttribute('id', 'styvarwo');
document.body.appendChild(outCB);

////////////////////////////////////////////////////////////////////////////////
// # object prototypes | prototype inheritace
// all javascript objects inherit (prperties and methods) from a (prototype)
// -> we can not add new properties and methods to an existing object constructor
// -> and if we have to add properties and methods, then have to add it to the constructor function

// all javascript objects inherit (properties and methods) from a (prototype)
// -> (Date) object inherit from (Date.prototype)
// -> (Array) object inherit from (Array.prototype)
// -> (Person) object inherit from (Person prototype)
// the (Object.prototype) is on the top of the (prototype inheritance) chain
// -> (Date | Array | Person) objects inherit from (Object.prototype)

function ExBA() {

  // object constructor is as same as function
  function PersonConst(name, age, eyecolor) {
    var counter = 0;
    this.pName = name;
    this.pAge = age;
    this.pEyeColor = eyecolor;

    this.print = function () {
      outCB.innerHTML += '<br >pName     : ' + this.pName;
      outCB.innerHTML += '<br >pAge      : ' + this.pAge;
      outCB.innerHTML += '<br >pEyeColor : ' + this.pEyeColor;
    };
  }

  var varAA = new PersonConst('jamil', 22, 'black');
  var varAB = new PersonConst('kamal', 26, 'black');
  varAA.print();
  varAB.print();
  outCB.innerHTML += '<br >';

  // stand-alone function
  // here, nested (functions) and (local variables) are not defined as member
  // -> so, when the function is end, all of its statements and block of codes is end
  // -> there is no way to call any (variable or nested function) through its parent
  // NB : but if any (variable or nested function) is declared using (this) keyword and
  // -> then, if that main function is assigned as constructor to any variable,
  // -> then, it will react as object and can call that (variable or nested function) as
  // -> (property or method) trhough its (object)
  function PersonFunc(name, age, eyecolor) {
    var counter = 0;
    var pName = name;
    var pAge = age;
    var pEyeColor = eyecolor;

    function print() {
      outCB.innerHTML += '<br >pName     : ' + pName;
      outCB.innerHTML += '<br >pAge      : ' + pAge;
      outCB.innerHTML += '<br >pEyeColor : ' + pEyeColor;
    }

    // this.printProperty = function () {
    //   print();
    // };

    print();
  }

  var varAC = new PersonFunc('shimul', 18, 'blue');
  var varAD = new PersonFunc('palash', 28, 'brown');

  // varAC.printProperty();   // calling as method
  // varAD.printProperty();   // calling as method

  // varAC.print();   // can't call this way
  // varAD.print();   // can't call this way

  outCB.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # adding (properties and methods) to objects | using (prototype property)
// javascript (prototype) property allows to add new (properties) to object (constructor)
// javascript (prototype) property allows to add new (methods) to object (constructor)
// never modefy the (prototype) of standard javascript objects

// object
function ExBB() {
  var varAA = {
    proOne: 0,
    proTwo: 0,
    method: function () {
      this.proOne = arguments[0];
      this.proTwo = arguments[1];
    },
  };

  varAA.method(11, 22);

  // adding new method to existing object
  varAA.printMethod = function () {
    outCB.innerHTML += '<br >proOne : ' + this.proOne;
    outCB.innerHTML += '<br >proTwo : ' + this.proTwo;
  };

  varAA.printMethod();
  outCB.innerHTML += '<br >';

  // object constructor
  var VarAA = function () {
    this.proOne = arguments[0];
    this.proTwo = arguments[1];
  };

  var varAA = new VarAA(11, 22, 33);   // third argument is unusable
  var varAB = new VarAA(10, 20, 30);   // third argument is unusable

  // adding new method to declared object
  varAA.returnMethod = function () {
    return this.proOne + this.proTwo;
  };

  // adding new method to declared object
  varAB.returnMethod = function () {
    return this.proOne - this.proTwo;
  };

  // adding new property to existing constructor using (prototype)
  VarAA.prototype.proThree = arguments[2];  // arguments[] property only usable inside function

  // accessing new property of constructor through objects
  varAA.proThree = 33;
  varAB.proThree = 30;

  // adding new method to existing constructor using (prototype)
  VarAA.prototype.method = function () {
    outCB.innerHTML += '<br >proOne   : ' + this.proOne;
    outCB.innerHTML += '<br >proTwo   : ' + this.proTwo;
    outCB.innerHTML += '<br >proThree : ' + this.proThree;
  };

  // accessing new method through objects
  varAA.method();
  varAB.method();

  // accessing new methods of individual object through them
  outCB.innerHTML += '<br >proOne + proTwo : ' + varAA.returnMethod();
  outCB.innerHTML += '<br >proOne - proTwo : ' + varAB.returnMethod();
  outCB.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
outCB.innerHTML += 'ex-ba : object prototypes | prototype inheritance';
outCB.innerHTML += '<hr >'; ExBA();
outCB.innerHTML += '<br >ex-bb : adding (properties and methods) to objects | using (prototype property)';
outCB.innerHTML += '<hr >'; ExBB();
