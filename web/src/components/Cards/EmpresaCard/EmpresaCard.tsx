import type { Empresa } from "../../../types/types_db";
import { nomeRotas } from "../../../routes/nomeRotas";
import Card, { type ItemCard } from "../Card";
import cssCard from "../cssCard.module.css"
import { useNavigate } from "react-router-dom";

type Props = {
    item: Empresa
}

function Conteudo({ item }: Props) {
    return (
        <>
            <h2 className={cssCard.subtitulo}>Cep: {item.cnpj}</h2>
            <div className={cssCard.descricao}>

                <p><span className={cssCard.negrito}>Telefone:</span> (41) 99900-9900</p>

                <p><span className={cssCard.negrito}>Contato:</span> {item.nome_contato}</p>

                <p><span className={cssCard.negrito}>Setor do Contato:</span> {item.setor_contato}</p>

                <p><span className={cssCard.negrito}>Endereço:</span> Rua XXXXX, Bairro , PR - 0800.09</p>

            </div>
        </>
    )
}

export default function EmpresaCard_Component({ item }: Props) {
    const card: ItemCard = {
        titulo: item.nome,
        status: item.status
    }
    const navigate = useNavigate();
    return (
        <Card item={card} children={<Conteudo item={item} />} onClick={() => navigate(`${nomeRotas.empresas}/${item.id}`)} />
    )
}