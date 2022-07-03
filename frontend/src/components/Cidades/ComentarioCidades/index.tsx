
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './comentario-cidades.css';

const ComentarioCidades: React.FC = () => {
  return (

    <div className='main-cidades'>
      <div id='borda'></div>
      <div className='comentario-cidades'>
        <h3>Comentários</h3>

        <div>
          <h5>Valéria</h5>
          <p>Adorei saber sobre Olinda. Pretendo viajar ainda esse ano.Muito legal!</p>
        </div>

        <div>
          <h5>Maria</h5>
          <p>Eu amo Olinda. Foi o meu primeiro destino de viagem sozinha.
            Parabéns, amei o conteúdo!</p>
        </div>

        <div>
          <h5>Paula</h5>
          <p>Pretendo viajar ainda esse ano.Adorei saber sobre Olinda. </p>
        </div>

      </div>

      <div className='form-comentario-cidades'>
        <Form>
          <h3>Deixe o seu comentários sobre esse conteúdo:</h3>
          <Form.Group className="mb-3 " controlId="comentarioName">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text"
              placeholder="Digite aqui o seu nome..."
              style={{
                height: '50px',
                borderRadius: '30px'
              }} />
          </Form.Group>



          <Form.Group className="mb-3" controlId="comentarioEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email"
              placeholder="Digite aqui o seu e-mail..."
              style={{
                height: '50px',
                borderRadius: '30px'
              }} />
          </Form.Group>


          <div>

            <Form.Group className="mb-3 " controlId="comentarioTextArea">
              <Form.Label>Mensagem</Form.Label>
              <Form.Control as="textarea" rows={5}
                placeholder="Digite aqui sua mensagem até 280 caracteres..."
                style={{ borderRadius: '30px' }} />
            </Form.Group>
          </div>

          <div className='form-comentario-btn'>
            <Button style={{
              width: '128.08px',
              height: '7vh',
              borderRadius: '30px',
              boxShadow: ' 1px 5px 5px black',
              fontStyle: 'bold',
              fontSize: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
              variant="warning" type="submit">
              Enviar
            </Button>
          </div>

        </Form>
      </div>
    </div>

  );
}

export default ComentarioCidades;