import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

// This test fails until you implement cartTotal. That is the point:
// run `npm test` first and see it red.
test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 467400)
})
test('empty cart returns 0', () => {
  assert.equal(cartTotal([], { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }), 0)
})

test('free shipping exactly at threshold', () => {
  const items = [{ name: 'Item', price: 500000, qty: 1 }]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  // subtotal = 500000 (== threshold) -> shipping = 0
  // total = 500000 + 40000 + 0 = 540000
  assert.equal(cartTotal(items, options), 540000)
})

test('below threshold still charges shipping', () => {
  const items = [{ name: 'Item', price: 499000, qty: 1 }]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  // subtotal = 499000 -> shipping = 30000
  // total = 499000 + 39920 + 30000 = 568920
  assert.equal(cartTotal(items, options), 568920)
})

test('negative price throws RangeError', () => {
  const items = [{ name: 'Item', price: -1000, qty: 1 }]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('non-integer quantity throws RangeError', () => {
  const items = [{ name: 'Item', price: 100000, qty: 1.5 }]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('zero or negative quantity throws RangeError', () => {
  const items = [{ name: 'Item', price: 100000, qty: 0 }]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

