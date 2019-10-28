# sLang
This is a very simple tool that let's you add multiple languages to your website. sLang is written in pure JS and has no dependencies.

# Usage:
Just add the custom data attribute to the element, text of which has to be changed. By default, the attribute name is ```data-lang```. The value of this attribute is used as the key for getting the required translation. You may change it by using ```sLang.setSelector()``` method. Note that, you cannot change the prefix ```data-```. 
If you want to change text of ```value``` or ```placeholder``` attribute then you should add the prefixes "v_" or "p_" respectively to the begining of the keys.

```html
<!-- Text -->
<nav>
  <a href="index.html" data-lang="home">Home</a>
  <a href="about.html" data-lang="services">Services</a>
  <a href="domain.html" data-lang="prices">Prices</a>
  <a href="hosting.html" data-lang="faq">FAQ</a>
  <a href="contact.html" data-lang="contacts">Contact</a>
  <select class="lang-selector" data-lang="lang">
    <option value="en">English</option>
    <option value="ru">Pусский</option>
  </select>
</nav>

<!-- Placeholder -->
<input type="email"  placeholder="Your email..." data-lang="p_email" />
<input type="password"  placeholder="Your password..." data-lang="p_password" />

<!-- Value -->
<input type="submit" value="Sign in" data-lang="v_submit" />

```

Supply the source JSON to ```sLang.setSource()``` method. JSON structure is as follows: 

```javascript
{
  "dictionary": [
    {
      "lang": "ru",
      "items": {
        "home": "Главная",
        "services": "Услуги",
        "prices": "Тарифы",
        "faq": "Вопросы",
        "contacts": "Контакты",
        "p_email": "Ваш Эмаил...",
        "p_password": "Ваш Пароль...",
        "v_submit": "Войти"
      }
    },
    {
      "lang": "en",
      "items": {
        "home": "Home",
        "services": "Services",
        "prices": "Prices",
        "faq": "FAQ",
        "contacts": "Contacts",
        "p_email": "Your Email...",
        "p_password": "Your Password...",
        "v_submit": "Sign in"
      }
    }
  ]
}
  ```
Lastly, call the switchTo function to change the text:

```javascript
document.querySelector('.lang-selector').addEventListener('change', function() {
  sLang.switchTo(this.value);
});
```
