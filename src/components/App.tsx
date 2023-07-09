// import { useState } from "react";
import "../App.css";
import { TopSection } from "./TopSection";
import { useState } from "react";
import Data from "../data/babyNamesData.json";
import { BabyNameButton } from "./BabyNameButton";
import { insensitiveSort } from "../Utils/insensitiveSort";

interface BabyName {
    id: number;
    name: string;
    sex: string;
}

interface BabyNameProps {
    id: number;
    name: string;
    sex: string;
    addToFavourites(nameToAdd: BabyName): void;
}

function App() {
    const babyData = Data;
    babyData.sort((a, b) => insensitiveSort(a.name, b.name));

    const [babyNames, setBabyNames] = useState<BabyName[]>(babyData);
    const [favourites, setFavourites] = useState<BabyName[]>([]);
    const [filter, setFilter] = useState<"a" | "m" | "f">("a");
    const [searchTerm, setSearchTerm] = useState<string>("");

    const maleFilter = (babyName: BabyName) =>
        babyName.sex === "m" ? true : false;
    const femaleFilter = (babyName: BabyName) =>
        babyName.sex === "f" ? true : false;
    const searchFilter = (babyName: BabyName) =>
        babyName.name.toLowerCase().includes(searchTerm.toLowerCase());

    function addNameToFavourites(babyName: BabyName) {
        setFavourites((prev) =>
            [...prev, babyName].sort((a, b) => insensitiveSort(a.name, b.name))
        );
        const newBabyNames = babyNames
            .filter((name) => (name.name !== babyName.name ? true : false))
            .sort((a, b) => insensitiveSort(a.name, b.name));
        setBabyNames(newBabyNames);
    }

    function removeNameFromFavourites(babyName: BabyName) {
        if (babyName.id === -1) {
            setFavourites([]);
        } else {
            setBabyNames((prev) =>
                [...prev, babyName].sort((a, b) =>
                    insensitiveSort(a.name, b.name)
                )
            );
            setFavourites((prev) =>
                prev
                    .filter((name) =>
                        name.name !== babyName.name ? true : false
                    )
                    .sort((a, b) => insensitiveSort(a.name, b.name))
            );
        }
    }

    function generateButtonProps(babyName: BabyName): BabyNameProps {
        const returnProps = {
            id: babyName.id,
            name: babyName.name,
            sex: babyName.sex,
            addToFavourites: (nameToAdd: BabyName) =>
                addNameToFavourites(nameToAdd),
        };
        return returnProps;
    }

    return (
        <div className="App">
            <TopSection
                searchTerm={searchTerm}
                setSearchTerm={(newSearchTerm) => setSearchTerm(newSearchTerm)}
                favourites={favourites}
                removeFromFavourites={(babyName: BabyName) =>
                    removeNameFromFavourites(babyName)
                }
                filterState={filter}
                setFilterState={(newFilter) => setFilter(newFilter)}
            />
            <div className="button-container">
                {filter === "a" &&
                    babyNames
                        .filter(searchFilter)
                        .map(generateButtonProps)
                        .map(BabyNameButton)}
                {filter === "m" &&
                    babyNames
                        .filter(searchFilter)
                        .filter(maleFilter)
                        .map(generateButtonProps)
                        .map(BabyNameButton)}
                {filter === "f" &&
                    babyNames
                        .filter(searchFilter)
                        .filter(femaleFilter)
                        .map(generateButtonProps)
                        .map(BabyNameButton)}
            </div>
        </div>
    );
}

export default App;
