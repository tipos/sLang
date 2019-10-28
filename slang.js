var sLang = (function() {
  // DOM element selector
  var selector = "data-lang";

  // Translations object
  var languages = {};

  return {
    switchTo: function(lang) {
      // Query Elements with given selector
      document.querySelectorAll("[" + selector + "]").forEach(function(el) {
        // Iterate the dictionary array
        var pack = languages.dictionary;
        for (var i = 0; i < pack.length; i++) {
          var language = pack[i];
          // Check if passed param exists in translations
          if (language.lang === lang) {
            // Iterate the items object and replace the target's text
            for (var item in language.items) {
              if (item === el.getAttribute(selector)) {
                // Check what has to be changed, text, value or placeholder
                if (item.slice(0, 2) === "p_") {
                  el.placeholder = language.items[item];
                } else if (item.slice(0, 2) === "v_") {
                  el.value = language.items[item];
                } else {
                  el.innerText = language.items[item];
                }
              }
            }
            // Break the loop once the required item is found
            break;
          }
        }
      });
    },
    // Set source JSON
    setSource: function(src) {
      languages = src;
    },
    // Change selector
    setSelector: function(selector) {
      selector = "data-" + selector;
    }
  };
})();
