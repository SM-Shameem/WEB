///// this keyword /////////////////////////////////////////////////////////////
// 1. the javascript (this) keyword
// 2. what is (this)
// 3. the (this) in a method
// 4. the (this) alone
// 5. the (this) in a function (default)
// 6. the (this) in a function (strict)
// 7. the (this) in a event handlers
// 8. object method binding
// 9. explicit function binding

////////////////////////////////////////////////////////////////////////////////
var outAB = document.createElement('div');
outAB.setAttribute('id', 'styvarwo');
document.body.appendChild(outAB);

////////////////////////////////////////////////////////////////////////////////
// # javascript (this) keyword
// javascript (this) keyword referes to the object it belongs to
// it has different values depending on where, it is used -
// -> in a method, (this) referes to the (owner-object)
// -> in a function, (this) referes to the (global-object)
// -> in a function (strict-mode), (this) is (undefined)
// -> alone, (this) also referes to the (global-object)
// -> alone (strict-mode), (this) referes to the (global-object)
// -> in an event, (this) referes to the (element) that received the event
// -> method like (call() and apply()) can refer (this) to (any-object)

////////////////////////////////////////////////////////////////////////////////
// # (this) used alone | (this) in a method
// when (this) used alone, the (owner) is the (globa-object)
// -> so, (this) refers to the (global-object)
// -> in a browser-window the (global-object) is ([object Window])
// -> in (strict-mode), (this) also refers to the (global-object) is ([object Window])

// in an object method, (this) refers to the (owner) of the method
// -> object is the owner all of its methods

function ExBA() {
  var varAA = {
    proOne: this,

    methodOne: function () {
      outAB.innerHTML += '<br >methodOne (default-this) : ' + this;
      outAB.innerHTML += '<br >proOne (this)    : ' + this.proOne;
    },

    methodTwo: function () {
      'use strict';
      outAB.innerHTML += '<br >methodTwo (strict-this) : ' + this;
      outAB.innerHTML += '<br >proOne (this)    : ' + this.proOne;
    },
  };

  // (this) used in object-method (default-mode)
  // (this) used in object-method (strict-mode)
  // (this) used as property-value (default-mode)
  varAA.methodOne();
  varAA.methodTwo();
  outAB.innerHTML += '<br >';
}

// (this) used alone (default-mode)
outAB.innerHTML += '<br >used alone (default-this) : ' + this;
outAB.innerHTML += '<br >';

////////////////////////////////////////////////////////////////////////////////
// # (this) in a function (default) | (this) in a function (strict)
// in a function, the owner of the function is the (default) binding for (this)
// -> so, in a function, (this) refers to the global-object [object Window]

// javascript (strict-mode) does not allow default binding
// -> so, when used in a function, in (strict) mode, (this) is (undefined)

function ExBB() {
  function nestedDefault() {
    outAB.innerHTML += '<br >function (default-this) : ' + this;
  }

  function nestedStrict() {
    'use strict';
    outAB.innerHTML += '<br >function (strict-this) : ' + this;
  }

  nestedDefault();
  nestedStrict();
  outAB.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # (this) in a event-handlers
// in HTML event-handlers, (this) refers to the HTML element that received the event

function ExBC() {

  // (this) refers to the (HTML-button-element) that received the (onclick) event
  var element = document.createElement('button');
  element.setAttribute('onclick', 'this.innerHTML="button"');
  outAB.appendChild(element);

  outAB.innerHTML += '<br >';

  // without (this) HTML (onclick) event
  var elementA = document.createElement('button');
  elementA.setAttribute('onclick', 'document.getElementById("spanOne").innerHTML="<br >javascrip"');
  outAB.appendChild(elementA);

  var elementB = document.createElement('span');
  elementB.setAttribute('id', 'spanOne');
  outAB.appendChild(elementB);

  outAB.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # explicit-function binding | object-method binding
// the (call() and apply()) methods are predefined javascript methods
// -> they can both be used to call an object-method with another-object as argument

function ExBD() {
  var varAA = {
    proOne: 10,
    proTwo: 20,

    methodOne: function () {
      outAB.innerHTML += '<br >varAA.methodOne (explicit-function-binding) ......';
      outAB.innerHTML += '<br >varAA.methodOne : ' + this;
      outAB.innerHTML += '<br >proOne + proTwo : ' + (this.proOne + this.proTwo);
    },

    methodTwo: function () {
      outAB.innerHTML += '<br >varAA.methodTwo (object-method-binding) ...';
      outAB.innerHTML += '<br >varAA.methodTwo : ' + this;
      outAB.innerHTML += '<br >proOne + proTwo : ' + (this.proOne + this.proTwo);

      outAB.innerHTML += '<br >varAA.methodTwo (using arguments) ...';
      outAB.innerHTML += '<br >proOne + proTwo : ' + (arguments[0].proOne + arguments[0].proTwo);
    },
  };

  var varAB = {
    proOne: 11,
    proTwo: 22,
  };

  varAA.methodOne.call(varAB);
  varAA.methodTwo(varAB);
}

////////////////////////////////////////////////////////////////////////////////
outAB.innerHTML += 'ex-ba : (this) used alone (default) | (this) in method (default/strict)';
outAB.innerHTML += '<hr >'; ExBA();
outAB.innerHTML += '<br>ex-bb : (this) in a function (default/strict)';
outAB.innerHTML += '<hr >'; ExBB();
outAB.innerHTML += '<br >ex-bc : (this) in a event-handlers';
outAB.innerHTML += '<hr >'; ExBC();
outAB.innerHTML += '<br >ex-bd : explicit-function binding | object-method binding';
outAB.innerHTML += '<hr >'; ExBD();
