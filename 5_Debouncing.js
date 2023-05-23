//***********Debouncing and Async and Defer Arrtibutes**************

// Async and Defer attributes

//The `async` and `defer` attributes are used in HTML to control the loading and execution 
//of external JavaScript files. They affect how the browser fetches and processes the scripts,
//providing different ways to optimize page loading and script execution.

//1. `async` attribute:
//    - When you include a script tag with the `async` attribute, the browser starts fetching 
//    the script file immediately while simultaneously continuing to parse and render the HTML document.
//    - Once the script file is fetched, it is executed asynchronously without blocking the 
//    rendering of the HTML document.
//    - Multiple scripts with the `async` attribute may load and execute in any order, depending 
//    on their network response time.
//    - The `async` attribute is suitable for scripts that do not have dependencies on other 
//    scripts or the DOM structure.
//    - Example: `<script src="script.js" async></script>`

// 2. `defer` attribute:
//    - When you include a script tag with the `defer` attribute, the browser starts fetching the 
//    script file immediately while parsing the HTML document.
//    - However, the script execution is deferred until the HTML parsing is complete.
//    - Scripts with the `defer` attribute are executed in the order they appear in the HTML document.
//    - The `defer` attribute is suitable for scripts that rely on the DOM structure or 
//    need to be executed in a specific order.
//    - Example: `<script src="script.js" defer></script>`

// Key differences:
// - The `async` attribute allows the browser to continue parsing the HTML document while 
// fetching and executing the script asynchronously.
// - The `defer` attribute allows the browser to continue parsing the HTML document while 
// fetching the script, but defers the script execution until the parsing is complete.
// - Scripts with the `async` attribute may execute out of order, while scripts with the `defer` 
// attribute execute in the order they appear in the HTML document.
// - If a script has both `async` and `defer` attributes, the `async` attribute takes precedence, 
// and the script will be executed asynchronously.

// Both attributes can improve page loading performance by allowing the browser to fetch scripts in
//  parallel with other resources and avoid blocking the HTML parsing. However, 
//  it's important to choose the appropriate attribute based on the script's dependencies and 
//  the required execution order to ensure correct functionality.
//-------------------------------

//Debouncing is a technique used in JavaScript to control the frequency of a function's execution,
//particularly in response to events like scrolling, resizing, or keystrokes.
//It limits the number of times a function is called by delaying its execution until
//a certain amount of time has passed since the last invocation.

//The purpose of debouncing is to optimize performance and prevent excessive function calls,
//especially in scenarios where an event can be triggered rapidly and frequently.
//By debouncing a function, you ensure that it is only executed after a "quiet period" without
//further invocations.

//Here's a simple implementation of a debounce function:


function debounce(func, delay) {
  let timeoutId;

  return function(...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}


//In this example, the `debounce` function takes two parameters: `func`, which represents 
//the function to be debounced, and `delay`, which specifies the quiet period in milliseconds.

//The debounced function returned by `debounce` uses a `timeoutId` variable to keep track of the
//ongoing timeout. When the debounced function is called, it clears the previous timeout (if any)
//using `clearTimeout(timeoutId)` and sets a new timeout using `setTimeout`. The actual execution of
//the debounced function `func` is delayed by the specified `delay` time.

//Here's an example of how you can use the debounce function:

function handleResize() {
  console.log('Window resized');
}

const debounceResize = debounce(handleResize, 200);

window.addEventListener('resize', debounceResize);


//In this example, the `handleResize` function is debounced using `debounce` with a delay of 200 
//milliseconds. The debounced function `debounceResize` is then attached as an event listener to 
//the window's `resize` event.

//When the window is resized, the `handleResize` function will only be executed after the 
//user stops resizing for 200 milliseconds. If the user continues to resize within that period,
//the execution will be delayed further.

//Debouncing is particularly useful when dealing with expensive operations or scenarios where you 
//want to optimize performance by reducing the number of function invocations. It helps in preventing
//unnecessary processing and allows you to respond to events in a controlled manner.


