import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Planfirst from "../../components/Planejamento/Planfirst/Planfirst";
import Planfourth from "../../components/Planejamento/Planfourth/Planfourth";
import Plansecond from "../../components/Planejamento/Plansecond/Plansecond";
import Planthird from "../../components/Planejamento/Planthird/Planthird";







const PlanejamentoDesktop: React.FC = () => {
    return (
     <Fragment>
      <Header/>
        <Planfirst/>
        <Plansecond/>
        <Planthird/>
        <Planfourth/>
        <Footer/>
        </Fragment>

          );
  }
  
  export default PlanejamentoDesktop;