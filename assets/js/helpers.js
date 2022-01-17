//? FULLSCREEEN FUNCTION
//* Function to open fullscreen mode */
function openFullscreen() {
  var fullScreenBody = document.body;
  if (fullScreenBody.requestFullscreen) {
    fullScreenBody.requestFullscreen();
  } else if (fullScreenBody.webkitRequestFullscreen) { /* Safari */
    fullScreenBody.webkitRequestFullscreen();
  } else if (fullScreenBody.msRequestFullscreen) { /* IE11 */
    fullScreenBody.msRequestFullscreen();
  }
}

//* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { 
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { 
    /* IE11 */
    document.msExitFullscreen();
  }
}

//* Toggle Fullscreen */
function triggerFullscreen() {
  if (debug.fullScreenMode == true) {
    debug.fullScreenMode = false;
    closeFullscreen();
  } else {
    debug.fullScreenMode = true;
    openFullscreen();
  }
}

// ! Close window function  
function closeWindowFunc() {
  window.close();
}
//! End close function.
