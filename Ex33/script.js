var text = "Hello World! World!";
var result = text.match(/World!$/); // $ is used to match the end of a string
var result1 = text.match(/World!/g); // g is used to match all occurrences of the pattern
document.writeln(result); // World!
document.write(result1); // World!, World!