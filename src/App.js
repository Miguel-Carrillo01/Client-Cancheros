import {Home} from './Components/Pages/Home/Home';
import { Route,Routes } from 'react-router-dom';
import { LogIn } from './Components/Pages/Login/LogIn'
import { Header } from '../src/Components/Layout/Header/Header'
import { Canchas } from './Components/Ui/CanchasSinteticas/Canchas';
import { Sugerencias } from './Components/Ui/Sugerencias/Sugerencias';
import { Cards } from './Components/Ui/Cards/Cards';


function App() {
  return (
    <nav>
        <Header/> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Sugerencias" element={<Sugerencias/>}/>
        <Route path="/CanchasSinteticas" element={<Canchas/>}/>
        <Route path="/LogIn" element={<LogIn/>}/>
        <Route path="/Personal" element={<Cards/>}/>
      </Routes>
    </nav>
  );
}

export default App;
