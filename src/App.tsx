import "./App.css";
import { AutoComplete } from "./AutoComplete/AutoComplete";
import { useState } from "react";

function App() {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (query: string) => {
    setLoading(true);
    fetch(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${query}&apiKey=${process.env.REACT_APP_API_KEY}`
    )
      .then(response => response.json())
      .then(result => {
        setSuggestions(result?.features ?? []);
        setLoading(false);
      })
      .catch(error => {
        console.log("error", error);
        setLoading(false);
      });
  };

  const renderSuggestion = (suggestion: SuggestionType) => {
    return suggestion?.properties?.formatted as string;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputValue: string
  ) => {
    e.preventDefault();
    fetchData(inputValue);
  };

  const handleSelection = (item: any) => {
    console.log(item, "selected");
  };

  return (
    <div>
      <AutoComplete
        suggestions={suggestions}
        renderSuggestion={renderSuggestion}
        onInputChange={handleInputChange}
        loading={loading}
        onSelect={handleSelection}
      />
    </div>
  );
}

type SuggestionType = {
  properties: { formatted: string };
};

export default App;
