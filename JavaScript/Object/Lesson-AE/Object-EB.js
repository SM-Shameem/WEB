///// OBJECTS MAPS() ///////////////////////////////////////////////////////////
// 1. javascript Maps
// 2. map methods
// 3. how to create a map
// 4. (new Map())
// 5. Map.set()
// 6. Map.get()
// 7. Map.size
// 8. Map.devare
// 9. Map.clear()
// 0. Map.has()
// 11. maps are objects
// 12. javascript object vs map
// 13. Map.forEach()
// 14. Map.keys()
// 15. Map.values()
// 16. Map.entries()
// 17. object as keys

////////////////////////////////////////////////////////////////////////////////
var outEB = document.createElement('div');
outEB.setAttribute('id', 'styvarwo');
document.body.appendChild(outEB);

////////////////////////////////////////////////////////////////////////////////
// # javascript Maps | how to create a map | maps are objects
// a (map) holds (key-value) pairs where the (keys) can be any (data-type)
// a (map) remembers the original (insertion order) of the (keys)
// a (map) has a (property) that represents the (size) of the (map)

// you can create a javascript map by -
// -> passing an array to (new Map())
// -> create a Map and use (Map.set())

// you can create a (map) by passing an (Array) to the (new Map()) constructor

// javascript (map) is an object
// -> the (typeof) return (object)
// -> the (instanceof Map) returns (true)

