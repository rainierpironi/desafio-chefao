
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './comentario-cidades.css';

const ComentarioCidades: React.FC = () => {
  return (

    <div className='main-cidades'>

      <div className='comentario-cidades'>
        <h3>Comentários</h3>

        <div>
        <h5>Valéria</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dignissimos vel, voluptatem ut, illo explicabo vero modi cum, temporibus similique eaque amet necessitatibus voluptates laudantium ullam odit. Mollitia, a fugiat!</p>
        </div>

        <div>
        <h5>Maria</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dignissimos vel, voluptatem ut, illo explicabo vero modi cum, temporibus similique eaque amet necessitatibus voluptates laudantium ullam odit. Mollitia, a fugiat!</p>
        </div>

      </div>

      <div className='form-comentario-cidades'>
        <Form>
            <h3>Deixe o seu comentários sobre esse conteúdo:</h3>
          <Form.Group className="mb-3 " controlId="comentarioName">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text"
              placeholder="Digite aqui o seu nome..."
              style={{ height: '50px' }} />
          </Form.Group>



          <Form.Group className="mb-3" controlId="comentarioEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" 
            placeholder="Digite aqui o seu e-mail..." 
            style={{ height: '50px' }} />
          </Form.Group>


          <div>

            <Form.Group className="mb-3 " controlId="comentarioTextArea">
              <Form.Label>Mensagem</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Digite aqui sua mensagem..." />
            </Form.Group>
          </div>

          <div className='comentario-form-btn'>
            <Button style={{ width: '20vh', height: '7vh' }} variant="secondary" type="submit">
              Enviar
            </Button>
          </div>

        </Form>
      </div>
    </div>

  );
}

export default ComentarioCidades;