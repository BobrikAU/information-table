import styles from "./index.module.scss";
import { SetContent } from "../../../features/select";

interface IHeaderProps {
  typeOfContent: string;
  setTypeOfContent: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ typeOfContent, setTypeOfContent }: IHeaderProps) => {
  return (
    <header className={styles.header}>
      <SetContent
        currentValue={typeOfContent}
        changeCurrentValue={setTypeOfContent}
      />
    </header>
  );
};

export default Header;
