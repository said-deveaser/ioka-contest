import {FC} from "react";
import {PaginationULContainer} from "../../ui/pagination/PaginationULContainer.tsx";
import {PaginationButton} from "../../ui/pagination/PaginationButton.tsx";
import {getPreviewItemsData} from "../../ui/pagination/utils/getPreviewItemsData.ts";
import {PaginationIconButton} from "../../ui/pagination/PaginationIconButton.tsx";
import {PaginationClassConfig, usePaginationClass} from "../../logic/classes/usePaginationClass.ts";

type PaginationClassProps = PaginationClassConfig & {
  containerClassName?: string
  itemsToPreview?: number
  orientation?: "horizontal" | "vertical"
  disabled?: boolean
}
export const PaginationClass: FC<PaginationClassProps> = (props) => {
  const {
    containerClassName,
    itemsToPreview = 7,
    orientation,
    disabled,
    ...controllerConfig
  } = props
  const controller = usePaginationClass(controllerConfig)

  const prevActionsDisabled = disabled || (!controller.cycledPagination && controller.currentPage === 1)
  const nextActionsDisabled = disabled || (!controller.cycledPagination && controller.currentPage === controller.pageCount)

  const previewItemsData = getPreviewItemsData({
    itemsToPreview,
    currentPage: controller.currentPage,
    pagesCount: controller.pageCount,
  })

  return (
    <PaginationULContainer className={containerClassName} orientation={orientation}>
      <li>
        <PaginationIconButton
          title={`Назад на ${controller.severalPagesStep} стр.`}
          icon="double-arrow-left"
          onClick={controller.goToSeveralPrevPages}
          disabled={prevActionsDisabled}
        />
      </li>
      <li>
        <PaginationIconButton
          icon="arrow-left"
          onClick={controller.goToPrevPage}
          disabled={prevActionsDisabled}
        />
      </li>
      {[...Array(previewItemsData.previewCount)].map((_, index) => {
        const page = previewItemsData.previewFrom + index
        const showDots = (previewItemsData.showLeftDots && index === 0) ||
          (previewItemsData.showRightDots && index === previewItemsData.previewCount - 1)
        if (showDots) return <PaginationButton key={page} disabled>...</PaginationButton>
        return (
          <li key={page}>
            <PaginationButton
              disabled={disabled}
              selected={page === controller.currentPage}
              onClick={() => controller.goToPage(page)}
            >
              {page}
            </PaginationButton>
          </li>
        )
      })}
      <li>
        <PaginationIconButton
          icon="arrow-right"
          onClick={controller.goToNextPage}
          disabled={nextActionsDisabled}
        />
      </li>
      <li>
        <PaginationIconButton
          icon="double-arrow-right"
          onClick={controller.goToSeveralNextPages}
          disabled={nextActionsDisabled}
          title={`Вперед на ${controller.severalPagesStep} стр.`}
        />
      </li>
    </PaginationULContainer>
  )
}
