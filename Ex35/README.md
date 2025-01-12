## Sub Metodu Nedir ?

JavaScript'te `sub()` metodu, bir metni (string) HTML `<sub>` etiketi (subscript) içine yerleştirerek döndürür. Yani, **"Alt Simge"** (subscript) oluşturmak için kullanılır. Bu metod, tarayıcının metninizi `<sub>...</sub>` formatında yorumlamasına olanak tanır.

> **Not**: HTML içeriğini doğrudan manipüle etmek için `innerHTML` gibi modern yöntemler kullanılabilir. `sub()` gibi yöntemler eski (legacy) sayılabileceğinden üretim (production) ortamında pek tercih edilmemektedir.

---

### Kullanım Örneği

```javascript
var text = "Hello World!";
var result = text.sub(text);
document.write(text);   // Orijinal metin: Hello World!
document.write(result); // Hello World! olarak döner ve alt simge şeklinde görüntülenir.
```

---

### HTML kullanımı

```html
<sub>Hello World!</sub>
```

- `Sub()` metodunun artık js te tarajıcıyı yavaşlattığı için tavsiye edilmemektedir, onun yerine `html` etiketi olarak kullanılabilir.

---

### Özet 

`sub()` metodu, bir stringi alt simge (subscript) biçiminde bir çıktı oluşturur. Modern projelerde genellikle doğrudan HTML etiketleri veya `CSS` stilleri ile çalışılması önerildiğinden, `sub()` gibi yöntemler pek kullanılmamaktadır.