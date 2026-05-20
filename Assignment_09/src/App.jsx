
import { useState } from "react";
import "./App.css";

function App() {

  const [rows, setRows] = useState(2);
  const [cols, setCols] = useState(2);

  const [matrixA, setMatrixA] = useState([]);
  const [matrixB, setMatrixB] = useState([]);
  const [result, setResult] = useState([]);

  const createMatrices = () => {

    const a = Array.from({ length: rows }, () =>
      Array(cols).fill("")
    );

    const b = Array.from({ length: rows }, () =>
      Array(cols).fill("")
    );

    setMatrixA(a);
    setMatrixB(b);
  };

  const handleChangeA = (i, j, value) => {

    const temp = [...matrixA];
    temp[i][j] = value;
    setMatrixA(temp);
  };

  const handleChangeB = (i, j, value) => {

    const temp = [...matrixB];
    temp[i][j] = value;
    setMatrixB(temp);
  };

  const calculateSum = () => {

    const sum = matrixA.map((row, i) =>
      row.map((value, j) =>
        Number(value) + Number(matrixB[i][j])
      )
    );

    setResult(sum);
  };

  return (
    <div className="container">

      <h2>Matrix Addition</h2>

      <label>Rows:</label>
      <input
        type="number"
        value={rows}
        onChange={(e) => setRows(e.target.value)}
      />

      <label>Columns:</label>
      <input
        type="number"
        value={cols}
        onChange={(e) => setCols(e.target.value)}
      />

      <br /><br />

      <button onClick={createMatrices}>
        Create Matrix
      </button>

      <h3>Matrix A</h3>

      {
        matrixA.map((row, i) => (
          <div key={i}>
            {
              row.map((col, j) => (
                <input
                  key={j}
                  type="number"
                  onChange={(e) =>
                    handleChangeA(i, j, e.target.value)
                  }
                />
              ))
            }
          </div>
        ))
      }

      <h3>Matrix B</h3>

      {
        matrixB.map((row, i) => (
          <div key={i}>
            {
              row.map((col, j) => (
                <input
                  key={j}
                  type="number"
                  onChange={(e) =>
                    handleChangeB(i, j, e.target.value)
                  }
                />
              ))
            }
          </div>
        ))
      }

      <br /><br />

      <button onClick={calculateSum}>
        Calculate Sum
      </button>

      <h3>Result Matrix</h3>

      {
        result.map((row, i) => (
          <p key={i}>{row.join("   ")}</p>
        ))
      }

    </div>
  );
}

export default App;