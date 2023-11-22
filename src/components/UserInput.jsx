export default function UserInfo({ inputData, onInputChange }) {
  function handleInputChange(inputLabel, inputValue) {
    onInputChange(inputLabel, inputValue);
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            required
            value={inputData.initialInvestment}
            onChange={(event) =>
              handleInputChange("initialInvestment", event.target.value)
            }
          ></input>
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={inputData.annualInvestment}
            onChange={(event) =>
              handleInputChange("annualInvestment", event.target.value)
            }
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>expected Return</label>
          <input
            type="number"
            required
            value={inputData.expectedReturn}
            onChange={(event) =>
              handleInputChange("expectedReturn", event.target.value)
            }
          ></input>
        </p>
        <p>
          <label>duration</label>
          <input
            type="number"
            required
            value={inputData.duration}
            onChange={(event) =>
              handleInputChange("duration", event.target.value)
            }
          ></input>
        </p>
      </div>
    </section>
  );
}
