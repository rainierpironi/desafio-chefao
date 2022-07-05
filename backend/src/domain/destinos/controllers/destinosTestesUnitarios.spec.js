const {
    Destinos
} = require('../models');
const DestinosController = require('./destinosController');

const mockResponse = () => {
    const res = {
        status: undefined,
    };
    res.status = (status) => { res.status = status; return res };
    res.json = () => res;
    return res;
};

test ('Deve cadastrar um destino', async () => {
    const req = {
        body: {
            nome_regiao: 'teste',
            nome_estado: 'teste',
            nome_cidade: 'teste'

        }
    }

    const res = mockResponse();

    await DestinosController.create(req, res)

    return expect(res.status).toBe(201)
})


test ('Deve apresentar uma mensagem de erro e o status 500 se as informações estiverem incompletas', async () => {
    const res = mockResponse();

      
    const req = {
        body: {
            nome_regiao: 'teste',
           
        }
    }
    if (!req.body) {
        expect (new Error (res.status).toBe(500));
    await DestinosController.create(req, res)
        
    
}
})