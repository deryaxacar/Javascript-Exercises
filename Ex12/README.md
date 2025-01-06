## Atama Operatörleri

Bu örnek, JavaScript’te **atama operatörleri** (assignment operators) kullanımını göstermektedir. Aşağıdaki kod parçacığında, farklı atama operatörlerini (`=`, `+=`, `-=`, `*=`, `/=`, `%=`) ve temel karşılaştırma operatörünün (`==`) nasıl çalıştığını görebilirsiniz.

---

```javascript
var number = 10; // "=" tek eşittir atama işlemi yapar.

// == Karşılaştırma İşlemi
if (number == 10) {
  // == operatörü değer karşılaştırması yapar (tür dönüşümü yapabilir).
  document.write("number is equal to 10");
}

number += 5; // "+=" toplama ve atama işlemi yapar (number = number + 5).
document.write("<br>");
document.write("number: " + number); // number: 15

number -= 5; // "-=" çıkarma ve atama işlemi yapar (number = number - 5).
document.write("<br>");
document.write("number: " + number); // number: 10

number *= 5; // "*=" çarpma ve atama işlemi yapar (number = number * 5).
document.write("<br>");
document.write("number: " + number); // number: 50

number /= 5; // "/=" bölme ve atama işlemi yapar (number = number / 5).
document.write("<br>");
document.write("number: " + number); // number: 10

number %= 5; // "%=" mod alma ve atama işlemi yapar (number = number % 5).
document.write("<br>");
document.write("number: " + number); // number: 0

```

---

### Operatörlerin Anlamları
1. `=` (Basit Atama Operatörü)

- Değişkene bir değer atar.
- Örnek: `var x = 10;`

2. `+=` (Toplama ve Atama)

- Değişkene eklenen değeri, yine değişkene atar.
- Örnek: `x += 5; eşdeğer x = x + 5;`

3. `-=` (Çıkarma ve Atama)

- Değişkenden çıkarılan değeri, yine değişkene atar.
- Örnek: `x -= 5; eşdeğer x = x - 5;`

4. `*=` (Çarpma ve Atama)

- Değişken çarpıldıktan sonraki değeri, aynı değişkene atar.
- Örnek: `x *= 5; eşdeğer x = x * 5;`

5. `/=` (Bölme ve Atama)

- Değişken bölündükten sonraki değeri, yine değişkene atar.
- Örnek: `x /= 5; eşdeğer x = x / 5;`

6. `%=` (Mod Alma ve Atama)

- Değişkenin, bölme işleminden kalan kısmını, aynı değişkene atar.
- Örnek: `x %= 5; eşdeğer x = x % 5;`

---

### Karşılaştırma Operatörleri

- `==` (Eşittir)
Değerleri karşılaştırır; tip dönüşümü yapabildiği için `"10" == 10` ifadesi `true` dönebilir.

- `===` (Sıkı Eşittir)
Değer ve tipi birlikte karşılaştırır; `"10" === 10` ifadesi `false` döner.

---

**Özet**

Atama Operatörleri bir değişkene aritmetik işlemleri sonucunda elde edilen değeri tekrar kaydetmeye yarar.
`=` tek atama iken, `+=, -=, *=, /=, %=` `var` olan değeri güncelleyerek atar.
Karşılaştırma operatörleri, koşulları kontrol etmek için kullanılır ve atama operatörlerinden farklıdır.
Bu şekilde JavaScript’te temel atama ve karşılaştırma operatörlerinin kullanımını hızlıca öğrenebilirsiniz.

---