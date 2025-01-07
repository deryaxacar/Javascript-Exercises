## SubString Metodu Nedir?

- `substring()` metodu, bir string'in belirli bir başlangıç ve bitiş indeksleri arasındaki kısmını döndürür. Bitiş indeksi dahil edilmez. Bu metod, orijinal string'i değiştirmez; bunun yerine, belirlenen aralıkta yeni bir string oluşturur.

---

**Söz Dizimi**

```Javascript
str.substring(startIndex, endIndex);

```

- **startIndex:** Kesmenin başlayacağı indeks (dahil edilir).
- **endIndex:** Kesmenin biteceği indeks (dahil edilmez). Eğer belirtilmezse, string'in sonuna kadar kesilir.

---

### Kullanım Şekli

```Javascript
var newString = originalString.substring(startIndex, endIndex);

```

---

**Örnek Kod**

Aşağıda, `substring()` metodunun nasıl kullanılacağını gösteren basit bir örnek bulunmaktadır:

```Javascript
var text = "hello world";

// 0'dan 5. karaktere kadar olan kısmı alır.
var new_text = text.substring(0, 5);
document.write(new_text + "<br>"); // Çıktı: hello

// 6. karakterden sonuna kadar olan kısmı alır.
var new_text2 = text.substring(6);
document.write(new_text2 + "<br>"); // Çıktı: world

```

---

### Farklı Kullanım Senaryoları

**Başlangıç ve Bitiş İndekslerinin Değiştirilmesi**

- `substring()` metodu, başlangıç indeksi bitiş indeksinden büyükse, iki indeksi yer değiştirir:

```Javascript
var text = "JavaScript";
var part = text.substring(7, 4);
document.write(part + "<br>"); // Çıktı: Scri

```

---

**Negatif İndeks Kullanımı**

- `substring()` metodu negatif indeksleri desteklemez. Negatif bir değer kullanıldığında, `indeks 0` olarak kabul edilir:

```Javascript
var text = "Hello World";
var part = text.substring(-3, 5);
document.write(part + "<br>"); // Çıktı: Hello

```

---

### Özet

`substring()` metodu, JavaScript'te string'lerin belirli bölümlerini almak için kullanışlı ve basit bir araçtır. Başlangıç ve bitiş indekslerini doğru belirleyerek, verilerinizi istediğiniz şekilde manipüle edebilirsiniz.

---