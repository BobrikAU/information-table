import { useState, useMemo, useEffect } from "react";
import styles from "./index.module.scss";

interface IFilterProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  sortingThead: string;
  arrayWithContent: { [name: string]: string | Array<string> | object }[];
  setFiteredArrayWithContent: React.Dispatch<
    React.SetStateAction<
      {
        [name: string]: string | object | string[];
      }[]
    >
  >;
}

const Filter = ({
  value,
  setValue,
  sortingThead,
  arrayWithContent,
  setFiteredArrayWithContent,
}: IFilterProps) => {
  // фильтрация данных по поисковому слову
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
        Sort by '{sortingThead}':
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
