import './App.css';
import Navbar from './components/Navbar';
import UploadFile from './components/UploadFile';

function App() {
  return (
    <div className="App">      
    <Navbar/>
    <UploadFile />
    {/* barChart */}
    <footer>
      this is a footer 
   </footer>
    </div>
  );
}

export default App;
