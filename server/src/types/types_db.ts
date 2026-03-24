export interface Conveniado {
    id: number,
    nome: string,
    filiado: boolean,
    status: string,
    filiacao_id: number | null,
    criacao_id: number | null,
    modificacao_id: number | null,
    empresa_id: number | null /* ver se empresa esta como obrigatorio */
}

export interface Convenio {
    id: number,
    valor: number,
    status: string,
    autonomo: boolean,
    empresa_id: number,
    criacao_id: number | null,
    modificacao_id: number | null
}

export interface Dependente {
    id: number,
    nome: string,
    dt_nascimento: string,
    status: string,
    valor: number,
    usuario_id: number,
    criacao_id: number | null,
    modificacao_id: number | null
}

export interface Empresa {
    id: number,
    nome: string,
    cnpj: string,
    nome_contato: string,
    setor_contato: string,
    status: string,
    endereco_id: number,
    criacao_id: number | null,
    modificacao_id: number | null
}

export interface Endereco {
    id: number,
    cep: string,
    rua: string,
    bairro: string,
    pais: string,
    complemento: string,
    numero: string,
    status: string,
    criacao_id: number | null,
    modificacao_id: number | null
}

export interface Filiacao {
    id: number,
    status: string,
    usuario_id: number,
    valor_associacao_id: number,
    criacao_id: number | null,
    modificacao_id: number | null,
    qtd_dependentes: number
}

export interface FuncionarioSindicato {
    id: number,
    funcao: string,
    usuario_id: number,
    empresa_id: number
    /* colocar status */
    /* criacao_id: number | null,
    modificacao_id: number | null, */
}

export interface Mensalidade {
    id: number,
    dt_criacao: string,
    mes: string,
    tipo_associacao: string,
    qtd_dependentes: number,
    valor_dependente: number,
    valor_total_dependente: number,
    valor_descontos: number,
    valor_acrescimos: number,
    valor_total: number,
    dt_vencimento: string,
    pgto_status: string,
    obs: string,
    usuario_id: number,
    empresa_id: number
}

export interface Telefone {
    id: number,
    numero: string,
    tipo: string,
    status: string,
    usuario_id: number | null,
    empresa_id: number | null
}

export interface Usuario {
    id: number,
    nome: string,
    cpf: string,
    funcao: string,
    email: string,
    status: string,
    endereco_id: number,
    empresa_id: number,
    criacao_id: number | null,
    modificacao_id: number | null
}