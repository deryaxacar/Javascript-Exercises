## Bold Metodu Nedir ?

JavaScript’te `bold()` metodu, bir metni (string) HTML `<b>` etiketi içine yerleştirerek döndürür. Bu etiket, metnin tarayıcıda kalın (bold) stilde görüntülenmesini sağlar.

> **Not**: `bold()` gibi HTML ile ilgili string yöntemleri eski (legacy) sayılır ve günümüzde pek tercih edilmez. Metnin kalınlık ya da diğer stil özelliklerini kontrol etmek için genellikle CSS kullanılır.

---

### Kullanım Örneği

```javascript
var text = "Hello World!";
var result = text.bold();

document.writeln(text);   // Orijinal metin: Hello World!
document.write(result);   // <b>Hello World!</b> olarak döner ve daha kalın görünebilir.
```

### Açıklama

- `text.bold()`, text değerini `<b>` etiketi içerisinde bir string olarak döndürür.
- Orijinal `text` değişmez; `<b>` etiketi sadece çıktı görünümünü değiştirmeye yarar.

---

### Özet

`bold()` metodu, bir stringi `<b>` etiketiyle sararak tarayıcıda kalın (bold) boyutta görüntülenmesini sağlar. Modern projelerde ise bu tür stil değişiklikleri genellikle `CSS` yardımıyla yapılır.

---
