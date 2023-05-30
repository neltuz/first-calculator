// create three functions
// function to create square of a number
// function to create cube of a number
// one function to create square and cube of a number at once;

function square(a) {
  let square = a * a;
  console.log('square', square);
}

function cube(a) {
  let cube = a * a * a;
  console.log('cube', cube);
}

function cubeAndSquare(a) {
  cube(a);
  square(a);
}

cubeAndSquare(5);
