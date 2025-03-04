import {FC} from "react";
import {clsx} from "clsx";
import s from './arrow-icon.module.scss'

export const PaginationDoubleArrowIcon: FC<{direction?: "right" | "left"}> = ({direction = "right"}) => {
  return (
    <svg className={clsx(s.arrowIcon, s[`arrowIcon__${direction}`])} viewBox="0 0 24 24" width="24" height="24">
      <path d="M6 6L4.59 7.41 9.17 12l-4.58 4.59L6 18l6-6z"></path>
      <path d="M13 6l-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
    </svg>
  )
}
