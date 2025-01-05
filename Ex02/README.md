## NoScript Etiketi Nedir?

`<noscript>` etiketi, tarayıcısında JavaScript devre dışı bırakılmış (veya JavaScript’i desteklemeyen) kullanıcılar için özel bir mesaj veya içerik göstermeye yarar. JavaScript'in devre dışı olması durumunda, kullanıcı bu etiketin içindeki mesajı/dosyayı görecektir. Eğer JavaScript etkinse, `<noscript>` etiketi içeriği görünmez hâle gelir.

---

### Ne İşe Yarar?

1. **Uyarı Mesajı Gösterme**: Eğer web sitenizin kritik fonksiyonları JavaScript’e dayalıysa, kullanıcıya JavaScript’i etkinleştirmesi gerektiğini veya başka bir tarayıcı kullanmasını öneren bir mesaj görüntüleyebilirsiniz.
2. **Alternatif İçerik Sunma**: JavaScript devre dışı kalma ihtimaline karşı, sitenizin bazı yönlerini kısıtlı da olsa sunmaya devam edebilirsiniz. Örneğin, resim galerisi veya form doğrulaması gibi JS gerektiren özellikler yerine alternatif, daha basit sürümlerini sunabilirsiniz.

```html
<noscript>
  Javascript etkin değil. Lütfen tarayıcınızda JavaScript’i aktif hale getirin.
</noscript>

```

---

### Nasıl Kullanılır?
`<noscript>` etiketini, genellikle sayfanın `<head>` veya `<body>` kısımlarında kullanabilirsiniz.
**Öneri:** Ziyaretçinin görebileceği şekilde görünür bir alanda yerleştirin.
`<script>` ile birlikte kullanılırken, `<noscript>` etiketi `JavaScript` çalışmıyorsa devreye girer.

**Örnek kullanım:**

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Örnek Sayfa</title>
  <noscript>
    JavaScript devre dışı. Lütfen etkinleştirin.
  </noscript>
</head>
<body>
  <h1>Anasayfa</h1>
  <p>Bu paragraf JavaScript açıksa normal şekilde görünür.</p>

  <script src="script.js"></script>
</body>
</html>

```

---

- JavaScript etkinse, <noscript> etiketi hiçbir içerik göstermeyecektir.
- JavaScript devre dışıysa, <noscript> içindeki uyarı mesajı kullanıcıya görünecektir.

---

### Neden Önemli?

**Erişilebilirlik (Accessibility):** Her ne kadar modern tarayıcıların çoğu JavaScript'i desteklese de, kimi kullanıcılar güvenlik veya performans nedeniyle JavaScript'i kapalı tutabiliyor. Bu durumda sitenizin en temel kısımlarına ulaşılabilirlik sağlamak istiyorsanız, <noscript> kullanarak bir uyarı veya alternatif içerik gösterebilirsiniz.

**SEO Etkisi:** Arama motoru botlarının çoğu JavaScript’i işleyebilir. Ancak hala noscript içeriğini de tarayan botlar mevcut. Bu nedenle, temel mesajları, yönlendirmeleri veya önemli içerikleri noscript etiketinde de sunmak zaman zaman faydalı olabilir (abartmamak şartıyla).

---

### Özet

`<noscript>` etiketi, JavaScript’in kapalı olduğu durumlarda kullanıcılar veya botlar için önemli içerik veya uyarı göstermek istediğimizde başvurabileceğimiz faydalı bir HTML etiketidir. Bu sayede, ziyaretçilere en azından temel bir mesaj veya yol haritası sunmuş oluruz.

---
