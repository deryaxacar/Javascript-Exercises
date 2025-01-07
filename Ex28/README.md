## LastIndexOf Metodu Nedir?

`lastIndexOf()` metodu, bir string veya dizide belirli bir değerin **son geçtiği** konumun indeksini bulur. Eğer değer bulunamazsa, `-1` döndürür.

---

### Sözdizimi:

```javascript
str.lastIndexOf(searchValue[, fromIndex])
array.lastIndexOf(searchElement[, fromIndex])
```

- **searchValue / searchElement:** Aranacak değer.
- **fromIndex (Opsiyonel):** Aramaya başlanacak indeks. Varsayılan olarak `stringin/dizinin` sonudur.

---

### Kullanım

```javascript
var index = string.lastIndexOf(searchValue, fromIndex);
var index = array.lastIndexOf(searchElement, fromIndex);
```

---

### Örnek Kod:

**String Üzerinde lastIndexOf() Kullanımı**

```javascript
var text = "hello world, hello universe";
var index = text.lastIndexOf("hello");
document.write(index); // Örnek Çıktı: 13
```

---

**Dizi Üzerinde lastIndexOf() Kullanımı**

```javascript
var fruits = ["Elma", "Muz", "Portakal", "Elma"];
var index = fruits.lastIndexOf("Elma");
document.write(index); // Örnek Çıktı: 3

var indexNotFound = fruits.lastIndexOf("Kivi");
document.write("<br>" + indexNotFound); // Örnek Çıktı: -1

```

---

### Açıklamalar

**Stringlerde lastIndexOf()**

- Başlangıç İndeksi Belirleme:

```javascript
var text = "hello world, hello universe";
var index = text.lastIndexOf("hello", 12); // 12. indeksten geriye doğru arar
document.write(index); // Örnek Çıktı: 0

```
- `Büyük/Küçük` Harf Duyarlılığı:

```javascript
var text = "Hello World, hello world";
var index = text.lastIndexOf("World");
document.write(index); 
// "World" ile "world" farklı olduğu için büyük/küçük harf duyarlılığına dikkat!

```

---

**Dizilerde lastIndexOf()**

- Son Geçişin İndeksi:

```javascript
var fruits = ["Elma", "Muz", "Portakal", "Elma"];
var index = fruits.lastIndexOf("Elma");
document.write(index); // Örnek Çıktı: 3

```

- Elemanın Bulunmaması:

```javascript
var fruits = ["Elma", "Muz", "Portakal"];
var index = fruits.lastIndexOf("Kivi");
document.write(index); // Örnek Çıktı: -1

```

- Başlangıç İndeksi Belirleyerek Arama:

```javascript
var fruits = ["Elma", "Muz", "Portakal", "Elma"];
var index = fruits.lastIndexOf("Elma", 2);
document.write(index); // Örnek Çıktı: 0 (2. indeksten geriye doğru arar)

```

---

### Özet

`lastIndexOf()` metodu, JavaScript'te stringler ve diziler içinde belirli değerlerin son geçtiği konumu bulmak için etkili bir araçtır. Metod, aramaya başlamak için opsiyonel bir fromIndex parametresi de alır. Bu metotta da `büyük/küçük` harf duyarlılığı geçerlidir, bu yüzden aranan değerin doğru biçimde yazıldığından emin olmak gerekir.

---
