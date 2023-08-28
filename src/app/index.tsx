import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { Header } from "../widjets/header";
import { Table } from "../widjets/table";
import { getLocation, getCharacter } from "../shared/api";
import { Spinner } from "../shared/icons";
import { TContent } from "./types/types";

function App() {
  // вид загружаемых данных, выбранных пользователем
  const [typeOfContent, setTypeOfContent] = useState("Location");
  // загруженные данные в первоначальном виде
  const [arrayWithContent, setArrayWithContent] = useState<TContent>([{}]);
  const [numberRowsPerPage, setNumberRowsPerPage] = useState("15");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // наименование заголовка в таблице, по которому идет сортировка и фильтрация
  const [sortingThead, setSortingThead] = useState("id");
  // отфильтрованные данные
  const [fiteredArrayWithContent, setFiteredArrayWithContent] =
    useState<TContent>([{}]);

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
            sortingThead={sortingThead}
            arrayWithContent={arrayWithContent}
            setFiteredArrayWithContent={setFiteredArrayWithContent}
          />
          <Table
            arrayWithContent={arrayWithContent}
            filteredArrayWithContent={fiteredArrayWithContent}
            numberRowsPerPage={+numberRowsPerPage}
            setSortingThead={setSortingThead}
          />
        </>
      )}
    </div>
  );
}

export default App;
