## Includes Metodu Nedir ?

`includes()` metodu, bir string içerisinde **belirli bir alt stringin (substring)** bulunup bulunmadığını kontrol eder. Eğer aradığınız metin bulunursa `true`, bulunamazsa `false` döndürür. Aynı metod, **ES2016 (ES7) itibarıyla** dizi (Array) nesneleri için de benzer işlev sunar.

### Sözdizimi

```javascript
string.includes(searchString[, position])
```

- **searchString:** Aranacak alt `string`.
- **position (Opsiyonel):** Aramaya başlanacak `indeks`. Varsayılan olarak `0`’dır.

```javascript
array.includes(searchElement[, fromIndex])
```

- **searchElement:** Dizide aranacak öğe.
- **fromIndex (Opsiyonel):** Aramaya başlanacak `indeks`. Varsayılan olarak `0`’dır.

---

### Örnek Kod

```javascript
var text = "hello world hello";
var result = text.includes("world"); 
// "world" stringi "hello world hello" içinde bulunduğu için true
document.writeln(result); // Çıktı: true

var res1 = text.includes("World", 12);
// Arama, 12. indeksten itibaren yapılır 
// (burada "World" büyük W ile, orijinal metinde "world" küçük w, ayrıca arama 12. karakterden sonra "hello" kısmında yapar)
document.write(res1); // Çıktı: false

var res2 = text.includes("deneme"); 
// "deneme" stringi bulunamadığı için false
document.write(res2); // Çıktı: false
```

---

### Açıklamalar

- **Büyük/Küçük Harf Duyarlılığı**
    - `includes()` metodu, `büyük/küçük` harf duyarlıdır. `"World"` ile `"world"` farklı sayılır.

- **Arama Başlangıç Noktası (position)**
    - İkinci parametreyi kullanarak aramayı belirli bir pozisyondan `(indeksten)` başlatabilirsiniz. Bu, uzun metinlerde gereksiz yere baştan arama yapmayı önleyebilir.

- **Dizilerde `includes()`**
    - Diziler için de benzer bir sözdizimi geçerlidir:

    ```javascript
    var fruits = ["Elma", "Muz", "Portakal"];
    var hasElma = fruits.includes("Elma");
    console.log(hasElma); // true
    ```

---

### Özet

`includes()` metodu, JavaScript’te string ve dizi üzerinde alt string veya öğe varlığını kontrol etmek için kullanışlı bir araçtır. Arama `büyük/küçük` harf duyarlıdır ve bulunan değerin ilk konumu üzerinde bir etkiye sahip olmaz, yalnızca `true` veya `false` döndürür. İhtiyaç duyduğunuzda `position (veya fromIndex)` parametresi ile aramayı belirli bir noktadan başlatabilirsiniz.

---
