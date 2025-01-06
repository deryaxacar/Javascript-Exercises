## Length Özelliği Nedir?

- `length` özelliği, bir stringin karakter sayısını, bir dizinin öğe sayısını veya belirli nesnelerin uzunluğunu döndürür. Ancak, her veri tipinde `length` özelliği aynı şekilde çalışmaz.

---

### Stringlerde length

- `Stringler`de `length`, metindeki karakter sayısını döndürür.

```javascript
var name = "Derya";
document.write("string Derya : " + name.length + "<br>"); // 5

```

---

### Number Türünde length

- `Number` türünde `length` özelliği tanımlı değildir ve undefined döner.

```javascript
var number = 52;
document.write("number 52 : " + number.length + "<br>"); // undefined

```

---

### Arraylerde length

- `Arrayler`de `length`, dizideki öğelerin sayısını döndürür.

```javascript
var numbers = [1, 2, 3, 4, 5];
document.write("Array uzunluğu : " + numbers.length + "<br>"); // 5

```

---

### Örnek kod: 

- Aşağıda, `length` özelliğinin farklı veri tiplerinde nasıl kullanıldığını gösteren bir `JavaScript` kod örneği bulunmaktadır:

```javascript
// String için length
var name = "Derya";
document.write("string Derya : " + name.length + "<br>"); // 5

// Number için length
var number = 52;
document.write("number 52 : " + number.length + "<br>"); // undefined

// Number'ı stringe çevirip length kullanma
var numberStr = number.toString(); // sayıyı stringe çevirme
document.write("string 52 : " + numberStr.length + "<br>"); // 2

// Array için length
var numbers = [1, 2, 3, 4, 5];
document.write("Array uzunluğu : " + numbers.length + "<br>"); // 5

```

Yukarıdaki kod çalıştırıldığında, web sayfasında aşağıdaki çıktılar görüntülenir:

```zsh
string Derya : 5
number 52 : undefined
string 52 : 2
Array uzunluğu : 5

```

---

### Özet

`length` özelliği, JavaScript'te stringlerin ve dizilerin uzunluğunu belirlemek için güçlü bir araçtır. Ancak, her veri tipinde aynı şekilde çalışmadığını unutmamak önemlidir. `Number` türünde `length` kullanmak isterseniz, sayıyı önce stringe çevirmeniz gerekmektedir. `length` özelliği, verilerin boyutunu kontrol etmek ve koşullu ifadelerde kullanmak için sıklıkla tercih edilir.

---