## Prompt Nedir?

JavaScript'te etkileşimli web sayfaları oluşturmak için kullanıcıdan veri almak önemlidir. Bu amaçla kullanılan `prompt` komutu, kullanıcıya bir iletişim kutusu `(dialog box)` göstererek veri girişi yapmasını sağlar. Kullanıcıdan alınan bu veri, daha sonra `JavaScript` kodlarında kullanılabilir.

- `prompt` komutu, tarayıcıda bir iletişim kutusu açar ve kullanıcıdan bilgi girmesini ister. Bu komut, iki parametre alabilir:
- **Mesaj (Zorunlu):** Kullanıcıya gösterilecek metin.
- **Varsayılan Değer (Opsiyonel):** Giriş kutusunda varsayılan olarak gösterilecek değer.

---

### Temel Kullanım

```javascript
var userInput = prompt("Lütfen adınızı giriniz:");
```

Bu örnekte, kullanıcıdan adını girmesi istenir ve girilen değer userInput değişkenine atanır.

---

### prompt ile Kullanıcı Girdisi Alma

Aşağıdaki örnek, prompt komutunun nasıl kullanılacağını ve alınan verinin nasıl işleneceğini göstermektedir:

```javascript
var name = prompt("Adınız nedir?");
document.write("Merhaba " + name + "!");

var age = prompt("Kaç yaşındasınız?");
document.write("<br> " + age + " yaşındasınız.");

```

- `prompt("Adınız nedir?"):` Kullanıcıya `"Adınız nedir?"` mesajını gösterir ve kullanıcıdan bir isim girmesini bekler.
- `document.write("Merhaba " + name + "!"):` Kullanıcının girdiği ismi alır ve web sayfasında `"Merhaba [İsim]!"` şeklinde görüntüler.
- `prompt("Kaç yaşındasınız?"):` Kullanıcıya yaşını sormak için bir iletişim kutusu gösterir.
- `document.write("<br> " + age + " yaşındasınız."):` Kullanıcının girdiği yaşı alır ve web sayfasında `" [Yaş] yaşındasınız."` şeklinde görüntüler.

---

### Özet

JavaScript'te kullanıcıdan veri almak için kullanılan `prompt` komutunu ve temel kullanımını öğrendiniz. `prompt` komutu, etkileşimli web sayfaları oluştururken kullanıcı girdisi almak için hızlı ve etkili bir yöntemdir. Ancak, kullanıcı deneyimini geliştirmek için modern web uygulamalarında form elemanları ve diğer etkileşim yöntemlerinin tercih edilebileceğini unutmamak önemlidir.

---
