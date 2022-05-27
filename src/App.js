
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import MyClock from "./components/clock";
import User from "./components/user"
import Navbar from "./components/navbar"

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Router>
        <Routes>
          <Route path='/' exact element={<User></User>}></Route>
          <Route path='/clock' element={<MyClock></MyClock>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
