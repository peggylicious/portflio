// The goal here is to play a sound whenever a keyboard key is pressed
/*****************  STEPS  ********************* */

// Create an eventlistener to listen to keyboard events
// Play a sound when the event is fired
// Set up a transition for the selected html elements when event is fired

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    // console.log(e.keyCode);
}

function endTransition(e) {
    // if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
    console.log(e);
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', endTransition));
window.addEventListener('keydown', playSound);