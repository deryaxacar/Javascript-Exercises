// String için length
var name = "Derya";
document.write("string Derya : " + name.length + "<br>"); // 5

// Number için length
var number = 52;
document.write("number 52 : " + number.length + "<br>"); // undefined

// Number'ı stringe çevirip length kullanma
var numberStr = number.toString(); // sayıyı stringe çevirme
document.write("string 52 : " + numberStr.length + "<br>"); // 2

// Array için length
var numbers = [1, 2, 3, 4, 5];
document.write("Array uzunluğu : " + numbers.length + "<br>"); // 5
