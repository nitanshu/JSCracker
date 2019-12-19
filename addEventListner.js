
const btn = document.querySelector('button');

function bgChange() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}   
function imageGif(){
    document.body.style.backgroundImage = 'image.gif'
}

btn.addEventListener('click', bgChange);
btn.addEventListener('mouseup', imageGif);
// you can call addEventListener('click', function() { ... }) on an element multiple times, with different functions specified in the second argument.
// This is impossible with event handler properties because any subsequent attempts to set a property will overwrite earlier ones
// element.onclick = function1;
// element.onclick = function2;