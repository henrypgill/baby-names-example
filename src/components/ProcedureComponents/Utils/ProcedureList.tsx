/*

import { useState } from "react";


class ProcedureList {
    _procedureArray: Procedure[];
    _setProcedures(): null;

    constructor() {
        const state = useState<Procedure[]>([]);
        this._procedureArray = [state[0]]
        this._setProcedures = [state[1]]
    }

    get procedures() {
        return this._procedures;
    }

    generateKey(): string{
        return `p${this._procedureArray.length + 1}`;
    }

    addProcedure(stepText: string) {
        const stepToAdd = new Procedure(stepText, this.generateKey())
        this._procedureArray.push(stepToAdd)
    }
}

class Procedure{
    _name: string;
    _key: string; // pn where n is an incrementing number
    _procedureSteps: ProcedureStepData[];

    constructor(_name: string, _key: string){
        this._name = _name;
        this._key = _key;
        this._procedureSteps = []
        this.addStep("Double click to edit")

    }

    generateListItemKey(): string{
        return `${this._key}${this._procedureSteps.length + 1}`;
    }

    addStep(stepText: string) {
        const stepToAdd = new ProcedureStepData(stepText, this.generateListItemKey())
        this._procedureSteps.push(stepToAdd)
    }

}




class ProcedureStepData{
    _text: string;
    _key: string;
    constructor(_text: string, _key: string){
        this._text = _text;
        this._key = _key;
    }
    get text() {
        return this._text
    }
    get key() {
        return this._key
    }
    set text(newText) {
        this._text = newText;
    }

}


export {ProceduresList, ProcedureData, ProcedureStepData}

*/