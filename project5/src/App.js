import './App.css';
import Navbar from './Components/Navbar';
import{ BrowserRouter,Routes,Route} from 'react-router-dom';
import { CircleNotifications } from '@mui/icons-material';
import Aboutus from './pages/Aboutus';
import Skills from './pages/Skills';
import Qualifications from './pages/Qualifications';
import Hobbies from './pages/Hobbies';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contactus from './pages/Contactus';
import Certifications from './pages/Certifications';
import Workshops from  './pages/Workshops';




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
       <Route path ="/Projects" element={<Projects/>}/>
       <Route path ="/Projects"element={<Projects/>}/>
       <Route path ="/Contactus"element={<Contactus/>}/>
       <Route path ="/Certifications"element={<Certifications/>}/>
       <Route path ="/Workshops"element={<Workshops/>}/>
              
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
