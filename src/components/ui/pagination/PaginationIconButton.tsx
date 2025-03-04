import {PaginationDoubleArrowIcon} from "./icons/PaginationDoubleArrowIcon.tsx";
import {PaginationButton} from "./PaginationButton.tsx";
import {FC, ReactNode} from "react";
import {PaginationArrowIcon} from "./icons/PaginationArrowIcon.tsx";

type PaginationIconButtonProps = {
  onClick: () => void
  disabled: boolean
  icon: "arrow-left" | "arrow-right" | "double-arrow-left" | "double-arrow-right"
  title?: string
}

const icons: Record<PaginationIconButtonProps['icon'], ReactNode> = {
  "arrow-left": <PaginationArrowIcon direction="left"/>,
  "double-arrow-left": <PaginationDoubleArrowIcon direction="left"/>,
  "arrow-right":  <PaginationArrowIcon direction="right"/>,
  "double-arrow-right": <PaginationDoubleArrowIcon direction="right"/>,
}

export const PaginationIconButton:FC<PaginationIconButtonProps> = (props) => {
  const {icon, disabled, onClick, title} = props
  return (
    <PaginationButton
      title={title}
      onClick={onClick}
      disabled={disabled}
    >
      {icons[icon]}
    </PaginationButton>
  )
}
