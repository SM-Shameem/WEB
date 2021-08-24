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
outAB.setAttribute('id', 'styleTwo');
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

function ExBA() {

}

////////////////////////////////////////////////////////////////////////////////
// # (this) in a method or object-method binding and (this) used alone
// in an object method, (this) refers to the (owner) of the method
// -> object is the owner all of its methods

// when (this) used alone, the (owner) is the (globa-object)
// -> so, (this) refers to the (global-object)
// -> in a browser window the (global-object) is ([object Window])
// -> in (strict-mode), (this) also refers to the (global-object) is ([object Window])

function ExBB() {
  var varAA = {
    proOne: this,

    methodOne: function () {
      outBA.innerHTML += '<br >methodOne (this) : ' + this;
      outBA.innerHTML += '<br >proOne (this)    : ' + this.proOne;
    },
  };

  varAA.methodOne();
}

////////////////////////////////////////////////////////////////////////////////
// # (this) in a function (default) and (this) in a function (strict)
// in a function, the owner of the function is the (default) binding for (this)
// -> so, in a function, (this) refers to the global-object [object Window]

// javascript (strict-mode) does not allow default binding
// -> so, when used in a function, in (strict) mode, (this) is (undefined)

function ExBC() {

}

////////////////////////////////////////////////////////////////////////////////
// # (this) in a event-handlers
// in HTML event-handlers, (this) refers to the HTML element that received the event

function ExBD() {

}

////////////////////////////////////////////////////////////////////////////////
// # explicit-function binding
// the (call() and apply()) methods are predefined javascript methods
// -> they can both be used to call an object-method with another-object as argument

function ExBE() {

}

////////////////////////////////////////////////////////////////////////////////
outAB.innerHTML += 'ex-ba : javascript (this) keyword';
outAB.innerHTML += '<br >'; ExBA();
outAB.innerHTML += '<br >ex-bb : (this) in a method and when used alone (default and strict)';
outAB.innerHTML += '<br >'; ExBB();
outAB.innerHTML += '<br>ex-bc : (this) in a function (default and strict)';
outAB.innerHTML += '<br >'; ExBC();
outAB.innerHTML += '<br >ex-bd : (this) in a event-handlers';
outAB.innerHTML += '<br >'; ExBD();
outAB.innerHTML += '<br >ex-be : explicit-function binding';
outAB.innerHTML += '<br >'; ExBE();
