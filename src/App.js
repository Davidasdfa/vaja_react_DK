import logo from './source_files/logo.svg';
import './App.css';

function Nekaj(){
  return(
    <>
    <div id = 'neke'>Text v nekaj funkciji</div>
    <p>nekaj novega daciaaa</p>
    </>
  );

}



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
      </header>
    </div>
  );
}

export default App;
