import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, rollDice1] = useState<number>(1);
    const [rightDie, rollDice2] = useState<number>(2);

    function rollLeftDice(): void {
        rollDice1(d6);
    }
    function rollRightDice(): void {
        rollDice2(d6);
    }

    return (
        <div>
            <div>
                <Button onClick={rollLeftDice}>Roll Left</Button>
            </div>
            <span data-testid="left-die">{leftDie}</span>
            <div>
                <Button onClick={rollRightDice}>Roll Right</Button>
            </div>
            <span data-testid="right-die">{rightDie}</span>
            {leftDie === rightDie && leftDie !== 1 && <div> You Win </div>}
            {leftDie === rightDie && leftDie === 1 && <div> You Lose </div>}
        </div>
    );
}
