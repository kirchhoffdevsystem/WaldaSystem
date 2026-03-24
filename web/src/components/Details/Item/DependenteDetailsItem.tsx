import cssItem from './cssItem.module.css'
import DetailsItem from '.'
import type { Dependente } from '../../../types/types_db';

type Props = {
    nome: string;
    idade: number;
    valor: number;
}

function Conteudo({ nome, idade, valor }: Props) {
    return (
        <div className={cssItem.itemInfo}>
            <p><small className={cssItem.itemNegrito}>Nome</small>: {nome}</p>
            <p><small className={cssItem.itemNegrito}>Idade</small>: {idade} anos</p>
            <p><small className={cssItem.itemNegrito}>Valor</small>: R$ {valor.toFixed(2)}</p>
        </div>
    )
}

function openInfo() {
    const dependentes: Dependente[] = [
        {
            id: 1,
            nome: "Ana Silva",
            dt_nascimento: "2010-03-15",
            status: "ativo",
            valor: 250.00,
            usuario_id: 1,
            criacao_id: 1,
            modificacao_id: null
        },
        {
            id: 10,
            nome: "João Rocha",
            dt_nascimento: "2018-08-03",
            status: "suspenso",
            valor: 180.00,
            usuario_id: 5,
            criacao_id: 5,
            modificacao_id: null
        }
    ];

    const info = dependentes.map((el, i) => {
        return `
                --------------------------------------
                Dependente ${i+1}
                id: ${el.id},
                nome: ${el.nome},
                dt_nascimento: ${el.dt_nascimento},
                status: ${el.status},
                valor: ${el.valor},
                usuario_id: ${el.usuario_id},
                `
    })

    const resposta = confirm(info + "\nDeseja ir para as informações dos Dependentes?");
    if (resposta) {
        console.log("Usuário confirmou");
    } else {
        console.log("Usuário cancelou");
    }
}

export default function DependenteDetailsItem_Component({ nome, idade, valor }: Props) {
    return (
        <DetailsItem label='Dependentes'
            children={<Conteudo nome={nome} idade={idade} valor={valor} />}
            onClick={() => openInfo()} />
    )
}