import {FC} from "react";
import {clsx} from "clsx";
import s from "./arrow-icon.module.scss";

export const PaginationArrowIcon: FC<{ direction?: "right" | "left" }> = ({direction = "right"}) => {
  return (
    <svg className={clsx(s.arrowIcon, s[`arrowIcon__${direction}`])} viewBox="0 0 24 24" width="24" height="24">
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
    </svg>
  )
}
