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
// # javascript iterators | iterating over a string | iterating over an array
// objects that can be iterated over with (for .. of) are called iterable
// technically, iterables must implement the (Symbol.iterator) method

// the (iterator protocol) defines how to produce a (sequence of values) from an object
// an object becomes an (iterator) when it implements a (next()) method
// the (next()) method must return an object with two properties
// -> value : (the next value), the value returned by the iterator (can be omitted if done is true)
// -> done : (true | false), (true) if iterator has completed, (false) iterator produced new value

// the (for .. of) loop can be used to iterates over the elements of a string
// the (for .. of) loop can be used to iterates over the elements of an array
// the (for .. of) is from ES6

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
// # home made iterable | return object | property value as argument
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

  // home made iterable
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
outCC.innerHTML += 'ex-ca : iterators | iterating over a string | iterating over an array';
outCC.innerHTML += '<hr >'; ExCA();
outCC.innerHTML += '<br >ex-cb : home made iterable | return object | property value as arguments';
outCC.innerHTML += '<br >concept not clear ..................';
outCC.innerHTML += '<hr >'; ExCB();
