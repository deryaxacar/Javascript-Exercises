## EndsWith Metodu Nedir ?

`endsWith()`, bir dizgenin (string) belirli bir alt dizgeyle (substring) bitip bitmediğini kontrol eder ve `true` veya `false` döndürür.

---

### Kullanım

Aşağıdaki örnekte, `text` değişkenindeki metnin `"World!"` ile bitip bitmediği kontrol edilir:

```javascript
var text = "Hello World!";
var result = text.endsWith("World!");
document.write(result); // true
```

Yukarıdaki kodda:

- `text` değişkeni `"Hello World!"` ifadesini içerir.
- `text.endsWith("World!")` ifadesi, textin `"World!"` ile bitip bitmediğini kontrol eder.
- Metin `"World!"` ile bittiği için geriye true döner.

---

### Parametreler

- **searchString (gerekli):** Kontrol edilecek alt dizge.
- **length (isteğe bağlı):** Metnin ele alınacak kısmının uzunluğu. Belirtilirse, dizgenin sadece ilk `length` karakteri üzerinden kontrol yapılır.

---

### Örnek 

```javascript
var text1 = "Hello World!";
var result1 = text1.endsWith("Hello", 5);
document.write(result1); // true
```

Bu örnekte, `length` parametresi `5` olarak belirlendiğinden `"Hello"` ile eşleşme, `"Hello World!"` metninin ilk `5` karakteri üzerinden yapılır (yani `"Hello"` kısmı) ve sonuç `true` olur.

---

### Özet

`endsWith()`, bir string’in belirli bir alt dizgeyle bitip bitmediğini `true / false` döndürerek kontrol eder. Son parametre olarak `length` verildiğinde, sadece o uzunluğa kadar olan kısım üzerinden kontrol yapılır.

---