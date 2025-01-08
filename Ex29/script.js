var text = "WORLD world";
var search = text.search("World"); // Case-sensitive search
document.write(search); // Output: -1


var text1 = "WORLD world";
var search1 = text1.search(/World/i); // i is used for case-insensitive search
document.write(search1); // Output: 0