## Slice Metodu Nedir ?

`slice()` metodu, bir string'in veya dizinin belirli bir bölümünü kesip almanızı sağlar. Bu metod, iki parametre alabilir:

- **Başlangıç İndeksi (Opsiyonel):** Kesmenin başlayacağı `indeks`. Eğer belirtilmezse, varsayılan olarak 0 alınır.
- **Bitiş İndeksi (Opsiyonel):** Kesmenin biteceği `indeks`. Bu indeks dahil edilmez. Eğer belirtilmezse, kesme işlemi stringin veya dizinin sonuna kadar devam eder.

---

### Stringlerde `slice()`

- Stringlerde `slice()` metodu, belirli bir aralıktaki karakterleri alır.

**kullanım**

```Javascript
string.slice(beginIndex, endIndex);

```

---

### Dizilerde `slice()`

- Dizilerde `slice()` metodu, belirli bir aralıktaki öğeleri alır ve yeni bir dizi oluşturur.

```Javascript
array.slice(beginIndex, endIndex);

```

---

### Örnek Kod

- Aşağıda, `slice()` metodunun `string` ve `dizi` üzerinde nasıl kullanılacağını gösteren örnekler bulunmaktadır.

**String üzerinde kullanım***

```Javascript
var text = "Javascript programming is fun!";
document.write(text + "<br>"); // Javascript programming is fun!

// slice() metodu, bir stringin belirli bir kısmını almak için kullanılır.
var new_text = text.slice(10); // 0'dan 10. karaktere kadar olan kısmı siler, kalanı alır.
document.write(new_text + "<br>"); // programming is fun!

var new_text2 = text.slice(10, 20); // 10'dan 20. karaktere kadar olan kısmı alır.
document.write(new_text2 + "<br>"); // programming


```

---

**Dizi üzerinde kullanım**

```Javascript
var fruits = ["Elma", "Muz", "Portakal", "Armut", "Kivi"];
document.write(fruits + "<br>"); // Elma,Muz,Portakal,Armut,Kivi

// slice() metodu, bir dizinin belirli bir kısmını almak için kullanılır.
var new_fruits = fruits.slice(1); // 1. indeksten başlayarak sonuna kadar alır.
document.write(new_fruits + "<br>"); // Muz,Portakal,Armut,Kivi

var new_fruits2 = fruits.slice(1, 3); // 1. indeksten 3. indekse kadar olan kısmı alır.
document.write(new_fruits2 + "<br>"); // Muz,Portakal

```

- Yukarıdaki kod çalıştırıldığında, web sayfasında aşağıdaki çıktılar görüntülenir:

```zsh
Javascript programming is fun!
programming is fun!
programming
Elma,Muz,Portakal,Armut,Kivi
Muz,Portakal,Armut,Kivi
Muz,Portakal

```

---

### Özet

`slice()` metodu, JavaScript'te stringler ve diziler üzerinde belirli bir aralıkta veri almak için güçlü ve esnek bir araçtır. `Pozitif` ve `negatif` indekslerle esnek bir şekilde çalışabilmesi, kodunuzu daha okunabilir ve verimli hale getirir. `slice()` metodunun orijinal veriyi değiştirmemesi, veri manipülasyonunda güvenli bir şekilde kullanılmasını sağlar. Ancak, `slice()` metodunun `substring()` ve `substr()` gibi alternatif metodlarla birlikte bilinmesi, farklı senaryolar için en uygun yöntemi seçmenize yardımcı olacaktır.

---