function container() {
  const elementOne = document.getElementById('container');
  elementOne.style.width = '710px';
  elementOne.style.height = '510px';
  elementOne.style.margin = 'auto';
  elementOne.style.position = 'relative';
  elementOne.style.backgroundColor = '#DDDDDD';

  elementOne.style.borderRadius = '8px';
  elementOne.style.border = 'inset 2px #FFFFFF';
  return elementOne;
}

function object() {
  const elementTwo = document.getElementById('object');
  elementTwo.style.width = '110px';
  elementTwo.style.height = '35px';
  elementTwo.style.margin = '10px';
  elementTwo.style.padding = '38px 0px';
  elementTwo.style.position = 'absolute';
  elementTwo.style.borderRadius = '8px';
  elementTwo.style.border = 'outset 2px #666666';
  elementTwo.style.textAlign = 'center';
  elementTwo.style.fontSize = '16px';
  elementTwo.style.fontWeight = 'bold';
  elementTwo.style.color = 'white';

  var color = 0;
  if (arguments[0] == color) {
    elementTwo.style.backgroundColor = '#336699';
    color = 1;
  }

  return elementTwo;
}

var lock = 0;

function animation() {
  var id = null;
  var xAxis = 0;
  var yAxis = 0;
  var xLock = 0;
  var yLock = 0;
  var colorOne = 0;
  var colorTwo = 0;

  if (arguments[0] == lock) {
    id = setInterval(frame, 10);
    lock = 1;
  } else clearInterval(id);

  function frame() {
    object().innerHTML = 'X : ' + xAxis + '<br >Y : ' + yAxis;
    object().style.backgroundColor = 'rgb(' + colorOne + ',' + colorTwo + ', 0)';

    if (xAxis < 590 && xLock == 0) {
      xAxis++;
      object().style.left = xAxis + 'px';
      if (xAxis == 580) {
        xLock = 1;
        if (colorOne < 225) colorOne += 25;
        else colorOne = 0;
      }
    } else if (xAxis > 0 && xLock == 1) {
      xAxis--;
      object().style.left = xAxis + 'px';
      if (xAxis == 0) xLock = 0;
    }

    if (yAxis < 390 && yLock == 0) {
      yAxis++;
      object().style.top = yAxis + 'px';
      if (yAxis == 380) {
        yLock = 1;
        if (colorTwo < 225) colorTwo += 25;
        else colorTwo = 0;
      }
    } else if (yAxis > 0 && yLock == 1) {
      yAxis--;
      object().style.top = yAxis + 'px';
      if (yAxis == 0) yLock = 0;
    }
  }
}
