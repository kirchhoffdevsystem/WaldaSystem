import cssItem from './cssItem.module.css'

type Props = {
    label: string;
    children: React.ReactNode;
    onClick?: () => void;
}

export default function DetailsItem_Component({ label, onClick, children }: Props) {
    return (
        <div className={cssItem.itemArea} onClick={onClick}>
            <p className={cssItem.itemLabel}>{label}</p>
            {children}
        </div>
    )
}