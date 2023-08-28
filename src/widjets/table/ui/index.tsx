import { useState, useMemo, useRef } from "react";
import { nanoid } from "nanoid";
import styles from "./index.module.scss";
import { SortingIcon } from "../../../shared/icons";
import { Pangination } from "../../../features/pangination";

interface ITableProps {
  arrayWithContent: { [name: string]: string | Array<string> | object }[];
  numberRowsPerPage: number;
}

const Table = ({ arrayWithContent, numberRowsPerPage }: ITableProps) => {
  const [sortingCriteria, setSortingCriteria] = useState<string[]>([
    "id",
    "desc",
  ]);
  const [indexesOfRowsToShow, setIndexesOfRowsToShow] = useState({
    startIndex: 0,
    endIndex: arrayWithContent.length,
  });

  // прокрутка таблицы в начало при пролистывании
  const refTable = useRef<HTMLTableElement>(null);
  refTable.current?.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  // переработка данных для отрисовки таблицы
  const newArray = useMemo(() => {
    return arrayWithContent.map((itemObject) => {
      for (let key in itemObject) {
        const value = itemObject[key];
        if (Array.isArray(value)) {
          itemObject[key] = value.join(", ");
        } else if (value instanceof Object) {
          if ("name" in value && typeof value.name === "string") {
            itemObject[key] = value.name;
          } else {
            itemObject[key] = JSON.stringify(value);
          }
        }
      }
      return itemObject;
    });
  }, [arrayWithContent]);
  // сортировка данных
  useMemo(() => {
    newArray.sort((a, b) => {
      if (typeof a === "string" && typeof b === "string") {
        if (a[sortingCriteria[0]] > b[sortingCriteria[0]])
          return sortingCriteria[1] === "asc" ? 1 : -1;
        if (a[sortingCriteria[0]] === b[sortingCriteria[0]]) return 0;
        return sortingCriteria[1] === "asc" ? -1 : 1;
      }
      if (a[sortingCriteria[0]] < b[sortingCriteria[0]])
        return sortingCriteria[1] === "asc" ? 1 : -1;
      if (a[sortingCriteria[0]] === b[sortingCriteria[0]]) return 0;
      return sortingCriteria[1] === "asc" ? -1 : 1;
    });
  }, [newArray, sortingCriteria]);

  const namesInTableHeader = Object.keys(arrayWithContent[0]);
  document.documentElement.style.setProperty(
    "--numberOfColumns",
    `${namesInTableHeader.length}`
  );

  // определение строк для показа с учётом пангинации
  const rowsToShow = newArray.slice(
    indexesOfRowsToShow.startIndex,
    indexesOfRowsToShow.endIndex + 1
  );

  // обработка клика на заголовке таблицы для определения критериев сортировки данных
  const handleClickThSpan = (e: React.MouseEvent<HTMLSpanElement>) => {
    const text = e.currentTarget.textContent;
    if (text && text !== sortingCriteria[0]) {
      setSortingCriteria([text, "desc"]);
    } else if (
      text &&
      text === sortingCriteria[0] &&
      sortingCriteria[1] === "asc"
    ) {
      setSortingCriteria([text, "desc"]);
    } else if (
      text &&
      text === sortingCriteria[0] &&
      sortingCriteria[1] === "desc"
    ) {
      setSortingCriteria([text, "asc"]);
    }
  };

  // создаем строку заголовков
  const thead = (
    <tr className={styles.trInThead}>
      {namesInTableHeader.map((item) => {
        return (
          <th className={styles.th} key={nanoid()}>
            <span
              className={styles.thSpan}
              onClick={(e) => handleClickThSpan(e)}
            >
              {item}
              <SortingIcon
                colorUp={
                  sortingCriteria[0] === item && sortingCriteria[1] === "desc"
                    ? "black"
                    : "grey"
                }
                colorDown={
                  sortingCriteria[0] === item && sortingCriteria[1] === "asc"
                    ? "black"
                    : "grey"
                }
              />
            </span>
          </th>
        );
      })}
    </tr>
  );

  // создаем строки таблицы
  const getTableBody = () => {
    return rowsToShow.map((itemObject) => {
      // формируем конкретную строку
      const rowCells = namesInTableHeader.map((item) => {
        let value = itemObject[item];
        if (typeof value === "number") {
          value = String(value);
        }
        if (typeof value === "string") {
          return (
            <td key={nanoid()} className={styles.td}>
              {value}
            </td>
          );
        } else {
          return "";
        }
      });
      return (
        <tr key={nanoid()} className={styles.trInBody}>
          {rowCells}
        </tr>
      );
    });
  };

  return (
    <>
      <table className={styles.table} ref={refTable}>
        <thead className={styles.thead}>{thead}</thead>
        <tbody className={styles.tbody}>{getTableBody()}</tbody>
      </table>
      <Pangination
        rowsOnPage={numberRowsPerPage}
        rows={arrayWithContent.length}
        setIndexesOfConten={setIndexesOfRowsToShow}
      />
    </>
  );
};

export { Table };
