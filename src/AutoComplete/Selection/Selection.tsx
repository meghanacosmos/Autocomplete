import { forwardRef, useState } from "react";

export const Selection = forwardRef<HTMLUListElement, SelectionType<T>>(
  (
    {
      values,
      renderSuggestion = item => <>{item}</>,
      loading,
      onSelect = () => {},
      inputValue,
    },
    ref
  ) => {
    const [selected, setSelected] = useState<number>(-1);

    if (!inputValue) {
      return null;
    }

    if (loading) {
      return <Container>Loading...</Container>;
    }

    if (!values.length) {
      return <Container>No results found</Container>;
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
      event.preventDefault();
      const { key } = event;
      if (key === "ArrowUp") {
        setSelected(prevIndex => Math.max(prevIndex - 1, 0));
      } else if (key === "ArrowDown") {
        setSelected(prevIndex => {
          if (prevIndex === values.length - 1) {
            return 0;
          }
          return Math.min(prevIndex + 1, values.length - 1);
        });
      } else if (key === "Enter") {
        if (selected > -1) {
          onSelect(values[selected]);
        }
      }
    };

    return (
      <Container>
        <ul role="listbox" onKeyDown={handleKeyDown} tabIndex={0} ref={ref}>
          {values.map((item, index) => (
            <>
              <li
                key={Math.random()}
                className={`flex-wrap ${
                  selected === index ? "bg-gray-200" : ""
                }`}
                role="option"
                onClick={() => {
                  onSelect(item);
                }}
              >
                {renderSuggestion(item)}
              </li>
              <hr />
            </>
          ))}
        </ul>
      </Container>
    );
  }
);

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white text-black p-4 rounded-md shadow-md flex flex-col">
      {children}
    </div>
  );
};

type SelectionType<T> = {
  values: T[];
  renderSuggestion?: (item: T) => React.ReactNode;
  loading: boolean;
  onSelect?: (item: T) => void;
  inputValue: string;
};
