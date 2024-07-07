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
  
