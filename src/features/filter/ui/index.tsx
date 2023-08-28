import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { TContent } from "../../../app/types/types";

interface IFilterProps {
  sortingThead: string;
  arrayWithContent: TContent;
  setFiteredArrayWithContent: React.Dispatch<React.SetStateAction<TContent>>;
}

const Filter = ({
  sortingThead,
  arrayWithContent,
  setFiteredArrayWithContent,
}: IFilterProps) => {
  // выбранное значение для фильтрации
  const [value, setValue] = useState("");

  // фильтрация данных по выбранному значению
  useEffect(() => {
    const filteredArray = arrayWithContent.filter((item) => {
      let valueItem = item[sortingThead] + "";
      valueItem = valueItem.toLowerCase();
      return valueItem.includes(value.toLowerCase());
    });
    setTimeout(() => {
      setFiteredArrayWithContent(filteredArray);
    });
  }, [arrayWithContent, value, sortingThead]);

  return (
    <>
      <label className={styles.label}>
        Sort by '<span className={styles.label__span}>{sortingThead}</span>':
        <input
          type="search"
          name="filter"
          list="searchString"
          className={styles.searchInput}
          placeholder="Search..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </label>
    </>
  );
};

export default Filter;
