## Repeat Metodu Nedir?

- `repeat()` metodu, bir string'in belirtilen sayıda tekrarlanmış halini döndürür. Orijinal string'i değiştirmez; bunun yerine, tekrarlanmış yeni bir string oluşturur.

### Sözdizimi:

```Javascript
str.repeat(count);

```

- **count:** String'in kaç kez tekrarlanacağını belirten pozitif bir tam sayı.

---

### Kullanım 

```Javascript
var newString = originalString.repeat(count);

```

- **originalString:** Tekrarlanacak olan orijinal string.
- **count:** Tekrar sayısını belirten pozitif tam sayı.

---

### Örnek Kod

Aşağıda, `repeat()` metodunun nasıl kullanılacağını gösteren basit bir JavaScript kod örneği bulunmaktadır:

```Javascript
var text = "javascript programming is fun!";

// repeat() metodu, stringi belirtilen sayıda tekrarlar.
var new_text = text.repeat(2); // stringi 2 kere tekrarlar.
document.write(new_text); // Çıktı: javascript programming is fun!javascript programming is fun!

```

---

### Daha Fazla Örnek

```Javascript
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

```

---

### Özet

`repeat()` metodu, JavaScript'te string'leri belirli sayıda tekrarlayarak yeni string'ler oluşturmak için kullanışlı ve etkili bir araçtır. Dinamik içerik oluşturma, tekrarlayan mesajlar veya belirli desenlerin oluşturulması gibi senaryolarda büyük kolaylık sağlar. Ancak, `count` parametresine dikkat etmek ve negatif veya geçersiz değerlerden kaçınmak önemlidir.

---