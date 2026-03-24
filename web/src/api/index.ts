const API_URL = 'http://localhost:3333/api/';

export const linksApi = {
    conveniado: API_URL + 'conveniado',
    convenio: API_URL + 'convenio', 
    dependente: API_URL + 'dependente',
    empresa: API_URL + 'empresa',
    endereco: API_URL + 'endereco',
    filiacao: API_URL + 'filiacao',
    funcionario_sindicato: API_URL + 'funcionario_sindicato',
    mensalidade: API_URL + 'mensalidade',
    telefone: API_URL + 'telefone',
    usuario: API_URL + 'usuario',
}

export const fetchProdutos = async (searchValue = "") => {
    const response = await fetch(`${API_URL}/produtos?nome=${encodeURIComponent(searchValue)}`)
    return response.json()
}