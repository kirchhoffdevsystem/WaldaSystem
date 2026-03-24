import css from "./sidebar.module.css"
import { Link } from 'react-router-dom';
import { nomeRotas } from "../../../routes/nomeRotas";

const paginas = [
  {
    nome: 'conveniados',
    link: nomeRotas.conveniados
  },
  {
    nome: 'convenios',
    link: nomeRotas.convenios
  },
  {
    nome: 'dependentes',
    link: nomeRotas.dependentes
  },
  {
    nome: 'empresas',
    link: nomeRotas.empresas
  },
  {
    nome: 'enderecos',
    link: nomeRotas.enderecos
  },
  {
    nome: 'filiados',
    link: nomeRotas.filiados
  },
  {
    nome: 'funcionarios do sindicato',
    link: nomeRotas.funcionariosSindicato
  },
  {
    nome: 'mensalidades',
    link: nomeRotas.mensalidades
  },
  {
    nome: 'telefones',
    link: nomeRotas.telefones
  },
  {
    nome: 'usuários cadastrados',
    link: nomeRotas.usuariosCadastrados
  },
]

export default function Sidebar_Component() {
  return (
    <div className={css.sidebar}>
      <ul>
        {paginas.map((el, i) => (
          <li key={i}>
            <Link to={el.link}>{el.nome}</Link>
          </li>
        ))}
        <br />
        <li><h2 className={css.titulo}>Ferramentas</h2></li>
        <li>
          <a href="#">Planilhas</a>
        </li>
      </ul>
    </div>
  );
};