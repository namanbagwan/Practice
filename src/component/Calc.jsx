import React, { useState } from "react";

function Calc() {
  const [result, setResult] = useState();
  const [input1, setInput1] = useState();
  const [input2, setInput2] = useState();

  const handleInputChange = (e, inputType) => {
    const value = parseFloat(e.target.value);
    if (isNaN(value)) {
      return; // Ignore non-numeric input
    }

    if (inputType === "input1") {
      setInput1(value);
    } else {
      setInput2(value);
    }
  };

  const handleAddition = () => {
    setResult(input1 + input2);
  };

  const handleSubtraction = () => {
    setResult(input1 - input2);
  };

  const handleMultiplication = () => {
    setResult(input1 * input2);
  };

  const handleDivision = () => {
    if (input2 === 0) {
      setResult("Error: Division by zero");
    } else {
      setResult(input1 / input2);
    }
  };

  return (
    <div>
      <h1>Basic Calculator</h1>
      <input
        type="number"
        value={input1}
        onChange={(e) => handleInputChange(e, "input1")}
      />
      <input
        type="number"
        value={input2}
        onChange={(e) => handleInputChange(e, "input2")}
      />
      <br />
      <button onClick={handleAddition}>Add</button>
      <button onClick={handleSubtraction}>Subtract</button>
      <button onClick={handleMultiplication}>Multiply</button>
      <button onClick={handleDivision}>Divide</button>
      <br />
      <p>Result: {result}</p>
    </div>
  );
}

export default Calc;
