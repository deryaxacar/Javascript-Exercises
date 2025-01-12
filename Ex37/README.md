## Big Metodu Nedir ?

JavaScript’te `big()` metodu, bir metni (string) HTML `<big>` etiketi içine yerleştirerek döndürür. Bu etiket, metnin tarayıcıda biraz daha büyük boyutta görüntülenmesini sağlar.

> **Not**: `big()` gibi HTML ile ilgili string yöntemleri eski (legacy) sayılır ve modern uygulamalarda pek tercih edilmez. Daha güncel projelerde metin boyutu veya stili, doğrudan CSS ile kontrol edilir.

### Kullanım Örneği

```javascript
var text = "Hello World!";
var result = text.big();

document.writeln(text);   // Orijinal metin: Hello World!
document.write(result);   // <big>Hello World!</big> olarak döner ve daha büyük görünür.
```

---

### Açıklama
- `text.big()` ifadesi, `text` değişkeninin değerini `<big>` etiketi içerisine yerleştirerek yeni bir string döndürür.
- Orijinal `text` değişkeni değişmeden kalır.
- Bu metod, yalnızca çıktı biçimini değiştirmek amacıyla kullanılır ve `<big>` etiketiyle metin daha büyük boyutlu olarak görüntülenir.

---

### Özet 

`big()` metodu, bir stringi `<big>` etiketi ile sarmalayarak tarayıcıda biraz daha büyük boyutta görüntülenmesini sağlar. Modern projelerde ise metin boyutu ve tasarımı genellikle `CSS` ile kontrol edilmektedir, bu nedenle `big()` metodu yaygın olarak kullanılmamaktadır.

---