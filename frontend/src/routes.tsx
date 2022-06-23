import {  BrowserRouter as Router,  Routes,  Route,} from "react-router-dom";
import Apoie from "./components/Apoie/Apoie";


const MyRoutes: React.FC = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Apoie/>} />

      </Routes>
    </Router>
  );
};

export default MyRoutes;