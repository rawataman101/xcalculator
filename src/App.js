import "./index.css";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { evaluate } from "mathjs";

export default function App() {
  const [exp, setExp] = useState("");
  const [result, setResult] = useState("");
  const [hasResult, setHasResult] = useState(false);

  const handleClick = (value) => {
    setExp((pre) => pre + value);
  };
  const handleClear = () => {
    setExp("");
    setHasResult(false);
  };
  const handleResult = () => {
    try {
      const calculatedResult = evaluate(exp);
      setResult(calculatedResult.toString());
      setHasResult(true);
    } catch (error) {
      if (error.name === "SyntaxError" || error.name === "TypeError") {
        setResult("Error");
      } else {
        setResult("Error");
      }
      setHasResult(true);
    }
  };
  const handleInput = (e) => {
    setExp(e.target.value);
  };
  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input type="text" value={exp} onChange={(e) => handleInput(e)} />
      {hasResult && <p className="result">{result}</p>}
      <Grid container spacing={2} className="grid">
        <Grid item xs={3} className="grid__item">
          <button onClick={() => handleClick("7")}>7</button>
        </Grid>
        <Grid item xs={3} className="grid__item">
          <button onClick={() => handleClick("8")}>8</button>
        </Grid>
        <Grid item xs={3} className="grid__item">
          <button onClick={() => handleClick("9")}>9</button>
        </Grid>
        <Grid item xs={3} className="grid__item">
          <button onClick={() => handleClick("+")}>+</button>
        </Grid>
        <Grid item xs={3} className="grid__item">
          <button onClick={() => handleClick("4")}>4</button>
        </Grid>
        <Grid item xs={3} className="grid__item">
          <button onClick={() => handleClick("5")}>5</button>
        </Grid>
        <Grid item xs={3} className="grid__item">
          <button onClick={() => handleClick("6")}>6</button>
        </Grid>
        <Grid item xs={3} className="grid__item">
          <button onClick={() => handleClick("-")}>-</button>
        </Grid>
        <Grid item xs={3} className="grid__item">
          <button onClick={() => handleClick("1")}>1</button>
        </Grid>
        <Grid item xs={3} className="grid__item">
          <button onClick={() => handleClick("2")}>2</button>
        </Grid>
        <Grid item xs={3} className="grid__item">
          <button onClick={() => handleClick("3")}>3</button>
        </Grid>
        <Grid item xs={3} className="grid__item">
          <button onClick={() => handleClick("*")}>*</button>
        </Grid>
        <Grid item xs={3} className="grid__item">
          <button onClick={handleClear}>C</button>
        </Grid>
        <Grid item xs={3} className="grid__item">
          <button onClick={() => handleClick("0")}>0</button>
        </Grid>
        <Grid item xs={3} className="grid__item">
          <button onClick={handleResult} style={{ backgroundColor: "#FDE453" }}>
            =
          </button>
        </Grid>
        <Grid item xs={3} className="grid__item">
          <button onClick={() => handleClick("/")}>/</button>
        </Grid>
      </Grid>
    </div>
  );
}
