///// OBJECTS ITERABLES ////////////////////////////////////////////////////////
// 1. javascript iterator
// 2. iterating over a string
// 3. iterating over an array
// 4. javascript iterators
// 5. home made iterable

////////////////////////////////////////////////////////////////////////////////
var outCC = document.createElement('div');
outCC.setAttribute('id', 'styleOne');
document.body.appendChild(outCC);

////////////////////////////////////////////////////////////////////////////////
// # iterators | iterating over a string | iterating over an array
function ExCA() {

  // using (for .. of) loop for (string and array)
  // the (for .. of) loop just can access the value
  for (const x of 'string-one')
    outCC.innerHTML += '<br > x -> ' + x;
  outCC.innerHTML += '<br >';

  for (const x of [1, 2, 3, 4, 5])
    outCC.innerHTML += '<br > x -> ' + x;
  outCC.innerHTML += '<br >';

  var varAA = 'string-two';
  var varAB = [11, 22, 33, 44, 55];

  // using (for .. in) loop for (string)
  // the (for .. in) loop can access the container and the value
  for (const x in varAA)
    outCC.innerHTML += '<br >varAA x -> ' + x + ' : ' + varAA[x];
  outCC.innerHTML += '<br >';

  // using (for .. of) loop for (array)
  for (const x of varAB)
    outCC.innerHTML += '<br >varAB x -> ' + x;
  outCC.innerHTML += '<br >';

  // using (for .. in) loop for (object), in case of object (for .. of) is used any more
  for (const x in { proOne: true, proTwo: false })
    outCC.innerHTML += '<br > x -> ' + x;
  outCC.innerHTML += '<br >';

  var varAC = { proOne: true, proTwo: false };

  for (const x in varAC)
    outCC.innerHTML += '<br >varAC x -> ' + x + ' : ' + varAC[x];
  outCC.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # iterable | return object | property value as argument
// -> return object | return as object defination (properties | methods)
function ExCB() {

  // return as object defination (properties)
  function funcOne() {
    var varAA = {
      proOne: arguments[0] + arguments[1],
      proTwo: arguments[0] - arguments[1],
    };

    return {
      proOne: varAA.proOne,
      proTwo: varAA.proTwo,
    };
  }

  const reAA = funcOne(11, 22);
  outCC.innerHTML += '<br >reAA : ' + reAA;
  outCC.innerHTML += '<br >reAA : ' + reAA.proOne;
  outCC.innerHTML += '<br >reAA : ' + reAA.proTwo;
  outCC.innerHTML += '<br >';

  // home made iterable
  // return as object defination (method)
  function funcTwo(arg) {
    var x = 0;
    var varAA = {
      proOne: arg.valueOne,
      proTwo: arg.valueTwo,
      method: function () {
        if (this.proOne < this.proTwo)
          return this.proOne + this.proTwo;
        else
          return this.proOne - this.proTwo;
      },
    };

    return {
      reMethod: function () {
        x += varAA.method() * 10;
        return { value: x, done: false };
      },
    };
  }

  const constAA = { valueOne: 10, valueTwo: 20 };
  const reAB = funcTwo(constAA);
  outCC.innerHTML += '<br >reAB -> ' + reAB;
  outCC.innerHTML += '<br >reAB.method -> ' + reAB.reMethod();
  outCC.innerHTML += '<br >reAB.method().value : ' + reAB.reMethod().value;
  outCC.innerHTML += '<br >reAB.method().value : ' + reAB.reMethod().value;
  outCC.innerHTML += '<br >reAB.method().value : ' + reAB.reMethod().value;
  outCC.innerHTML += '<br >';

  // javascript iterable
  // NB : the problem with a home made iterable, it does not support (for .. of) statement
  // a javascritp (iterable) is an (object) that has a (Symbol.iterator)
  // the (Symbol.iterator) is a function that returns a (next()) function
  // an (iterable) can be iterated over with the code (for .. of) statement
  var varAA = { };  // creating object

  varAA[Symbol.iterator] = function () {
    var n = 0;
    done = false;
    return {
      next() {
        n += 10;
        if (n == 100) done = true;
        return { value: n, done: done };
      },
    };
  };

  for (const num of varAA)
    outCC.innerHTML += '<br > -> ' + num;
  outCC.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// iterable | home made iterable | javascript iterable
// (objects) that can be (iterated) over with (for .. of) are called (iterable)
// technically, (iterables) must implement the (Symbol.iterator) method

// the (iterator protocol) defines how to produce a (sequence of values) from an (object)
// an (object) becomes an (iterator) when it implements a (next()) method
// the (next()) method must return an (object) with (two properties)
// -> value : (the next value), the value returned by the iterator (can be omitted if done is true)
// -> done : (true | false), (true) if iterator has compvared, (false) iterator produced new value

// the (for .. of) loop can be used to iterates over the elements of a string
// the (for .. of) loop can be used to iterates over the elements of an array
// the (for .. of) is from ES6

// javascript iterable
// NB : the problem with a (home made iterable), it does not support (for .. of) statement
// a javascritp (iterable) is an (object) that has a (Symbol.iterator) method
// the (Symbol.iterator) is a function that returns a (next()) function
// an (iterable) can be (iterated) over with the code (for .. of) statement

function ExCC() {
  var array = [11, 22, 33];

  for (var x in array)
    outCC.innerHTML += '<br >array[' + array + '] : ' + array[x];
  outCC.innerHTML += '<br >';

  for (var x of array)
    outCC.innerHTML += '<br >array : ' + x;
  outCC.innerHTML += '<br >----------------';

  // ---------------------------------------------------------------------------
  var varAA = 10;
  outCC.innerHTML += '<br >varAA : ' + varAA;

  function FuncAA() {
    var varLocal = arguments[0] + 10;
    return varLocal;
  }

  outCC.innerHTML += '<br >FuncAA-return : ' + FuncAA(varAA);
  outCC.innerHTML += '<br >varAA : ' + varAA;
  outCC.innerHTML += '<br >';

  // -------------------------------------
  function FuncAB() {
    var varLocal = arguments[0];
    return {
      proOne: varLocal += 10,
    };
  }

  var varAB = new FuncAB(varAA);
  outCC.innerHTML += '<br >varAA  : ' + varAA;
  outCC.innerHTML += '<br >varAB  : ' + varAB;
  outCC.innerHTML += '<br >varAB  : ' + varAB.proOne;
  outCC.innerHTML += '<br >varAB  : ' + varAB.proOne;
  outCC.innerHTML += '<br >FuncAB : ' + FuncAB(varAA);
  outCC.innerHTML += '<br >FuncAB : ' + FuncAB(varAA).proOne;
  outCC.innerHTML += '<br >FuncAB : ' + FuncAB(varAA).proOne;
  outCC.innerHTML += '<br >';

  // -------------------------------------
  function FuncAC() {
    this.proOne = arguments[0];
    return {
      proTwo: this.proOne += 10,
    };
  }

  var varAC = new FuncAC(varAA);
  outCC.innerHTML += '<br >varAC : ' + varAC;
  outCC.innerHTML += '<br >varAC : ' + varAC.proOne;
  outCC.innerHTML += '<br >varAC : ' + varAC.proTwo;
  outCC.innerHTML += '<br >varAC : ' + varAC.proTwo;
  outCC.innerHTML += '<br >FuncAC : ' + FuncAC(varAA);
  outCC.innerHTML += '<br >FuncAC : ' + FuncAC(varAA).proOne;
  outCC.innerHTML += '<br >FuncAC : ' + FuncAC(varAA).proTwo;
  outCC.innerHTML += '<br >FuncAC : ' + FuncAC(varAA).proTwo;
  outCC.innerHTML += '<br >';

  // -------------------------------------
  function FuncAD() {
    // var varLocal = arguments[0];
    return {
      proOne: function () {
        this.varLocal = 0;
        return { value: this.varLocal += 10 };
      },
    };
  }

  outCC.innerHTML += '<br >FuncAD : ' + FuncAD(varAA);
  outCC.innerHTML += '<br >FuncAD : ' + FuncAD(varAA).proOne();
  outCC.innerHTML += '<br >FuncAD : ' + FuncAD(varAA).proOne().value;
  outCC.innerHTML += '<br >FuncAD : ' + FuncAD(varAA).proOne().value;
  outCC.innerHTML += '<br >FuncAD : ' + FuncAD().proOne().value;
  outCC.innerHTML += '<br >';

  var varAD = new FuncAD();
  outCC.innerHTML += '<br >varAD : ' + varAD;
  outCC.innerHTML += '<br >varAD : ' + varAD.proOne();
  outCC.innerHTML += '<br >varAD : ' + varAD.proOne().value;
  outCC.innerHTML += '<br >varAD : ' + varAD.proOne().value;
  outCC.innerHTML += '<br >varAD : ' + varAD.proOne().value;
  outCC.innerHTML += '<br >varAA : ' + varAA;
  outCC.innerHTML += '<br >';

  // -------------------------------------
  function FuncAE() {
    varLocal = arguments[0];
    return {
      proOne: function () {
        varLocal += 10;
        return { value: varLocal };
      },
    };
  }

  outCC.innerHTML += '<br >FuncAE : ' + FuncAE(varAA);
  outCC.innerHTML += '<br >FuncAE : ' + FuncAE(varAA).proOne();
  outCC.innerHTML += '<br >FuncAE : ' + FuncAE(varAA).proOne().value;
  outCC.innerHTML += '<br >FuncAE : ' + FuncAE(varAA).proOne().value;
  outCC.innerHTML += '<br >FuncAE : ' + FuncAE().proOne().value;
  outCC.innerHTML += '<br >';

  var varAE = new FuncAE(varAA);
  outCC.innerHTML += '<br >varAE : ' + varAE;
  outCC.innerHTML += '<br >varAE : ' + varAE.proOne();
  outCC.innerHTML += '<br >varAE : ' + varAE.proOne().value;
  outCC.innerHTML += '<br >varAE : ' + varAE.proOne().value;
  outCC.innerHTML += '<br >varAE : ' + varAE.proOne().value;
  outCC.innerHTML += '<br >varAA : ' + varAA;
  outCC.innerHTML += '<br >varLocal : ' + varLocal;
  outCC.innerHTML += '<br >';

  // -------------------------------------
  var varGlobal = null;
  function FuncAF() {
    varGlobal += 10;
    return varGlobal;
  }

  outCC.innerHTML += '<br >FuncAF : ' + FuncAF();
  outCC.innerHTML += '<br >FuncAF : ' + FuncAF();
  outCC.innerHTML += '<br >';

  // -------------------------------------
  function FuncAG() {
    var local = arguments[0];

    // function Nested() {
    //   local += 10;
    //   return local;
    // }

    return {
      // function Nested() {
      //   local += 10;
      //   return local;
      // }

      Nested: function () {
        local += 10;
        return local;
      },
    };
  }

  outCC.innerHTML += '<br >FuncAG : ' + FuncAG(0);
  outCC.innerHTML += '<br >FuncAG : ' + FuncAG(0).Nested();
  outCC.innerHTML += '<br >FuncAG : ' + FuncAG(0).Nested();
  outCC.innerHTML += '<br >FuncAG : ' + FuncAG().Nested();
  outCC.innerHTML += '<br >FuncAG : ' + FuncAG(0).Nested();

  // outCC.innerHTML += '<br >FuncAG : ' + Nested();
  outCC.innerHTML += '<br >';

  var varAG = new FuncAG(varAA);
  outCC.innerHTML += '<br >varAG : ' + varAG;
  outCC.innerHTML += '<br >varAG : ' + varAG.Nested();
  outCC.innerHTML += '<br >varAG : ' + varAG.Nested();
  outCC.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // javascript iterable ----------- concept incompvare
  // Create an Object
  const myNumbers = {};

  // Make it Iterable
  // -> here, (next()) is a built-in (method/property) for (Symbol.iterator) method
  myNumbers[Symbol.iterator] = function () {
    var n = 0;
    done = false;
    return {
      next() {
        n += 10;
        if (n == 100) done = true;
        return { value: n, done: done };
      },
    };
  };

  // # The Symbol.iterator method is called automatically by for..of.
  // # But we can also do it "manually":

  var iterator = myNumbers[Symbol.iterator]();

  while (true) {
    const result = iterator.next();
    if (result.done) break;

    outCC.innerHTML += '<br >myNumbers - ' + result.value;
  }

  outCC.innerHTML += '<br >................';

  // iterating with (for ... of)
  for (const num of myNumbers) {
    // text += num +"<br>"
    outCC.innerHTML += '<br >myNumbers : ' + num;
  }

  outCC.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
outCC.innerHTML += 'ex-ca : iterators | iterating over a string | iterating over an array';
outCC.innerHTML += '<hr >'; ExCA();
outCC.innerHTML += '<br >ex-cb : iterable | return object | property value as arguments';
outCC.innerHTML += '<hr >'; ExCB();
outCC.innerHTML += '<br >ex-cc : iterable | home made iterable | javascript iterable';
outCC.innerHTML += '<hr >'; ExCC();
