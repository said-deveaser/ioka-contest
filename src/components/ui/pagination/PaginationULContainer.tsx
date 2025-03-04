import {FC, HTMLAttributes} from "react";
import {clsx} from "clsx";
import s from './pagination.module.scss'

type PaginationULContainerProps = HTMLAttributes<HTMLUListElement> & { orientation?: "horizontal" | "vertical" };

export const PaginationULContainer: FC<PaginationULContainerProps> = (props) => {
  const {className, orientation = "horizontal", ...otherProps} = props

  const classes = clsx(s.paginationContainer, s[`paginationContainer__${orientation}`], className)

  return (
    <ul {...otherProps} className={classes}/>
  )
}
