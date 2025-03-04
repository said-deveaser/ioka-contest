export const getPreviewItemsData = (config: {
  itemsToPreview: number
  currentPage: number
  pagesCount: number
}) => {
  const {itemsToPreview: _itemsToPreview, currentPage, pagesCount} = config

  const itemsToPreview = Math.min(Math.max(_itemsToPreview, 5), pagesCount)

  const pagesPreviewFrom = Math.min(Math.max(currentPage - Math.floor(itemsToPreview / 2 - .5), 1), pagesCount - itemsToPreview + 1)

  const showLeftDots = pagesPreviewFrom > 1
  const showRightDots = (pagesPreviewFrom + itemsToPreview -1) < pagesCount

  return {
    previewCount: itemsToPreview,
    previewFrom: pagesPreviewFrom,
    showLeftDots,
    showRightDots,
  }
}
