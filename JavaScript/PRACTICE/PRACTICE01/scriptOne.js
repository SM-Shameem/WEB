
// var elementOne = document.createElement('div');
// elementOne.setAttribute('id', 'divOne');
// document.body.appendChild(elementOne);
//
// var divStyle = document.getElementById('divOne');
// divStyle.style.backgroundColor = '#336699';
// divStyle.style.color = 'white';
// divStyle.style.padding = '20px';
// divStyle.style.width = '60%';
// divStyle.style.margin = '10px';
// divStyle.style.fontSize = '24';

var elementTwo = document.createElement('button');
elementTwo.setAttribute('onclick', 'funcOne(this)');
elementTwo.setAttribute('id', 'buttonOne');
document.body.appendChild(elementTwo);

var buttonStyle = document.getElementById('buttonOne');
buttonStyle.innerHTML = 'Click';
buttonStyle.style.margin = '10px';
buttonStyle.style.padding = '4px';
buttonStyle.style.fontSize = '16px';
buttonStyle.style.fontWeight = '500';
buttonStyle.style.width = '100px';

function funcOne() {
  // var callDiv = document.getElementById('divOne');
  // callDiv.innerHTML += 'javascript';
  // callDiv.innerHTML += '<br >object-domain : ' + arguments[0];

  var element = document.createElement('div');
  document.body.appendChild(element);
  element.innerHTML += '<br >object-domain : ' + arguments[0];
}
