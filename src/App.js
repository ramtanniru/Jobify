import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import About from './pages/About';
import Stepper from './components/Stepper';

function App() {
  return (
    <div className="App">
      {/* <About/> */}
      <Stepper/>
    </div>
  );
}

export default App;
