import {move} from './NavigationButtons'

document.addEventListener('keydown',checkKey);

function checkKey(e) {

  
    if (e.keyCode === 38) {
        // up arrow
        move("up","manuel");
    }
    else if (e.keyCode === 40) {
        // down arrow
        move('down',"manuel");
    }
    else if (e.keyCode === 37) {
       // left arrow
       move('left',"manuel");
    }
    else if (e.keyCode === 39) {
       // right arrow
       move('right',"manuel");
    }

}
