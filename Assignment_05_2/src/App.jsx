import { useState } from "react";
import "./App.css";

function App() {

  const [num, setNum] = useState("");
  const [sum, setSum] = useState(0);

  const calculateSum = () => {

    let total = 0;

    for(let i = 1; i <= Number(num); i++) {
      total = total + i;
    }

    setSum(total);
  };

  return (
    <div className="container">

      <h2>Sum of N Numbers</h2>

      <input
        type="number"
        placeholder="Enter Number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />

      <br /><br />

      <button onClick={calculateSum}>
        Calculate
      </button>

      <h3>Sum = {sum}</h3>

    </div>
  );
}

export default App;