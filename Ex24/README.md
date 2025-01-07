## ToString Metodu Nedir ?

`toString()` metodu, bir değeri string türüne dönüştürür. Bu metod, genellikle sayılar ve diziler gibi veri türlerinde kullanılır.

---

### Söz Dizimi:

```Javascript
value.toString();

```

- **value:** String'e dönüştürmek istediğiniz değişken veya ifade.

---

### Kullanım

```Javascript
var newString = value.toString();

```

---

### Örnek Kod

Aşağıda, `toString()` metodunun nasıl kullanılacağını gösteren basit bir örnek bulunmaktadır:

```Javascript
var value = 10;
document.write(typeof(value)); // Çıktı: number

var new_value = value.toString();
document.write("<br>" + typeof(new_value)); // Çıktı: string

```

---

### Açıklamalar

- **Başlangıçta:** `value` değişkeni bir sayı `(number)` türündedir.
- **Dönüştürme:** `value.toString()` ifadesi, sayıyı string'e dönüştürür.
- **Sonuç:** `new_value` artık bir `string (string)` türündedir.

---

### Özet

`toString()` metodu, JavaScript'te veri türlerini dönüştürmek için basit ve etkili bir yoldur. Sayıları, dizileri ve diğer bazı veri türlerini string'e dönüştürerek, metin işlemleri ve dinamik içerik oluşturma gibi işlemleri kolaylaştırır.

---
