import { FavouriteBabyNameButton } from "./FavouriteBabyNameButton";

interface BabyName {
    id: number;
    name: string;
    sex: string;
}

interface TopSectionProps {
    searchTerm: string;
    setSearchTerm(searchTerm: string): void;
    favourites: BabyName[];
    removeFromFavourites(nameToRemove: BabyName): void;
    filterState: "a" | "m" | "f";
    setFilterState(newState: "a" | "m" | "f"): void;
}

interface BabyNameButtonProps {
    id: number;
    name: string;
    sex: string;
    removeFromFavourites(babyName: BabyName): void;
}

export function TopSection({
    searchTerm,
    setSearchTerm,
    favourites,
    removeFromFavourites,
    filterState,
    setFilterState,
}: TopSectionProps): JSX.Element {
    const filterForAll = () => setFilterState("a");
    const filterForMale = () => setFilterState("m");
    const filterForFemale = () => setFilterState("f");

    const maleFilter = (babyName: BabyName) =>
        babyName.sex === "m" ? true : false;
    const femaleFilter = (babyName: BabyName) =>
        babyName.sex === "f" ? true : false;

    function generateButtonProps(babyName: BabyName): BabyNameButtonProps {
        const returnProps = {
            id: babyName.id,
            name: babyName.name,
            sex: babyName.sex,
            removeFromFavourites: (nameToAdd: BabyName) =>
                removeFromFavourites(nameToAdd),
        };
        return returnProps;
    }

    function clearFavourites(): void {
        removeFromFavourites({
            id: -1,
            name: "remove everything",
            sex: "f",
        });
    }

    return (
        <div className="top-section">
            <div className="favourites-container">
                <div className="male-favourites">
                    <h2>Favourite Boys Names</h2>
                    <div className="button-container-favourites">
                        {favourites
                            .filter(maleFilter)
                            .map(generateButtonProps)
                            .map(FavouriteBabyNameButton)}
                    </div>
                </div>
                <div className="female-favourites">
                    <h2>Favourite Girls Names</h2>
                    <div className="button-container-favourites">
                        {favourites
                            .filter(femaleFilter)
                            .map(generateButtonProps)
                            .map(FavouriteBabyNameButton)}
                    </div>
                </div>
                <button onClick={clearFavourites} className="reset-button">
                    Reset Favourites
                </button>
            </div>
            <br></br>
            <div className="filter-buttons-container">
                <input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                ></input>
                <button
                    className={
                        filterState === "a"
                            ? "active-filter-button all-filter-button filter-button"
                            : "all-filter-button filter-button"
                    }
                    onClick={filterForAll}
                >
                    All
                </button>
                <button
                    className={
                        filterState === "m"
                            ? "active-filter-button male-filter-button filter-button"
                            : "male-filter-button filter-button"
                    }
                    onClick={filterForMale}
                >
                    Male
                </button>
                <button
                    className={
                        filterState === "f"
                            ? "active-filter-button female-filter-button filter-button"
                            : "female-filter-button filter-button"
                    }
                    onClick={filterForFemale}
                >
                    Female
                </button>
            </div>
        </div>
    );
}
