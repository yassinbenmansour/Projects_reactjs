import './App.css';
import { Routes, Route } from "react-router-dom";
import Er from './components/Routes/Er';
import Profil from './components/Routes/Profil';
import Menu from './components/Routes/Menu';




function App() {
  return (
    <div className="App container m-5 text-center">

   
   <Menu />

   <Routes>
    <Route path='/Profil' element={<Profil/>}/>
    <Route path='/Er' element={<Er/>}/>

    
   </Routes>
       
    </div>
  );
}

export default App;
