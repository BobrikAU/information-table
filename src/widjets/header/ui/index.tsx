import styles from "./index.module.scss";
import { SetContent, SetNumberRowsPerPage } from "../../../features/select";
import { Filter } from "../../../features/filter";

interface IHeaderProps {
  typeOfContent: string;
  setTypeOfContent: React.Dispatch<React.SetStateAction<string>>;
  numberRowsPerPage: string;
  changeNumberRowsPerPage: React.Dispatch<React.SetStateAction<string>>;
  searchWord: string;
  setSearchWord: React.Dispatch<React.SetStateAction<string>>;
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

const Header = ({
  typeOfContent,
  setTypeOfContent,
  numberRowsPerPage,
  changeNumberRowsPerPage,
  searchWord,
  setSearchWord,
  sortingThead,
  arrayWithContent,
  setFiteredArrayWithContent,
}: IHeaderProps) => {
  return (
    <header className={styles.header}>
      <SetContent
        currentValue={typeOfContent}
        changeCurrentValue={setTypeOfContent}
      />
      <Filter
        value={searchWord}
        setValue={setSearchWord}
        sortingThead={sortingThead}
        arrayWithContent={arrayWithContent}
        setFiteredArrayWithContent={setFiteredArrayWithContent}
      />
      <SetNumberRowsPerPage
        currentValue={numberRowsPerPage}
        changeCurrentValue={changeNumberRowsPerPage}
      />
    </header>
  );
};

export default Header;
