import { useState, useRef, useMemo } from "react";
import styles from "./index.module.scss";
import PanginationButton from "./panginationButton";

interface IPanginationProps {
  rowsOnPage: number;
  rows: number;
  setIndexesOfConten: React.Dispatch<
    React.SetStateAction<{
      startIndex: number;
      endIndex: number;
    }>
  >;
}

const Pangination = ({
  rowsOnPage,
  rows,
  setIndexesOfConten,
}: IPanginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  // автоматическое переключение на первую страницу при изменении количества строк на странице
  const oldValueRowsOnPage = useRef<number>(rowsOnPage);
  setTimeout(() => {
    if (oldValueRowsOnPage.current !== rowsOnPage) {
      oldValueRowsOnPage.current = rowsOnPage;
      setCurrentPage(1);
    }
  });

  // определение данных для пангилации
  const startRow = (currentPage - 1) * rowsOnPage + 1;
  const endRow =
    currentPage * rowsOnPage < rows ? currentPage * rowsOnPage : rows;
  const pages = Math.ceil(rows / rowsOnPage);

  useMemo(() => {
    setTimeout(() => {
      setIndexesOfConten({ startIndex: startRow - 1, endIndex: endRow - 1 });
    });
  }, [startRow, endRow, setIndexesOfConten]);

  // обработка нажатий на кнопкт пролистывания страниц
  const getNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const getPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className={styles.pangination}>
      <span className={styles.infoAboutRows}>
        {startRow} - {endRow} of {rows}
      </span>
      <div className={styles.pagesCounter}>
        <PanginationButton
          arrowDirection="left"
          handleClick={getPreviousPage}
          disabled={currentPage === 1 && true}
        />
        <span className={styles.pagesNumber}>
          <span>{currentPage}</span>/{pages}
        </span>
        <PanginationButton
          arrowDirection="right"
          handleClick={getNextPage}
          disabled={currentPage === pages && true}
        />
      </div>
    </div>
  );
};

export default Pangination;
