import logo from './source_files/logo.svg';
import './App.css';
import Neke from './fragment1/Neke.jsx';
import Frag from './fragment2/Frag.jsx';
import Navbar from './navbar/navbar';
import { Route, Routes, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Neke />} />
        <Route path="/frag" element={<Frag />} />
      </Routes>

    </div>
  );
}

export default App;
