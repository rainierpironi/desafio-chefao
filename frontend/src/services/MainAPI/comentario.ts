import baseUrl from './config';

interface Comentario {
    nome: string,
    email: string,
    mensagem: string
}

export const postComentario = async (comentario: Comentario) => {
    const body = JSON.stringify(comentario)
    const jsonData = JSON.parse(body)
    try {
        const response = await baseUrl.post('/comentario', jsonData)
        return response.status

    } catch (error) {
        throw new Error('Não foi possível realizar o comentário!')
    }
}

export const getComentarios = async (): Promise<Comentario[]>  => {
    return baseUrl.get<Comentario[]>("/comentario").then(response => response.data)
};