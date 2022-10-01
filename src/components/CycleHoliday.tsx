import React, { useState } from "react";
import { Button } from "react-bootstrap";
type Holiday =
    | "Chinese New Years"
    | "Christmas"
    | "Halloween"
    | "Labor Day"
    | "Saint Patties";
const HOLIDAY_TRANSITIONS_ABC: Record<Holiday, Holiday> = {
    "Chinese New Years": "Christmas",
    Christmas: "Halloween",
    Halloween: "Labor Day",
    "Labor Day": "Saint Patties",
    "Saint Patties": "Chinese New Years"
};

const HOLIDAY_TRANSITIONS_CHRONO: Record<Holiday, Holiday> = {
    "Chinese New Years": "Saint Patties",
    "Saint Patties": "Labor Day",
    "Labor Day": "Halloween",
    Halloween: "Christmas",
    Christmas: "Chinese New Years"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, changeHoliday] = useState<Holiday>("Chinese New Years");

    function nextAlphabet(): void {
        const newHoliday = HOLIDAY_TRANSITIONS_ABC[holiday];
        changeHoliday(newHoliday);
    }
    function nextChrono(): void {
        const newHoliday = HOLIDAY_TRANSITIONS_CHRONO[holiday];
        changeHoliday(newHoliday);
    }

    return (
        <div>
            <Button onClick={nextAlphabet}>Advance by Alphabet </Button>
            <Button onClick={nextChrono}>Advance by Year</Button>
            {holiday === "Chinese New Years" && (
                <span role="img" aria-label="lantern">
                    Holiday: 🏮
                </span>
            )}
            {holiday === "Christmas" && (
                <span role="img" aria-label="christmas">
                    Holiday: 🎁
                </span>
            )}
            {holiday === "Halloween" && (
                <span role="img" aria-label="pumpkin">
                    Holiday: 🎃
                </span>
            )}
            {holiday === "Labor Day" && (
                <span role="img" aria-label="labor">
                    Holiday: 🛠
                </span>
            )}
            {holiday === "Saint Patties" && (
                <span role="img" aria-label="clover">
                    Holiday: 🍀
                </span>
            )}
        </div>
    );
}
