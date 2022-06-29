const supertest = require("supertest");
const app = require("../../../app");
const {
    Destinos
} = require('../models/')

describe('No controller, ao executar função', () => {
    beforeAll(() => {
        const jestSpy = jest.spyOn(Destinos, 'create');
        jestSpy.mockReturnValue({
            id: 1,
            nome_regiao: 'regiao teste',
            nome_estado: 'estado teste',
            nome_cidade: 'cidade teste',
            createdAt: 'abc',
            updatedAt: 'abc',
        });
    });

    describe('criar Destino', () => {


        test('em caso de sucesso, deve retornar 201', async () => {
            const response = await supertest(app)
                .post('/destino')
                .send({
                    nome_regiao: "teste regiao",
                    nome_estado: "teste estado",
                    nome_cidade: "teste cidade"
                })

            expect(response.status).toBe(201);
        })

        test('em caso de sucesso, retornar response do request', async () => {
            const response = await supertest(app)
                .post('/destino')
                .send({
                    nome_regiao: "teste regiao",
                    nome_estado: "teste estado",
                    nome_cidade: "teste cidade"
                })


            expect(response.body).toEqual(
                expect.objectContaining({
                    id: expect.any(Number),
                    nome_regiao: expect.any(String),
                    nome_estado: expect.any(String),
                    nome_cidade: expect.any(String),
                    createdAt: expect.any(String),
                    updatedAt: expect.any(String),
                })
            )
        })
    })

    describe('listar Destinos', () => {

        test('em caso de sucesso, deve retornar 200', async () => {
            const response = await supertest(app)
                .get('/destino')

            expect(response.status).toBe(200);
        })
    })

    


})