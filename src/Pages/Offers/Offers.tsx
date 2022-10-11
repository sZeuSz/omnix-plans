import React, { useContext } from "react";
import { ResultContext } from "../../Contexts/addressContext";

export function Offers () {
    const { result } = useContext<React.SetStateAction<any>>(ResultContext);
    console.log(result)
    return (
        <>I'm offers page...</>
    )
}