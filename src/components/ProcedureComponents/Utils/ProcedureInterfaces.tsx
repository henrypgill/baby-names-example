interface ProcedureStep{
    stepKey: string;
    text: string;
    procedureKey: string;
}

interface Procedure {
    key: string;
    procedureName: string;
    procedureStepsArray: ProcedureStep[];
}

interface EditableAreaProps {
    procedureList: Procedure[];
    setProceduresList(): void;
    
}


interface ProcedureListItemProps {
    text: string;
    liKey: number;
}


export type {Procedure, ProcedureStep, EditableAreaProps, ProcedureListItemProps}
