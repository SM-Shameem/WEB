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
  // accessors
  // ------------------------------------------------------------------------

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
      outCE.innerHTML += '<br >proOne : ' + this.proOne;
      outCE.innerHTML += '<br >proTwo : ' + this.proTwo;
      outCE.innerHTML += '<br >SetGet : ' + this.SetGet;
    },
  };

  letAA.method(10, 20);
  outCE.innerHTML += '<br >';

  let LetAB = function () {
    this.proOne = null;
    this.proTwo = null;
    this.method = function () {
      this.SetGet = { valueOne: arguments[0], valueTwo: arguments[1] };
      otuCE.innerHTML += '<br >proOne : ' + this.proOne;
      outCE.innerHTML += '<br >proTwo : ' + this.proTwo;
      outCE.innerHTML += '<br >SetGet : ' + this.SetGet;
    };
  };

  Object.defineProperty(letAB.prototype, 'SetGEt', {
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
