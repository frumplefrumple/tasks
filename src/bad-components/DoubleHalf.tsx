import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface DoubleHalfButtonProps {
    setDhValue: () => void;
}

function Doubler({ setDhValue }: DoubleHalfButtonProps): JSX.Element {
    return <Button onClick={() => setDhValue()}>Double</Button>;
}

function Halver({ setDhValue }: DoubleHalfButtonProps): JSX.Element {
    return <Button onClick={() => setDhValue()}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    const doubleDhValue = () => setDhValue(2 * dhValue);
    const halveDhValue = () => setDhValue(0.5 * dhValue);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler setDhValue={doubleDhValue}></Doubler>
            <Halver setDhValue={halveDhValue}></Halver>
        </div>
    );
}
