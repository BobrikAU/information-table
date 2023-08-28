import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { Header } from "../widjets/header";
import { Table } from "../widjets/table";
import { getLocation, getCharacter } from "../shared/api";
import { Spinner } from "../shared/icons";

function App() {
  const [typeOfContent, setTypeOfContent] = useState("Location");
  const [arrayWithContent, setArrayWithContent] = useState<
    { [name: string]: string | Array<string> | object }[]
  >([{}]);
  const [numberRowsPerPage, setNumberRowsPerPage] = useState("15");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchWord, setSearchWord] = useState("");
  const [sortingThead, setSortingThead] = useState("id");
  const [fiteredArrayWithContent, setFiteredArrayWithContent] = useState<
    { [name: string]: string | Array<string> | object }[]
  >([{}]);

  //получаем данные для построения таблицы
  const getDataReqest =
    typeOfContent === "Location" ? getLocation : getCharacter;
  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const data = await getDataReqest();
      if (data) {
        setArrayWithContent(data);
      }
      setIsLoading(false);
    };
    getData();
  }, [getDataReqest]);

  return (
    <div className={`${styles.app} ${isLoading && styles.appLoadin}`}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Header
            typeOfContent={typeOfContent}
            setTypeOfContent={setTypeOfContent}
            numberRowsPerPage={numberRowsPerPage}
            changeNumberRowsPerPage={setNumberRowsPerPage}
            searchWord={searchWord}
            setSearchWord={setSearchWord}
            sortingThead={sortingThead}
            arrayWithContent={arrayWithContent}
            setFiteredArrayWithContent={setFiteredArrayWithContent}
          />
          <Table
            arrayWithContent={arrayWithContent}
            filteredArrayWithContent={fiteredArrayWithContent}
            numberRowsPerPage={+numberRowsPerPage}
            searchWord={searchWord}
            setSortingThead={setSortingThead}
          />
        </>
      )}
    </div>
  );
}

export default App;
