# Project rules

## Stack
- Plain JavaScript (ES modules), Node.js built-in test runner. No runtime dependencies.

## Commands
- `npm test` — runs all tests, must pass before any commit.
- `npm run lint` — checks code style (see below).

## Never
- Never add a runtime dependency to `src/cart.js`.
- Never modify `test/cart.test.js` to make a failing test pass — fix the implementation instead.