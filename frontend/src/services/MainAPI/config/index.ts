import axios from 'axios';

interface Destino {
    id: number,
    nome_regiao: string,
    nome_estado: string,
    nome_cidade: string
}

export const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const getDestinos = async (): Promise<Destino[]> => {
  try {
    const response = await api.get('/destinos')
    return response.data
  } catch (error) {
    throw new Error("Não foi possível pegar os dados")
  }
}

