
import './App.css';
import Sidebar from './component/Sidebar/Sidebar';
import Mainbar from './component/mainbar/Mainbar';
import Register from './component/register/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
     <Sidebar/>
     <Routes>
          <Route  exact path="/" element={<Mainbar/>}>
          </Route>
        </Routes>
     <Routes>
          <Route  exact path="/Register" element={<Register/>}>
          </Route>
        </Routes>
     
    </div>
    </Router>
  );
}

export default App;
