## Artırma ve Azaltma Operatörleri

JavaScript'te kullanılan temel artırma `(++)` ve azaltma `(--)` operatörleri, bir sayının değerini birer birer artırmak veya azaltmak için kullanılır. Bu operatörler, döngüler ve sayaçlar gibi kontrol yapılarında sıkça kullanılır.

---

### Artırma Operatörü `(++)`

- `++` operatörü, bir değişkenin değerini bir artırır.

```javascript
number++; // number değerini bir artırır

```

---

### Azaltma Operatörü `(--)`

- `--` operatörü, bir değişkenin değerini bir azaltır.

```javascript
number--; // number değerini bir azaltır

```

---

### Atama Operatörleri ile Artırma ve Azaltma `(+=, -=)`

- Artırma ve azaltma işlemleri, atama operatörleri `(+=, -=)` ile de gerçekleştirilebilir.

```javascript
number += 1; // number değerini bir artırır
number -= 1; // number değerini bir azaltır

```

Ayrıca, klasik atama yöntemleriyle de aynı işlemleri yapabilirsiniz:

```javascript
number = number + 1; // number değerini bir artırır
number = number - 1; // number değerini bir azaltır

```

---

### Örnek Kod

```javascript
var number = 5;

number++; 
document.write("number++ : " + number + "<br>"); // 6

number--;
document.write("number-- : " + number + "<br>"); // 5

number += 1;
document.write("number += 1 : " + number + "<br>"); // 6

number -= 1;
document.write("number -= 1 : " + number + "<br>"); // 5

number = number + 1;
document.write("number + 1 : " + number + "<br>"); // 6

number = number - 1;
document.write("number - 1 : " + number + "<br>"); // 5

```

---

### Özet

Bu rehberde, JavaScript'teki temel artırma ve azaltma operatörlerini ve bunların farklı kullanımlarını öğrendiniz. Bu operatörler, değişkenlerin değerlerini hızlı ve etkili bir şekilde değiştirmek için idealdir ve özellikle döngülerde yaygın olarak kullanılırlar.

---