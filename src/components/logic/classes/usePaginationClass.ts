import {useEffect, useMemo} from "react";
import {Pagination} from "./Pagination.ts";

export type PaginationClassConfig = {
  pageCount: number
  currentPage: number
  onPageChange: (page: number) => void
  severalPagesStep: number
  cycledPagination: boolean
}

export const usePaginationClass = (config: PaginationClassConfig) => {
  const controller = useMemo(() => new Pagination({
    initialCurrentPage: config.currentPage,
    cycledPagination: config.cycledPagination,
    pageCount: config.pageCount,
    onPageChange: config.onPageChange,
    severalPagesStep: config.severalPagesStep,
  }), [config.cycledPagination, config.pageCount, config.severalPagesStep]); // Легкий способ пересоздавать инстанс класса при смене конфига

  // Сложный способ подписываться на изменения и изменять у класса
  useEffect(() => {
    if (config.currentPage !== controller.currentPage) {
      // controller.goToPage(config.currentPage)
    }
  }, [config.currentPage]);


  return {
    cycledPagination: controller.cycledPagination,
    currentPage: controller.currentPage,
    pageCount: controller.pageCount,
    severalPagesStep: controller.severalPagesStep,
    goToSeveralPrevPages: controller.goToSeveralPrevPages.bind(controller),
    goToPrevPage: controller.goToPrevPage.bind(controller),
    goToPage: controller.goToPage.bind(controller),
    goToNextPage: controller.goToNextPage.bind(controller),
    goToSeveralNextPages: controller.goToSeveralNextPages.bind(controller)
  }
}
