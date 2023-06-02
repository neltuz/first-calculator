// 4 + 5 and then multiply by 8 = 72

// B racket
// O f
// D ivision
// M ultiplication
// A ddition
// S ubstraction

function add(x, y) {
  let nijal = x + y;
  console.log('First Add', nijal);
  return nijal;
}

function addAndThenMultiply(a, b, c) {
  let resultFromAdd = add(a, b);
  let finalResult = resultFromAdd * c;
  console.log('finalResult', finalResult);
}

addAndThenMultiply(4, 5, 8);
