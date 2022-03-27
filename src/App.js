import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './components/Home';
import SearchBar from './components/SearchBar';

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home />}>
      <Route path="/Home" element={<Home />}>
      </Route>
      <Route index element={<Home />} />
      </Route>
      <Route path="/dashboard" element={<SearchBar />}>        
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
