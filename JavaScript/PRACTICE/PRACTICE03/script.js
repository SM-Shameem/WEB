var widthVar = screen.width - 40;
var heightVar = screen.height - 35;

var container = document.createElement('div');
container.setAttribute('id', 'field');
document.body.appendChild(container);

container.style.width = widthVar + 'px';
container.style.height = heightVar + 'px';
container.style.backgroundColor = 'black';
container.style.border = 'groove 2px gray';
container.style.margin = '5px auto';
container.style.padding = '10px';
container.style.position = 'relative';

var object = document.createElement('div');
object.setAttribute('id', 'box');
container.appendChild(object);

object.style.width = '150px';
object.style.height = '100px';
object.style.borderRadius = '5px';
object.style.border = 'outset 2px #888888';
object.style.textAlign = 'center';
object.style.fontSize = '24px';
object.style.color = 'white';
object.style.paddingTop = '45px';
object.style.position = 'absolute';

var id = null;
var x = 0, y = 0;
var xLock = 0, yLock = 0;
// clearInterval(id);
id = setInterval(frame, 5);

function frame() {
    if (x < widthVar-150 && xLock == 0) {
      x++; 
      object.style.left = x + 'px'; 
    } else if (x > 0) {
      x--;
      object.style.left = x + 'px';
      
      if (x == 0) xLock = 0;
      else xLock = 1;
    }

    if (y < heightVar-125 && yLock == 0) {
      y++; 
      object.style.top = y + 'px'; 
    } else if (y > 0) {
      y--;
      object.style.top = y + 'px';
      
      if (y == 0) yLock = 0;
      else yLock = 1;
    }

    object.innerHTML = 'X : ' + x + '<br >Y : ' + y;
    object.style.backgroundColor = 'rgb(225, 125, 125)';
}
  
