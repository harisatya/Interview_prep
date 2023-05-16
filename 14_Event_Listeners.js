"Important Event Listener in JavaScript 🔥";
// In JavaScript, an event listener is a function that is attached to an HTML element and
// is triggered when a particular event occurs, such as a click, mouseover, or keypress
// event. Event listeners are used to add interactivity to web pages and enable them to respond to
// user actions.

// To add an event listener to an HTML element in JavaScript, you can use the addEventListener method.
// The method takes two arguments: the type of the event (e.g., "click") and the function to be called
// when the event occurs.Here are some commonly used Event Listener in JavaScript:

// 1. Click Event Listener:
// The click event is one of the most commonly used event types in JavaScript. It can be used to perform
// an action when a button is clicked, a link is clicked, or any other element is clicked.
// 2. Mouseover Event Listener:
// The mouseover event is triggered when the mouse cursor enters an element. It can be used to show a
// tooltip or highlight a part of the page.
// 3. Keydown Event Listener:
// The keydown event is triggered when a key is pressed down. It can be used to perform an action when
// a specific key is pressed, such as submitting a form when the enter key is pressed.
// 4. Scroll Event Listener:
// The scroll event is triggered when the user scrolls the page. It can be used to load more content as
// the user scrolls down, or to show a fixed header as the user scrolls up.
// 5. Resize Event Listener:
// The resize event is triggered when the window is resized. It can be used to adjust the layout of a
// page or to perform any other action when the window size changes.

// These are just a few examples of the many event listeners that can be used in JavaScript. Event
// listeners are an essential part of building interactive web pages, and they allow developers to
// respond to user actions and create dynamic and engaging user experiences.

// In my next post I will be discussing how to implement "Idle Timer" using these event listeners.

//Click Event Listener
const button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log("Button clicked!");
});
//Mouseover Event Listener
const element = document.querySelector(".element");
element.addEventListener("mouseover", () => {
  console.log("Mouseover event triggered!");
});
//Keydown Event listener
const input = document.querySelector("input");
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    console.log("Enter Key Pressed");
  }
});
//Scroll Event Listener
window.addEventListener("scroll", () => {
  console.log("Scroll Event Triggred");
});
//Resize
window.addEventListener("resize", () => {
  console.log("Resize Event Triggred");
});
