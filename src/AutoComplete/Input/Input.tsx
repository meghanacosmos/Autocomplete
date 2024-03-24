export const Input = ({ handleChange, inputValue, onKeyDown }: InputType) => {
  return (
    <input
      onChange={handleChange}
      value={inputValue}
      onKeyDown={onKeyDown}
      className="p-4 h-10 rounded-md border border-gray-300"
    />
  );
};

type InputType = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};
