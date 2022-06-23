import {  BrowserRouter as Router,  Routes,  Route,} from "react-router-dom";
import Apoie from "./components/Apoie/Apoie";
import Home from "./pages/Home";


const MyRoutes: React.FC = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;