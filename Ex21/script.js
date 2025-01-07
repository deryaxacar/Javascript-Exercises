//string
var text = "Javascript programming is fun!";
document.write(text + "<br>"); // Javascript programming is fun!

// slice() metodu, bir stringin belirli bir kısmını almak için kullanılır.
var new_text = text.slice(10); // 0'dan 10. karaktere kadar olan kısmı siler, kalanı alır.
document.write(new_text + "<br>"); // programming is fun!

var new_text2 = text.slice(10, 20); // 10'dan 20. karaktere kadar olan kısmı alır.
document.write(new_text2 + "<br>"); // programming

//dizi
var fruits = ["Elma", "Muz", "Portakal", "Armut", "Kivi"];
document.write(fruits + "<br>"); // Elma,Muz,Portakal,Armut,Kivi

// slice() metodu, bir dizinin belirli bir kısmını almak için kullanılır.
var new_fruits = fruits.slice(1); // 1. indeksten başlayarak sonuna kadar alır.
document.write(new_fruits + "<br>"); // Muz,Portakal,Armut,Kivi

var new_fruits2 = fruits.slice(1, 3); // 1. indeksten 3. indekse kadar olan kısmı alır.
document.write(new_fruits2 + "<br>"); // Muz,Portakal