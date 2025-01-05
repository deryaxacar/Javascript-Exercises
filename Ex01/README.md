## HTML Dosyasına JavaScript Bağlamak

Bu mini rehberde bir **HTML** dosyasına harici bir **JavaScript** dosyasını nasıl bağlayacağınızı öğreneceksiniz. Aşağıdaki adımları izleyerek, projelerinizde JavaScript dosyanızı rahatlıkla kullanabilirsiniz!

---

### 1. Proje Klasörü Oluşturmak

1. Bilgisayarınızda projenize özel bir klasör oluşturun.
2. Bu klasör içerisinde iki dosya oluşturun:
   - `index.html`
   - `script.js`

### 2. HTML Dosyasını Hazırlamak

`index.html` dosyanızı temel bir HTML yapısıyla başlatın.

**Örnek HTML kodu**:
```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Benim Projem</title>
</head>
<body>
  <!-- HTML içeriğinizi buraya ekleyebilirsiniz -->

  <!-- JavaScript dosyası burada bağlanacak -->
  <script src="script.js"></script>
</body>
</html>

```

**Dikkat Edilmesi Gerekenler:**

- `<script src="script.js"></script>` satırı, JavaScript dosyamızı (script.js) HTML dosyasına bağlamış olur.
- Genelde `<script>` etiketini `</body>` etiketinden hemen önce yerleştirmek önerilir. Böylece sayfadaki elementler yüklenir ve JavaScript sorunsuz çalışır.

- Modern tarayıcılarda `type="text/javascript"` eklemek opsiyoneldir. Zorunlu değildir, ancak eski tarayıcılarda kullanılabilirdi.

---