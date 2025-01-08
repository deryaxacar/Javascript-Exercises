var text = "hello world hello";
var result = text.includes("world");
var res1 = text.includes("World", 12); // Search starts from index 12
var res2 = text.includes("deneme"); 
document.writeln(result); // Output: true
document.write(res2); // Output: false
document.write(res1); // Output: false