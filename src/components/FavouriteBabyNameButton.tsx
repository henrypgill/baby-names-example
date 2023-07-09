interface BabyName {
    id: number;
    name: string;
    sex: string;
}

interface BabyNameButtonProps {
    id: number;
    name: string;
    sex: string;
    removeFromFavourites(babyName: BabyName): void;
}

export function FavouriteBabyNameButton({
    id,
    name,
    sex,
    removeFromFavourites,
}: BabyNameButtonProps): JSX.Element {
    const babyName: BabyName = { id: id, name: name, sex: sex };
    return (
        <button
            key={id}
            className={`gender-${sex}-button favourites-button`}
            onClick={() => removeFromFavourites(babyName)}
        >
            {name}
        </button>
    );
}
