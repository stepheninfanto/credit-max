import './App.css';
import Navbar from './components/Navbar';
import UploadFile from './components/UploadFile';
import {
  BrowserRouter as Router,
  Route,
  Link,NavLink,Routes
} from "react-router-dom";
import Chart from './components/Chart'
import Home from './components/Home';
function App() {
  return (
  //   <div className="App">   
  //   <Router>
  //    <Navbar/>
  //   <UploadFile />
  //   <SearchBar/>
  //   <Chart />   
  //  </Router>

  //   </div>


  <Router>
    <Routes>
      <Route path="/" element={<Home />}>
      <Route path="/Home" element={<Home />}>
      </Route>
      <Route index element={<Home />} />
      </Route>
      {/* <Route path="/dashboard" element={<Chart />}>         */}
      <Route path="/dashboard" element={<SearchBar />}>        
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
