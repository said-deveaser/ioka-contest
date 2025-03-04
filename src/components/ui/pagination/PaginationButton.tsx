import s from './pagination.module.scss'
import {FC, MouseEventHandler, ReactNode} from "react";
import {clsx} from "clsx";

type PaginationButtonProps = {
  className?: string;
  selected?: boolean;
  disabled?: boolean;
  children?: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
  title?: string
}

export const PaginationButton: FC<PaginationButtonProps> = (props) => {
  const {className, selected, disabled, children, onClick, title} = props
  const classes = clsx(
    s.paginationItem,
    disabled && s.paginationItem__disabled,
    selected && s.paginationItem__selected,
    className)
  return (
    <button
      type="button"
      disabled={selected ?? disabled}
      className={classes}
      onClick={onClick}
      title={title}
    >
      {children}
    </button>
  )
}
