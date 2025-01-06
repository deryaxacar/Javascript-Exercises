// Farklı boşluk türleri içeren string
var complexText = "\t\n  Merhaba Dünya!  \n\t";
var temizComplexText = complexText.trim();
document.write("Temizlenmiş Complex Text: '" + temizComplexText + "'"); // Output: Merhaba Dünya!

// Boşluk içeren string
var text = "            deneme      ";
var result = text.trim();
document.write(result); // Output: deneme

// Boşluk içermeyen string
var noSpaceText = "JavaScript";
var resultNoSpace = noSpaceText.trim();
document.write("Boşluk Olmayan Metin: '" + resultNoSpace + "'"); // Output: JavaScript

// Sadece boşluklardan oluşan string
var onlySpaces = "     ";
var temizOnlySpaces = onlySpaces.trim();
document.write("Sadece Boşluklardan Oluşan Metin: '" + temizOnlySpaces + "'"); // Output: ''
