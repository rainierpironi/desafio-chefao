import {  BrowserRouter as Router,  Routes,  Route,} from "react-router-dom";
import Apoie from "./components/Apoie/Apoie";
import Home from "./pages/Home";
import Conecte from "./components/Conecte/Conecte";
import Dicas from "./components/Dicas/Dicas";
import Plansecond from "./components/Planejamento/Plansecond/Plansecond";
import Planthird from "./components/Planejamento/Planthird/Planthird";
import Planfourth from "./components/Planejamento/Planfourth/Planfourth";
import Destinos from "./pages/Destinos";


const MyRoutes: React.FC = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/plan" element={<Planfourth/>} />
        <Route path="/destinos/nordeste" element={<Destinos/>} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;