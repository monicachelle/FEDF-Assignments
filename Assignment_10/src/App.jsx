import { useState } from "react";
import "./App.css";

function App() {

  const [number, setNumber] = useState("");
  const [text, setText] = useState("");

  const [reverseNumber, setReverseNumber] = useState("");
  const [reverseText, setReverseText] = useState("");

  const handleReverse = () => {

    const numReverse =
      number.split("").reverse().join("");

    const textReverse =
      text.split("").reverse().join("");

    setReverseNumber(numReverse);
    setReverseText(textReverse);
  };

  return (
    <div className="container">

      <h2>Reverse Number and String</h2>

      <h3>Enter Number</h3>

      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <h3>Enter String</h3>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br /><br />

      <button onClick={handleReverse}>
        Reverse
      </button>

      <h3>Reversed Number</h3>

      <p>{reverseNumber}</p>

      <h3>Reversed String</h3>

      <p>{reverseText}</p>

    </div>
  );
}

export default App;