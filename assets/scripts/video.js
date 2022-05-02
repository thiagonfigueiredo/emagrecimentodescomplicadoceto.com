const defaultVideo = () => {
  switch (promo) {
    case "seu-sucesso":
      return true;
    case "não-perca":
      return false;
    case "exclusiva":
      return true;
    default:
      return true;
  }
};

const promoNaoPercaVideo = promo === "não-perca";