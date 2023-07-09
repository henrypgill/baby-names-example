import { useState } from "react";

interface HeadingProps{
    toggleFunction(): void;
}

export function ProcedureHeading({toggleFunction}: HeadingProps): JSX.Element {
    const [isBeingEdited, setIsBeingEdited] = useState<boolean>(false)
    const [headingText, setHeadingText] = useState<string>("Double Click to Edit")

    function logNchange(value: string){
        setHeadingText(value);
    }

    function headingFocusLeave(value: string) {
        if (value === ""){
            setHeadingText("Double Click to Edit");
        }
        setIsBeingEdited(false)
    }



    function HeadingToggleButton() {
        return (
            <button className="card-heading-toggle-button" onClick={()=> toggleFunction()}>+</button>
        )
    }

    if (!isBeingEdited){
        return (
        <div className="procedure-heading-container">
            <h2 onDoubleClick={() => setIsBeingEdited(true)} className="new-procedure-heading">{headingText}</h2>
            <HeadingToggleButton />
        </div>
    )
    } else {
    return (
        <div className="procedure-heading-container">
            <input autoFocus value={headingText} className="new-procedure-heading-input" onChange={(e) => logNchange(e.target.value)} onBlur={(e) => headingFocusLeave(e.target.value)}></input>
            <HeadingToggleButton />
        </div>

    )}

}


