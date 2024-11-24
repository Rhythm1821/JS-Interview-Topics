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