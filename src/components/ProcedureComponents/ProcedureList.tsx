import { ProcedureListItem } from "./ProcedureListItem";
import { NewProcedureItem } from "./NewProcedureItem";
import { useState } from "react";

import {Procedure, ProcedureStep, EditableAreaProps, ProcedureListItemProps} from "./Utils/ProcedureInterfaces"






export function ProcedureList(stepList): JSX.Element {


    //const [listItems, setListItems] = useState<ProcedureListItemProps[]>(getListItemDemoData())

    function addListItem(newListItemText: string) {
        const lastLiKey = listItems[listItems.length - 1].liKey;

        const newListItemObject: ProcedureListItemProps = {
            text: newListItemText,
            liKey: lastLiKey
        }
        const newList: ProcedureListItemProps[] = [...listItems, newListItemObject]
        setListItems(newList)
    }



    return (
        <div className="procedure-list-container">
        <ol>
            {listItems.map(ProcedureListItem)}
        </ol>
            <NewProcedureItem addNewListItem={(newText) => addListItem(newText)}/>
        </div>
    );
}

