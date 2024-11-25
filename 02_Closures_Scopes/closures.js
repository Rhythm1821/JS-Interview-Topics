// Closure

/*
Closure is a function that remembers variables from its outer scope even after the scope has exited.
Closures allow inner functions to access and manipulate the variables of their enclosing function, 
even when the outer function has finished execution.

Key Characteristics of Closures
1.Scope Preservation: The inner function "remembers" the variables from the scope in which it was created.
2. Encapsulation: Closures are often used to create private variables or functions.
3. Persistent State: Variables within the closure remain in memory as long as the closure exists.
*/

function createCounter() {
    let count = 0; // Private variable
    return {
      increment: function () {
        count++;
        return count;
      },
      decrement: function () {
        count--;
        return count;
      },
      getCount: function () {
        return count;
      },
    };
  }
  
  const counter = createCounter();
  console.log(counter.increment()); // Output: 1
  console.log(counter.increment()); // Output: 2
  console.log(counter.decrement()); // Output: 1
  console.log(counter.getCount());  // Output: 1

  
/*
Things to Watch Out For
Memory Leaks: Closures can unintentionally keep variables in memory longer than necessary if they are referenced by long-lived objects.
Overuse: Excessive closures can lead to confusing code and potential performance issues.
*/





// different use cases of scopes 

// 1. Variables declared in the outer function scope
/*
When a closure is created, it "remembers" the variables from its outer function's scope. If you access a variable, 
it will use the value from the outer scope at the time the closure was created.
*/

function outer() {
  let count=0
  return function increment(){
      count++
      return count
  }
}

const increment = outer()
console.log(increment())
console.log(increment())


// 2. Global Scope
// If the closure does not find a variable in its outer function scope, it will search in the global scope.

let globalVar = "I am a global variable";

function outer() {
  return function inner(){
    console.log(globalVar);
  }
}

const innerFunction = outer();
innerFunction() // I am a global variable


// 3. Variables Shadowed in the Closure

function outer() {
  let name = "Outer Scope";
  return function inner(){
    let name = "Inner Scope"; // Shadows the outer variable
    console.log(name);
  }    
}

const innerFn = outer();
innerFn() // Inner Scope