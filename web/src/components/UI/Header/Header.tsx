import css from "./header.module.css"
import { nomeRotas } from "../../../routes/nomeRotas"
import { Link } from "react-router-dom"

export default function Header_Component(){
    return (
        <header className={css.navbar}>
            <div className=
            {css.logoArea}>
                <img src="/logo_sistema_gerenciamento_sindicato_vigilantes.png" alt="Logo: Sistema de Gerenciamento Sindicato dos Vigilantes de Paranaguá" />
                <h1>Waldomiro</h1>
            </div>

            <nav>
                <ul>
                    <li><Link to={nomeRotas.conveniados}>Listar</Link></li>
                    <li><Link to={nomeRotas.empresas}>Cadastrar</Link></li>
                    <li><Link to={nomeRotas.filiados}>Remover</Link></li>
                </ul>
            </nav>
        </header>
    )
}