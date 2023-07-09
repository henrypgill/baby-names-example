


import {Procedure, ProcedureStep, EditableAreaProps, ProcedureListItemProps} from "./ProcedureInterfaces"




function getAppDemoData(): Procedure[]{

    const procedure1: Procedure = {
        key: "p00001",
        procedureName: "Procedure 1",
        procedureStepsArray: [
          { stepKey: "s00001", text: "Step 1", procedureKey: "p00001" },
          { stepKey: "s00002", text: "Step 2", procedureKey: "p00001" },
          { stepKey: "s00003", text: "Step 3", procedureKey: "p00001" },
          { stepKey: "s00004", text: "Step 4", procedureKey: "p00001" },
          { stepKey: "s00005", text: "Step 5", procedureKey: "p00001" },
          { stepKey: "s00006", text: "Step 6", procedureKey: "p00001" },
          { stepKey: "s00007", text: "Step 7", procedureKey: "p00001" },
          { stepKey: "s00008", text: "Step 8", procedureKey: "p00001" },
          { stepKey: "s00009", text: "Step 9", procedureKey: "p00001" }
        ]
      };
      
      const procedure2: Procedure = {
        key: "p00002",
        procedureName: "Procedure 2",
        procedureStepsArray: [
          { stepKey: "s00001", text: "Step 1", procedureKey: "p00002" },
          { stepKey: "s00002", text: "Step 2", procedureKey: "p00002" },
          { stepKey: "s00003", text: "Step 3", procedureKey: "p00002" },
          { stepKey: "s00004", text: "Step 4", procedureKey: "p00002" },
          { stepKey: "s00005", text: "Step 5", procedureKey: "p00002" },
          { stepKey: "s00006", text: "Step 6", procedureKey: "p00002" },
          { stepKey: "s00007", text: "Step 7", procedureKey: "p00002" },
          { stepKey: "s00008", text: "Step 8", procedureKey: "p00002" },
          { stepKey: "s00009", text: "Step 9", procedureKey: "p00002" }
        ]
      };
      
      const procedure3: Procedure = {
        key: "p00003",
        procedureName: "Procedure 3",
        procedureStepsArray: [
          { stepKey: "s00001", text: "Step 1", procedureKey: "p00003" },
          { stepKey: "s00002", text: "Step 2", procedureKey: "p00003" },
          { stepKey: "s00003", text: "Step 3", procedureKey: "p00003" },
          { stepKey: "s00004", text: "Step 4", procedureKey: "p00003" },
          { stepKey: "s00005", text: "Step 5", procedureKey: "p00003" },
          { stepKey: "s00006", text: "Step 6", procedureKey: "p00003" },
          { stepKey: "s00007", text: "Step 7", procedureKey: "p00003" },
          { stepKey: "s00008", text: "Step 8", procedureKey: "p00003" },
          { stepKey: "s00009", text: "Step 9", procedureKey: "p00003" }
        ]
      };
      
      const procedure4: Procedure = {
        key: "p00004",
        procedureName: "Procedure 4",
        procedureStepsArray: [
          { stepKey: "s00001", text: "Step 1", procedureKey: "p00004" },
          { stepKey: "s00002", text: "Step 2", procedureKey: "p00004" },
          { stepKey: "s00003", text: "Step 3", procedureKey: "p00004" },
          { stepKey: "s00004", text: "Step 4", procedureKey: "p00004" },
          { stepKey: "s00005", text: "Step 5", procedureKey: "p00004" },
          { stepKey: "s00006", text: "Step 6", procedureKey: "p00004" },
          { stepKey: "s00007", text: "Step 7", procedureKey: "p00004" },
          { stepKey: "s00008", text: "Step 8", procedureKey: "p00004" },
          { stepKey: "s00009", text: "Step 9", procedureKey: "p00004" }
        ]
      };
      
      const procedure5: Procedure = {
        key: "p00005",
        procedureName: "Procedure 5",
        procedureStepsArray: [
          { stepKey: "s00001", text: "Step 1", procedureKey: "p00005" },
          { stepKey: "s00002", text: "Step 2", procedureKey: "p00005" },
          { stepKey: "s00003", text: "Step 3", procedureKey: "p00005" },
          { stepKey: "s00004", text: "Step 4", procedureKey: "p00005" },
          { stepKey: "s00005", text: "Step 5", procedureKey: "p00005" },
          { stepKey: "s00006", text: "Step 6", procedureKey: "p00005" },
          { stepKey: "s00007", text: "Step 7", procedureKey: "p00005" },
          { stepKey: "s00008", text: "Step 8", procedureKey: "p00005" },
          { stepKey: "s00009", text: "Step 9", procedureKey: "p00005" }
        ]
      };
      
      const procedure6: Procedure = {
        key: "p00006",
        procedureName: "Procedure 6",
        procedureStepsArray: [
          { stepKey: "s00001", text: "Step 1", procedureKey: "p00006" },
          { stepKey: "s00002", text: "Step 2", procedureKey: "p00006" },
          { stepKey: "s00003", text: "Step 3", procedureKey: "p00006" },
          { stepKey: "s00004", text: "Step 4", procedureKey: "p00006" },
          { stepKey: "s00005", text: "Step 5", procedureKey: "p00006" },
          { stepKey: "s00006", text: "Step 6", procedureKey: "p00006" },
          { stepKey: "s00007", text: "Step 7", procedureKey: "p00006" },
          { stepKey: "s00008", text: "Step 8", procedureKey: "p00006" },
          { stepKey: "s00009", text: "Step 9", procedureKey: "p00006" }
        ]
      };
      
      const procedure7: Procedure = {
        key: "p00007",
        procedureName: "Procedure 7",
        procedureStepsArray: [
          { stepKey: "s00001", text: "Step 1", procedureKey: "p00007" },
          { stepKey: "s00002", text: "Step 2", procedureKey: "p00007" },
          { stepKey: "s00003", text: "Step 3", procedureKey: "p00007" },
          { stepKey: "s00004", text: "Step 4", procedureKey: "p00007" },
          { stepKey: "s00005", text: "Step 5", procedureKey: "p00007" },
          { stepKey: "s00006", text: "Step 6", procedureKey: "p00007" },
          { stepKey: "s00007", text: "Step 7", procedureKey: "p00007" },
          { stepKey: "s00008", text: "Step 8", procedureKey: "p00007" },
          { stepKey: "s00009", text: "Step 9", procedureKey: "p00007" }
        ]
      };
      
      const procedure8: Procedure = {
        key: "p00008",
        procedureName: "Procedure 8",
        procedureStepsArray: [
          { stepKey: "s00001", text: "Step 1", procedureKey: "p00008" },
          { stepKey: "s00002", text: "Step 2", procedureKey: "p00008" },
          { stepKey: "s00003", text: "Step 3", procedureKey: "p00008" },
          { stepKey: "s00004", text: "Step 4", procedureKey: "p00008" },
          { stepKey: "s00005", text: "Step 5", procedureKey: "p00008" },
          { stepKey: "s00006", text: "Step 6", procedureKey: "p00008" },
          { stepKey: "s00007", text: "Step 7", procedureKey: "p00008" },
          { stepKey: "s00008", text: "Step 8", procedureKey: "p00008" },
          { stepKey: "s00009", text: "Step 9", procedureKey: "p00008" }
        ]
      };
      
      const procedure9: Procedure = {
        key: "p00009",
        procedureName: "Procedure 9",
        procedureStepsArray: [
          { stepKey: "s00001", text: "Step 1", procedureKey: "p00009" },
          { stepKey: "s00002", text: "Step 2", procedureKey: "p00009" },
          { stepKey: "s00003", text: "Step 3", procedureKey: "p00009" },
          { stepKey: "s00004", text: "Step 4", procedureKey: "p00009" },
          { stepKey: "s00005", text: "Step 5", procedureKey: "p00009" },
          { stepKey: "s00006", text: "Step 6", procedureKey: "p00009" },
          { stepKey: "s00007", text: "Step 7", procedureKey: "p00009" },
          { stepKey: "s00008", text: "Step 8", procedureKey: "p00009" },
          { stepKey: "s00009", text: "Step 9", procedureKey: "p00009" }
        ]
      };
      
      const procedure10: Procedure = {
        key: "p00010",
        procedureName: "Procedure 10",
        procedureStepsArray: [
          { stepKey: "s00001", text: "Step 1", procedureKey: "p00010" },
          { stepKey: "s00002", text: "Step 2", procedureKey: "p00010" },
          { stepKey: "s00003", text: "Step 3", procedureKey: "p00010" },
          { stepKey: "s00004", text: "Step 4", procedureKey: "p00010" },
          { stepKey: "s00005", text: "Step 5", procedureKey: "p00010" },
          { stepKey: "s00006", text: "Step 6", procedureKey: "p00010" },
          { stepKey: "s00007", text: "Step 7", procedureKey: "p00010" },
          { stepKey: "s00008", text: "Step 8", procedureKey: "p00010" },
          { stepKey: "s00009", text: "Step 9", procedureKey: "p00010" }
        ]
      };
      
      const procedure11: Procedure = {
        key: "p00011",
        procedureName: "Procedure 11",
        procedureStepsArray: [
          { stepKey: "s00001", text: "Step 1", procedureKey: "p00011" },
          { stepKey: "s00002", text: "Step 2", procedureKey: "p00011" },
          { stepKey: "s00003", text: "Step 3", procedureKey: "p00011" },
          { stepKey: "s00004", text: "Step 4", procedureKey: "p00011" },
          { stepKey: "s00005", text: "Step 5", procedureKey: "p00011" },
          { stepKey: "s00006", text: "Step 6", procedureKey: "p00011" },
          { stepKey: "s00007", text: "Step 7", procedureKey: "p00011" },
          { stepKey: "s00008", text: "Step 8", procedureKey: "p00011" },
          { stepKey: "s00009", text: "Step 9", procedureKey: "p00011" }
        ]
      };
      
      const procedure12: Procedure = {
        key: "p00012",
        procedureName: "Procedure 12",
        procedureStepsArray: [
          { stepKey: "s00001", text: "Step 1", procedureKey: "p00012" },
          { stepKey: "s00002", text: "Step 2", procedureKey: "p00012" },
          { stepKey: "s00003", text: "Step 3", procedureKey: "p00012" },
          { stepKey: "s00004", text: "Step 4", procedureKey: "p00012" },
          { stepKey: "s00005", text: "Step 5", procedureKey: "p00012" },
          { stepKey: "s00006", text: "Step 6", procedureKey: "p00012" },
          { stepKey: "s00007", text: "Step 7", procedureKey: "p00012" },
          { stepKey: "s00008", text: "Step 8", procedureKey: "p00012" },
          { stepKey: "s00009", text: "Step 9", procedureKey: "p00012" }
        ]
      };
      
      const procedure13: Procedure = {
        key: "p00013",
        procedureName: "Procedure 13",
        procedureStepsArray: [
          { stepKey: "s00001", text: "Step 1", procedureKey: "p00013" },
          { stepKey: "s00002", text: "Step 2", procedureKey: "p00013" },
          { stepKey: "s00003", text: "Step 3", procedureKey: "p00013" },
          { stepKey: "s00004", text: "Step 4", procedureKey: "p00013" },
          { stepKey: "s00005", text: "Step 5", procedureKey: "p00013" },
          { stepKey: "s00006", text: "Step 6", procedureKey: "p00013" },
          { stepKey: "s00007", text: "Step 7", procedureKey: "p00013" },
          { stepKey: "s00008", text: "Step 8", procedureKey: "p00013" },
          { stepKey: "s00009", text: "Step 9", procedureKey: "p00013" }
        ]
      };
      
      const procedure14: Procedure = {
        key: "p00014",
        procedureName: "Procedure 14",
        procedureStepsArray: [
          { stepKey: "s00001", text: "Step 1", procedureKey: "p00014" },
          { stepKey: "s00002", text: "Step 2", procedureKey: "p00014" },
          { stepKey: "s00003", text: "Step 3", procedureKey: "p00014" },
          { stepKey: "s00004", text: "Step 4", procedureKey: "p00014" },
          { stepKey: "s00005", text: "Step 5", procedureKey: "p00014" },
          { stepKey: "s00006", text: "Step 6", procedureKey: "p00014" },
          { stepKey: "s00007", text: "Step 7", procedureKey: "p00014" },
          { stepKey: "s00008", text: "Step 8", procedureKey: "p00014" },
          { stepKey: "s00009", text: "Step 9", procedureKey: "p00014" }
        ]
      };
      
      const procedure15: Procedure = {
        key: "p00015",
        procedureName: "Procedure 15",
        procedureStepsArray: [
          { stepKey: "s00001", text: "Step 1", procedureKey: "p00015" },
          { stepKey: "s00002", text: "Step 2", procedureKey: "p00015" },
          { stepKey: "s00003", text: "Step 3", procedureKey: "p00015" },
          { stepKey: "s00004", text: "Step 4", procedureKey: "p00015" },
          { stepKey: "s00005", text: "Step 5", procedureKey: "p00015" },
          { stepKey: "s00006", text: "Step 6", procedureKey: "p00015" },
          { stepKey: "s00007", text: "Step 7", procedureKey: "p00015" },
          { stepKey: "s00008", text: "Step 8", procedureKey: "p00015" },
          { stepKey: "s00009", text: "Step 9", procedureKey: "p00015" }
        ]
      };
      

       const procedureList: Procedure[] = [
        procedure1,
        procedure2,
        procedure3,
        procedure4,
        procedure5,
        procedure6,
        procedure7,
        procedure8,
        procedure9,
        procedure10,
        procedure11,
        procedure12,
        procedure13,
        procedure14,
        procedure15
      ];

      return procedureList
      
}















/*

interface ProcedureListItemProps {
    text: string;
    liKey: number;
}

function getListItemDemoData(){
    const returnArray: ProcedureListItemProps[] = [];

    function generateItems(numOfItems: number){
        for (let i = 0; i < numOfItems; i++){
            const newItemProp: ProcedureListItemProps = {
                text: `item ${i}`,
                liKey: i
            }
            returnArray.push(newItemProp);
        }
    }


    generateItems(5);
    return returnArray


}
*/
export default getAppDemoData