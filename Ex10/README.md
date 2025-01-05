## Constant Nedir ?

JavaScript’te `const` anahtar kelimesi, **değişmez** (sabit) bir değişken tanımlamak için kullanılır.  
Bu değişkenlere **yeniden değer ataması** yapılamaz ve mutlaka tanımlandığı anda **başlangıç değeri** verilmelidir.

## Nasıl Kullanılır?

```javascript
const pi = 3.14;
pi = 1;            // Error: Assignment to constant variable.
pi = pi + 10;      // Error: Assignment to constant variable.

```

- `const pi = 3.14;` satırında, `pi` değişkenine `3.14` değeri atanır.
Ardından pi değişkenine yeni değer atamak istediğimizde, hata alırız.

- **Önemli:** `const` ile tanımlanan değişken asla yeniden atamaya izin vermez.

---

### Başlangıç Değeri Zorunluluğu

```javascript
const y;
y = 10; // Error: Missing initializer in const declaration.

```

- Bir `const` değişkeni tanımlarken hemen değer vermelisiniz.
- Boş bırakmak veya daha sonra değer atamaya çalışmak hata üretir.

### Diğer Değişkenlerle Etkileşim

```javascript
const pi = 3.14;
var x = 10;
var sum = pi + x; // Burada pi, sabit değer olarak kullanılır.

```

- `const` değişkeni, aritmetik işlemlerde normal değişken gibi kullanılabilir.

---

**Özet**

- `const` ile tanımlanan değişkenler, **değiştirilemez (immutabledır)**.
- Tanımlandığı satırda **başlangıç değerini vermek zorunludur**.
- Bir kez atadıktan sonra, **yeni bir değer atamaya çalışmak hata verir**.
- Bu özellikleri sayesinde, sabit değerlerin yönetimi ve okunabilirliği açısından const, JavaScript kodlarında oldukça kullanışlıdır.

---