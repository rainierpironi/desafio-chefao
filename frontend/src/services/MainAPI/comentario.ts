import baseUrl from './config';

interface Comentario {
    nome: string,
    email: string,
    mensagem: string,
    destinos_id: number,
}

export const postComentario = async (comentario: Comentario) => {
    const body = JSON.stringify(comentario)
    const jsonData = JSON.parse(body)
    try {
        const response = await baseUrl.post('/comentario', jsonData)
        return {
            status: response.status,
            data: response.data
        }

    } catch (error) {
        throw new Error('Não foi possível realizar o comentário!')
    }
}

export const getComentariosById = async (id: number): Promise<Comentario[]>  => {
    return baseUrl.get<Comentario[]>(`/comentario/${id}`).then(response => response.data)
};