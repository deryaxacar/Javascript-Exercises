## Match Metodu Nedir ?

`match()`, bir metin içinde belirli bir düzenli ifade (regular expression) araması yapar ve sonuçları döndürür. Aradığınız düzenli ifadeye ve kullandığınız bayraklara (flags) göre, tek bir eşleşme ya da bir dizi (array) şeklinde birden fazla eşleşme elde edebilirsiniz.

---

### Örnek 1
Aşağıdaki örnekte, `text` değişkenindeki metnin son kısmı `"World!"` ifadesine **(`$`)** yardımıyla bakılır. **`$`** bir metnin sonunu ifade eder.

```javascript
var text = "Hello World! World!";
var result = text.match(/World!$/); // $ string'in sonunu ifade eder
document.writeln(result); // World!
```

- `text.match(/World!$/)` ifadesi, sadece metnin sonundaki `"World!"` bölümünü arar.
- Eşleşme bulunursa sonuç, `'World!'` olarak döner.

---

### Örnek 2

Aşağıdaki örnekte ise `g` (global) bayrağı kullanarak `"World!"` ifadesini tüm metin boyunca arıyoruz.

```javascript
var text = "Hello World! World!";
var result1 = text.match(/World!/g); // g tüm eşleşmeleri bulur
document.write(result1); // World!,World!
```

- `text.match(/World!/g)` ifadesi, metnin tüm kısımlarında "World!"` ifadesini arar.
- Bulduğu her eşleşmeyi bir dizi (array) olarak döndürür: `["World!", "World!"]`.

---

### Parametreler

- **pattern (gerekli):** Düzenli ifade (RegExp) veya aranacak dize (string).
- Kullandığınız bayraklar `(ör. g, i, m)` aranacak ifadenin nasıl kontrol edileceğini belirler.

---

### Yaygın Bayraklar
- `g (global):` Metin içinde tüm eşleşmeleri bulmak için kullanılır.
- `i (ignore case):` Harflerin `büyük/küçük` ayrımını `(case)` yok saymak için kullanılır.
- `m (multiline):` Çok satırlı `(multiline)` aramalarda satır başı ve satır sonu kontrollerini genişletmek için kullanılır.

---

### Geri Dönen Değer
- Eğer global bayrağı `(g)` kullanırsanız, birden çok eşleşme olması durumunda sonuç bir dizi (array) olarak döner.
- Global bayrağı yoksa, ilk eşleşmeye ait detayları içeren bir dizi ya da `null` döner.

---

### Özet

`match()` metodu, düzenli ifadeler (RegExp) kullanarak metin araması yapar. `g` bayrağı ile bütün eşleşmeleri toplu halde, `g` bayrağı olmadan tek bir eşleşmeyi (ya da `null` değerini) döndürür. Sonucunuz bazen dizi (array), bazen `null` olabilir; bu durumu kodunuzda yönetmeyi unutmayın.

---