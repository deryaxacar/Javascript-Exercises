var text = "javascript programming is fun!";

// repeat() metodu, stringi belirtilen sayıda tekrarlar.
var new_text = text.repeat(2); // stringi 2 kere tekrarlar.
document.write(new_text); // Çıktı: javascript programming is fun!javascript programming is fun!


// Tekrar sayısını 3 olarak belirleme
var greeting = "Hello! ";
var repeatedGreeting = greeting.repeat(3);
document.write(repeatedGreeting + "<br>"); // Çıktı: Hello! Hello! Hello! 

// Tekrar sayısını 0 olarak belirleme
var emptyRepeat = greeting.repeat(0);
document.write("'" + emptyRepeat + "'" + "<br>"); // Çıktı: ''

// Tekrar sayısını 1 olarak belirleme
var singleRepeat = greeting.repeat(1);
document.write(singleRepeat + "<br>"); // Çıktı: Hello! 

// Tekrar sayısını büyük bir sayı olarak belirleme
var largeRepeat = "A".repeat(5);
document.write(largeRepeat + "<br>"); // Çıktı: AAAAA
