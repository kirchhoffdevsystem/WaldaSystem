import type {
    Usuario,
    Conveniado,
    Dependente,
    Empresa,
    Endereco,
    Filiacao,
    FuncionarioSindicato,
    Mensalidade,
    Telefone, 
    ValorAssociacao
} from "./src/types/types_db";

import UsuarioRepository from "./src/repositories/usuario.repository";
import ConveniadoRepository from "./src/repositories/conveniados.repository";
import DependenteRepository from "./src/repositories/dependente.repository";
import EmpresaRepository from "./src/repositories/empresa.repository";
import EnderecoRepository from "./src/repositories/endereco.repository";
import FiliacaoRepository from "./src/repositories/filiacao.repository";
import FuncionarioSindicatoRepository from "./src/repositories/funcionario_sindicato.repository";
import MensalidadeRepository from "./src/repositories/mensalidade.repository";
import TelefoneRepository from "./src/repositories/telefone.repository";
import ValorAssociacaoRepository from "./src/repositories/valor_associacao.repository";

const usuario = new UsuarioRepository();
const conveniado = new ConveniadoRepository();
const dependente = new DependenteRepository();
const empresa = new EmpresaRepository();
const endereco = new EnderecoRepository();
const filiacao = new FiliacaoRepository();
const funcionario_sindicato = new FuncionarioSindicatoRepository();
const mensalidade = new MensalidadeRepository();
const telefone = new TelefoneRepository();
const valor_associacao = new ValorAssociacaoRepository();

export async function mostrarUsuarios() {
    const usuarios: Usuario[] | null = await usuario.todos()
    console.log(usuarios);
}

export async function mostrarConveniados() {
    const conveniados: Conveniado[] | null = await conveniado.todos()
    console.log(conveniados);
}

export async function mostrarDependentes() {
    const dependentes: Dependente[] | null = await dependente.todos()
    console.log(dependentes);
}

export async function mostrarEmpresas() {
    const empresas: Empresa[] | null = await empresa.todos()
    console.log(empresas);
}

export async function mostrarEnderecos() {
    const enderecos: Endereco[] | null = await endereco.todos()
    console.log(enderecos);
}

export async function mostrarFiliacoes() {
    const filiacoes: Filiacao[] | null = await filiacao.todos()
    console.log(filiacoes);
}

export async function mostrarFuncionariosSindicato() {
    const funcionarios: FuncionarioSindicato[] | null = await funcionario_sindicato.todos()
    console.log(funcionarios);
}

export async function mostrarMensalidades() {
    const mensalidades: Mensalidade[] | null = await mensalidade.todos()
    console.log(mensalidades);
}

export async function mostrarTelefones() {
    const telefones: Telefone[] | null = await telefone.todos()
    console.log(telefones);
}

export async function mostrarValoresAssociacoes() {
    const valores_associacoes: ValorAssociacao[] | null = await valor_associacao.todos()
    console.log(valores_associacoes);
}

export default function testeBD() {
    mostrarValoresAssociacoes()
}