///// OBJECTS ACCESSORS ////////////////////////////////////////////////////////
// 1. javascript object accessors
// 2. javascript accessors (getters and setters)
// 3. javascript getter (the get keyword)
// 4. javascript setter (the set keyword)
// 5. javascript function or getter
// 6. data quality
// 7. why using getters and setters
// 8. Object.defineProperty()

////////////////////////////////////////////////////////////////////////////////
var outBD = document.createElement('div');
outBD.setAttribute('id', 'styleTwo');
document.body.appendChild(outBD);

////////////////////////////////////////////////////////////////////////////////
// # object accessors (getters and setters) | the (get and set) keywords
// ECMAScript 5 (ES5 2009) introduced (getters and setters)
// getters and setters allow you to-define object accessors (computed properties)
// -> the (get) keyword is used for (getter)
// -> the (set) keyword is used for (setter)
// -> (get and set) keywords are used to define function
// -> (set) keyword is used to set the value for attribute through arguments, it cannot return
// -> (get) keyword is used to return value of attribute, it cannot receive arguments
// -> (getters and setters) function (name) should be same, though can be different
// NB: cannot add (getters and setters) to an existing object, through accessing notation
// -> in this case, have to use the (object.defineProperty()) method

// syntax of (getter and setter) method defination
// -> (getter and setter) method defination starts with (get and set) keyword
// -> then (method-name), then parentheses and last of all (cerly-bracket) of defination
// NB: (getter and setter) are also properties but they does not start with (property-name)
// -> (getter and setter) should have same (name)
// -> (getter and setter) should used as a pair
// -> (setter) must have a single parameter that takes an object as its argument
// -> that object may have one or more than one properties, depend on defination

function ExDA() {
  const constAA = {
    proOne: 10,
    proTwo: 20,
    method: function () {
      outBD.innerHTML += '<br >constAA-proOne : ' + this.proOne;
      outBD.innerHTML += '<br >constAA-proTwo : ' + this.proTwo;
    },

    // (set) method will have only one parameter, which can receive an object as its argument`
    // (set) method may have no parameter
    set SetGet(arg) {
      this.proOne = arg.valueOne;
      this.proTwo = arg.valueTwo;
    },

    // (get) method which has no parameter but can return data
    get SetGet() {
      return this.proOne + this.proTwo;
    },
  };

  // calling method
  constAA.method();

  // calling (getter-setter)
  // when we assign arguments then it calls the (set) method
  // in case of single-argument just have to assign the value else
  // -> have to assign value as like object-defination
  constAA.SetGet = { valueOne: 11, valueTwo: 22 };

  // calling (getter-setter)
  // without assign arguments, it will call the (get) method
  outBD.innerHTML += '<br >constAA.SetGet : ' + constAA.SetGet;
  outBD.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # method or getters | data quality | why use (get and set)
// a (getter) can be accessed as like (attribute), it does not use parentheses
// javasctip can secure better data quality when using (getters and setters)
// why using (getters and setters) -
// -> it gives simple syntax
// -> it allows equal syntax for properties and methods
// -> it can secure better data quality
// -> it is useful for doing things behind-the-scenes

function ExDB() {
  // object with (set-get)
  const constAA = {
    proOne: null,
    proTwo: undefined,

    set SetGet(arg) {
      this.proOne = 11;
      this.proTwo = 22;
      outBD.innerHTML += '<br >constAA-proOne : ' + this.proOne;
    },

    get SetGet() {
      this.proTwo = 22;
      outBD.innerHTML += '<br >constAA-proTwo : ' + this.proTwo;
    },
  };

  outBD.innerHTML += '<br >proOne : ' + constAA.SetGet;
  outBD.innerHTML += '<br >proTwo : ' + constAA.SetGet;
  outBD.innerHTML += '<br >';

  // object with (set-get)
  const constAB = {
    proOne: null,
    proTwo: undefined,

    set SetGet(arg) {
      this.proOne = arg;
      this.proTwo = arg + 10;
    },

    get SetGet() {
      outBD.innerHTML += '<br >constAB-proOne : ' + this.proOne;
      outBD.innerHTML += '<br >constAB-proTwo : ' + this.proTwo;
      return this.proOne + this.proTwo;
    },
  };

  outBD.innerHTML += '<br >proOne + proTwo : ' + constAB.SetGet;
  outBD.innerHTML += '<br >';

  constAB.SetGet = 111;
  constAB.SetGet;
  outBD.innerHTML += '<br >';

  outBD.innerHTML += '<br >proOne + proTwo : ' + constAB.SetGet;
  outBD.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
// # object.defineProperty() is used to add (getters and setters) to an existing object

function ExDC() {
  const constAA = {
    proOne: null,
    proTwo: undefined,
  };

  Object.defineProperty(constAA, 'SetGet', {
    set: function (arg) {
      this.proOne = arg.valueOne;
      this.proTwo = arg.valueTwo;
    },

    get: function () {
      outBD.innerHTML += '<br >constAA-proOne : ' + this.proOne;
      outBD.innerHTML += '<br >constAA-proTwo : ' + this.proTwo;
      return this.proOne + this.proTwo;
    },
  });

  constAA.SetGet = { valueOne: 11, valueTwo: 22 };
  outBD.innerHTML += '<br >' + constAA.SetGet;
  outBD.innerHTML += '<br >';
}

////////////////////////////////////////////////////////////////////////////////
outBD.innerHTML += 'ex-da : object accessors (getters and setters) | the (get | set) keywords';
outBD.innerHTML += '<hr >'; ExDA();
outBD.innerHTML += '<br >ex-db : method or getters | data quality | why use (get and set)';
outBD.innerHTML += '<hr >'; ExDB();
outBD.innerHTML += '<br >ex-bc : object.defineProperty used to add (getters and setters)';
outBD.innerHTML += '<hr >'; ExDC();
