import { useState } from "react";


interface NewProcedureItemProps {
    addNewListItem(newListItemText: string): void;
}


export function NewProcedureItem({addNewListItem}: NewProcedureItemProps): JSX.Element {

    const [newItemText, setNewItemText] = useState<string>("New Item")

    return (
    <div className="new-procedure-item-container">

        <input value={newItemText} className="new-procedure-item-input" onChange={(e) => setNewItemText(e.target.value)}></input>
        <button className="new-procedure-item-button" onClick={()=> addNewListItem(newItemText)}>+</button>
    </div>);
}

