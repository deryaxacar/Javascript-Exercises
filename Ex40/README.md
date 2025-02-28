## Italics Metodu Nedir ?

JavaScript’te `italics()` metodu, bir metni (string) HTML `<i>` etiketi içine yerleştirerek döndürür. Bu etiket, metnin tarayıcıda italik (eğik) stilde görüntülenmesini sağlar.

> **Not**: `italics()` gibi HTML ile ilgili string yöntemleri eski (legacy) sayılır ve günümüzde pek tercih edilmez. Metnin stil özelliklerini kontrol etmek için genellikle CSS kullanılır.

---

### Kullanım Örneği

```javascript
var text = "Hello World!";
var result = text.italics();

document.writeln(text);   // Orijinal metin: Hello World!
document.write(result);   // <i>Hello World!</i> olarak döner ve italik görünebilir.

```

### Açıklama

- `text.italics()`, text değerini `<i>` etiketi içerisinde bir string olarak döndürür.
- Orijinal `text` değişmez; `<i>` etiketi sadece çıktı görünümünü değiştirmeye yarar.

---

### Özet

`bold()` metodu, bir stringi `<i>` etiketiyle sararak tarayıcıda `italik` (eğik) biçimde görüntülenmesini sağlar. Modern projelerde ise bu tür stil değişiklikleri genellikle `CSS` yardımıyla yapılır.

---
