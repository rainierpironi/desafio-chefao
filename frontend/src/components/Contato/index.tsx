import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


import './contato.css';

const Contato: React.FC = () => {
    return (
        <div className='main'>
            <div className='contato'>
                <h1>Contato</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea cum, autem enim provident illo optio animi, dolores consequuntur modi architecto at iste dignissimos quod obcaecati! Neque, doloremque sint? Nemo, recusandae.
                </p>
            </div>
            <div className='contato-form'>
                <Form>
                    <div className='nome-email'>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" 
                            placeholder="Digite aqui o seu nome..." 
                            style={{ height: '50px', width:'45vh' }} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" placeholder="Digite aqui o seu e-mail..." style={{ height: '50px', width:'45vh' }}/>
                        </Form.Group>
                    </div>
                    <div>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Assunto</Form.Label>
                            <Form.Control type="text"  
                            placeholder="Digite aqui o assunto da mensagem..."
                            style={{ height: '50px' }} />
                        </Form.Group>
                    </div>
                    <div>

                        <Form.Group className="mb-3 " controlId="formTextArea">
                            <Form.Label>Mensagem</Form.Label>
                            <Form.Control as="textarea" rows={10} placeholder="Digite aqui sua mensagem..."/>
                        </Form.Group>
                    </div>
                    <div className='form-btn'>
                    <Button  style={{ width: '20vh', height: '7vh' }} variant="secondary" type="submit">
                        Enviar
                    </Button> 
                    </div>
                </Form>
            </div>

        </div>
    );
}

export default Contato;