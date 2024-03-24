import * as React from "react";
import { Selection } from "./Selection";
import { Input } from "./Input/Input";

export const AutoComplete = <T extends object>(props: AutoCompleteProps<T>) => {
  const { suggestions, renderSuggestion, onInputChange, loading, onSelect } =
    props;

  const selectionRef = React.createRef<HTMLUListElement>();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      selectionRef.current?.focus();
    }
  };

  const [inputValue, setInputValue] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.target.value);
    if (e.target.value !== "") {
      onInputChange(e, e.target.value as string);
    }
  };

  return (
    <Container>
      <Input
        handleChange={handleChange}
        inputValue={inputValue}
        onKeyDown={handleKeyDown}
      />
      <Selection
        values={suggestions}
        renderSuggestion={renderSuggestion}
        loading={loading}
        onSelect={onSelect}
        inputValue={inputValue}
        ref={selectionRef}
      />
    </Container>
  );
};

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-y-4 w-56">{children}</div>;
};

type AutoCompleteProps<T> = {
  suggestions: T[];
  renderSuggestion: (item: T) => React.ReactNode;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    inputValue: string
  ) => void;
  loading: boolean;
  onSelect?: (item: T) => void;
};
