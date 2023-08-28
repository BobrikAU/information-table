import styles from "./index.module.scss";
import { SetContent, SetNumberRowsPerPage } from "../../../features/select";
import { Filter } from "../../../features/filter";
import { TContent } from "../../../app/types/types";

interface IHeaderProps {
  typeOfContent: string;
  setTypeOfContent: React.Dispatch<React.SetStateAction<string>>;
  numberRowsPerPage: string;
  changeNumberRowsPerPage: React.Dispatch<React.SetStateAction<string>>;
  sortingThead: string;
  arrayWithContent: TContent;
  setFiteredArrayWithContent: React.Dispatch<React.SetStateAction<TContent>>;
}

const Header = ({
  typeOfContent,
  setTypeOfContent,
  numberRowsPerPage,
  changeNumberRowsPerPage,
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
