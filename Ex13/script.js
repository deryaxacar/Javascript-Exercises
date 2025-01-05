var number1 = 10;
var number2 = 20;


var bool1 = number1 > number2; // > büyüktür işareti
document.write("boolean: " + bool1 + "<br>"); // false

var bool2 = number1 >= number2; // >= büyük eşit işareti
document.write("boolean: " + bool2 + "<br>"); // false

var bool3 = number1 < number2; // < küçüktür işareti 
document.write("boolean: " + bool3 + "<br>"); // true

var bool4 = number1 <= number2; // <= küçük eşit işareti 
document.write("boolean: " + bool4 + "<br>"); // true

var bool5 = number1 == number2; // == eşit mi işareti (sadece değer kontrolü yapar)
document.write("boolean: " + bool5 + "<br>"); // false

var bool5 = number1 === number2; // === aynı mı işareti (hem değer hem tür kontrolü yapar)
document.write("boolean: " + bool5 + "<br>"); // false

var bool6 = number1 > number2 && number1 % 2 == 0; // && operatorü her iki durumda doğruysa true döner.
document.write("boolean: " + bool6 + "<br>"); // false

var bool7 = number1 > number2 || number1 % 2 == 0; // || operatorü herhangi bir durum doğruysa true döner.
document.write("boolean: " + bool7 + "<br>"); // true