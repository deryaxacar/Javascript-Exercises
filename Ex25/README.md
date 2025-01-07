## Number Metodu Nedir ? 

`Number()` metodu, verilen bir değeri sayısal `(number)` türüne dönüştürür. Bu metod, özellikle string, boolean gibi farklı veri türlerini sayıya çevirmek istediğinizde kullanışlıdır.

---

### Sözdizimi:

```Javascript
Number(value);

```

- **value:** Sayıya dönüştürmek istediğiniz değişken veya ifade.

---

### Kullanım 

```Javascript
var numericValue = Number(originalValue);

```

- **originalValue:** Sayıya dönüştürmek istediğiniz orijinal değer.
- **numericValue:** Dönüştürülmüş sayısal değer.

---

### Örnek Kod

Aşağıda,` Number()` metodunun nasıl kullanılacağını gösteren basit bir JavaScript kod örneği bulunmaktadır:

```Javascript
var value1 = "10";
var value2 = true;
var value3 = false;

document.write(typeof(value1) + "<br>"); // Çıktı: string
document.write(typeof(value2) + "<br>"); // Çıktı: boolean
document.write(typeof(value3) + "<br>"); // Çıktı: boolean

var new_value1 = Number(value1);
var new_value2 = Number(value2);
var new_value3 = Number(value3);

document.write(typeof(new_value1) + "<br>"); // Çıktı: number
document.write(typeof(new_value2) + "<br>"); // Çıktı: number
document.write(typeof(new_value3) + "<br>"); // Çıktı: number

document.write(new_value1 + "<br>"); // Çıktı: 10
document.write(new_value2 + "<br>"); // Çıktı: 1
document.write(new_value3 + "<br>"); // Çıktı: 0

```

---

### Açıklamalar 

- **Orijinal Değer Türleri:**
    - `value1` bir string ("10").
    - `value2` ve `value3` `boolean` `(true ve false)`.

- **Number() Metodu ile Dönüştürme:**
    - `Number(value1)` `"10"` stringini `10` sayısına dönüştürür.
    - `Number(value2)` `true` değerini `1` sayısına dönüştürür.
    - `Number(value3)` `false` değerini `0` sayısına dönüştürür.

- **Sonuç Türleri:**
    - Dönüştürülen tüm değerler artık `number` türündedir.
    - Değerler:
        - `"10" → 10`
        - `true → 1`
        - `false → 0`

---

### Dönüştürülemeyen Değerler

`Number()` metodu, bazı değerleri sayıya dönüştüremeyebilir ve bu durumlarda `NaN (Not-a-Number)` döndürür:

- **Boş String:** Boş bir string `("") 0` olarak dönüştürülür.

```Javascript
var emptyStr = "";
var num = Number(emptyStr); // 0

```

---

- **Boş Değer (null):** `null` değeri `0` olarak dönüştürülür.

```Javascript
var nullValue = null;
var num = Number(nullValue); // 0

```

---

- **Undefined:** `undefined` değeri `NaN` döndürür.

```Javascript
var undefinedValue;
var num = Number(undefinedValue); // NaN

```

---

- **Geçersiz Stringler:** Sayısal olmayan stringler `("abc", "123abc")` `NaN` döndürür.

```Javascript
var invalidStr = "abc";
var num = Number(invalidStr); // NaN

```

---

### Özet

`Number()` metodu, JavaScript'te farklı veri türlerini sayısal türlere dönüştürmek için etkili bir araçtır. Özellikle kullanıcı girdilerini işlemek ve matematiksel işlemler gerçekleştirmek istediğinizde kullanışlıdır. Ancak, dönüştürülemeyen değerlerle karşılaştığınızda NaN sonucunu göz önünde bulundurmanız önemlidir.

---