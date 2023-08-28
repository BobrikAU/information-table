import styles from "./index.module.scss";
import { SetContent, SetNumberRowsPerPage } from "../../../features/select";

interface IHeaderProps {
  typeOfContent: string;
  setTypeOfContent: React.Dispatch<React.SetStateAction<string>>;
  numberRowsPerPage: string;
  changeNumberRowsPerPage: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({
  typeOfContent,
  setTypeOfContent,
  numberRowsPerPage,
  changeNumberRowsPerPage,
}: IHeaderProps) => {
  return (
    <header className={styles.header}>
      <SetContent
        currentValue={typeOfContent}
        changeCurrentValue={setTypeOfContent}
      />
      <SetNumberRowsPerPage
        currentValue={numberRowsPerPage}
        changeCurrentValue={changeNumberRowsPerPage}
      />
    </header>
  );
};

export default Header;
