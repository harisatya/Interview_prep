"Idle timer using JavaScript 🔥";

// An idle timer is a feature that detects when a user has been inactive on a web page for a
// certain amount of time. Once the specified idle time has elapsed, the idle timer can trigger an
// action, such as logging the user out or displaying a pop-up message.

// To implement an idle timer in JavaScript, you can use event listener. These event listener
// provide methods that can detect user inactivity and trigger actions accordingly.

let idleTimer = 0;
const idleTimeout = 30000;

function resetIdleTimer() {
  idleTimer = 0;
}
function checkIdleTime() {
  idleTimer += 1000; //To check every second

  if (idleTimer >= idleTimeout) {
    //User is idle
    console.log("User is idle");
    //Remove all EventListener
    window.removeEventListener("mousemove", resetTimer);
    window.removeEventListener("keydown", resetTimer);
    window.removeEventListener("scroll", resetTimer);
    window.removeEventListener("click", resetTimer);
    window.removeEventListener("touchmove", resetTimer);
    window.removeEventListener("wheel", resetTimer);
    window.removeEventListener("resize", resetTimer);

    // Perfrom some action here, such as logging out the user or displaying a pop-up message

    resetIdleTimer();
  }
}
// Reset idle Timer whenever user performs an action
window.addEventListener("mousemove", resetTimer);
window.addEventListener("keydown", resetTimer);
window.addEventListener("scroll", resetTimer);
window.addEventListener("click", resetTimer);
window.addEventListener("touchmove", resetTimer);
window.addEventListener("wheel", resetTimer);
window.addEventListener("resize", resetTimer);
// check idle Time every second
setInterval(checkIdleTime, 1000);
