import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Book Information</h2>

      <table>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN</th>
          <th>Publisher</th>
          <th>Edition</th>
          <th>Price</th>
        </tr>

        <tr>
          <td>Wings of Fire</td>
          <td>A.P.J Abdul Kalam</td>
          <td>101</td>
          <td>Universities Press</td>
          <td>3rd</td>
          <td>350</td>
        </tr>

        <tr>
          <td>The Blue Umbrella</td>
          <td>Ruskin Bond</td>
          <td>102</td>
          <td>Penguin</td>
          <td>2nd</td>
          <td>250</td>
        </tr>
      </table>
    </div>
  );
}

export default App;