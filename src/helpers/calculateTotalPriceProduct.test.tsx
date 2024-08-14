import { describe, expect, it } from 'vitest';
import { calculateTotalPriceProduct } from './Helper';

describe('calculateTotalPriceProduct', () => {
  it('should return the final price with a discount', () => {
    const initialPrice = 100;
    const discountPercentage = 20;
    const finalPrice = calculateTotalPriceProduct(initialPrice, discountPercentage);
    expect(finalPrice).toBe('80.00');
  });

  it('should return the initial price without a discount', () => {
    const initialPrice = 100;
    const discountPercentage = 0;
    const finalPrice = calculateTotalPriceProduct(initialPrice, discountPercentage);
    expect(finalPrice).toBe('100.00');
  });

  it('should throw an error if the initial price is negative', () => {
    const initialPrice = -100;
    const discountPercentage = 20;
    expect(() => calculateTotalPriceProduct(initialPrice, discountPercentage)).toThrowError();
  });
});

