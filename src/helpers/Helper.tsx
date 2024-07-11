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
  const discountDecimal = discountPercentage / 100
  const discountAmount = initialPrice * discountDecimal
  const finalPrice = initialPrice - discountAmount
  return finalPrice.toFixed(2)
}
