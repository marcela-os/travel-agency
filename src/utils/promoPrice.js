

export const promoPrice = (promoPrice) => {
  if (promoPrice == undefined || isNaN(promoPrice) || promoPrice < 0) {
    return null;
  }

  const totalPromoPrice = (promoPrice * 80 ) / 100;

  return totalPromoPrice;

};
