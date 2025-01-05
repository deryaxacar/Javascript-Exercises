### Var Ve Let Farkı Nedir ?

JavaScript’te değişken tanımlamak için kullanılan iki temel anahtar kelime **`var`** ve **`let`**’tir. İkisi arasındaki en önemli fark **blok kapsamı** (block scope) ve **işlev kapsamı** (function scope) ile ilgilidir.

### 1. Var

1. **Function Scoped (İşlev Kapsamı)**  
   - Bir fonksiyon içinde tanımlanırsa sadece o fonksiyon içerisinde erişilebilir.  
   - Fonksiyon dışında `(global)` tanımlanırsa proje genelinde her yerden erişilebilir.

2. **Re-Declaration (Yeniden Tanımlama) İzni**  
   - Aynı kapsam içinde tekrar `var` ile aynı isimde değişken tanımlanabilir. Bu da bazen beklenmeyen hatalara yol açabilir.

**Örnek Kod**  
   
```javascript
   var isim = "Derya";
   
   if (true) {
       var isim = "Mert";
       console.log(isim); // Mert
   }
   
   console.log(isim); // Mert (değişti)

```

Görüldüğü gibi, `if` bloğu içindeki `var isim`, dışarıdaki `isim` değişkenini de etkiliyor.

---

### 2. let

1. **Block Scoped (Blok Kapsamı)**

- Kendisinin tanımlandığı blok içinde geçerlidir `(if, for, {} gibi)`.
- Blok dışına çıktığınızda artık o değişken tanımlı değildir.

2. **Yeniden Tanımlama (Re-Declaration) Engeli**

- Aynı kapsam içinde let ile tekrar aynı isimde değişken tanımlayamazsınız.
- Bu, hataların erken yakalanmasını sağlar ve kodun okunabilirliğini artırır.

**örnek kod**

```javascript
let isim2 = "Derya";

if (true) {
    let isim2 = "Mert";
    console.log(isim2); // Mert
}

console.log(isim2); // Derya (etkilenmedi)

```

Burada, `if` bloğu içindeki `isim2` sadece o blokta geçerli olur. Dışarıya çıktığımızda `“Derya”` değerine sahip `isim2` halen duruyor.

---

### Karşılaştırma Tablosu

| Özellik                | `var`                          | `let`                                                   |
|------------------------|--------------------------------|---------------------------------------------------------|
| Kapsam (Scope)         | **Fonksiyon** veya global      | **Blok** (if, for, vb.)                                 |
| Yeniden Tanımlama      | Mümkün                         | Mümkün değil (aynı blokta hata)                         |
| Hoisting (Yükseltme)   | `undefined` değerine set edilir| Tanımlamadan önce kullanılamaz (*ReferenceError*)       |
| Kullanım Senaryosu     | Eski kodlarla uyumluluk        | Modern ve önerilen yaklaşım                             |

---

### Özet 

- **var:** Daha eski ve `global/fonksiyon` kapsamına sahiptir. Aynı kapsamda yeniden tanımlanabilir, bu nedenle beklenmedik hatalara yol açabilir.
- **let:** Blok kapsamına sahiptir. `Aynı isimle yeniden tanımlanamaz`, genellikle daha güvenli ve öngörülebilir bir davranış sunar.
Modern JavaScript projelerinde `let` `(ve sabit değerlerde const)` kullanımı önerilir. Böylece değişkenleriniz blok bazında yönetilir ve kodun anlaşılırlığı artar.

---