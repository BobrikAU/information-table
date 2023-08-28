interface IArrowDownProps {
  color?: string;
  width?: string;
  height?: string;
  externalStyles?: string;
}

const ArrowDown = ({
  color = "#868FA0",
  width = "16",
  height = "16",
  externalStyles,
}: IArrowDownProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      className={externalStyles}
    >
      <g id="down">
        <path
          id="icon"
          d="M5 6.5L8 9.5L11 6.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default ArrowDown;
