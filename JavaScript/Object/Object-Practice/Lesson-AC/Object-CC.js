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
    let letAA = {
      proOne: arguments[0] + arguments[1],
      proTwo: arguments[0] - arguments[1],
    };

    return {
      proOne: letAA.proOne,
      proTwo: letAA.proTwo,
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
    let letAA = {
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
        x += letAA.method() * 10;
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
    let n = 0;
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
// -> done : (true | false), (true) if iterator has completed, (false) iterator produced new value

// the (for .. of) loop can be used to iterates over the elements of a string
// the (for .. of) loop can be used to iterates over the elements of an array
// the (for .. of) is from ES6

// javascript iterable
// NB : the problem with a (home made iterable), it does not support (for .. of) statement
// a javascritp (iterable) is an (object) that has a (Symbol.iterator) method
// the (Symbol.iterator) is a function that returns a (next()) function
// an (iterable) can be (iterated) over with the code (for .. of) statement

function ExCC() {
  let array = [11, 22, 33];

  for (let x in array)
    outCC.innerHTML += '<br >array[' + array + '] : ' + array[x];
  outCC.innerHTML += '<br >';

  for (let x of array)
    outCC.innerHTML += '<br >array : ' + x;
  outCC.innerHTML += '<br >----------------';

  // ---------------------------------------------------------------------------
  let letAA = 10;
  outCC.innerHTML += '<br >letAA : ' + letAA;

  function FuncAA() {
    let letLocal = arguments[0] + 10;
    return letLocal;
  }

  outCC.innerHTML += '<br >FuncAA-return : ' + FuncAA(letAA);
  outCC.innerHTML += '<br >letAA : ' + letAA;
  outCC.innerHTML += '<br >';

  // -------------------------------------
  function FuncAB() {
    let letLocal = arguments[0];
    return {
      proOne: letLocal += 10,
    };
  }

  let letAB = new FuncAB(letAA);
  outCC.innerHTML += '<br >letAA  : ' + letAA;
  outCC.innerHTML += '<br >letAB  : ' + letAB;
  outCC.innerHTML += '<br >letAB  : ' + letAB.proOne;
  outCC.innerHTML += '<br >letAB  : ' + letAB.proOne;
  outCC.innerHTML += '<br >FuncAB : ' + FuncAB(letAA);
  outCC.innerHTML += '<br >FuncAB : ' + FuncAB(letAA).proOne;
  outCC.innerHTML += '<br >FuncAB : ' + FuncAB(letAA).proOne;
  outCC.innerHTML += '<br >';

  // -------------------------------------
  function FuncAC() {
    this.proOne = arguments[0];
    return {
      proTwo: this.proOne += 10,
    };
  }

  let letAC = new FuncAC(letAA);
  outCC.innerHTML += '<br >letAC : ' + letAC;
  outCC.innerHTML += '<br >letAC : ' + letAC.proOne;
  outCC.innerHTML += '<br >letAC : ' + letAC.proTwo;
  outCC.innerHTML += '<br >letAC : ' + letAC.proTwo;
  outCC.innerHTML += '<br >FuncAC : ' + FuncAC(letAA);
  outCC.innerHTML += '<br >FuncAC : ' + FuncAC(letAA).proOne;
  outCC.innerHTML += '<br >FuncAC : ' + FuncAC(letAA).proTwo;
  outCC.innerHTML += '<br >FuncAC : ' + FuncAC(letAA).proTwo;
  outCC.innerHTML += '<br >';

  // -------------------------------------
  function FuncAD() {
    // let letLocal = arguments[0];
    return {
      proOne: function () {
        this.letLocal = 0;
        return { value: this.letLocal += 10 };
      },
    };
  }

  outCC.innerHTML += '<br >FuncAD : ' + FuncAD(letAA);
  outCC.innerHTML += '<br >FuncAD : ' + FuncAD(letAA).proOne();
  outCC.innerHTML += '<br >FuncAD : ' + FuncAD(letAA).proOne().value;
  outCC.innerHTML += '<br >FuncAD : ' + FuncAD(letAA).proOne().value;
  outCC.innerHTML += '<br >FuncAD : ' + FuncAD().proOne().value;
  outCC.innerHTML += '<br >';

  let letAD = new FuncAD();
  outCC.innerHTML += '<br >letAD : ' + letAD;
  outCC.innerHTML += '<br >letAD : ' + letAD.proOne();
  outCC.innerHTML += '<br >letAD : ' + letAD.proOne().value;
  outCC.innerHTML += '<br >letAD : ' + letAD.proOne().value;
  outCC.innerHTML += '<br >letAD : ' + letAD.proOne().value;
  outCC.innerHTML += '<br >letAA : ' + letAA;
  outCC.innerHTML += '<br >';

  // -------------------------------------
  function FuncAE() {
    letLocal = arguments[0];
    return {
      proOne: function () {
        letLocal += 10;
        return { value: letLocal };
      },
    };
  }

  outCC.innerHTML += '<br >FuncAE : ' + FuncAE(letAA);
  outCC.innerHTML += '<br >FuncAE : ' + FuncAE(letAA).proOne();
  outCC.innerHTML += '<br >FuncAE : ' + FuncAE(letAA).proOne().value;
  outCC.innerHTML += '<br >FuncAE : ' + FuncAE(letAA).proOne().value;
  outCC.innerHTML += '<br >FuncAE : ' + FuncAE().proOne().value;
  outCC.innerHTML += '<br >';

  let letAE = new FuncAE(letAA);
  outCC.innerHTML += '<br >letAE : ' + letAE;
  outCC.innerHTML += '<br >letAE : ' + letAE.proOne();
  outCC.innerHTML += '<br >letAE : ' + letAE.proOne().value;
  outCC.innerHTML += '<br >letAE : ' + letAE.proOne().value;
  outCC.innerHTML += '<br >letAE : ' + letAE.proOne().value;
  outCC.innerHTML += '<br >letAA : ' + letAA;
  outCC.innerHTML += '<br >letLocal : ' + letLocal;
  outCC.innerHTML += '<br >';

  // -------------------------------------
  let letGlobal = null;
  function FuncAF() {
    letGlobal += 10;
    return letGlobal;
  }

  outCC.innerHTML += '<br >FuncAF : ' + FuncAF();
  outCC.innerHTML += '<br >FuncAF : ' + FuncAF();
  outCC.innerHTML += '<br >';

  // -------------------------------------
  function FuncAG() {
    let local = arguments[0];

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

  let letAG = new FuncAG(letAA);
  outCC.innerHTML += '<br >letAG : ' + letAG;
  outCC.innerHTML += '<br >letAG : ' + letAG.Nested();
  outCC.innerHTML += '<br >letAG : ' + letAG.Nested();
  outCC.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // javascript iterable ----------- concept incomplete
  // Create an Object
  const myNumbers = {};

  // Make it Iterable
  // -> here, (next()) is a built-in (method/property) for (Symbol.iterator) method
  myNumbers[Symbol.iterator] = function () {
    let n = 0;
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

  let iterator = myNumbers[Symbol.iterator]();

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
