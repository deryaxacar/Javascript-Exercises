## Replace Metodu Nedir ?

`replace()`, bir dizgede (string) belirli bir alt dizgeyi (substring) veya düzenli ifadeyi (RegExp) bularak, yerine yeni bir ifade eklemenizi sağlar ve değiştirilmiş yeni bir dize döndürür.

---

### Kullanım

Aşağıdaki örnekte, `text` değişkeninde yer alan `"deneme"` metni, `"çalışma"` metni ile değiştirilir:

```javascript
var text = "javascript egzersizleri deneme metni";
document.write(text + "<br>"); 
// Çıktı: javascript egzersizleri deneme metni

var result = text.replace("deneme", "çalışma");
document.write(result); 
// Çıktı: javascript egzersizleri çalışma metni
```

Yukarıdaki kodda:

- `text` değişkeni `"javascript egzersizleri deneme metni"` ifadesini içerir.
- `text.replace("deneme", "çalışma")`, text içerisinde `"deneme"` kelimesini `"çalışma"` ile değiştirilmiş yeni bir dize üretir.
- `replace()` işleminin sonucu, result değişkenine atandıktan sonra ekrana yazdırılır.

---

### Parametreler
- **searchValue** (gerekli) Değiştirilecek alt dizge (string) veya düzenli ifade (RegExp).
- **newValue** (gerekli) Bulunan alt dizgenin yerine geçecek yeni ifade.

---

### Örnek: Düzenli İfade Kullanımı

```javascript
var text = "JavaScript Egzersizleri deneme metni. DENEME! deneme...";
var result = text.replace(/deneme/gi, "çalışma");
console.log(result);
// Çıktı: JavaScript Egzersizleri çalışma metni. çalışma! çalışma...
```

- `/deneme/gi` ifadesi, `g (global)` bayrağı sayesinde metin içerisinde tüm eşleşmeleri hedefler ve `i (ignore case)` bayrağı ile `büyük/küçük` harf ayrımı yapılmaz.
- `replace()` metodu, tüm `"deneme"` kelimelerini `"çalışma"` ile değiştirir.

---

### Özet 

`replace()` metodu, bir string içinde belirlenen alt dizgeleri başka ifadelerle değiştirmenize yarar. Basit kullanımlarda aradığınız metni, karmaşık senaryolarda düzenli ifadeleri kullanarak tek bir metodla birden fazla değişiklik gerçekleştirebilirsiniz.

---