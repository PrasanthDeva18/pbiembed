import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home';
import Report1 from './PBI-COMPONENT/Report1';
import Report2 from './PBI-COMPONENT/Report2';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/report1' element={<Report1 />} />
        <Route path='/report2' element={<Report2 />} />
      </Routes>
    </div>
  );
}

export default App;
