import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import NavBar from './components/Nav'
import FirstComp from './components/FirstComp';
import SecondComp from './components/SecondComp'
import ThirdComp from './components/ThirdComp'
function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<FirstComp/>}></Route> 
      <Route path="/SecondComp" element={<SecondComp/>}></Route>
      <Route path="/ThirdComp" element={<ThirdComp/>}></Route>
      </Routes>  
    </BrowserRouter>
    );
}

export default App;
