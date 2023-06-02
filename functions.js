// Defining functions
function add(a, b) {
  let addition = a + b;
  console.log('addition', addition);
}

// Defining functions
function multiply(a, b) {
  let multiply = a * b;
  console.log('multiply', multiply);
}

// Defining functions
function multiplyAndAdd(a, b) {
  //calling functions named add
  add(a, b);
  //calling functions  named multiply
  multiply(a, b);
}

//calling functions  named multiplyAndAdd
multiplyAndAdd(3, 6);

// to execute run this in Terminal - node functions.js

//New Learn about return from functions
