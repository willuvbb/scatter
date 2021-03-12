import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div class="parent blue">


    <div class="box coral" contenteditable>
      :)
    </div>

    <div className="App">
      <div className="game">
        <div className="col red">1</div>
        <div className="col yellow">2</div>
        <div className="col blue">3</div>
      </div>

      {/* <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
