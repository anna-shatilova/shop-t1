import { ICartProducts } from '../interface/ApiInterface'

export const handleScrollToAnchorCatalog = () => {
  const anchorCatalog = document.getElementById('catalog')
  if (anchorCatalog) {
    anchorCatalog.scrollIntoView({ behavior: 'smooth' })
  }
}

export const handleScrollToAnchorFQA = () => {
  const anchorFQA = document.getElementById('FQA')
  if (anchorFQA) {
    anchorFQA.scrollIntoView({ behavior: 'smooth' })
  }
}

export const calculateTotalPriceProduct = (
  initialPrice: number,
  discountPercentage: number,
) => {
  if (initialPrice < 0) {
    throw new Error('Initial price cannot be negative')
  }
  const discountDecimal = discountPercentage / 100
  const discountAmount = initialPrice * discountDecimal
  const finalPrice = initialPrice - discountAmount
  return finalPrice.toFixed(2)
}

export const pluralizeItem = (count: number | undefined): string => {
  if (count === 1) {
    return 'item'
  } else {
    return 'items'
  }
}

export const findProductQuantity = (
  productId: number,
  productsByCart: ICartProducts[],
): number => {
  if (!productsByCart) return 0

  for (const product of productsByCart) {
    if (product.id === productId) {
      return product.quantity
    }
  }
  return 0
}
