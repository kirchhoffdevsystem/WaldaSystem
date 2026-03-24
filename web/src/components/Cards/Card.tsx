import cssCard from "./cssCard.module.css"

export type ItemCard = {
    titulo: string;
    status: string;
    empresa?: string;
    empresa_status?: string;
}

type Props = {
    item: ItemCard;
    children?: React.ReactNode;
    onClick?: () => void;
}

export default function Card_Component({ item, children, onClick }: Props) {

    function getStatusClass(status: string) {
        switch (status) {
            case "ativo": return cssCard.ativo;
            case "inativo": return cssCard.inativo;
            case "cancelado": return cssCard.cancelado;
            default: return "";
        }
    }

    return (
        <div className={cssCard.card} onClick={onClick}>
            <header className={cssCard.cardHeader}>
                <h1 className={cssCard.titulo}>{item.titulo}</h1>
                <p className={`${cssCard.status} ${getStatusClass(item.status)}`}></p>
            </header>
            {item.empresa && (
                <div className={cssCard.headerEmpresa}>
                    <h2>
                        {item.empresa} - {item.empresa_status ?? "Sem status"}
                    </h2>
                </div>
            )}
            {children}
        </div>
    )
}