## ValueOf Metodu Nedir ?

`valueOf()` metodu, bir nesnenin ilkel `(primitive)` değerini döndürür. Bu metod, nesne türüne bağlı olarak farklı sonuçlar verebilir:

- **Number Nesneleri:** Sayısal değeri döndürür.
- **String Nesneleri:** Metin değerini döndürür.
- **Boolean Nesneleri:** Mantıksal değeri döndürür.
- **Diğer Nesneler:** Genellikle kendini `(this)` döndürür.

---

### Kullanım

```Javascript
var primitiveValue = object.valueOf();

```
- **object:** İlkel değerini almak istediğiniz nesne.
- **primitiveValue:** Nesnenin ilkel değeri.

---

### Örnek Kod:

Aşağıda, `valueOf()` metodunun nasıl kullanılacağını gösteren basit bir örnek bulunmaktadır:

```Javascript
var number = 10 + 20;

var value = number.valueOf();
document.write(value); // Çıktı: 30
```

---

### Açıklamalar 

- **Başlangıç değeri:**
```Javascript
var number = 10 + 20; // number değeri 30
```
- **valueOf() Metodu Kullanımı:**
```Javascript
var value = number.valueOf(); // value değeri 30 (number'ın ilkel değeri)
```
- **Sonuç:**
```Javascript
document.write(value); // Çıktı: 30

```

Bu örnekte, `numbe`r değişkeni zaten bir ilkel değer `(number türünde)` olduğundan, `valueOf()` metodu kullanıldığında aynı değeri döndürür.

---

### Daha Fazla Örnek

**String Nesnesi Üzerinde valueOf()**

```Javascript
var text = new String("Hello World");
var primitiveText = text.valueOf();
document.write(primitiveText); // Çıktı: Hello World

```

**Boolean Nesnesi Üzerinde valueOf()**

```Javascript
var bool = new Boolean(true);
var primitiveBool = bool.valueOf();
document.write(primitiveBool); // Çıktı: true

```

---

### Özet

`valueOf()` metodu, JavaScript'te nesnelerin ilkel değerlerini elde etmek için kullanılan faydalı bir araçtır. Genellikle JavaScript motoru tarafından otomatik olarak çağrılır, ancak özel durumlarda manuel olarak da kullanılabilir. İlkel veri türleriyle çalışırken, bu metodun nasıl işlediğini anlamak, kodunuzun daha doğru ve etkili çalışmasını sağlar.

---
