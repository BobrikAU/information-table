import Select from "./ui";

interface ISelectInstanceProps {
  currentValue: string;
  changeCurrentValue: React.Dispatch<React.SetStateAction<string>>;
}

const SetNumberRowsPerPage = ({
  currentValue,
  changeCurrentValue,
}: ISelectInstanceProps) => (
  <Select
    name="numberRows"
    description="Rows per page:"
    currentValue={currentValue}
    possibleValues={["5", "10", "15", "20", "30", "40", "50"]}
    changeCurrentValue={changeCurrentValue}
  />
);
const SetContent = ({
  currentValue,
  changeCurrentValue,
}: ISelectInstanceProps) => (
  <Select
    name="content"
    description="Content:"
    currentValue={currentValue}
    possibleValues={["Location", "Character"]}
    changeCurrentValue={changeCurrentValue}
  />
);
export { SetContent, SetNumberRowsPerPage };
