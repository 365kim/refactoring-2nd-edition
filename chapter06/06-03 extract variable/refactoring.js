function price(order) {
  const basePrice = order.quantity * order.itemPrice;
  const quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shipping = Math.min(basePrice * 0.1, 100);

  // 가격 = 기본가격 - 수량할인 + 배송비
  return basePrice - quantityDiscount + shipping;
}
