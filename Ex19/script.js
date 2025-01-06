// Değişken tanımlamaları
var number1 = 10;
var number2 = 20;

// `eval` kullanarak toplama işlemi
var sum = eval("number1 + number2");
document.write("Toplam: " + sum + "<br>"); // Toplam: 30

// Fonksiyon tanımlama
function multiply(a, b) {
    return a * b;
}

// `eval` kullanarak fonksiyon çağrısı
var product = eval('multiply(number1, number2)');
document.write("Çarpım: " + product + "<br>"); // Çarpım: 200

// Dinamik kod çalıştırma
var code = "var c = number1 - number2; c";
var difference = eval(code);
document.write("Fark: " + difference + "<br>"); // Fark: -10