function ExBA() {

  // creating map with literal
  const fruits = new Map([
    ['apple', 500],
    ['bananas', 300],
    ['oranges', 200],
  ]);

  // inserting new element into existing map
  fruits.set('mango', 600);
  fruits.set('jackfruit', 100);

  // display map element
  outEB.innerHTML += '<br >fruits-item : ' + fruits.get('apple');
  outEB.innerHTML += '<br >fruits-item : ' + fruits.get('bananas');
  outEB.innerHTML += '<br >fruits-item : ' + fruits.get('oranges');
  outEB.innerHTML += '<br >fruits-item : ' + fruits.get('mango');
  outEB.innerHTML += '<br >fruits-item : ' + fruits.get('jackfruit');
  outEB.innerHTML += '<br >fruits-item : ' + fruits.get(100);
  outEB.innerHTML += '<br >';

  outEB.innerHTML += '<br >fruits (size) : ' + fruits.size;
  outEB.innerHTML += '<br >fruits : ' + typeof fruits;
  outEB.innerHTML += '<br >fruits : ' + (fruits instanceof Map);
  outEB.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // -> adding elements to existing empty map
  // -> map (keys, values) both can be different-types
  // -> if there are more than one (keys) are same, then the last one will be excepted
  // --> weather the (values) are same or different
  const mapOne = new Map();
  mapOne.set('a', 11);
  mapOne.set('b', 22);
  mapOne.set(1, 'a');
  mapOne.set(true, 'b');
  mapOne.set(11.1, false);

  outEB.innerHTML += '<br >mapOne-item : ' + mapOne.get('a');
  outEB.innerHTML += '<br >mapOne-item : ' + mapOne.get('b');
  outEB.innerHTML += '<br >mapOne-item : ' + mapOne.get(1);
  outEB.innerHTML += '<br >mapOne-item : ' + mapOne.get(true);
  outEB.innerHTML += '<br >mapOne-item : ' + mapOne.get(11.1);
  outEB.innerHTML += '<br >';

  mapOne.set('a', 11);
  mapOne.set('a', 22);
  mapOne.set('a', 33);

  outEB.innerHTML += '<br >mapOne-item : ' + mapOne.get('a');
  outEB.innerHTML += '<br >mapOne-item : ' + mapOne.get('b');
  outEB.innerHTML += '<br >mapOne-item : ' + mapOne.get(11);
  outEB.innerHTML += '<br >mapOne-item : ' + mapOne.get(false);
  outEB.innerHTML += '<br >mapOne (size) : ' + mapOne.size;
  outEB.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // creating (map) with (two-dimentional) array-variable
  var arrayOne = [[1, 'a']];
  const mapTwo = new Map(arrayOne);
  outEB.innerHTML += '<br >mapTwo-item : ' + mapTwo.get(1);

  var arrayTwo = [[1, 'a'], [2, 'b'], [3, 'c']];
  const mapThree = new Map(arrayTwo);

  // adding new elements to existing map (created with variable)
  mapThree.set(4, 'd');
  mapThree.set(5, 'e');

  // Map.set() method does not accept variable
  var mapElement = [[6, 'f']];
  mapThree.set(mapElement);

  outEB.innerHTML += '<br >mapThree-item : ' + mapThree.get(1);
  outEB.innerHTML += '<br >mapThree-item : ' + mapThree.get(2);
  outEB.innerHTML += '<br >mapThree-item : ' + mapThree.get(3);
  outEB.innerHTML += '<br >mapThree-item : ' + mapThree.get(4);
  outEB.innerHTML += '<br >mapThree-item : ' + mapThree.get(5);
  outEB.innerHTML += '<br >mapThree-item : ' + mapThree.get(6);
  outEB.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // map element as (object) | (key and value) both are variable
  const mapFour = new Map();
  var key = [1, 2, 3];
  var value = ['A', 'B', 'C'];
  mapFour.set(key[0], value[0]);
  mapFour.set(key[1], value[1]);
  mapFour.set(key[2], value[2]);

  outEB.innerHTML += '<br >mapFour-item : ' + mapFour.get(1);
  outEB.innerHTML += '<br >mapFour-item : ' + mapFour.get(2);
  outEB.innerHTML += '<br >mapFour-item : ' + mapFour.get(key[2]);

  var object = { proOne: 11, proTwo: 22 };
  mapFour.set(object);
  outEB.innerHTML += '<br >mapFour-item : ' + mapFour.get(object.proOne);
  outEB.innerHTML += '<br >mapFour-item : ' + mapFour.get(object.proTwo);
  outEB.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # map methods & (set | get | devare | clear | has | size)
// javascript (map) methods are below -
// -> 1. new Map() - create a new (map) object
// -> 2. set() - sets the (value) for a (key) in a (map)
// -> 3. get() - gets the (value) for a (key) in a (map)
// -> 4. clear() - removes all the elements from a (map)
// -> 5. devare() - removes a (map) element specified by a (key)
// -> 6. has() - returns (true) if a (key) exists in a (map)
// -> 7. forEach() - invokes a callback for each (key/value) pair in a (map)
// -> 8. entries() - returns an iterator object with the [key, value] pairs in a (map)
// -> 9. keys() - returns an iterator object with the (keys) in a (map)
// -> 10. values() - returns an (iterator object) of the (values) in a (map)
// javascript (map) properties are below -
// -> 1. size - returns the number of (map) elements

// Map.set() - you can (add elements) to a (map) with the (set()) method
// --> the (set()) method can also be used to change existing (Map) values
// Map.get() - the (get()) method (gets the value) to a (key) in a (map)
// Map.devare() - the (devare()) method removes a (map element)
// Map.clear() - the (clear()) method (removes all) the (elements) form a (map)
// Map.has() - the (has()) method returns (ture) if a (key exists) in a (map)
// Map.size - the (size) property (returns) the (number) of (elements) in a (map)

function ExBB() {
  const mapOne = new Map([
    [1, 'stringOne'],
    [2, 'stringTwo'],
    [3, 'stringThree'],
  ]);

  outEB.innerHTML += '<br >mapOne        : ' + mapOne.get(1);
  outEB.innerHTML += '<br >mapOne (size) : ' + mapOne.size;

  mapOne.set(4, 'stringFour');
  mapOne.set(5, 'stringFive');
  outEB.innerHTML += '<br >mapOne        : ' + mapOne.get(4);
  outEB.innerHTML += '<br >mapOne (size) : ' + mapOne.size;

  outEB.innerHTML += '<br >mapOne (has)    : ' + mapOne.has(5);
  outEB.innerHTML += '<br >mapOne (devare) : ' + mapOne.devare(2);
  outEB.innerHTML += '<br >mpaOne (has)    : ' + mapOne.has(2);
  outEB.innerHTML += '<br >mapOne (size)   : ' + mapOne.size;

  mapOne.set(2, 'stringTwo re');
  outEB.innerHTML += '<br >mapOne        : ' + mapOne.get(2);
  outEB.innerHTML += '<br >mapOne (has)  : ' + mapOne.has(2);
  outEB.innerHTML += '<br >mapOne (size) : ' + mapOne.size;

  mapOne.clear();
  outEB.innerHTML += '<br >mapOne (size)  : ' + mapOne.size;
  outEB.innerHTML += '<br >mapOne (has)   : ' + mapOne.has(1);

  mapOne.set(1, 'string-one');
  mapOne.set(2, 'string-two');
  mapOne.set(3, 'string-three');
  outEB.innerHTML += '<br >mapOne : ' + mapOne.get(1);
  outEB.innerHTML += '<br >mapOne (has) : ' + mapOne.has(2);
  outEB.innerHTML += '<br >mapOne (size) : ' + mapOne.size;
  outEB.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # forEach | keys | values | entries
// -> 1. forEach - invokes a callback for each (key/value) pair in a map
// -> 2. keys - returns an iterator object with the keys in a map
// -> 3. values - returns an iterator object with the values in map
// -> 4. entries - returns an iterator object with the [key, values] in a map

function ExBC() {
  const mapOne = new Map([
    [1, 11],
    [2, 22],
    [3, 33],
  ]);

  mapOne.forEach(function (argOne, argTwo) {
    outEB.innerHTML += '<br >mapOne-key[' + argOne + '] : ' + argTwo;
  });

  outEB.innerHTML += '<br >';

  var iterator = mapOne.values();
  outEB.innerHTML += '<br >mapOne : ' + mapOne;
  outEB.innerHTML += '<br >mapOne.values() : ' + mapOne.values();

  outEB.innerHTML += '<br >iterator : ' + iterator;
  outEB.innerHTML += '<br >mapOne : ' + iterator.next().value;
  outEB.innerHTML += '<br >mapOne : ' + iterator.next().value;
  outEB.innerHTML += '<br >mapOne : ' + iterator.next();
  outEB.innerHTML += '<br >';

  iterator = mapOne.keys();
  outEB.innerHTML += '<br >iterator : ' + iterator;
  outEB.innerHTML += '<br >mapOne : ' + iterator.next().value;
  outEB.innerHTML += '<br >mapOne : ' + iterator.next().value;
  outEB.innerHTML += '<br >mapOne : ' + iterator.next();
  outEB.innerHTML += '<br >';

  iterator = mapOne.entries();
  outEB.innerHTML += '<br >iterator : ' + iterator;
  outEB.innerHTML += '<br >mapOne : ' + iterator.next().value;
  outEB.innerHTML += '<br >mapOne : ' + iterator.next().value;
  outEB.innerHTML += '<br >mapOne : ' + iterator.next();
  outEB.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # javascript object vs maps | object as keys
// differences between javascript object and keys
// -> iterable - object not directly iterable | map directly iterable
// -> size - object does not have a size-property | map a has size-property
// -> key types - object keys must be strings (or symbols) | map keys can be any datatype
// -> key order - object keys are not well ordered | map keys ordered by insertion
// -> default - objec has default keys | map does not have default keys

// being able to use (objects as keys) is an important (map) feature
// -> (objectName) is the (key), not the (propertyName) or (propertyValue)

function ExBD() {
  class ClassOne {
    constructor() {
      this.proOne = arguments[0];
      this.proTwo = arguments[1];
    }

    printValue() {
      outEB.innerHTML += '<br >proOne : ' + this.proOne;
      outEB.innerHTML += '<br >proTwo : ' + this.proTwo;
    }
  }

  const setOne = new Set([11, 22]);
  const mapOne = new Map([['proOne', 11], ['proTwo', 22]]);

  var object = new ClassOne(11, 22);
  object.printValue();
  var setIterator = setOne.entries();
  outEB.innerHTML += '<br >setOne-item : ' + setIterator.next().value;
  outEB.innerHTML += '<br >setOne-iter : ' + setIterator.next().value;
  var mapIterator = mapOne.entries();
  outEB.innerHTML += '<br >mapOne-item : ' + mapIterator.next().value;
  outEB.innerHTML += '<br >mapOne-item : ' + mapIterator.next().value;
  outEB.innerHTML += '<br >';

  // ---------------------------------------------------------------------------
  // size property - object does not have | map has
  // outEB.innerHTML += '<br >varAA (size) : ' + varAA.size;
  outEB.innerHTML += '<br >mapOne (size) : ' + mapOne.size;
  outEB.innerHTML += '<br >setOne (size) : ' + setOne.size;
  outEB.innerHTML += '<br >';

  // iterating - object is not iterable | map is iterable
  mapOne.forEach(function (value, key) {
    outEB.innerHTML += '<br >map-key[' + key + '] : ' + value;
  });

  outEB.innerHTML += '<br >';

  // iterating map -----------------
  for (var x of mapOne.keys())
    for (var y of mapOne.values())
      outEB.innerHTML += '<br >mapOne-[' + x + '] : ' + y;
  outEB.innerHTML += '<br >';

  // iterating set ------------------
  for (var y of setOne)
    outEB.innerHTML += '<br >setOne- ' + y;
  outEB.innerHTML += '<br >';

  // iterating string ---------------
  for (var a of 'ab')
    outEB.innerHTML += '<br >string - ' + a;
  outEB.innerHTML += '<br >';

  // iterating array ----------------
  for (var b of [11, 22])
    outEB.innerHTML += '<br >array - ' + b;
  outEB.innerHTML += '<br >';

  // iterating object ---------------
  // for (var c of object)
  //   outEB.innerHTML += '<br >object - ' + object;
  outEB.innerHTML += '<br >object - is not directly iterable';
  outEB.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
outEB.innerHTML += 'ex-ba : javascript Maps | how to create a map | maps are objects';
outEB.innerHTML += '<hr >'; ExBA();
outEB.innerHTML += '<br >ex-bb : map methods & (set | get | clear | has | size | devare)';
outEB.innerHTML += '<hr >'; ExBB();
outEB.innerHTML += '<br >ex-bc : forEach | keys | values | entries';
outEB.innerHTML += '<hr >'; ExBC();
outEB.innerHTML += '<br >ex-bd : javascript object vs maps | object as keys';
outEB.innerHTML += '<hr >'; ExBD();
