

interface BabyName {
    id: number,
    name: string;
    sex: string;
}

interface BabyNameProps {
    id: number,
    name: string;
    sex: string;
    addToFavourites(babyName: BabyName): void;
}


export function BabyNameButton({id, name, sex, addToFavourites}: BabyNameProps): JSX.Element {
    const babyName: BabyName = {id: id, name: name, sex: sex};
    return (
        <button key={id} className={`gender-${sex}-button`} onClick={() => addToFavourites(babyName)}>{name}</button>
    );
}
