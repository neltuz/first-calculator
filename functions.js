function add(a, b) {
  let addition = a + b;
  console.log('addition', addition);
}

function multiply(a, b) {
  let multiply = a * b;
  console.log('multiply', multiply);
}

function multiplyAndAdd(a, b) {
  add(a, b);
  multiply(a, b);
}

multiplyAndAdd(3, 6);
