interface ProcedureListItemProps {
    text: string;
    liKey: number;
}

export function ProcedureListItem({text, liKey}: ProcedureListItemProps): JSX.Element {
    return (
    <li key={liKey} className="procedure-list-item">{text}</li>
    );
}
