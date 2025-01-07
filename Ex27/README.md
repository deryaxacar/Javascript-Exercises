## IndexOf Metodu nedir ?

`indexOf()` metodu, bir string veya dizide belirli bir değerin ilk geçtiği konumun indeksini bulur. Eğer değer bulunamazsa, `-1` döndürür.

### Sözdizimi:

```Javascript
str.indexOf(searchValue[, fromIndex])
array.indexOf(searchElement[, fromIndex])

```

- `searchValue / searchElement:` Aranacak değer.
- `fromIndex (Opsiyonel):` Aramaya başlanacak indeks. Varsayılan olarak `0`'dır.

---

### Kullanım

```Javascript
var index = string.indexOf(searchValue, fromIndex);
var index = array.indexOf(searchElement, fromIndex);

```

---

### Örnek Kod 

**String Üzerinde indexOf() Kullanımı**

```Javascript
var text = "hello world";
var index = text.indexOf("world");
document.write(index); // Çıktı: 6
```

---

**Dizi Üzerinde indexOf() Kullanımı**

```Javascript
var fruits = ["Elma", "Muz", "Portakal", "Elma"];
var index = fruits.indexOf("Elma");
document.write(index); // Çıktı: 0

var indexNotFound = fruits.indexOf("Kivi");
document.write("<br>" + indexNotFound); // Çıktı: -1

```

---

### Açıklamalar 

**Stringlerde indexOf()**

- Başlangıç İndeksi Belirleme:

```javascript
var text = "hello world";
var index = text.indexOf("o", 5); // 5. indeksten itibaren arar
document.write(index); // Çıktı: 7

```

- `Büyük/Küçük` Harf Duyarlılığı:

```javascript
var text = "Hello World";
var index = text.indexOf("world");
document.write(index); // Çıktı: -1 (Büyük/küçük harf farklılığı)

```
---

**Dizilerde indexOf()**

- İlk Eşleşmenin İndeksi:

```javascript
var fruits = ["Elma", "Muz", "Portakal", "Elma"];
var index = fruits.indexOf("Elma");
document.write(index); // Çıktı: 0

```

- Elemanın Bulunmaması:

```javascript
var fruits = ["Elma", "Muz", "Portakal"];
var index = fruits.indexOf("Kivi");
document.write(index); // Çıktı: -1

```

---

### Özet

`indexOf()` metodu, JavaScript'te stringler ve diziler içinde belirli değerlerin konumlarını bulmak için basit ve etkili bir araçtır. Bulunan değerin ilk geçtiği indeks bilgisi, koşullu ifadeler ve veri manipülasyon işlemlerinde kullanılabilir. Ancak, `indexOf()` `büyük/küçük` harf duyarlı olduğu için aranan değerin doğru biçimde yazıldığından emin olunmalıdır.

---
