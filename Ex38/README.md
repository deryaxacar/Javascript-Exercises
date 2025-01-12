## Small Metodu Nedir ?

JavaScript’te `small()` metodu, bir metni (string) HTML `<small>` etiketi içine yerleştirerek döndürür. Bu etiket, metnin tarayıcıda daha küçük boyutta görüntülenmesini sağlar.

> **Not**: `small()` gibi HTML ile ilgili string yöntemleri eski (legacy) sayılır ve günümüzde pek tercih edilmez. Genellikle metnin boyutu veya stili, doğrudan CSS ile kontrol edilir.

### Kullanım Örneği

```javascript
var text = "Hello World!";
var result = text.small();

document.writeln(text);  // Orijinal metin: Hello World!
document.write(result);  // <small>Hello World!</small> olarak döner ve daha küçük görünebilir.
```

---

### Açıklama

- `text.small()`, text değerini `<small>` etiketi içerisinde bir string olarak döndürür.
- Orijinal `text` değişmez; `<small>` etiketi sadece çıktı görünümünü değiştirmeye yarar.

---

### Özet

`small()` metodu, bir stringi `<small>` etiketiyle sararak tarayıcıda daha küçük boyutta görüntülenmesini sağlar. Modern projelerde ise bu tür stil değişiklikleri genellikle `CSS` yardımıyla yapılır.

---