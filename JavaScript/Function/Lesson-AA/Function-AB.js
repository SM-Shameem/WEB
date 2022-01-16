///// EVENTS ///////////////////////////////////////////////////////////////////
// 01. javascript events
// 02. HTML events
// 03. common HTML events
// 04. what can javascript do

////////////////////////////////////////////////////////////////////////////////
var outAB = document.createElement('div');
outAB.setAttribute('id', 'styvarwo');
document.body.appendChild(outAB);

////////////////////////////////////////////////////////////////////////////////
// # javascript events | HTML events
// -> HTMl events are things that happen to HTML elements
// -> when javascript used in HTML pages, javascript can react on these events

// -> an HTML event can be something the browser does, or something a user does
// -> here are some examples of HTMl events
// -> 1. an HTML web page has finished loading
// -> 2. an HTML input field was changed
// -> 3. an HTML button was clicked
// -> often, when events happen, you may want to do something
// -> javascript vars you execute code when events are detected
// -> HTML allows event handler attributes, with javascript code, to be added to HTML elements
// -> javascript code can be quoted with (single or double) quotes
// -> like -
// <element evnet='javascript code'>
// <element event="javascript code">
// -> javascript code is often several lines long.
//    it is more common to see event attribute calling function

outAB.innerHTML += 'ex-ba : javascript events | HTML events';
outAB.innerHTML += '<hr >';

var varAA = document.createElement('div');
varAA.setAttribute('onmouseout', 'outAB.innerHTML += "<br >onmouseout responce"');
outAB.appendChild(varAA);

var varAB = document.createElement('button');
varAB.setAttribute('onclick', 'outAB.innerHTML += "<br >clickEvent responce"');
outAB.appendChild(varAB);
outAB.innerHTML += '<br >';

function funcOne() {
  var local = null;
  local = '<br >' + arguments[0] + ' function-responce';
  return local;
}

var varAC = document.createElement('button');
varAC.setAttribute('onclick', 'outAB.innerHTML += funcOne("clickEvent")');
outAB.appendChild(varAC);
outAB.innerHTML += '<br >';

////////////////////////////////////////////////////////////////////////////////
// # common HTML events
// -> here is a list of some common HTML events
// -> 1. onclick - the user clicks an HTML element
// -> 2. onmouseover - the user moves the mouse over an HTML element
// -> 3. onmouseout - the user moves the mouse away from an HTML element
// -> 4. onkeydown - the user pushes a keyboard key
// -> 5. onchange - an HTML element has been changed
// -> 6. onload - the browser has finished loading in page

outAB.innerHTML += '<br >ex-bb : common HTML events';
outAB.innerHTML += '<hr >';

var varBA = document.createElement('div');
varBA.setAttribute('onclick', 'outAB.innerHTML += "<br >onclick-event"');
outAB.appendChild(varBA);

var varBB = document.createElement('div');
varBB.setAttribute('onmouseover', 'outAB.innerHTML += "<br >onmouseover-event"');
outAB.appendChild(varBB);

var varBC = document.createElement('div');
varBC.setAttribute('onmouseout', 'outAB.innerHTML += "<br >onmouseout-event"');
outAB.appendChild(varBC);

var varBD = document.createElement('div');
varBD.setAttribute('onkeydown', 'outAB.innerHTML += "<br >onkeydown-event"');
outAB.appendChild(varBD);

var varBE = document.createElement('div');
varBE.setAttribute('onload', 'outAB.innerHTML += "<br >onload-event"');
outAB.appendChild(varBE);
outAB.innerHTML += '<br >';

////////////////////////////////////////////////////////////////////////////////
// # what can javascript do
// -> event handlers can be used to handle and verify user input, user actions, and browser actions
// -> 1. things that should be done every time a page loads
// -> 2. things that should be done when the page is closed
// -> 3. action that should be performed when a user clicks a button
// -> 4. content that should be verified when a user inputs data
// -> and more ..
// -> many different methods can be used to var javascript works with events
// -> 1. HTML event attributes can execute javascript code directly
// -> 2. HTML event attributes can call javascript functions
// -> 3. you can assign your own event handler functions to HTML elements
// -> 4. you can prevent events from beign sent or being handled
// -> and more ..
// -> NB : HTML DOM will describe about event and event handlers

outAB.innerHTML += '<br >what can javascript do | any different methods can be used';
outAB.innerHTML += '<hr >';

// -> page load (onload - event only works with - body element)
var varCA = document.createElement('div');
varCA.setAttribute('onload', 'outAB.innerHTML += <br >page loaded');
outAB.appendChild(varCA);

// -> page closed
var varCB = document.createElement('div');
varCB.setAttribute('', 'outAB.innerHTML += <br >page closed');
outAB.appendChild(varCB);

// -> click a button
// -> user inputes data
// diffrent procedure used to (var javascript works with events) -
// -> direct code execution
// -> calling function
// -> own event handler function
// -> prevent events
