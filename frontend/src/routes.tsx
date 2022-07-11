import React, { useEffect } from 'react'
import {  BrowserRouter as Router,  Routes,  Route, useLocation} from "react-router-dom";
import Home from "./pages/Home";
import Conecte from "./components/Conecte/Conecte";
import PlanejamentoDesktop from "./pages/PlanejamentoDesktop";
import PaginaSecurity from "./pages/SegurancaDesktop";
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

import CaldasNovas from './pages/CidadesCO-Caldas-novas';
import Pirenopolis from './pages/CidadesCO-Pirenopolis';
import ChapadaVeadeiros from './pages/CidadesCO-Chapada-veadeiros';
import CampoGrande from './pages/CidadesCO-Campo-grande';
import Bonito from './pages/CidadesCO-Bonito';
import Bodoquena from './pages/CidadesCO-Bodoquena';

import SaoPaulo from './pages/CidadesSE-Sao-paulo';
import Ilhabela from './pages/CidadesSE-Ilhabela';
import CamposJordao from './pages/CidadesSE-Campos-do-jordao';
import RioJaneiro from './pages/CidadesSE-Rio-de-janeiro';
import AngraReis from './pages/CidadesSE-Angra-dos-Reis';
import Petropolis from './pages/CidadesSE-Petropolis';

import Florianopolis from './pages/CidadesS-Florianopolis';
import Blumenau from './pages/CidadesS-Blumenau';
import Joinville from './pages/CidadesS-Joinville';
import Gramado from './pages/CidadesS-Gramado';
import Canela from './pages/CidadesS-Canela';
import PortoAlegre from './pages/CidadesS-Porto-alegre';

import Paginaculturais from "./pages/CulturaisDesktop";
import DestinoNordeste from "./pages/DestinoNordeste";
import DestinoSudeste from "./pages/DestinoSudeste";
import DestinoCentroOeste from "./pages/DestinoCentroOeste";
import DestinoNorte from "./pages/DestinoNorte";
import DestinoSul from "./pages/DestinoSul";


const MyRoutes: React.FC = () => {

  

  function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

  return (
    
    <Router>
      <ScrollToTop />
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

        <Route path="/destinos/centro-oeste/goias/caldas-novas/13" element={<CaldasNovas/>} />
        <Route path="/destinos/centro-oeste/goias/pirenopolis/14" element={<Pirenopolis/>} />
        <Route path="/destinos/centro-oeste/goias/chapada-dos-veadeiros/15" element={<ChapadaVeadeiros/>} />
        <Route path="/destinos/centro-oeste/mato-grosso-do-sul/campo-grande/16" element={<CampoGrande/>} />
        <Route path="/destinos/centro-oeste/mato-grosso-do-sul/bonito/17" element={<Bonito/>} />
        <Route path="/destinos/centro-oeste/mato-grosso-do-sul/bodoquena/18" element={<Bodoquena/>}/>
       
        <Route path="/destinos/sudeste/sao-paulo/sao-paulo/19" element={<SaoPaulo/>}/>
        <Route path="/destinos/sudeste/sao-paulo/ilhabela/20" element={<Ilhabela/>}/>
        <Route path="/destinos/sudeste/sao-paulo/campos-do-jordao/21" element={<CamposJordao/>}/>
        <Route path="/destinos/sudeste/rio-de-janeiro/rio-de-janeiro/22" element={<RioJaneiro/>}/>
        <Route path="/destinos/sudeste/rio-de-janeiro/angra-dos-reis/23" element={<AngraReis/>}/>
        <Route path="/destinos/sudeste/rio-de-janeiro/petropolis/24" element={<Petropolis/>}/>

        <Route path="/destinos/sul/santa-catarina/florianopolis/25" element={<Florianopolis/>}/>
        <Route path="/destinos/sul/santa-catarina/blumenau/26" element={<Blumenau/>}/>
        <Route path="/destinos/sul/santa-catarina/joinville/27" element={<Joinville/>}/>
        <Route path="/destinos/sul/rio-grande-do-sul/gramado/28" element={<Gramado/>}/>
        <Route path="/destinos/sul/rio-grande-do-sul/canela/29" element={<Canela/>}/>
        <Route path="/destinos/sul/rio-grande-do-sul/portoalegre/30" element={<PortoAlegre/>}/>


      </Routes>
    </Router>
  );
};

export default MyRoutes;