## Sup Metodu Nedir ?

JavaScript'te `sup()` metodu, bir metni (string) HTML `<sup>` etiketi (superscript) içine yerleştirerek döndürür. Yani, **"Üst Simge"** (superscript) oluşturmak için kullanılır. Bu metod, tarayıcının metninizi `<sup>...</sup>` formatında yorumlamasına olanak tanır.

> **Not**: `sup()` gibi HTML ile ilgili string yöntemleri eski (legacy) sayılabilir ve günümüz projelerinde pek tercih edilmemektedir. Daha güncel projelerde doğrudan HTML etiketlerini veya CSS stillerini kullanmanız önerilir.

## Kullanım Örneği

```javascript
var text = "Hello World!";
var result = text.sup(text);

document.write(text);   // Orijinal metin: Hello World!
document.write(result); // Hello World! olarak döner ve üst simge şeklinde görüntülenir.
```
---

### HTML kullanımı

```html
<sup>Hello World!</sup>
```

- `Sup()` metodunun artık js te tarajıcıyı yavaşlattığı için tavsiye edilmemektedir, onun yerine `html` etiketi olarak kullanılabilir.

---

### Özet

`sup()` metodu, bir stringi üst simge (superscript) biçiminde bir çıktı oluşturur. Modern projelerde genellikle doğrudan `HTML` etiketleri veya `CSS` stilleri kullanılarak bu görüntü elde edilir, bu nedenle `sup()` metodu çok sık tercih edilmez.

---