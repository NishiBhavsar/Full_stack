import './App.css';
import Team from './components/FunClassComp';
import Fun from './components/FunComp';
import ReactDOM from 'react-dom';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Team/>}></Route>
        <Route path="/Fun" element={<Fun/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;