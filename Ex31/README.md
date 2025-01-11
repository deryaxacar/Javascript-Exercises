## StartsWith Metodu Nedir?

`startsWith()` metodu, bir dizgenin (string) belirli bir alt dizgeyle (substring) başlayıp başlamadığını kontrol eder ve sonuç olarak `true` veya `false` döndürür.

---

### Kullanım

Aşağıdaki örnekte, `text` değişkenindeki metnin `"Hello"` ile başlayıp başlamadığı kontrol edilir:

```javascript
var text = "Hello World!";
var result = text.startsWith("Hello");

document.write(result); // true
```

Yukarıdaki kodda:

- `text` değişkeni `"Hello World!"` ifadesini içerir.
- `text.startsWith("Hello")` ifadesi, textin `"Hello"` ile başlayıp başlamadığını kontrol eder.
- Metin `"Hello"` ile başladığı için geriye true döner.

---

### Parametreler

- **searchString (gerekli):** Kontrol edilecek alt dizge.
- **position (isteğe bağlı):** Aramanın başlayacağı `indeks` (varsayılan 0).

```javascript
var text = "Hello World!";
var result = text.startsWith("World", 6);
document.write(result); // true
```

- Bu örnekte, arama 6. indeksten (W karakterinin başladığı konum) itibaren yapılır ve sonuç true döner.

---

### Özet

`startsWith()` belirli bir substring ile başlayıp başlamadığını döndüren basit bir JavaScript metodudur. Kolay kullanımı ve yaygın desteği sayesinde, string işlemlerinde sıkça tercih edilir. `startsWith()` metodu modern tarayıcılarda ve `Node.js` ortamında desteklenmektedir. Eski tarayıcılarda kullanmak için polyfill eklemeniz gerekebilir. 

---