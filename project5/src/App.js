import './App.css';
import Navbar from './Components/Navbar';
import{ BrowserRouter,Routes,Route} from 'react-router-dom';
import { CircleNotifications } from '@mui/icons-material';
import Aboutus from './pages/Aboutus';
import Skills from './pages/Skills';
import Qualifications from './pages/Qualifications';
import Hobbies from './pages/Hobbies';
import Experience from './pages/Experience';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path ="/Aboutus" element={<Aboutus/>}/>
        <Route path ="/Qualifications" element={<Qualifications/>}/>
        <Route path ="/Skills" element={<Skills/>}/>
        <Route path ="/Hobbies" element={<Hobbies/>}/>
       <Route path ="/Experience" element={<Experience/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
