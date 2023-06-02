//1. function named squareIt: square of a number (x) and return the result
//2. function named squareAndAdd: from the return value from SqureIt add another number (y)
//3. Call function squareAndAdd(4, 300) to view the result of 316

function squareIt(x) {
  let c = x * x;
  console.log('wlecome to Mrbeasts McDonald Math', c);
  return c;
}

function squareItAndAdd(x, b) {
  let resultFromsquareIt = squareIt(x, b);
  let finalResult = resultFromsquareIt + b;
  console.log('finalResult', finalResult);
}

squareItAndAdd(5, 50);
