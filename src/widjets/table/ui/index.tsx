import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import styles from "./index.module.scss";

interface ITableProps {
  externaleStyles?: string;
  getDataReqest: () => Promise<
    | {
        [name: string]: string | object | string[];
      }[]
    | undefined
  >;
}

const Table = ({ getDataReqest, externaleStyles }: ITableProps) => {
  // данные для отрисовки таблицы
  const [arrayWithContent, setArrayWithContent] = useState<
    { [name: string]: string | Array<string> | object }[]
  >([{}]);

  //получаем данные для построения таблицы
  useEffect(() => {
    const getData = async () => {
      const data = await getDataReqest();
      if (data) {
        setArrayWithContent(data);
      }
    };
    getData();
  }, []);

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
  const thead = (
    <tr className={styles.trInThead}>
      {namesInTableHeader.map((item) => {
        return (
          <th className={styles.th} key={nanoid()}>
            {item}
          </th>
        );
      })}
    </tr>
  );

  // создаем строки таблицы
  const getTableBody = () => {
    //фомируем набор строк
    return arrayWithContent.map((itemObject) => {
      // формируем конкретную строку
      const rowCells = namesInTableHeader.map((item) => {
        let value = itemObject[item];
        if (Array.isArray(value)) {
          value = value.join(", ");
        }
        if (value instanceof Object) {
          if ("name" in value && typeof value.name === "string") {
            value = value.name;
          } else {
            value = JSON.stringify(value);
          }
        }
        return (
          <td key={nanoid()} className={styles.td}>
            {value}
          </td>
        );
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
