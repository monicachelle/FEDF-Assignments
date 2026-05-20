import "./App.css";

function App() {

  const starPattern = [];
  const numberPattern = [];
  const alphabetPattern = [];

  for(let i = 1; i <= 5; i++) {

    let stars = "";
    let numbers = "";
    let alphabets = "";

    for(let j = 1; j <= i; j++) {

      stars += "* ";

      numbers += j + " ";

      alphabets += String.fromCharCode(64 + j) + " ";
    }

    starPattern.push(<p key={"s" + i}>{stars}</p>);

    numberPattern.push(<p key={"n" + i}>{numbers}</p>);

    alphabetPattern.push(<p key={"a" + i}>{alphabets}</p>);
  }

  return (
    <div className="container">

      <h2>Star Pattern</h2>
      {starPattern}

      <h2>Number Pattern</h2>
      {numberPattern}

      <h2>Alphabet Pattern</h2>
      {alphabetPattern}

    </div>
  );
}

export default App;