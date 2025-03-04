export type PaginationControllerConfig = {
  pageCount: number
  currentPage: number
  onPageChange?: (page: number) => void
  severalPagesStep?: number

  cycledPagination?: boolean
}

export const usePaginationController = (config: PaginationControllerConfig) => {

  const {
    severalPagesStep = 5,
    currentPage,
    pageCount,
    cycledPagination,
    onPageChange,
  } = config

  const handleChangePage = (newPage: number) => {
    if (newPage < 1) {
      newPage = !cycledPagination ? 1 : currentPage === 1 ? pageCount : 1
    }
    if (newPage > pageCount) {
      newPage = !cycledPagination ? pageCount : currentPage === pageCount ? 1 : pageCount
    }

    if (newPage !== currentPage) {
      onPageChange?.(newPage)
    }
  }


  const goToNextPage = () => handleChangePage(currentPage + 1);
  const goToPrevPage = () => handleChangePage(currentPage - 1);
  const goToSeveralNextPages = () => handleChangePage(currentPage + severalPagesStep);
  const goToSeveralPrevPages = () => handleChangePage(currentPage - severalPagesStep);
  const goToPage = (page: number) => handleChangePage(page);


  return {
    goToNextPage,
    goToPrevPage,
    goToSeveralNextPages,
    goToSeveralPrevPages,
    currentPage,
    severalPagesStep,
    goToPage,
    cycledPagination,
    pageCount,
  }
}
