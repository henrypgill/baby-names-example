

import { ProcedureList } from "./ProcedureList"
import { ProcedureHeading } from "./ProcedureHeading";
import { useState } from "react";
import {Procedure, ProcedureStep, EditableAreaProps} from "./Utils/ProcedureInterfaces"




export function ProcedureCard(initialState: Procedure): JSX.Element {

    const [procedure, setProcedure] = useState(initialState)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const toggleIsOpen = () => isOpen ? setIsOpen(false) : setIsOpen(true);
    
    return (
    <div className="procedure-card" key={key}>
        <ProcedureHeading toggleFunction={() => toggleIsOpen()}/>
        <h1>{procedure.procedureName}</h1>
        {isOpen && <ProcedureList />}
    </div>);
}

