var sLang = (function() {
  // DOM element selector
  var selector = "data-lang";

  // Translations object
  var languages = {
    translations: [
      {
        lang: "ru",
        items: {
          home: "Главная",
          services: "Услуги",
          prices: "Тарифы",
          faq: "Вопросы",
          costCalculator: "Калькулятор услуг",
          contacts: "Контакты",
          login: "Личный Кабинет"
        }
      },
      {
        lang: "en",
        items: {
          home: "Home",
          services: "Services",
          prices: "Prices",
          faq: "FAQ",
          costCalculator: "Cost Calculator",
          contacts: "Contacts",
          login: "Sign In"
        }
      }
    ]
  };

  return {
    switchTo: function(lang) {
      // Query Elements with given selector
      document.querySelectorAll("[" + selector + "]").forEach(function(el) {
        // Iterate the translations array
        var pack = languages.translations;
        for (var i = 0; i < pack.length; i++) {
          var language = pack[i];
          // Check if passed param exists in translations
          if (language.lang === lang) {
            // Iterate the items object and replace the target's text
            for (var item in language.items) {
              if (item === el.getAttribute(selector)) {
                el.innerText = language.items[item];
              }
            }
            // Break the loop once the required item is found
            break;
          }
        }
      });
    }
  };
})();
