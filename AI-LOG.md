## 2026-09-27 —  set up harness (rules file, lint gate, CI)
+ Tool: Claude
+ Asked for: hướng dẫn dựng harness cho repo — cấu trúc rules file, cách thêm gate kiểm tra style, cách bật CI chạy khi push.
+ Kept: cấu trúc CLAUDE.md (Stack / Commands / Never), nội dung workflow .github/workflows/ci.yml 
+ Changed: đổi node-version trong CI cho khớp bản Node em đang dùng (26); trong 2 lựa chọn linter Claude đưa ra (ESLint hoặc Prettier), em chọn ESLint.
+ Rejected: cách dùng Prettier — chỉ chọn một trong hai, không dùng cả hai.
+ By hand: không có phần code nào tự viết thêm ngoài ci.yml; các lựa chọn tự đưa ra là node-version, chọn ESLint và fix lỗi ở phần scripts trong file package.json khi thêm eslint.

## 2026-09-27 — implement cartTotal
+ Tool: Claude 
+ Asked for: viết brief mô tả contract của cartTotal(items, options), sau đó liệt kê từng edge case cần xử lý (giỏ rỗng, price âm, qty không nguyên dương, ngưỡng free-shipping, làm tròn một lần) để em tự code theo.
+ Kept: toàn bộ danh sách case và thứ tự validate (validate từng item trước, tính subtotal sau).
+ Changed:  phần code em tự viết từ đầu dựa trên checklist.
+ Rejected: không có
+ By hand: toàn bộ logic trong src/cart.js — validate, tính subtotal/VAT/shipping, làm tròn.

## 2026-09-27 — debug syntax error + viết test
+ Tool: Claude 
+ Asked for: kiểm tra code cartTotal em tự viết có lỗi gì không, và gợi ý bộ test case cho các trường hợp biên.
+ Kept: 6 test case (empty cart, ngưỡng free-ship đúng/dưới ngưỡng, price âm, qty thập phân, qty <= 0) gần như nguyên văn — chỉ đổi số liệu vào file test/cart.test.js.
+ Changed: sửa lỗi cú pháp dấu `\` thừa ở cuối dòng `vat = ...` mà AI phát hiện; sửa lại message lỗi RangeError từ "negative integer" thành "positive integer".
+ Rejected: không có.
+ By hand: không có phần nào trong file test này em tự viết tay

## 2026-09-28 - sửa CI và lỗi chạy npm test
+ Tool: Claude 
+ Asked for: giải thích lỗi `npm test` bị chặn trong PowerShell, tìm lý do tab Actions trống và CI đỏ. 
+ Kept: chẩn đoán của Claude: thư mục workflow đặt tên `github` thay vì `.github`, và `eslint` chưa nằm trong devDependencies nên CI báo `eslint: not found`. 
+ Changed: em đổi tên thư mục thành `.github` (`git mv`), cài `eslint`, `@eslint/js`, `globals` bằng `npm install --save-dev` để ghi vào package.json, commit `package-lock.json` rồi push. 
+ Rejected: em không đổi Execution Policy của PowerShell, mà chạy `npm test` bằng Git Bash. 
+ By hand: em tự đọc log CI để xác định bước `npm run lint` bị đỏ, tự chạy các lệnh git.


## 2026-09-28 — rà soát repo và cập nhật CLAUDE.md

+ Tool: Claude 
+ Asked for: xem repo GitHub của em còn thiếu gì ngoài AI-LOG.md và SELF_ASSESSMENT_REPORT.md. Kept: nhận xét của Claude rằng CLAUDE.md còn chung chung và cụm "(see below)" ở dòng lint không có nội dung phía dưới; brief.md giống hệt bản Claude gợi ý.
+ Changed: em thêm mục Spec (ví dụ mẫu 467400, kết quả phải là number, làm tròn một lần bằng Math.round), bỏ cụm "(see below)", và thêm vào mục Never dòng cấm dùng `toFixed`. 
+ Rejected: không có. 
+ By hand: em tự chỉnh câu chữ và commit CLAUDE.md.

