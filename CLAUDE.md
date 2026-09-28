# Project rules

## Stack
- Plain JavaScript (ES modules), Node.js built-in test runner. No runtime dependencies.

## Spec
- Full specification is in `README.md`; the function lives in `src/cart.js`, tests in `test/cart.test.js`.
- `cartTotal(items, options)` must return a **number**, rounded once at the end with `Math.round`.
- Worked example: 2 × 180000 + 1 × 45000, vatRate 0.08, freeShipFrom 500000, shipFee 30000 → **467400**.

## Commands
- `npm test` — runs all tests, must pass before any commit.
- `npm run lint` — checks code style 


## Never
- Never add a runtime dependency to `src/cart.js`.
- Never modify `test/cart.test.js` to make a failing test pass — fix the implementation instead.
- Never use `toFixed` for the result - it returns a string not a number