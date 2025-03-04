// import {PaginationULContainer} from "./components/ui/pagination/PaginationULContainer.tsx";
// import {PaginationButton} from "./components/ui/pagination/PaginationButton.tsx";
// import {PaginationArrowIcon} from "./components/ui/pagination/icons/PaginationArrowIcon.tsx";
// import {PaginationDoubleArrowIcon} from "./components/ui/pagination/icons/PaginationDoubleArrowIcon.tsx";
import s from './app.module.scss'
import {Pagination} from "./components/compound/Pagination/Pagination.tsx";
import {useState} from "react";
import {PaginationClass} from "./components/compound/PaginationClass/PaginationClass.tsx";

const defaultPageCount = 30
const defaultItemsToPreview = 7
const defaultSeveralPagesStep = 5

function App() {
  const [itemsToPreview, setItemsToPreview] = useState(defaultItemsToPreview)
  const [pageCount, setPageCount] = useState(defaultPageCount)
  const [severalPagesStep, setSeveralPagesStep] = useState(defaultSeveralPagesStep)
  const [disabled, setDisabled] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [classComponent, setClassComponent] = useState(false)
  const [cycled, setCycled] = useState(false)
  return (
    <div className={s.applicationContainer}>
      <h3 style={{fontSize: 18, fontWeight: 'bold'}}>Настройки</h3>
      <div className={s.configSection}>
        <div>
          <input type={"checkbox"} checked={cycled} id="cycled" onChange={() => {
            setCycled(!cycled)
          }}/>
          <label htmlFor="cycled">Циклическая пагинация</label>
        </div>
        <div>
          <label htmlFor="pageCount">Всего страниц: </label>
          <input name="page-count" type="number" id="pageCount" value={pageCount} onChange={ev => {
            let value = parseInt(ev.target.value)
            if (isNaN(value)) value = 0
            setPageCount(value)
          }}/>
        </div>
        <div>
          <label htmlFor="itemsToPreview">Элементов для предпросмотра (мин 5): </label>
          <input name="items-preview" type="number" id="itemsToPreview" value={itemsToPreview} onChange={ev => {
            let value = parseInt(ev.target.value)
            if (isNaN(value)) value = 0
            setItemsToPreview(value)
          }}/>
        </div>
        <div>
          <label htmlFor="severalPagesStep">Шаг в несколько страниц: </label>
          <input name="severalPagesStep" type="number" id="severalPagesStep" value={severalPagesStep} onChange={ev => {
            let value = parseInt(ev.target.value)
            if (isNaN(value)) value = 0
            setSeveralPagesStep(value)
          }}/>
        </div>
        <div>
          <input type={"checkbox"} checked={disabled} id="disabled" onChange={() => {
            setDisabled(!disabled)
          }}/>
          <label htmlFor="disabled">Disabled </label>
        </div>
        <div>
          <input type={"checkbox"} checked={classComponent} id="use-class" onChange={() => {
            setClassComponent(!classComponent)
          }}/>
          <label htmlFor="use-class">Использовать логику из класса Pagination </label>
        </div>
      </div>

      {!classComponent && <>
          <h3 style={{fontSize: 18, fontWeight: 'bold'}}>Логика в хуке</h3>
          <Pagination
              currentPage={currentPage}
              pageCount={pageCount}
              onPageChange={setCurrentPage}
              itemsToPreview={itemsToPreview}
              severalPagesStep={severalPagesStep}
              disabled={disabled}
              cycledPagination={cycled}
          />
      </>}

      {classComponent && <>
          <h3 style={{fontSize: 18, fontWeight: 'bold'}}>Логика в классе</h3>
          <PaginationClass
              currentPage={currentPage}
              pageCount={pageCount}
              onPageChange={setCurrentPage}
              itemsToPreview={itemsToPreview}
              severalPagesStep={severalPagesStep}
              disabled={disabled}
              cycledPagination={cycled}
          />
      </>}
    </div>
  )
}

export default App
