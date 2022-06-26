import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Planfirst from "../../components/Planejamento/Planfirst/Planfirst";
import Planfourth from "../../components/Planejamento/Planfourth/Planfourth";
import Plansecond from "../../components/Planejamento/Plansecond/Plansecond";
import Planthird from "../../components/Planejamento/Planthird/Planthird";







const PlanejamentoDesktop: React.FC = () => {
    return (
     <Fragment>
        <Planfirst/>
        <Plansecond/>
        <Planthird/>
        <Planfourth/>
        </Fragment>
          );
  }
  
  export default PlanejamentoDesktop;