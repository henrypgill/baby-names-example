


interface TopSectionProps {
    favourites: BabyName[];
    removeFromFavourites(nameToRemove: BabyName): void;
    filterState: ("a" | "m" | "f");
    setFilterState(newState: ("a" | "m" | "f")): void;
}

export function TopSection({favourites, removeFromFavourites, filterState, setFilterState}: TopSectionProps): JSX.Element {
    return <div className="flow-container"></div>;
}
