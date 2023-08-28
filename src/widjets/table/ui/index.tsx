import { useState, useMemo } from "react";
import { nanoid } from "nanoid";
import styles from "./index.module.scss";
import { SortingIcon } from "../../../shared/icons";

interface ITableProps {
  arrayWithContent: { [name: string]: string | Array<string> | object }[];
}

const Table = ({ arrayWithContent }: ITableProps) => {
  const [sortingCriteria, setSortingCriteria] = useState<string[]>([
    "id",
    "desc",
  ]);

  // переработка данных для отрисовки таблицы с их сортировкой
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

  // определяем количество колонок в таблице и наимения занлавий колонок, делаем строку с
  // заголовками
  const getNamesInTableHeader = () => {
    const columnsNames = Object.keys(arrayWithContent[0]);
    return columnsNames;
  };
  const namesInTableHeader = getNamesInTableHeader();
  document.documentElement.style.setProperty(
    "--numberOfColumns",
    `${namesInTableHeader.length}`
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
    return newArray.map((itemObject) => {
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
    <table className={styles.table}>
      <thead className={styles.thead}>{thead}</thead>
      <tbody className={styles.tbody}>{getTableBody()}</tbody>
    </table>
  );
};

export { Table };
