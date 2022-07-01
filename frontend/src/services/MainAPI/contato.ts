import baseUrl from './config';

interface Contato {
    nome: string,
    email: string,
    assunto: string,
    mensagem: string
}

export const postContato = async (contato: Contato) => {
    const body = JSON.stringify(contato)
    const jsonData = JSON.parse(body)
    try {
        const response =  await baseUrl.post('/contato', jsonData)
        return response.status
        
    } catch (error) {
        throw new Error('Não foi possível realizar o contato!')
    }
}