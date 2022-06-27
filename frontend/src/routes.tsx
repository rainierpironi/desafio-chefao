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
import Uteisfirst from "./components/Uteis/Uteisfirst/Uteisfirst";
import Uteisfourth from "./components/Uteis/Uteisfourth/Uteisfourth";
import Uteissecond from "./components/Uteis/Uteissecond/Uteissecond";
import Uteisthird from "./components/Uteis/Uteisthird/Uteisthird";
import Uteis from "./pages/Uteis";
import Cidades from "./pages/Cidades";
import Paginaculturais from "./pages/CulturaisDesktop";


const MyRoutes: React.FC = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/destinos/nordeste" element={<Destinos/>} />
        <Route path="/planejamento" element={<PlanejamentoDesktop/>} />
        <Route path="/culturais" element={<Paginaculturais/>} />
        <Route path="/seguranca" element={<PaginaSecurity/>} />
        <Route path="/uteis" element={<Uteis/>} />
        <Route path="/cidades" element={<Cidades/>} />
      
      </Routes>
    </Router>
  );
};

export default MyRoutes;