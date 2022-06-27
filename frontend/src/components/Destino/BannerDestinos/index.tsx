import { Fragment } from "react";
import './styles.css';

const BannerDestinos: React.FC = () => {
  return (
    <Fragment>
        <div className='banner-destinos'>
            <div className="frase-destinos">
                <h1>Destinos do Norte</h1>
                <h2>Guia de destinos do Brasil</h2>
            </div>
        </div>
    </Fragment>
  );
}

export default BannerDestinos;