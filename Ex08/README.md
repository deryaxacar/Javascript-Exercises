### Değişken Türleri Nelerdir ?

JavaScript’te değişkenler farklı veri türleri taşıyabilir. En yaygın kullanılan türlerden bazıları şunlardır:

---

**1. String**

Metinsel verileri ifade eden veri türüdür.  
Örnek:
```javascript
var name = "Derya"; 
```
- Çift veya tek tırnak içinde yazılabilir: `"Derya"` veya `'Derya'`
- Metin, kelimeler veya karakter dizileri saklamak için kullanılır.

---

**2. Number**

`Tamsayı` veya `ondalıklı` sayı `(float)` değerlerini ifade eder.

Örnek:
```javascript
var age = 21;

```

JavaScript’te tüm sayılar Number türündedir (tamsayı, ondalık ayırt edilmez).

---

**3. Boolean**

`true` veya `false` şeklinde mantıksal (lojik) değerleri tutar.

Örnek:
```javascript
var isStudent = true;

```

Şart sorgulamalarında sıkça kullanılır `(if-else gibi yapılar)`.

---

**4. Null**

Örnek:
```javascript
var school = null;

```

`"Herhangi bir değeri bulunmuyor"` demenin kasıtlı bir yoludur.

**5. Undefined**

Bir değişken tanımlanmış fakat değer atanmamış ise JavaScript’te `undefined` değerine sahip olur.

```javascript
var studentName;
console.log(studentName); // undefined

```

---

**özet**

JavaScript’te değişken türlerini doğru seçmek kodunuzun anlaşılır ve bakımı kolay olmasını sağlar. Uygulama geliştirirken, türler arasında dönüşümleri ve güvenlik önlemlerini de göz önünde bulundurmak önemlidir.

---
