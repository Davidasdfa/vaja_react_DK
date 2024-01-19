import logo from './source_files/logo.svg';
import './App.css';
import Nekaj from './fragment1/Neke';
import Frag from './fragment2/Frag';


function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        neki text
        <p>dacia je jaca</p>
        <Nekaj/>
        <Frag/>
      </header>
    </div>
  );
}

export default App;
