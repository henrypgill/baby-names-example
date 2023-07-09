
// import { useState } from "react";
import "../App.css";
import { TopSection } from "./TopSection";
import { useState } from "react";
import Data from "../data/babyNamesData.json"
import { BabyNameButton } from "./BabyNameButton";


interface BabyName {
    id: number,
    name: string;
    sex: string
  }

  interface BabyNameProps {
    id: number,
    name: string;
    sex: string;
    addToFavourites(nameToAdd: BabyName): void;
}

// interface TopSectionProps {
//     favourites: BabyName[];
//     removeFromFavourites(nameToRemove: BabyName): void;
//     filterState: ("a" | "m" | "f");
//     setFilterState(newState: ("a" | "m" | "f")): void;
// }


function App() {

    // const boysNames = Data.filter(name => name.sex === "m" ? true : false);
    // const girlsNames = Data.filter(name => name.sex === "f" ? true : false);

    const [babyNames, setBabyNames] = useState<BabyName[]>(Data)
    const [favourites, setFavourites] = useState<BabyName[]>([])
    const [filter, setFilter] = useState<"a" | "m" | "f">("a")
    // const [searchTerm, setSearchTerm] = useState<string>("")




    function addNameToFavourites(babyName: BabyName) {
        setFavourites(prev => [...prev, babyName])
        setBabyNames(prev => prev.filter(name => name !== babyName ? true : false).sort())
    }
    function removeNameFromFavourites(babyName: BabyName) {
        setBabyNames(prev => [...prev, babyName].sort())
        setFavourites(prev => prev.filter(name => name !== babyName ? true : false))
        
    }




    function generateButtonProps(babyName: BabyName): BabyNameProps {
        const returnProps =  {            
            id: babyName.id,
            name: babyName.name,
            sex: babyName.sex,
            addToFavourites: (nameToAdd: BabyName) => addNameToFavourites(nameToAdd)
        }
        return returnProps
    }





    return (
        <div className="App">
            <TopSection 
                favourites={favourites}
                removeFromFavourites={(babyName: BabyName) => removeNameFromFavourites(babyName)}
                filterState={filter}
                setFilterState={(newFilter) => setFilter(newFilter)}
             />
            {babyNames.map(generateButtonProps).map(BabyNameButton)}
        </div>
    );
}

export default App;
