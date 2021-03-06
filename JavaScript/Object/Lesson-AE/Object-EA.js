///// OBJECTS Sets() ///////////////////////////////////////////////////////////
// 1. javascript Sets
// 2. set methods
// 3. how to create a set
// 4. the (new Set()) method
// 5. the (add()) method
// 6. the (forEach()) method
// 7. the (values()) method
// 8. the (key()) method
// 9. the (entries()) method
// 0. sets are objects

////////////////////////////////////////////////////////////////////////////////
var outEA = document.createElement('div');
outEA.setAttribute('id', 'styleOne');
document.body.appendChild(outEA);

////////////////////////////////////////////////////////////////////////////////
// # javascript sets | how to create a set | sets are objects
// a javascript (set) is a collection of (unique-values)
// each value can only occur once in a set
// a set can hold any value of any data-type

// you can create a javascript (set) by
// -> passing an (array) to (new Set())
// -> create a new (Set) and use (add()) method to add (values)
// -> create a new (Set) and use (add()) method to add (variables)
// pass an array to the (new Set()) constructor
// -> create a (set) and (add) literal-values
// -> create a (set) and (add) variables

// javascript sets are object
// -> the (typeof) returns (object)
// -> the (instanceof Set) returns (true)

function ExAA() {

  // declare a set
  const varters = new Set(['a', 'b', 'c']);

  // create iterator object of set (to access set-values)
  var setIterator = varters.values();

  // accessing set values
  outEA.innerHTML += '<br >varters : ' + varters;
  outEA.innerHTML += '<br >setIterator : ' + setIterator;
  outEA.innerHTML += '<br >set-items : ' + setIterator.next();
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >';

  outEA.innerHTML += '<br >varters (typeof) : ' + typeof (varters);
  outEA.innerHTML += '<br >varters (instanceof) : ';
  outEA.innerHTML += varters instanceof Set;
  outEA.innerHTML += '<br >';

  // add new items (same type) in existing set
  varters.add('d');
  varters.add('e');
  setIterator = varters.values();

  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >';

  // add new items (different type) in existing set
  varters.add(1);
  varters.add(true);
  setIterator = varters.values();

  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >';

  // add new iters (as variable) in existing set
  var setArray = [11.11, 22.22, 33.33];
  varters.add(setArray[0]);
  varters.add(setArray[1]);
  varters.add(setArray[2]);
  setIterator = varters.values();

  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >';

  var varArray = [10, 20, 30];
  varters.add(varArray);
  setIterator = varters.values();

  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >';

  var varObject = { proOne: 111, proTwo: 222 };
  varters.add(varObject);
  varters.add(varObject.proOne);
  varters.add(varObject.proTwo);
  setIterator = varters.values();

  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >set-items-value : ' + setIterator.next().value;
  outEA.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // -> Set() method
  // -> values() method (for create set-iterator)
  // -> next() method (for serfing set-elements, after creating set-iterator)
  // -> value property (to show set-item-value, this property is for (next()) method)
  // set only accept array-literal and array-variable or empty-set
  // single-value or object does not accept to (create) a set but can (add them) as an (element)
  const setOne = new Set();
  var iteratorOne = setOne.values();

  const setTwo = new Set([]);
  var iteratorTwo = setTwo.values();

  var varOne;
  const setThree = new Set(varOne);
  var iteratorThree = setThree.values();

  var varTwo = [1, 2];
  const setFour = new Set(varTwo);
  var iteratorFour = setFour.values();

  // var varThree = { proOne: 11, proTwo: 22 };
  // const setFive = new Set(varThree);
  // var iteratorFive = setFive.values();

  outEA.innerHTML += '<br >setOne-item   : ' + iteratorOne.next().value;
  outEA.innerHTML += '<br >setTwo-item   : ' + iteratorTwo.next().value;
  outEA.innerHTML += '<br >setThree-item : ' + iteratorThree.next().value;
  outEA.innerHTML += '<br >setFour-item  : ' + iteratorFour.next().value;
  outEA.innerHTML += '<br >setFour-item  : ' + iteratorFour.next().value;
  outEA.innerHTML += '<br >setFour-item  : ' + iteratorFour.next().value;

  // outEA.innerHTML += '<br >setFive-item  : ' + iteratorFive.next().value;

  outEA.innerHTML += '<br >';

  const setSix = new Set([1, 2.2, true, 'string', null]).values();
  outEA.innerHTML += '<br >setSix-item : ' + setSix.next().value;
  outEA.innerHTML += '<br >setSix-item : ' + setSix.next().value;
  outEA.innerHTML += '<br >setSix-item : ' + setSix.next().value;
  outEA.innerHTML += '<br >setSix-item : ' + setSix.next().value;
  outEA.innerHTML += '<br >setSix-item : ' + setSix.next().value;
  outEA.innerHTML += '<br >setSix-item : ' + setSix.next().value;
  outEA.innerHTML += '<br >setSix-item : ' + setSix.next();
  outEA.innerHTML += '<br >setSix-item : ' + setSix;
  outEA.innerHTML += '<br >setSix-item : ' + setSix.value;
  outEA.innerHTML += '<br >';

  // const setSeven = new Set(1, 2).values();

  var object = { proOne: 10, proTwo: 20 };
  var array = [1, 2];
  var varArray = [11, 22.42, true, 'string', null, object, object.proOne, array];
  const setSeven = new Set(varArray).values();
  outEA.innerHTML += '<br >setSeven-tiem : ' + setSeven.next().value;
  outEA.innerHTML += '<br >setSeven-tiem : ' + setSeven.next();
  outEA.innerHTML += '<br >setSeven-tiem : ' + setSeven.next().value;
  outEA.innerHTML += '<br >setSeven-item : ' + setSeven.next().value;
  outEA.innerHTML += '<br >setSeven-item : ' + setSeven.next().value;
  outEA.innerHTML += '<br >setSeven-item : ' + setSeven.next().value;
  outEA.innerHTML += '<br >setSeven-item : ' + setSeven.next().value;
  outEA.innerHTML += '<br >setSeven-item : ' + setSeven.next().value;
  outEA.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  const setEight = new Set();
  setEight.add(11);
  setEight.add(true);
  setEight.add('string');
  setEight.add(11.11);

  var iterator = setEight.values();
  outEA.innerHTML += '<br >setEight-item : ' + iterator.next().value;

  var varOne = 22;
  var varArray = [false, 'string'];
  var varObject = { proOne: null, proOne: undefined };

  setEight.add(varOne);
  setEight.add(varArray);
  setEight.add(varObject);

  iterator = setEight.values();

  outEA.innerHTML += '<br >setEight-item : ' + iterator.next().value;
  outEA.innerHTML += '<br >setEight-item : ' + iterator.next().value;
  outEA.innerHTML += '<br >setEight-item : ' + iterator.next().value;
  outEA.innerHTML += '<br >setEight-item : ' + iterator.next().value;
  outEA.innerHTML += '<br >setEight-item : ' + iterator.next().value;
  outEA.innerHTML += '<br >setEight-item : ' + iterator.next().value;
  outEA.innerHTML += '<br >setEight-item : ' + iterator.next().value;
  outEA.innerHTML += '<br >setEight-item : ' + iterator.next().value;
  outEA.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  const setNine = new Set([1, 2, 2, 3]);
  var snIterator = setNine.values();

  outEA.innerHTML += '<br >setNine-item : ' + snIterator.next().value;
  outEA.innerHTML += '<br >setNine-item : ' + snIterator.next().value;
  outEA.innerHTML += '<br >setNine-item : ' + snIterator.next().value;
  outEA.innerHTML += '<br >setNine-item : ' + snIterator.next().value;

  setNine.add('a');
  setNine.add('b');
  setNine.add('b');
  setNine.add(true);

  var varOne = 'string';
  var varTwo = false;
  var varThree = 'string';
  var varFour = [11, 22];
  var varFive = [11, 22];

  setNine.add(varOne);
  setNine.add(varTwo);
  setNine.add(varThree);
  setNine.add(varFour);
  setNine.add(varFive);

  snIterator = setNine.values();

  outEA.innerHTML += '<br >setNine-item : ' + snIterator.next().value;
  outEA.innerHTML += '<br >setNine-item : ' + snIterator.next().value;
  outEA.innerHTML += '<br >setNine-item : ' + snIterator.next().value;
  outEA.innerHTML += '<br >setNine-item : ' + snIterator.next().value;
  outEA.innerHTML += '<br >setNine-item : ' + snIterator.next().value;
  outEA.innerHTML += '<br >setNine-item : ' + snIterator.next().value;
  outEA.innerHTML += '<br >setNine-item : ' + snIterator.next().value;
  outEA.innerHTML += '<br >setNine-item : ' + snIterator.next().value;
  outEA.innerHTML += '<br >setNine-item : ' + snIterator.next().value;
  outEA.innerHTML += '<br >setNine-item : ' + snIterator.next().value;
  outEA.innerHTML += '<br >setNine-item : ' + snIterator.next().value;
  outEA.innerHTML += '<br >setNine-item : ' + snIterator.next().value;
  outEA.innerHTML += '<br >setNine-item : ' + snIterator.next().value;
  outEA.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # set methods & methods (add | forEach | values | key | entries)
// javascript (set) methods are below -
// -> 1. new Set() - creats a new set
// -> 2. add() - adds a new element to the set
// -> 3. devare() - removes an element from a set
// -> 4. has() - returns true if a value exists
// -> 5. clear() - removes all elements from a set
// -> 6. forEach() - invokes a callback for each element
// -> 7. values() - returns an iterator with all the values in a set
// -> 8. keys() - same as values()
// -> 9. entries() - returns an iterator with the [value, value] pairs from a set
// javascript (set) properties are below -
// -> 1. size - returns the number elements in a set

// add | forEach | values | key | entires
// -> add()     - if you add (equal) elements, only the (first) will be saved
// -> values()  - returns an iterator object containing all the values in a set
// --> after using (values()), you can use the (iterator-object) to access the (elements)
// -> key()     - a (set) has no (keys), the (keys()) returns the same as (values())
// --> this makes (sets) compatible with (maps)
// -> entries() - a (set) has no (keys),
// --> the (entries()) returns [value, value] pairs instead of [key, value] pairs
// --> this makes (sets) compatible with (maps)
// -> forEach() - invodes a function for each (set-element)

function ExAB() {
  var arrayOne = [11, 22];
  const setOne = new Set(arrayOne);
  var setIterator = setOne.values();

  outEA.innerHTML += '<br >setOne-element : ' + setIterator.next().value;
  outEA.innerHTML += '<br >setOne-element : ' + setIterator.next().value;

  setOne.add(33, 44);
  setIterator = setOne.values();

  outEA.innerHTML += '<br >setOne-element : ' + setIterator.next().value;
  outEA.innerHTML += '<br >setOne-element : ' + setIterator.next().value;
  outEA.innerHTML += '<br >setOne-element : ' + setIterator.next().value;
  outEA.innerHTML += '<br >setOne-element : ' + setIterator.next().value;

  var arrayTwo = [55, 66];
  setOne.add(arrayTwo);
  setIterator = setOne.values();

  outEA.innerHTML += '<br >setOne-element : ' + setIterator.next().value;
  outEA.innerHTML += '<br >setOne-element : ' + setIterator.next().value;
  outEA.innerHTML += '<br >setOne-element : ' + setIterator.next().value;
  outEA.innerHTML += '<br >setOne-element : ' + setIterator.next().value;

  setOne.add([77, 88]);
  setIterator = setOne.values();

  outEA.innerHTML += '<br >setOne-element : ' + setIterator.next().value;
  outEA.innerHTML += '<br >setOne-element : ' + setIterator.next().value;
  outEA.innerHTML += '<br >setOne-element : ' + setIterator.next().value;
  outEA.innerHTML += '<br >setOne-element : ' + setIterator.next().value;
  outEA.innerHTML += '<br >setOne-element : ' + setIterator.next().value;
  outEA.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // creating set-iterator | procedure of display set elements
  // 1. creating iterator - set.values() | set.keys()
  // 2. creating iterator - set.entires()
  // 3. display-set-element : iterator > set.next().value
  // 4. display-set-element : iterator > for..of
  // 5. display-set-element : set.forEach()
  const setTwo = new Set([11, 22, 33]);

  // element-display (procedure 1) - set.values() | set.next().value;
  // values() | keys() | entries()
  // var stIterator = setTwo.values();
  var stIterator = setTwo.keys();
  outEA.innerHTML += '<br >keys-next.value - setTwo-element : ' + stIterator.next().value;
  outEA.innerHTML += '<br >keys-next.value - setTwo-element : ' + stIterator.next().value;
  outEA.innerHTML += '<br >keys-next.value - setTwo-element : ' + stIterator.next().value;
  outEA.innerHTML += '<br >';

  // element-display (procedure 2) - set.values() | for..of
  // values() | keys() | entries() -
  stIterator = setTwo.entries();
  for (var x of stIterator)
    outEA.innerHTML += '<br >entries-loop-value - setTwo-element : ' + x;
  outEA.innerHTML += '<br >';

  // element-display (procedure 3) - set.forEach()
  setTwo.forEach(function (arg) {
    outEA.innerHTML += '<br >forEach - setTwo-element : ' + arg;
  });

  outEA.innerHTML += '<br >';

  // set-size - set.size
  outEA.innerHTML += '<br >setOne (size) : ' + setOne.size;
  outEA.innerHTML += '<br >setTwo (size) : ' + setTwo.size;
  outEA.innerHTML += '<br >';
}

function ExAC() {

  // size | has() | devare() | clear()
  const setThree = new Set();
  setThree.add(11);
  setThree.add(22);
  setThree.add(33);

  setThree.forEach(function (arg) { outEA.innerHTML += '<br >setThree : ' + arg; });

  outEA.innerHTML += '<br >setThree (size) : ' + setThree.size;

  outEA.innerHTML += '<br >setThree : ' + setThree.has(22);
  outEA.innerHTML += '<br >setThree : ' + setThree.has(44);

  setThree.devare(22);
  setThree.forEach(function (arg) { outEA.innerHTML += '<br >setThree : ' + arg; });

  outEA.innerHTML += '<br >setThree (size) : ' + setThree.size;

  setThree.clear();
  setThree.forEach(function (arg) { outEA.innerHTML += '<br >setThree : ' + arg; });

  outEA.innerHTML += '<br >setThree (size) : ' + setThree.size;
  outEA.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
outEA.innerHTML += 'ex-aa : javascript sets | how to create a set | sets are objects';
outEA.innerHTML += '<hr >'; ExAA();
outEA.innerHTML += '<br >ex-ab : set methods & (add | forEach | values | key | entries)';
outEA.innerHTML += '<hr >'; ExAB();
outEA.innerHTML += '<br >ex-ac : size | has | devare | clear';
outEA.innerHTML += '<hr >'; ExAC();
