const getPricePct = () => {
  switch (promo) {
    case "seu-sucesso":
      return 20;
    case "não-perca":
      return 15;
    case "exclusiva":
      return 10;
    default:
      return 25;
  }
};

const getPrice = () => {
  switch (promo) {
    case "seu-sucesso":
      return 197;
    case "não-perca":
      return 147;
    case "exclusiva":
      return 97;
    default:
      return 247;
  }
};

const getPromoUrl = (url) => {
  switch (promo) {
    case "seu-sucesso":
      return `${url}?promo=seu-sucesso`;
    case "não-perca":
      return `${url}?promo=não-perca`;
    case "exclusiva":
      return `${url}?promo=exclusiva`;
    default:
      return url;
  }
};

const getPromoPrice = () => {
  switch (promo) {
    case "seu-sucesso":
      return "https://pay.kiwify.com.br/mER6SYO";
    case "não-perca":
      return "https://pay.kiwify.com.br/mER6SYO";
    case "exclusiva":
      return "https://pay.kiwify.com.br/mER6SYO";
    default:
      return "https://pay.kiwify.com.br/mER6SYO";
  }
};

if (document.getElementById("price-pct")) {
  document.getElementById("price-pct").innerHTML = `${getPricePct()}%`;
}

if (document.getElementById("price-pct2")) {
  document.getElementById("price-pct2").innerHTML = `${getPricePct()}%`;
}

if (document.getElementById("price")) {
  document.getElementById("price").innerHTML = `R$ ${getPrice()},00`;
}

// Handle links adding the promo code
/* Index(VSL) */

if (document.getElementById("positive-button")) {
  document
    .getElementById("positive-button")
    .setAttribute(
      "href",
      getPromoPrice() + window.location.search
      // getPromoUrl()
    );
}

if (document.getElementById("positive-resultados")) {
  document
    .getElementById("positive-resultados")
    .setAttribute(
      "href",
      getPromoPrice() + window.location.search
      // getPromoUrl()
    );
}

if (document.getElementById("positive-bonus")) {
  document
    .getElementById("positive-bonus")
    .setAttribute(
      "href",
      getPromoPrice() + window.location.search
      // getPromoUrl()
    );
}


if (document.getElementById("positive-button2")) {
  document
    .getElementById("positive-button2")
    .setAttribute(
      "href",
      getPromoPrice() + window.location.search
      // getPromoUrl()
    );
}

if (document.getElementById("vsl-read")) {
  document
    .getElementById("vsl-read")
    .setAttribute(
      "href",
      getPromoUrl("/guia-completo-da-dieta-cetogenica/leia")
    );
}

/* Leia */

const handleSpecialistName = () => false;

if (document.getElementById("leia-1")) {
  document
    .getElementById("leia-1")
    .setAttribute(
      "href",
      getPromoUrl("/guia-completo-da-dieta-cetogenica/obter-dieta")
    );
  document
    .getElementById("leia-2")
    .setAttribute(
      "href",
      getPromoUrl("/guia-completo-da-dieta-cetogenica/obter-dieta")
    );
  document
    .getElementById("leia-3")
    .setAttribute(
      "href",
      getPromoUrl("/guia-completo-da-dieta-cetogenica/obter-dieta")
    );
  document
    .getElementById("leia-4")
    .setAttribute(
      "href",
      getPromoUrl("/guia-completo-da-dieta-cetogenica/obter-dieta")
    );
  document
    .getElementById("leia-5")
    .setAttribute(
      "href",
      getPromoUrl("/guia-completo-da-dieta-cetogenica/obter-dieta")
    );
}

/* Final */

if (document.getElementById("promo-price")) {
  document.getElementById("promo-price").setAttribute("href", getPromoPrice());
}
