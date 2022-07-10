import React, { useEffect } from 'react'
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Apoie from "./components/Apoie/Apoie";
import Home from "./pages/Home";
import Conecte from "./components/Conecte/Conecte";
import Dicas from "./components/Dicas/Dicas";
import Plansecond from "./components/Planejamento/Plansecond/Plansecond";
import Planthird from "./components/Planejamento/Planthird/Planthird";
import Planfourth from "./components/Planejamento/Planfourth/Planfourth";
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

import Manaus from "./pages/CidadesN-Manaus";
import Parintins from './pages/CidadesN-Parintins';
import PresidenteFigueiredo from './pages/CidadesN-Presidente-figueiredo';
import Belem from './pages/CidadesN-Belem';
import AlterChao from './pages/CidadesN-Alter-do-chao';
import Maraba from './pages/CidadesN-Maraba';

import Salvador from "./pages/CidadesNE-Salvador";
import Trancoso from "./pages/CidadesNE-Trancoso";
import ChapadaDiamantina from "./pages/CidadesNE-Chapada-diamantina";
import Olinda from "./pages/CidadesNE-Olinda";
import Recife from './pages/CidadesNE-Recife';
import PortoGalinhas from './pages/CidadesNE-Porto-de-galinhas';

import Paginaculturais from "./pages/CulturaisDesktop";
import DestinoNordeste from "./pages/DestinoNordeste";
import DestinoSudeste from "./pages/DestinoSudeste";
import DestinoCentroOeste from "./pages/DestinoCentroOeste";
import DestinoNorte from "./pages/DestinoNorte";
import DestinoSul from "./pages/DestinoSul";

const MyRoutes: React.FC = () => {


  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/destinos/nordeste" element={<DestinoNordeste/>} />
        <Route path="/destinos/centro-oeste" element={<DestinoCentroOeste/>} />
        <Route path="/destinos/norte" element={<DestinoNorte/>} />
        <Route path="/destinos/sul" element={<DestinoSul/>} />
        <Route path="/destinos/sudeste" element={<DestinoSudeste/>} />
        <Route path="/dicas/planejamento" element={<PlanejamentoDesktop/>} />
        <Route path="/dicas/culturais" element={<Paginaculturais/>} />
        <Route path="/dicas/seguranca" element={<PaginaSecurity/>} />
        <Route path="/dicas/uteis" element={<Uteis/>} />
        <Route path="/conecte" element={<Conecte/>} />
        
        <Route path="/destinos/norte/amazonas/manaus/1" element={<Manaus/>} />
        <Route path="/destinos/norte/amazonas/parintins/2" element={<Parintins/>} />
        <Route path="/destinos/norte/amazonas/presidente-figueiredo/3" element={<PresidenteFigueiredo/>} />
        <Route path="/destinos/norte/para/belem/4" element={<Belem/>} />
        <Route path="/destinos/norte/para/alter-do-chao/5" element={<AlterChao/>} />
        <Route path="/destinos/norte/para/maraba/6" element={<Maraba/>} />

        <Route path="/destinos/nordeste/bahia/salvador/7" element={<Salvador/>} />
        <Route path="/destinos/nordeste/bahia/trancoso/8" element={<Trancoso/>} />
        <Route path="/destinos/nordeste/bahia/chapada-diamantina/9" element={<ChapadaDiamantina/>} />
        <Route path="/destinos/nordeste/pernambuco/olinda/10" element={<Olinda/>} />
        <Route path="/destinos/nordeste/pernambuco/recife/11" element={<Recife/>} />
        <Route path="/destinos/nordeste/pernambuco/porto-de-galinhas/12" element={<PortoGalinhas/>} />
        
  
      </Routes>
    </Router>
  );
};

export default MyRoutes;