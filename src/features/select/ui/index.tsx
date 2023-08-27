import { useState } from "react";
import { nanoid } from "nanoid";
import styles from "./index.module.scss";
import { ArrowDown } from "../../../shared/icons";

interface ISelectProps {
  name: string;
  description: string;
  currentValue: string;
  changeCurrentValue: React.Dispatch<React.SetStateAction<string>>;
  possibleValues: string[];
}

const Select = ({
  name,
  description,
  currentValue,
  possibleValues,
  changeCurrentValue,
}: ISelectProps) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  // обработка выбора из выпадающего списка
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    changeCurrentValue(value);
  };
  // закрытие выпадающего спика при клике по значению выпадающего списка и текущему значению селекта
  const handleClickLabel = () => {
    setTimeout(() => {
      setIsSelectOpen(false);
    });
  };
  const handleClickCurrentValue = () => {
    setIsSelectOpen(!isSelectOpen);
  };
  // формирование выпадающего списка
  const selectList = possibleValues.map((value) => {
    let option = (
      <label
        onClick={handleClickLabel}
        className={styles.selectList__label}
        key={nanoid()}
        htmlFor={value}
      >
        {value}
        <input
          name="singleChoice"
          type="radio"
          value={value}
          id={value}
          checked={currentValue === value}
          onChange={handleChange}
          className={styles.selectList__input}
        />
      </label>
    );
    return option;
  });
  // определение высоты выпадающего списка и передача его в css для нормальной работы анимации
  // открытия и закрытия выпадающего списка
  document.documentElement.style.setProperty(
    "--selectListHeight",
    `${28 * selectList.length}px`
  );
  return (
    <div className={styles.blockSelect}>
      <span className={styles.description}>{description}</span>
      <form name={name}>
        <div className={styles.select}>
          <div
            onClick={handleClickCurrentValue}
            className={styles.currentValue}
          >
            <span className={styles.currentValue__span}>{currentValue}</span>
            <ArrowDown
              externalStyles={`${styles.currentValue__arrow} ${
                isSelectOpen && styles.currentValue__arrow_rotated
              }`}
            />
          </div>
          <div
            data-height={`${possibleValues.length * 28}px`}
            className={`${styles.selectList} ${
              isSelectOpen && styles.selectList_open
            }`}
          >
            {selectList}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Select;
