# Brief — cartTotal

## File được phép sửa
Chỉ `src/cart.js`. Không sửa `test/cart.test.js`, không thêm dependency vào `package.json`.

## Contract
`cartTotal(items, options)` — plain JavaScript, no dependencies.

- `items`: mảng `{ name, price, qty }`
- `options`: `{ vatRate, freeShipFrom, shipFee }`
- `subtotal` = tổng `price × qty` của mọi item
- `VAT` = `vatRate` áp trên `subtotal`
- `shipping` = `0` nếu `subtotal >= freeShipFrom`, ngược lại = `shipFee`
- Trả về `subtotal + VAT + shipping`, là một **number**, **làm tròn đến đồng** (không trả string)
- Giỏ hàng rỗng (`items = []`) trả về `0` — không tính VAT, không tính shipping

## Error cases
- `price < 0` → throw `RangeError`
- `qty` không phải số nguyên dương (âm, 0, thập phân, không phải số) → throw `RangeError`

## Ví dụ mẫu (phải khớp chính xác)
items = [{ name: 'Áo thun', price: 180000, qty: 2 }, { name: 'Sổ tay', price: 45000, qty: 1 }]
options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
→ subtotal 405000, VAT 32400, shipping 30000 (dưới ngưỡng) → **467400**

## Ràng buộc
- No dependencies — chỉ dùng JavaScript thuần.
- Giữ nguyên chữ ký hàm `export function cartTotal(items, options)`.