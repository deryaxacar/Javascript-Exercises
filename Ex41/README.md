## Strike Metodu Nedir ?

JavaScript’te `strike()` metodu, bir metni (string) HTML `<strike>` etiketi içine yerleştirerek döndürür. Bu etiket, metnin tarayıcıda üzeri çizili (strikethrough) şekilde görüntülenmesini sağlar.

> **Not**: `strike()` gibi HTML ile ilgili string yöntemleri eski (legacy) sayılır ve günümüzde pek tercih edilmez. Metnin üzerinin çizilmesi veya diğer stil özelliklerini kontrol etmek için genellikle CSS kullanılır.

---

### Kullanım Örneği

```javascript
var text = "Hello World!";
var result = text.strike();

document.writeln(text);   // Orijinal metin: Hello World!
document.write(result);   // <strike>Hello World!</strike> olarak döner ve üzeri çizili görünebilir.


```

### Açıklama

- `text.strike()`, text değerini `<strike>` etiketi içerisinde bir string olarak döndürür.
- Orijinal `text` değişmez; `<strike>` etiketi sadece çıktı görünümünü değiştirmeye yarar.

---

### Özet

`strike()` metodu, bir stringi `<strike>` etiketiyle sararak tarayıcıda üzeri `çizili` (strikethrough) biçimde görüntülenmesini sağlar. Modern projelerde ise bu tür stil değişiklikleri genellikle `CSS` yardımıyla yapılır.

---
