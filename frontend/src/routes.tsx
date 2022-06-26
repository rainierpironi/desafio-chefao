import {  BrowserRouter as Router,  Routes,  Route,} from "react-router-dom";
import Apoie from "./components/Apoie/Apoie";
import Home from "./pages/Home";
import Conecte from "./components/Conecte/Conecte";
import Dicas from "./components/Dicas/Dicas";
import Plansecond from "./components/Planejamento/Plansecond/Plansecond";
import Planthird from "./components/Planejamento/Planthird/Planthird";
import Planfourth from "./components/Planejamento/Planfourth/Planfourth";
import Destinos from "./pages/Destinos";
import Culturaisfirst from "./components/Culturais/Culturaisfirst/Culturaisfirst";
import Planfirst from "./components/Planejamento/Planfirst/Planfirst";
import Culturaissecond from "./components/Culturais/Culturaissecond/Culturaissecond";
import Culturaisthird from "./components/Culturais/Culturaisthird/Culturaisthird";
import PlanejamentoDesktop from "./pages/PlanejamentoDesktop";
import Paginacult from "./pages/CulturaisDesktop";
import SecurityFirst from "./components/Seguranca/Segurancafirst";
import SecuritySecond from "./components/Seguranca/Segurancasecond";
import PaginaSecurity from "./pages/SegurancaDesktop";


const MyRoutes: React.FC = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/destinos/nordeste" element={<Destinos/>} />
        <Route path="/planejamento" element={<PlanejamentoDesktop/>} />
        <Route path="/cultura" element={<Paginacult/>} />
        <Route path="/seguranca" element={<PaginaSecurity/>} />

      </Routes>
    </Router>
  );
};

export default MyRoutes;