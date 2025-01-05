## Aritmetik Operatörler

# JavaScript Aritmetik İşlemleri

Bu örnekte, JavaScript ile temel aritmetik işlemleri `(toplama, çıkarma, çarpma, bölme, mod alma)` ve `string (metin)` toplama gösterilmektedir.

## Değişken Tanımlama

```javascript
var number1 = 10;
var number2 = 20;

```

`number1` ve `number2` isimli iki sayı değişkeni oluşturuldu.

### 1. Toplama (Addition)

```javascript
var sum = number1 + number2;
document.write("sum: " + sum + "<br>");

```

- İki sayının toplamı hesaplanır ve ekrana yazdırılır.

- JavaScript’te `+` operatörü sayılar üzerinde toplama, metinler üzerinde ise birleştirme işlemi yapar.

### 2. Çıkarma (Subtraction)

```javascript
var difference = number1 - number2;
document.write("difference: " + difference + "<br>");

```

- `number1` değerinden `number2` değeri çıkarılır.

### 3. Çarpma (Multiplication)

```javascript
var product = number1 * number2;
document.write("product: " + product + "<br>");

```

- `number1` ve `number2` çarpılır.

### 4. Bölme (Division)

```javascript
var quotient = number1 / number2;
document.write("quotient: " + quotient + "<br>");

```

- `number1`, `number2`'ye bölünür ve sonuç ondalıklı olabilir.

### 5. Mod Alma (Remainder / Modulus)

```javascript
var remainder = number1 % number2;
document.write("remainder: " + remainder + "<br>");

```

- `number1` değerinin `number2` değerine bölümünden kalanını verir.

- Örneğin `10 % 3 = 1` şeklinde sonuç bulunur.

### 6. String Toplama (Birleştirme - Concatenation)

```javascript
var name1 = "John ";
var name2 = "Doe";
var sum = name1 + name2;
document.write("Name Surname: " + sum + "<br>");

```

- İki metin (String) değişkeni `+` operatörü ile birleştirilir.
- Sonuç: `"John Doe"`

### Özet
- `+` (Toplama / Birleştirme)
- `-` (Çıkarma)
- `*` (Çarpma)
- `/` (Bölme)
- `%` (Mod Alma)
JavaScript’te `+` operatörü sayılara uygulandığında toplama, metinlere (string) uygulandığında birleştirme işlemi yapar. Diğer operatörler ise sadece sayısal değerler üzerinde çalışır.

---