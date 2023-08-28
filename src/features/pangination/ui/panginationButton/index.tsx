import { HTMLAttributes } from "react";
import styles from "./index.module.scss";
import { ArrowDown } from "../../../../shared/icons";

interface IPanginationButtonProps extends HTMLAttributes<HTMLButtonElement> {
  handleClick: () => void;
  disabled?: boolean;
  arrowDirection: "right" | "left";
}

const PanginationButton = ({
  handleClick,
  disabled = false,
  arrowDirection,
  ...props
}: IPanginationButtonProps) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      {...props}
      className={styles.button}
      disabled={disabled}
    >
      <ArrowDown
        externalStyles={`${
          arrowDirection === "right" ? styles.arrowToRight : styles.arrowToLeft
        }`}
        color={disabled ? "#868FA0" : "#464F60"}
      />
    </button>
  );
};

export default PanginationButton;
