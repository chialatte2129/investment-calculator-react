import { useState } from "react";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

const initialInput = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState({ ...initialInput });

  const inputValid = userInput.duration > 0;
  function handleRecalculate(inputLabel, inputValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputLabel]: +inputValue,
      };
    });
  }

  return (
    <>
      <UserInput onInputChange={handleRecalculate} inputData={userInput} />
      {!inputValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputValid && <Result input={userInput} />}
    </>
  );
}

export default App;
