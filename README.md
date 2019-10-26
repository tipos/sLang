# sLang
This is a very simple tool that let's you add multiple languages to your website. sLang is written in pure JS and has no dependencies.

# Usage:
Just add the custom data attribute to the element text of which has to be changed. By default, attribute name is "data-lang". But you can change it if you want. Make sure to keep the "data-" prefix. This attribute is used as JSON key to get the required translation.

```html
<nav>
  <a href="index.html" data-lang="home">Home</a>
  <a href="about.html" data-lang="services">Services</a>
  <a href="domain.html" data-lang="prices">Prices</a>
  <a href="hosting.html" data-lang="faq">FAQ</a>
  <a href="contact.html" data-lang="contacts">Contact</a>
  <a href="login.html" data-lang="login"><span>Sign In</span></a>
  <select class="lang-selector" data-lang="lang">
    <option value="en">English</option>
    <option value="ru">Pусский</option>
  </select>
</nav>

```

Import the sLang.js to your project. Then add the keys to the JSON:

```javascript
var languages = {
  "translations": [
    {
      "lang": "ru",
      "items": {
        "home": "Главная",
        "services": "Услуги",
        "prices": "Тарифы",
        "faq": "Вопросы",
        "contacts": "Контакты",
        "login": "Личный Кабинет"
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
        "login": "Sign In"
      }
    }
  ]
}
  ```
You can get the JSON from external file. If you do so, keep the variable name and the JSON structure as shown above.
 
Lastly, call the switchTo function to change the text:

```javascript
document.querySelector('.lang-selector').addEventListener('change', function() {
  sLang.switchTo(this.value);
});
```
