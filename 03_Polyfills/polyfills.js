// Polyfills

/*
Polyfills are JavaScript libraries that provide functionality that is not natively available in the current environment or browser. 
They are used to add new features to older browsers or platforms that do not support them natively.

Why Use Polyfills?
1. Cross-Browser Compatibility: Polyfills allow you to write code that works the same across different browsers.
2. Performance Optimization: Polyfills can improve the performance of your code, especially in older browsers.
3. Accessibility: Polyfills can help make your code more accessible to users with disabilities.
*/

// Polyfill for Array.prototype.includes
if (!Array.prototype.includes) {
  Array.prototype.includes = function(element, start) {
    'use strict';
    if (this == null) {
      throw new TypeError('Array.prototype.includes called on null or undefined');
    }

    let array = Object(this);
    let length = array.length >>> 0;

    if (length === 0) {
      return false;
    }

    let index = start | 0;
    let currentIndex = Math.max(index >= 0 ? index : length - Math.abs(index), 0);

    while (currentIndex < length) {
      if (array[currentIndex] === element || (element !== element && array[currentIndex] !== array[currentIndex])) {
        return true;
      }
      currentIndex++;
    }

    return false;
  };
}

// Example usage
let arr = [1, 2, 3];
console.log(arr.includes(2)); // Output: true
console.log(arr.includes(4)); // Output: false

/*
bind polyfill: Creates a new function with a pre-set this value and arguments.
apply polyfill: Executes the function immediately with this and arguments passed dynamically.
call polyfill: Executes the function immediately with this and arguments passed dynamically.
*/