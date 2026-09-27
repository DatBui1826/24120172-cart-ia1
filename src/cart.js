// Implement cartTotal here. See README.md for the specification.
export function cartTotal(items, options) 
{
  //Check giỏ hàng rỗng
  if (!items || items.length === 0) {
    return 0;
  }
  //Tính toán subtotal
  let subtotal = items.reduce((acc, item) => {
    //Kiểm tra giá có < 0 hay không
    if (item.price < 0) {
      throw new RangeError('Price cannot be negative');
    }
    //Kiểm tra số lượng có phải là số nguyên dương hay không
    if (!Number.isInteger(item.qty) || item.qty <= 0) {
      throw new RangeError('Quantity must be a positive integer');
    }
    return acc + item.price * item.qty;
  }, 0);

  //Tính VAT
  let vat = subtotal * options.vatRate;
  //Tính phí ship
  let shipping = subtotal >= options.freeShipFrom ? 0 : options.shipFee;
  //Làm tròn kết quả và trả về tổng cộng
  return Math.round(subtotal + vat + shipping);
}
