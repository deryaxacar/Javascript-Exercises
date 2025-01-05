### InnerHTML Nedir ?

`innerHTML`, bir **HTML** elementinin **içerik** (metin ve HTML etiketleri) kısmına erişmenizi ve bu içerikleri değiştirmenizi sağlayan bir özelliktir.  
Örneğin:

```html
<body>
    
    <div id="box1"></div>
    
</body>

```

yukarıdaki, div in içeriğine javascript ile yazı yazmamızı sağlar.

```javascript
var box = document.getElementById("box1");
box.innerHTML = "Hello, World!";

```

bu şekilde yukarıdaki `div` in `html` olan kısmına `javascript` ile yazı yazdık. 

**Dikkat:** `innerHTML` kullanarak eklediğiniz metinde `HTML` etiketleri de işlenir. Bu nedenle güvensiz kaynaklardan gelen veri eklemek güvenlik risklerine `(XSS)` yol açabilir. Aşırı ve yanlış kullanımlardan kaçınmak gerekir.

---

### Kullanım Alanları

- **Dinamik İçerik Güncelleme:** Sayfadaki içeriği hızlı bir şekilde değiştirmek için.

- **Form Sonuçlarının Gösterimi:** Kullanıcıdan alınan verileri sayfada anında görüntülemek için.

- **Basit Şablon Yerleştirme:** `Tablo`, `liste` veya `kart` gibi `HTML` yapısını dinamik şekilde oluşturmak için.

---