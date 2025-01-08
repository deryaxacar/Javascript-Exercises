## Search Metodu Nedir ?

`search()` metodu, JavaScript'te bir string içerisinde belirli bir metni **düzenli ifade (regular expression)** kullanarak aramak için kullanılır. Girdiğiniz arama deseninin **ilk eşleşme** konumunu `(indeksini)` döndürür. Metin bulunamazsa `-1` döndürür.

### Sözdizimi

```javascript
string.search(regExp);
```

- **regExp:** Arama yapmak için kullanılan düzenli ifade `(regular expression)`. Normal bir string ifadesi veya RegExp nesnesi olabilir.

---

### Örnek Kod

```javascript
var text = "WORLD world";
var search = text.search("World"); // Case-sensitive (büyük/küçük harf duyarlı) arama
document.write(search); // Çıktı: -1

var text1 = "WORLD world";
var search1 = text1.search(/World/i); // 'i' -> case-insensitive (büyük/küçük harf duyarsız)
document.write(search1); // Çıktı: 0
```

---

### Açıklamalar

**1. Case-Sensitive Arama**

```javascript
var text = "WORLD world";
var search = text.search("World");
// "World" ifadesi, "WORLD" ya da "world" şeklinde geçmediği için sonuç: -1
```

**2.Case-Insensitive Arama**

- Düzenli ifadede `i` bayrağını kullanarak `büyük/küçük` harf duyarlılığını devre dışı bırakabilirsiniz.

```javascript
var text1 = "WORLD world";
var search1 = text1.search(/World/i);
// Büyük/küçük fark etmeksizin "World" aranır, eşleşme index 0'da bulunur
```

**3.Düzenli İfadelerin Gücü**

- `search()` metodu, basit string aramanın yanı sıra `RegExp` `(Regular Expressions)` desteği sunar. Bu sayede daha karmaşık arama kriterleri tanımlayabilir, farklı düzenli ifade bayraklarını `(g, i, m vs.)` kullanabilirsiniz.

---

### Özet 

`search()` metodu, basit string aramanın yanı sıra `RegExp` `(Regular Expressions)` desteği sunar. Bu sayede daha karmaşık arama kriterleri tanımlayabilir, farklı düzenli ifade bayraklarını `(g, i, m vs.)` kullanabilirsiniz.

---