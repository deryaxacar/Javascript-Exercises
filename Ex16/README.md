## Birden Fazla Değişken Oluşturmak

JavaScript'te aynı satırda birden fazla değişken tanımlamak için değişkenleri virgülle ayırabilirsiniz. Bu yöntem, kodunuzu daha kısa ve düzenli hale getirebilir.

---

### Var ile

- `var` anahtar kelimesi, değişkenleri tanımlamak için kullanılır ve fonksiyon kapsamına (function scope) sahiptir.

```javascript
var name = "Derya", surname = "Acar", age = 21;

```

---

### Let ile

- `let` anahtar kelimesi, blok kapsamına (block scope) sahip değişkenler tanımlamak için kullanılır. Modern JavaScript'te var yerine tercih edilmesi önerilir.

```javascript
let name = "Derya", surname = "Acar", age = 21;

```

---

### Const ile

- `const` anahtar kelimesi, sabit değişkenler tanımlamak için kullanılır. Tanımlandıktan sonra değeri değiştirilemez. Ancak, nesneler ve diziler gibi referans tipleri için içindeki veriler değiştirilebilir.

```javascript
const name = "Derya", surname = "Acar", age = 21;

```

---

### Örnek kod:

Aşağıda, aynı satırda birden fazla değişkenin nasıl tanımlanacağını ve kullanılacağını gösteren tam bir JavaScript kod örneği bulunmaktadır:

```javascript
// `var` ile değişken tanımlama
var name = "Derya", surname = "Acar", age = 21;
document.write("Ad: " + name + "<br>");
document.write("Soyad: " + surname + "<br>");
document.write("Yaş: " + age + "<br>");

// `let` ile değişken tanımlama
let city = "İstanbul", country = "Türkiye", zipCode = 34000;
document.write("Şehir: " + city + "<br>");
document.write("Ülke: " + country + "<br>");
document.write("Posta Kodu: " + zipCode + "<br>");

// `const` ile değişken tanımlama
const birthYear = 2003, graduationYear = 2021, currentYear = 2025;
document.write("Doğum Yılı: " + birthYear + "<br>");
document.write("Mezuniyet Yılı: " + graduationYear + "<br>");
document.write("Şu Anki Yıl: " + currentYear + "<br>");

```

---

### Özet 

JavaScript'te aynı anda birden fazla değişken tanımlamak, kodunuzu daha düzenli ve okunabilir hale getirebilir. `var`, `let` ve `const` anahtar kelimeleri ile bu işlemi gerçekleştirebilir ve değişkenlerin kapsamını kontrol edebilirsiniz. Modern `JavaScript` geliştirme pratiklerine uygun olarak, let ve const kullanımı genellikle tercih edilir.

---
