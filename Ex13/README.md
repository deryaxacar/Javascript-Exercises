## Karşılaştırma Operatörleri

Karşılaştırma operatörleri, iki değeri karşılaştırmak ve bu karşılaştırmanın sonucunu boolean `(true veya false)` olarak döndürmek için kullanılır. Bu operatörler, koşullu ifadeler ve döngüler gibi kontrol yapılarında sıklıkla kullanılır.

**Büyüktür (>)**
- İlk operandın ikinci operandtan büyük olup olmadığını kontrol eder.

```javascript
var bool1 = number1 > number2; // > büyüktür işareti
```

**Büyük Eşittir (>=)**
- İlk operandın ikinci operandtan büyük veya ona eşit olup olmadığını kontrol eder.

```javascript
var bool2 = number1 >= number2; // >= büyük eşit işareti
```

**Küçüktür (<)**
- İlk operandın ikinci operandtan küçük olup olmadığını kontrol eder.

```javascript
var bool3 = number1 < number2; // < küçüktür işareti
```

**Küçük Eşittir (<=)**
- İlk operandın ikinci operandtan küçük veya ona eşit olup olmadığını kontrol eder.

```javascript
var bool4 = number1 <= number2; // <= küçük eşit işareti
```

**Eşittir (==)**
- İki operandın değerlerinin eşit olup olmadığını kontrol eder. `Tür` `(data type)` kontrolü yapmaz.

```javascript
var bool5 = number1 == number2; // == eşit mi işareti (sadece değer kontrolü yapar)
```

**Tam Eşittir (===)**
- İki operandın hem değerlerinin hem de türlerinin eşit olup olmadığını kontrol eder.

```javascript
var bool5 = number1 === number2; // === aynı mı işareti (hem değer hem tür kontrolü yapar)
```

**Mantıksal VE (&&)**
- İki koşulun da doğru `(true)` olması durumunda `true` döner, aksi halde false.

```javascript
var bool6 = number1 > number2 && number1 % 2 == 0; // && operatorü her iki durumda doğruysa true döner.
```

**Mantıksal VEYA (||)**
- İki koşuldan en az biri doğru `(true)` ise true döner, her iki koşul yanlış `(false)` ise false.

```javascript
var bool7 = number1 > number2 || number1 % 2 == 0; // || operatorü herhangi bir durum doğruysa true döner.
```

---

**örnek kod**

```javascript
var number1 = 10;
var number2 = 20;

var bool1 = number1 > number2; // > büyüktür işareti
document.write("boolean: " + bool1 + "<br>"); // false

var bool2 = number1 >= number2; // >= büyük eşit işareti
document.write("boolean: " + bool2 + "<br>"); // false

var bool3 = number1 < number2; // < küçüktür işareti 
document.write("boolean: " + bool3 + "<br>"); // true

var bool4 = number1 <= number2; // <= küçük eşit işareti 
document.write("boolean: " + bool4 + "<br>"); // true

var bool5 = number1 == number2; // == eşit mi işareti (sadece değer kontrolü yapar)
document.write("boolean: " + bool5 + "<br>"); // false

var bool6 = number1 === number2; // === aynı mı işareti (hem değer hem tür kontrolü yapar)
document.write("boolean: " + bool6 + "<br>"); // false

var bool7 = number1 > number2 && number1 % 2 == 0; // && operatorü her iki durumda doğruysa true döner.
document.write("boolean: " + bool7 + "<br>"); // false

var bool8 = number1 > number2 || number1 % 2 == 0; // || operatorü herhangi bir durum doğruysa true döner.
document.write("boolean: " + bool8 + "<br>"); // true
```

---

**özet**

JavaScript'teki temel karşılaştırma operatörlerini ve bunların nasıl kullanılacağını öğrendiniz. Karşılaştırma operatörleri, koşullu ifadeler ve kontrol yapıları oluştururken vazgeçilmez araçlardır. Özellikle `==` ve `===` operatörlerinin farkını anlamak, hatasız ve etkili kod yazmanızda yardımcı olacaktır.

---