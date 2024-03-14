type Props = {
  options: number[];
  selectedOption: number;
  setSelectedOption: (value: number) => void;
};

const SelectBox = ({ options, selectedOption, setSelectedOption }: Props) => {
  return (
    <select
      value={selectedOption}
      onChange={(e) => setSelectedOption(Number(e.target.value))}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
