///// FUNCTION & OBJECT - MANIPULATING PRACTICE ////////////////////////////////
// 01. function and object, constructor, and class
// 02. event and object, constructor, and class
// 03. arrow function and object, constructor, and class

////////////////////////////////////////////////////////////////////////////////
var outAD = document.createElement('div');
outAD.setAttribute('id', 'styleThree');
document.body.appendChild(outAD);

////////////////////////////////////////////////////////////////////////////////
// # function and object, constructor, and class

// function
function ExDA() {
  function funcOne() {
    var local = arguments[0] * 2;
    outAD.innerHTML += '<br >function statement - ';
    return local;
  }

  // single object
  var varAA = {
    proOne: null,
    proTwo: null,
    method: function () {
      this.proOne = arguments[0];
      this.proTwo = arguments[1];
      return this.proOne + this.proTwo;
    },
  };

  // constructor - (proOne) is a property using (this)
  // constructor name should start with the capital varter
  function FuncTwo() {
    var local = 2;
    this.proOne = arguments[0] * local;
    outAD.innerHTML += '<br >constructor statement - ';
    return this.proOne;
  }

  // class declaration
  class classOne {
    constructor() {
      this.proOne = arguments[0];
      this.proTwo = arguments[1];
    }

    printValue() {
      outAD.innerHTML += '<br >this.proOne : ' + this.proOne;
      outAD.innerHTML += '<br >this.proTwo : ' + this.proTwo;
    }
  }

  funcOne(10);
  outAD.innerHTML += '<br >funcOne : ' + funcOne(20);
  outAD.innerHTML += '<br >proOne : ' + this.proOne;
  outAD.innerHTML += '<br >proTwo : ' + this.proTwo;
  outAD.innerHTML += '<br >method : ' + this.method(10, 20);

  var varAB = new FuncTwo(30);
  outAD.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # events and object, constructor, and class

function ExDB() {

}

////////////////////////////////////////////////////////////////////////////////
// # arrow function and object, constructor, and class

function ExDC() {

}

////////////////////////////////////////////////////////////////////////////////
outAD.innerHTML += 'ex-da : function and object, constructor, and class';
outAD.innerHTML += '<hr >'; ExDA();
outAD.innerHTML += '<br >ex-db : event and object, constructor, and class';
outAD.innerHTML += '<hr >'; ExDB();
outAD.innerHTML += '<br >ex-bc : arrow function and object, constructor, and class';
outAD.innerHTML += '<hr >'; ExDC();
