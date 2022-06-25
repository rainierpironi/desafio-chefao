//import supertest from "supertest";
//import app from "../../../";
const supertest = require("supertest");
const app = require("../../../app");

describe('No controller, ao executar função', () => {

    describe('criaComentario', () => {

        test('em caso de sucesso, deve retornar 200', async () => {
            const response = await supertest(app)
            .post('/comentario')
            .send({
                nome: "teste teste",
                email: "teste@gmail.com",
                mensagem: "mensagem teste",
                destinos_id: 1,                
            })
    
            expect(response.status).toBe(200);
        })

        test('em caso de sucesso, retornar response do request', async () => {
            const response = await supertest(app)
            .post('/comentario')
            .send({
                nome: "teste teste",
                email: "teste@gmail.com",
                mensagem: "mensagem teste",
                destinos_id: 1,                
            })    
        

            expect(response.body).toEqual(
                expect.objectContaining({                    
                    id: expect.any(Number),
                    nome: expect.any(String),
                    email: expect.any(String),
                    mensagem: expect.any(String),
                    destinos_id: expect.any(Number),                    
                    createdAt: expect.any(String),
                    updatedAt: expect.any(String),
                })
            )
        }) 
    })

    describe('listaComentarios', () => {

        test('em caso de sucesso, deve retornar 200', async () => {
            const response = await supertest(app)
            .get('/comentario')            
    
            expect(response.status).toBe(201);
        })         
    })

    describe('listaComentariosIdDestino', () => {

        test('em caso de sucesso, deve retornar 200', async () => {
            const response = await supertest(app)
            .get('/comentario/3')            
    
            expect(response.status).toBe(200);
        })         
    })
})