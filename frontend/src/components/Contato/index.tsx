import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import * as yup from "yup";
import { postContato } from '../../services/MainAPI/contato';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import './contato.css';
import { Container } from 'react-bootstrap';

interface Contato {
    nome: string,
    email: string,
    assunto: string,
    mensagem: string
}

const validationSchema = yup.object({
    nome: yup.string().required("Valor é requerido"),
    email: yup.string().email("Email inválido").required("Valor é requerido"),
    assunto: yup.string().required("Valor é requerido"),
    mensagem: yup.string().min(50, "Quantidade mínima requerida").max(500, "Quantidade máxima ultrapassada").required("Valor é requerido")
})

const Contato: React.FC = () => {

    const [show, setShow] = useState(false);

    const formik = useFormik({
        initialValues: {
            nome: '',
            email: '',
            assunto: '',
            mensagem: ''
        },
        validationSchema,
        onSubmit: async values => {
            const resposta = await postContato({ nome: values.nome, email: values.email, assunto: values.assunto, mensagem: values.mensagem });

            if (resposta == 201 || resposta == 200) {
                setShow(true);
            }
        },
    });

    return (

        <>
            <div className='main'>
                <div className='contato'>
                    <h1>Contato</h1>
                    <h4>A sua opinião é importante</h4>
                <p>Buscamos entender as necessidades das mulheres viajantes solo para oferecer funcionalidades que agreguem valor nas suas experiências como usuárias dessa plataforma. 
                </p>
                <p>
                Gostaria de fazer algum comentário, sugestão ou reclamação? 
                </p>
                <p>
                    Conta pra gente!
                </p>
                <p>
                Para entrar em contato conosco, preencha os campos ao lado, e iremos entrar em contato com você o mais breve possível.
                </p>
                </div>
                <div className='contato-form'>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='nome-email'>
                            <Form.Group className="mb-3" controlId="nome">
                                <Form.Label className='titulo-input'>Nome</Form.Label>
                                <Form.Control type="text"
                                    placeholder="Digite aqui o seu nome..."
                                    style={{ height: '50px', 
                                     width:'45vh', 
                                     background: '#2a2b2c',
                                     borderRadius:'30px'  }}
                                    defaultValue={formik.values.nome}
                                    onChange={formik.handleChange} />
                                {formik.errors.nome && <span>{formik.errors.nome}</span>}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label className='titulo-input'>E-mail</Form.Label>
                                <Form.Control type="email"
                                    placeholder="Digite aqui o seu e-mail..."
                                    style={{ height: '50px', 
                                    width:'45vh', 
                                    background: '#2a2b2c',
                                    borderRadius:'30px'  }}
                                    defaultValue={formik.values.email}
                                    onChange={formik.handleChange} />
                                {formik.errors.email && <span>{formik.errors.email}</span>}
                            </Form.Group>
                        </div>
                        <div>
                            <Form.Group className="mb-3" controlId="assunto">
                                <Form.Label className='titulo-input'>Assunto</Form.Label>
                                <Form.Control type="text"
                                    placeholder="Digite aqui o assunto da mensagem..."
                                    style={{ height: '50px', 
                                             background: '#2a2b2c',
                                             borderRadius:'30px'  }}
                                    defaultValue={formik.values.assunto}
                                    onChange={formik.handleChange} />
                                {formik.errors.assunto && <span>{formik.errors.assunto}</span>}
                            </Form.Group>
                        </div>
                        <div>
                            <Form.Group className="mb-3 " controlId="mensagem">
                                <Form.Label className='titulo-input'>Mensagem</Form.Label>
                                <Form.Control as="textarea" rows={10}
                                    placeholder="Digite aqui sua mensagem até 280 caracteres..."
                                    style={{ background: '#2a2b2c', 
                                             borderRadius:'30px' }}
                                    defaultValue={formik.values.mensagem}
                                    onChange={formik.handleChange} />
                                {formik.errors.mensagem && <span>{formik.errors.mensagem}</span>}
                            </Form.Group>
                        </div>
                        <div className='form-btn'>
                            <Button style={{ width: '8.05em', 
                                     height: '7vh',
                                     borderRadius:'30px' }} 
                                     variant="warning" type="submit">
                                Enviar
                            </Button>
                        </div>
                    </form>
                </div>
                <Container className='conteudo d-flex justify-content-start'>
                    <Toast className='notificacao' onClose={() => setShow(false)} show={show} delay={3000} autohide>
                        <div className='conteudo-toast'>
                            <Toast.Header></Toast.Header>
                            <Toast.Body className='mensagem-notificacao'>Mensagem enviada!</Toast.Body>
                        </div>
                    </Toast>
                </Container>
            </div>
        </>
    );
}

export default Contato;

function resetForm(arg0: { values: string; }) {
    throw new Error('Function not implemented.');
}
