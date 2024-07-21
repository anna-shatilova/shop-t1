import { expect, describe, it } from 'vitest'
import { ICartProducts } from '../interface/ApiInterface'
import { findProductQuantity } from './Helper'

describe('findProductQuantity', () => {
  it('should return the quantity of the product if it exists in the cart', () => {
    const productsByCart: ICartProducts[] = [
      {
        id: 1,
        title: 'Product 1',
        price: 10.99,
        discountPercentage: 0,
        thumbnail: 'product1.jpg',
        quantity: 2,
      },
      {
        id: 2,
        title: 'Product 2',
        price: 9.99,
        discountPercentage: 10,
        thumbnail: 'product2.jpg',
        quantity: 3,
      },
    ]
    const productId = 1
    const quantity = findProductQuantity(productId, productsByCart)
    expect(quantity).toBe(2)
  })
  it('should return 0 if the product does not exist in the cart', () => {
    const productsByCart: ICartProducts[] = [
      {
        id: 1,
        title: 'Product 1',
        price: 10.99,
        discountPercentage: 0,
        thumbnail: 'product1.jpg',
        quantity: 2,
      },
      {
        id: 2,
        title: 'Product 2',
        price: 9.99,
        discountPercentage: 10,
        thumbnail: 'product2.jpg',
        quantity: 3,
      },
    ]
    const productId = 3
    const quantity = findProductQuantity(productId, productsByCart)
    expect(quantity).toBe(0)
  })
  it('should return 0 if the productsByCart array is empty', () => {
    const productsByCart: ICartProducts[] = []
    const productId = 1
    const quantity = findProductQuantity(productId, productsByCart)
    expect(quantity).toBe(0)
  })
})
