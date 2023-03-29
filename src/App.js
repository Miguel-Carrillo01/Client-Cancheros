import {Home} from './Components/Pages/Home/Home';
import { Route,Routes} from 'react-router-dom';
import { LogIn } from './Components/Pages/Login/LogIn'


function App() {
  return (
    <nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/LogIn" element={<LogIn/>}/>
      </Routes>
    </nav>
  );
}

export default App;
