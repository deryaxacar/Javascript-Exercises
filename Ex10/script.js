const pi = 3.14;
pi = 1; // Error: Assignment to constant variable.
pi = pi + 10; // Error: Assignment to constant variable.

const y;
y = 10; // Error: Missing initializer in const declaration.

var x = 10;
var sum = pi + x;
