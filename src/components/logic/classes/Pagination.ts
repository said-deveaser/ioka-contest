export class Pagination {

  private _currentPage: number

  constructor(
    private config: {
      pageCount: number
      initialCurrentPage: number
      onPageChange: (page: number) => void
      severalPagesStep: number
      cycledPagination: boolean
    }
  ) {
    this._currentPage = config.initialCurrentPage
  }

  get cycledPagination() {
    return this.config.cycledPagination
  }
  get currentPage() {
    return this._currentPage
  }
  get pageCount() {
    return this.config.pageCount
  }
  get severalPagesStep() {
    return this.config.severalPagesStep
  }

  public goToNextPage() {
    this.handleChangePage(this._currentPage + 1)
  }
  public goToPrevPage() {
    this.handleChangePage(this._currentPage - 1)
  }
  public goToSeveralNextPages() {
    this.handleChangePage(this._currentPage + this.config.severalPagesStep)
  }
  public goToSeveralPrevPages() {
    this.handleChangePage(this._currentPage - this.config.severalPagesStep)
  }
  public goToPage(page: number) {
    this.handleChangePage(page)
  }

  private changePage(page: number) {
    this._currentPage = page
    this.config.onPageChange(page)
  }
  private handleChangePage(_newPage: number) {
    let newPage = _newPage;
    const cycledPagination = this.config.cycledPagination
    const currentPage = this._currentPage
    const pageCount = this.config.pageCount
    if (newPage < 1) {
      newPage = !cycledPagination ? 1 : currentPage === 1 ? pageCount : 1
    }
    if (newPage > pageCount) {
      newPage = !cycledPagination ? pageCount : currentPage === pageCount ? 1 : pageCount
    }

    if (newPage !== currentPage) {
      this.changePage(newPage)
    }
  }
}
