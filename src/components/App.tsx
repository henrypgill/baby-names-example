
import { useState } from "react";
import "../Styles/App.css";
import "../Styles/ProcedureCard.css";
import { EditableArea } from "./ProcedureComponents/EditableArea";
import getAppDemoData from "./ProcedureComponents/Utils/getDemoData"
import {Procedure} from "./Utils/ProcedureInterfaces"




function App() {

    const [procedureList, setProcedureList] = useState<Procedure[]>(getAppDemoData())

    return (
        <div className="App">
            <EditableArea 
                procedureList={procedureList}
                setProceduresList={(list: Procedure[]) => setProcedureList(list)} />
        </div>
    );
}

export default App;
