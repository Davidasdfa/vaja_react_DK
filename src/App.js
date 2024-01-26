import logo from './source_files/logo.svg';
import './App.css';
import Neka from './fragment1/Neke.jsx';
import Frag from './fragment2/Frag.jsx';
import Navbar from './navbar/navbar';
import {Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" component = {<Neke/>}/>
        <Route path="/frag" component = {<Frag/>}/>
      </Routes>

    </div>
  );
}

export default App;
