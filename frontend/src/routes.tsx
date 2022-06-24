import {  BrowserRouter as Router,  Routes,  Route,} from "react-router-dom";
import Apoie from "./components/Apoie/Apoie";
import Home from "./pages/Home";
import Conecte from "./components/Conecte/Conecte";


const MyRoutes: React.FC = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/conecte" element={<Conecte/>} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;