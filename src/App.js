import './App.css';
import Home from './pages/home';
import Jobs from './pages/JobsHR';
import About from './pages/About';
import Stepper from './components/Stepper';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Header from './components/nav';
import Footer from './components/footer';
import Header_2 from './components/Signed_nav';
import Profile from './pages/Profile';
import Hrprofile from './pages/hrprofile';
import Job from './pages/Jobs';

function App() {
  return (
    <div className="App">
      <Header_2/>
      {/* <Header/> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Jobs' element={<Jobs/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/HR' element={<Hrprofile/>}/>
        <Route path='/Job' element={<Job/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
