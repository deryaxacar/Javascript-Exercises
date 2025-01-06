## TypeOf Nedir?

JavaScript'te değişkenlerin veri tiplerini bilmek, doğru işlemler gerçekleştirmek ve hata ayıklamak için önemlidir. `typeof` operatörü, bir değişkenin hangi veri tipine sahip olduğunu belirlemek için kullanılan temel araçlardan biridir. Bu operatör, geliştiricilere kodun daha güvenli ve hatasız yazılmasına yardımcı olur.
`typeof` operatörü, bir operatör olarak kullanılır ve operandının (değişkenin) veri tipini döndürür. Sonuç olarak, veri tipi bir `string (metin)` olarak elde edilir.

---

### Temel Kullanım

```javascript
typeof operand

```
- `operand:` Veri tipini belirlemek istediğiniz değişken veya ifade.

---

### typeof ile Veri Tipi Kontrolü

typeof operatörü, aşağıdaki veri tiplerini tanımlayabilir:

- `string` – Metin değerleri
- `number` – Sayısal değerler
- `boolean` – Mantıksal değerler (`true` veya `false`)
- `object` – Nesneler, diziler, `null`
- `undefined` – Tanımlanmamış değişkenler
- `function` – Fonksiyonlar
- `symbol` – Benzersiz ve değiştirilemez değerler (`ES6` ile tanıtıldı)

---

### Örnek kod:

Aşağıda, `typeof` operatörünün farklı veri tipleri ile nasıl kullanıldığını gösteren bir JavaScript kod örneği bulunmaktadır:

```javascript
var y = "derya";
document.writeln(typeof(y) + " : ");
document.write("Derya" + "<br>");

var x = 8;
document.write(typeof(x) + " : ");
document.write("8" + "<br>");

var z = true;
document.write(typeof(z) + " : ");
document.write("true" + "<br>");

var a = null;
document.write(typeof(a) + " : ");
document.write("null" + "<br>");

var b;
document.write(typeof(b) + " : ");
document.write("undefined" + "<br>");

var c = [1,2,3,4,5];
document.write(typeof(c) + " : ");
document.write("1,2,3,4,5" + "<br>");

function greet() {
    return "Hello!";
}
document.write(typeof(greet) + " : ");
document.write("function" + "<br>");

```

---

### Çıktı

Yukarıdaki kod çalıştırıldığında, web sayfasında aşağıdaki çıktılar görüntülenir:

```zsh
string : Derya
number : 8
boolean : true
object : null
undefined : undefined
object : 1,2,3,4,5
function : function
```

---

### Açıklamalar 

- `var y = "derya";`
    - `typeof(y)` sonucu: `string`
    - **Açıklama :** `y` değişkeni bir `metin (string)` içeriyor.

- `var x = 8;`
    - `typeof(x)` sonucu: `number`
    - **Açıklama :** `x` değişkeni bir `sayı (number)` içeriyor.
    - `var z = true;`

- `typeof(z)` sonucu: `boolean`
    - **Açıklama :** `z` değişkeni bir `mantıksal değer (boolean)` içeriyor.
    - `var a = null;`

- `typeof(a) sonucu: object`
    - **Açıklama :** JavaScript'te `null` değeri object olarak tanımlanmıştır. Bu, dilin ilk sürümlerinden kalma bir özelliktir ve bazı karışıklıklara neden olabilir.
    - `var b;`

- `typeof(b) sonucu: undefined`
    - **Açıklama :** `b` değişkeni tanımlanmış ancak bir değer atanmadığı için `undefined` olarak kabul edilir.
    - `var c = [1,2,3,4,5];`

- `typeof(c) sonucu: object`
    - **Açıklama :** `Diziler (arrays)` JavaScript'te özel nesne türleridir, bu yüzden `typeof` operatörü tarafından `object` olarak tanımlanır.
    - `function greet() { ... }`

- `typeof(greet) sonucu: function`
    - **Açıklama :** greet bir fonksiyon olduğu için `typeof` operatörü function döndürür.

---

### Özet

`typeof` operatörü, JavaScript'te değişkenlerin ve ifadelerin veri tiplerini belirlemek için güçlü bir araçtır. Ancak, bazı durumlarda `(null gibi)` beklenmeyen sonuçlar verebilir. Bu nedenle, typeof kullanırken bu tür istisnaları göz önünde bulundurmak önemlidir. Modern `JavaScript `uygulamalarında, daha kesin tip kontrolleri için diğer yöntemler (örneğin, `Array.isArray`) ile birlikte kullanılabilir.

---